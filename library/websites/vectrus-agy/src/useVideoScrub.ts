import { useState, useEffect, useRef } from 'react'
import MP4Box from 'mp4box'

const LERP_TAU = 8
const SNAP = 0.002
const LRU_MAX = 24
const LEAD = 24
const WATCHDOG = 60000

interface FrameItem {
  ts: number // microseconds
  blob: Blob
}

export function useVideoScrub(videoSrc: string) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [scrollProgress, setScrollProgress] = useState(0)
  const [canvasLive, setCanvasLive] = useState(false)
  const [duration, setDuration] = useState(0)

  // Scrubbing & RAF state
  const stateRef = useRef({
    current: 0,
    target: 0,
    dur: 0,
    ready: false,
    reverted: false,
    painted: false,
    building: false,
    lastTime: performance.now(),
  })

  const bankRef = useRef<FrameItem[]>([])
  const lruRef = useRef<Map<number, ImageBitmap>>(new Map())
  const buildingRef = useRef(false)

  // 1. Calculate Scroll Progress
  const getProgress = () => {
    const container = containerRef.current
    if (!container) return 0
    const scrollY = window.scrollY
    const totalDist = container.offsetHeight - window.innerHeight
    if (totalDist <= 0) return 0
    return Math.min(1, Math.max(0, scrollY / totalDist))
  }

  // 2. Video Duration Listener
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        setDuration(video.duration)
        stateRef.current.dur = video.duration
      }
    }

    if (video.readyState >= 1 && video.duration > 0) {
      handleLoadedMetadata()
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata)
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [videoSrc])

  // 3. Frame Bank Builder using WebCodecs & MP4Box
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || typeof window.VideoDecoder === 'undefined') {
      return
    }

    let isMounted = true
    let mp4boxFile: any = null
    let decoder: VideoDecoder | null = null
    let watchdogTimer: any = null

    // 60s Watchdog: fallback to video seeking if extraction hangs
    watchdogTimer = setTimeout(() => {
      if (!stateRef.current.painted && isMounted) {
        stateRef.current.reverted = true
        setCanvasLive(false)
      }
    }, WATCHDOG)

    const initFrameBank = async () => {
      try {
        buildingRef.current = true
        stateRef.current.building = true

        const response = await fetch(videoSrc, { mode: 'cors' })
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const arrayBuffer = await response.arrayBuffer()
        if (!isMounted) return

        mp4boxFile = MP4Box.createFile()

        mp4boxFile.onError = (e: any) => {
          console.warn('MP4Box error:', e)
          if (isMounted) {
            stateRef.current.reverted = true
            setCanvasLive(false)
          }
        }

        mp4boxFile.onReady = (info: any) => {
          if (!isMounted) return
          const videoTrack = info.videoTracks[0]
          if (!videoTrack) return

          const offscreen = document.createElement('canvas')
          offscreen.width = videoTrack.track_width || 1920
          offscreen.height = videoTrack.track_height || 1080
          const offCtx = offscreen.getContext('2d', { willReadFrequently: false })

          let activeDecodeCount = 0

          const initDecoder = (preferSoftware = false) => {
            try {
              decoder = new VideoDecoder({
                output: (videoFrame: VideoFrame) => {
                  if (!isMounted) {
                    videoFrame.close()
                    return
                  }

                  const ts = videoFrame.timestamp
                  if (offCtx) {
                    offCtx.drawImage(videoFrame, 0, 0, offscreen.width, offscreen.height)
                    offscreen.toBlob(
                      (blob) => {
                        if (blob && isMounted) {
                          bankRef.current.push({ ts, blob })
                          if (bankRef.current.length === 1) {
                            stateRef.current.ready = true
                          }
                        }
                      },
                      'image/webp',
                      0.82,
                    )
                  }
                  videoFrame.close()
                  activeDecodeCount--
                },
                error: (e) => {
                  console.warn('VideoDecoder error:', e)
                  if (!preferSoftware && isMounted) {
                    // Retry once with software acceleration
                    initDecoder(true)
                  } else if (isMounted) {
                    stateRef.current.reverted = true
                    setCanvasLive(false)
                  }
                },
              })

              // Extract description buffer
              const trak = mp4boxFile.getTrackById(videoTrack.id)
              let descriptionBuffer: Uint8Array | undefined = undefined

              if (trak && trak.mdia && trak.mdia.minf && trak.mdia.minf.stbl && trak.mdia.minf.stbl.stsd) {
                const entry = trak.mdia.minf.stbl.stsd.entries[0]
                const box = entry?.avcC || entry?.hvcC || entry?.vpcC || entry?.av1C
                if (box) {
                  const stream = new (MP4Box as any).DataStream(undefined, 0, (MP4Box as any).DataStream.BIG_ENDIAN)
                  box.write(stream)
                  descriptionBuffer = new Uint8Array(stream.buffer, 8)
                }
              }

              decoder.configure({
                codec: videoTrack.codec,
                description: descriptionBuffer,
                hardwareAcceleration: preferSoftware ? 'prefer-software' : 'no-preference',
              })

              mp4boxFile.setExtractionOptions(videoTrack.id, null, { nbSamples: LEAD })
              mp4boxFile.start()
            } catch (err) {
              console.warn('Decoder configure failed:', err)
              stateRef.current.reverted = true
              setCanvasLive(false)
            }
          }

          mp4boxFile.onSamples = (id: number, user: any, samples: any[]) => {
            if (!isMounted || !decoder || decoder.state === 'closed') return

            for (const sample of samples) {
              activeDecodeCount++
              const chunk = new EncodedVideoChunk({
                type: sample.is_sync ? 'key' : 'delta',
                timestamp: (1e6 * sample.cts) / sample.timescale,
                duration: (1e6 * sample.duration) / sample.timescale,
                data: sample.data,
              })

              decoder.decode(chunk)
            }

            // Once samples finish
            decoder.flush().then(() => {
              if (isMounted) {
                bankRef.current.sort((a, b) => a.ts - b.ts)
                stateRef.current.ready = true
              }
            }).catch(() => {})
          }

          initDecoder(false)
        }

        // Feed buffer to MP4Box
        (arrayBuffer as any).fileStart = 0
        mp4boxFile.appendBuffer(arrayBuffer)
        mp4boxFile.flush()
      } catch (err) {
        console.warn('Frame bank initialization failed (falling back to video scrub):', err)
        if (isMounted) {
          stateRef.current.reverted = true
          setCanvasLive(false)
        }
      }
    }

    const onWindowLoad = () => {
      initFrameBank()
    }

    if (document.readyState === 'complete') {
      initFrameBank()
    } else {
      window.addEventListener('load', onWindowLoad)
    }

    return () => {
      isMounted = false
      if (watchdogTimer) clearTimeout(watchdogTimer)
      window.removeEventListener('load', onWindowLoad)
      if (decoder && decoder.state !== 'closed') {
        try { decoder.close() } catch (_) {}
      }
    }
  }, [videoSrc])

  // 4. Binary search nearest frame index
  const findNearestFrameIndex = (targetMicroseconds: number): number => {
    const bank = bankRef.current
    if (bank.length === 0) return -1
    let low = 0
    let high = bank.length - 1

    while (low <= high) {
      const mid = (low + high) >> 1
      if (bank[mid].ts < targetMicroseconds) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }

    if (low >= bank.length) return bank.length - 1
    if (low === 0) return 0

    const diff1 = Math.abs(bank[low].ts - targetMicroseconds)
    const diff0 = Math.abs(bank[low - 1].ts - targetMicroseconds)
    return diff1 < diff0 ? low : low - 1
  }

  // 5. Warm LRU cache
  const warmLRU = async (centerIndex: number) => {
    const bank = bankRef.current
    const lru = lruRef.current
    const start = Math.max(0, centerIndex - 1)
    const end = Math.min(bank.length - 1, centerIndex + 2)

    for (let i = start; i <= end; i++) {
      if (!lru.has(i) && bank[i]) {
        try {
          const bitmap = await createImageBitmap(bank[i].blob)
          lru.set(i, bitmap)
          // Evict oldest if exceeding LRU_MAX
          if (lru.size > LRU_MAX) {
            const oldestKey = lru.keys().next().value
            const oldBitmap = lru.get(oldestKey)
            if (oldBitmap) oldBitmap.close()
            lru.delete(oldestKey)
          }
        } catch (_) {}
      }
    }
  }

  // 6. Main rAF Loop
  useEffect(() => {
    let rafId: number
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onFrame = (now: number) => {
      const state = stateRef.current
      const dt = Math.min(0.1, (now - state.lastTime) / 1000)
      state.lastTime = now

      const p = getProgress()
      setScrollProgress(p)

      const video = videoRef.current
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')

      if (state.dur > 0) {
        state.target = p * state.dur

        if (prefersReducedMotion) {
          state.current = state.target
        } else {
          state.current += (state.target - state.current) * (1 - Math.exp(-dt * LERP_TAU))
          if (Math.abs(state.target - state.current) < SNAP) {
            state.current = state.target
          }
        }

        // Draw from Frame Bank if available
        if (state.ready && !state.reverted && bankRef.current.length > 0 && canvas && ctx) {
          const nearestIdx = findNearestFrameIndex(state.current * 1e6)
          if (nearestIdx !== -1) {
            warmLRU(nearestIdx)
            const bitmap = lruRef.current.get(nearestIdx)
            if (bitmap) {
              ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
              if (!state.painted) {
                state.painted = true
                setCanvasLive(true)
              }
            }
          }
        } else if (video) {
          // Fallback: Seek video element directly
          if (!video.seeking && Math.abs(video.currentTime - state.current) > 0.01) {
            video.currentTime = state.current
          }
        }
      }

      rafId = requestAnimationFrame(onFrame)
    }

    rafId = requestAnimationFrame(onFrame)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return {
    containerRef,
    videoRef,
    canvasRef,
    scrollProgress,
    canvasLive,
    duration,
  }
}

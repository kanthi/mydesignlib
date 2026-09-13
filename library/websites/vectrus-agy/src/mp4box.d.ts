declare module 'mp4box' {
  export interface MP4Track {
    id: number
    created: Date
    modified: Date
    volume: number
    track_width: number
    track_height: number
    timescale: number
    duration: number
    codec: string
    video?: {
      width: number
      height: number
    }
    audio?: {
      sample_rate: number
      channel_count: number
    }
  }

  export interface MP4Info {
    duration: number
    timescale: number
    isFragmented: boolean
    tracks: MP4Track[]
    videoTracks: MP4Track[]
    audioTracks: MP4Track[]
  }

  export interface MP4Sample {
    track_id: number
    description: any
    is_sync: boolean
    dts: number
    cts: number
    duration: number
    timescale: number
    data: Uint8Array
    size: number
  }

  export interface MP4File {
    onReady?: (info: MP4Info) => void
    onError?: (e: string) => void
    onSamples?: (id: number, user: any, samples: MP4Sample[]) => void
    appendBuffer(data: ArrayBuffer): number
    start(): void
    stop(): void
    flush(): void
    setExtractionOptions(id: number, user?: any, options?: { nbSamples?: number }): void
    getTrackById(id: number): MP4Track
  }

  export function createFile(): MP4File
  export const Log: {
    setLogLevel: (level: any) => void
  }
}

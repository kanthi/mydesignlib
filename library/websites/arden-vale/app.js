/**
 * Arden Vale portfolio — command palette
 * Uses free/open libraries via ESM CDN:
 *   - React 18 (MIT) — peer for cmdk
 *   - cmdk (MIT) by pacocoursey — accessible ⌘K menu
 *   https://github.com/pacocoursey/cmdk
 */
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { Command } from "cmdk";

const { useRef } = React;
const e = React.createElement;

const PAGES = [
  { id: "work", label: "Work", shortcut: "W", href: "#work", path: "/work" },
  { id: "about", label: "About", shortcut: "A", href: "#about", path: "/about" },
  { id: "craft", label: "Craft", shortcut: "C", href: "#craft", path: "/craft" },
  { id: "writing", label: "Writing", shortcut: "R", href: "#writing", path: "/writing" },
];

function playTick(enabled) {
  if (!enabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "triangle";
    o.frequency.value = 880;
    g.gain.value = 0.03;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
    o.stop(ctx.currentTime + 0.09);
  } catch (_) {
    /* ignore */
  }
}

function CommandMenu({ open, setOpen, soundOn, setSoundOn }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("hello@ardenvale.studio");
      playTick(soundOn);
    } catch (_) {
      window.location.href = "mailto:hello@ardenvale.studio";
    }
    setOpen(false);
  }, [setOpen, soundOn]);

  const go = useCallback(
    (href) => {
      playTick(soundOn);
      setOpen(false);
      if (href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    },
    [setOpen, soundOn]
  );

  const downloadResume = useCallback(() => {
    playTick(soundOn);
    // Sample: open mail as stand-in for resume download
    window.location.href = "mailto:hello@ardenvale.studio?subject=Resume%20request";
    setOpen(false);
  }, [setOpen, soundOn]);

  if (!open) return null;

  return e(
    "div",
    {
      className: "cmdk-overlay",
      role: "presentation",
      onMouseDown: (ev) => {
        if (ev.target === ev.currentTarget) setOpen(false);
      },
    },
    e(
      Command,
      {
        className: "cmdk-root",
        label: "Command menu",
        loop: true,
        onKeyDown: (ev) => {
          if (ev.key === "Escape") {
            ev.preventDefault();
            setOpen(false);
          }
        },
      },
      e(
        "div",
        { className: "cmdk-header" },
        e(
          "div",
          { className: "cmdk-prompt" },
          e("span", { className: "cmdk-plus" }, "+"),
          " ARDEN VALE/",
          e("span", { className: "cmdk-caret" }, "\u2588")
        ),
        e(
          Command.Input,
          {
            ref: inputRef,
            value: query,
            onValueChange: setQuery,
            placeholder: "Search anything",
            className: "cmdk-input",
          }
        )
      ),
      e(
        Command.List,
        { className: "cmdk-list" },
        e(Command.Empty, { className: "cmdk-empty" }, "No matches."),

        e(Command.Group, { heading: "Pages", className: "cmdk-group" },
          ...PAGES.map((p) =>
            e(
              Command.Item,
              {
                key: p.id,
                value: `${p.label} ${p.shortcut} ${p.path}`,
                className: "cmdk-item",
                onSelect: () => go(p.href),
              },
              e("span", { className: "cmdk-item-label" }, `${p.label.toUpperCase()} [${p.shortcut}]`),
              e("span", { className: "cmdk-item-meta" }, p.path.toUpperCase())
            )
          )
        ),

        e(Command.Group, { heading: "Commands", className: "cmdk-group" },
          e(
            Command.Item,
            {
              value: "toggle sound ms",
              className: "cmdk-item",
              onSelect: () => {
                setSoundOn((v) => !v);
                playTick(true);
              },
            },
            e("span", { className: "cmdk-item-label" }, "TOGGLE SOUND [⌘S]"),
            e(
              "span",
              { className: "cmdk-item-meta " + (soundOn ? "is-on" : "") },
              soundOn ? "ON" : "OFF"
            )
          ),
          e(
            Command.Item,
            {
              value: "download resume mr",
              className: "cmdk-item",
              onSelect: downloadResume,
            },
            e("span", { className: "cmdk-item-label" }, "DOWNLOAD RESUMÉ [⌘R]"),
            e("span", { className: "cmdk-item-meta" }, "COMMAND")
          ),
          e(
            Command.Item,
            {
              value: "copy email me",
              className: "cmdk-item",
              onSelect: copyEmail,
            },
            e("span", { className: "cmdk-item-label" }, "COPY EMAIL [⌘E]"),
            e("span", { className: "cmdk-item-meta" }, "COMMAND")
          )
        ),

        e(Command.Group, { heading: "Special", className: "cmdk-group" },
          e(
            Command.Item,
            {
              value: "send someone a letter",
              className: "cmdk-item is-muted",
              disabled: true,
              onSelect: () => {},
            },
            e("span", { className: "cmdk-item-label" }, "SEND SOMEONE A LETTER"),
            e("span", { className: "cmdk-item-meta" }, "SOON")
          ),
          e(
            Command.Item,
            {
              value: "collect a random stamp",
              className: "cmdk-item is-muted",
              disabled: true,
              onSelect: () => {},
            },
            e("span", { className: "cmdk-item-label" }, "COLLECT A RANDOM STAMP"),
            e("span", { className: "cmdk-item-meta" }, "SOON")
          )
        )
      ),
      e(
        "div",
        { className: "cmdk-footer" },
        e("span", null, "[↑] [↓]"),
        e("span", null, "[ENTER] TO VISIT")
      )
    ),
    e("p", { className: "cmdk-esc" }, "[ESC] CLOSE")
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const onKey = (ev) => {
      const meta = ev.metaKey || ev.ctrlKey;
      if (meta && ev.key.toLowerCase() === "k") {
        ev.preventDefault();
        setOpen((v) => !v);
        playTick(soundOn);
        return;
      }
      if (!open && !meta && !ev.altKey && !ev.ctrlKey) {
        const t = ev.target;
        if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) {
          return;
        }
        const key = ev.key.toLowerCase();
        const page = PAGES.find((p) => p.shortcut.toLowerCase() === key);
        if (page) {
          ev.preventDefault();
          document.querySelector(page.href)?.scrollIntoView({ behavior: "smooth" });
          playTick(soundOn);
        }
      }
      if (meta && ev.key.toLowerCase() === "s" && open) {
        ev.preventDefault();
        setSoundOn((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, soundOn]);

  return e(
    React.Fragment,
    null,
    e(
      "button",
      {
        type: "button",
        className: "cmdk-trigger",
        onClick: () => {
          setOpen(true);
          playTick(soundOn);
        },
        "aria-label": "Open command menu",
      },
      "[CMD ⌘ K]"
    ),
    e(CommandMenu, { open, setOpen, soundOn, setSoundOn })
  );
}

function RoleRotator() {
  const [role, setRole] = useState(0);
  const roles = useMemo(
    () => [
      "VISUAL &\nINTERACTION\nDESIGNER",
      "LOVER OF\nALL THINGS\nTYPOGRAPHY",
      "SYSTEMS\nTHINKER &\nMAKER",
    ],
    []
  );

  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % roles.length), 4000);
    return () => clearInterval(id);
  }, [roles.length]);

  return e(
    "div",
    { className: "role-rotator" },
    roles[role].split("\n").map((line, i) => e("div", { key: i }, line))
  );
}

const appMount = document.getElementById("app");
if (appMount) createRoot(appMount).render(e(App));

const roleMount = document.getElementById("role-mount");
if (roleMount) createRoot(roleMount).render(e(RoleRotator));

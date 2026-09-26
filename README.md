<div align="center">

# ✨ Vibe Coding

**A living landing page about "vibe coding" — describe an idea in words, watch it type itself into working UI.**

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

[Live Demo](#live-demo) · [Features](#key-features) · [Quick Start](#getting-started) · [Architecture](#project-structure)

</div>

---

## Live Demo

<div align="center">
  <img src=".github/hero.png" alt="Vibe Coding demo" width="800" />
</div>

---

## Key Features

- 🎨 **AI-provider switcher** — an animated pill-style toggle (`AISwitcher.tsx`) lets you pick Claude, Cursor, ChatGPT, Copilot, or Gemini. Framer Motion's `layoutId` morphs the active pill between options instead of just swapping classes.

- 🌈 **Reactive theming** — picking a provider doesn't just change a label: `App.tsx` writes the provider's gradient colors straight into `--accent-from`/`--accent-to` CSS custom properties on `document.documentElement`, so gradients, glows, and text everywhere on the page repaint live.

- ⌨️ **Live "vibe coding" simulator** — `CodeSimulator.tsx` runs a self-looping scene machine that types a prompt character-by-character, streams out JSX line-by-line with a hand-rolled regex syntax highlighter, then reveals a matching live UI preview (a glowing button, a profile card, a theme toggle) — a fully scripted demo of "describe it, watch it get built."

- 🫧 **Glassmorphism design system** — a small set of hand-written utility classes (`.glass`, `.text-gradient`, `.bg-grid`) in `index.css`, layered with Tailwind CSS 4, gives every card and pill a consistent frosted-glass look with gradient-clipped headings.

- 🌫️ **Ambient animated background** — `Background.tsx` drifts two large blurred, color-shifting blobs behind the content on infinite Framer Motion loops, tinted by the currently selected provider's colors.

- 🪄 **Scroll-triggered reveals** — hero, simulator, and the four "Principles" cards all animate in with `whileInView`/`initial` transitions and staggered delays, so the page builds itself as you scroll.

---

## Tech Stack

| Technology | Used for |
| --- | --- |
| [React 19](https://react.dev) | UI components and state (plain `useState`/`useEffect` hooks — no external state library) |
| [TypeScript](https://www.typescriptlang.org) | Static typing across components and data models |
| [Vite](https://vite.dev) | Dev server and production build |
| [Tailwind CSS 4](https://tailwindcss.com) (`@tailwindcss/vite`) | Utility-first styling, applied via the official Vite plugin |
| [Framer Motion](https://www.framer.com/motion/) | Layout, entrance, hover, and infinite-loop animations |
| [lucide-react](https://lucide.dev) | Icon set (provider logos, UI glyphs) |
| [oxlint](https://oxc.rs/docs/guide/usage/linter.html) | Fast linting |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Tonxetyz/vibe-coding.git
cd vibe-coding

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Other useful scripts:

```bash
npm run build    # type-check (tsc -b) and build for production
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

---

## Project Structure

```text
vibe-coding/
├── public/                  # Static assets served as-is (favicon, sprite icons)
├── src/
│   ├── assets/               # Imported images bundled by Vite
│   ├── components/
│   │   ├── Hero.tsx          # Landing hero section with headline and provider switcher
│   │   ├── AISwitcher.tsx    # Animated pill toggle for selecting an AI provider
│   │   ├── CodeSimulator.tsx # Typewriter prompt → code → live preview scene loop
│   │   ├── Background.tsx    # Animated gradient blobs behind the page
│   │   ├── Principles.tsx    # "Vibe coding" principles cards grid
│   │   └── Footer.tsx        # Page footer
│   ├── data/
│   │   └── providers.ts      # AI provider metadata (name, icon, gradient colors)
│   ├── App.tsx                # Page composition and provider-driven theme wiring
│   ├── index.css              # Tailwind import, glassmorphism/gradient utility classes
│   └── main.tsx                # React entry point
├── index.html                # Vite HTML entry
└── vite.config.ts            # Vite + React + Tailwind plugin config
```

---

## License

Distributed under the [MIT License](./LICENSE).

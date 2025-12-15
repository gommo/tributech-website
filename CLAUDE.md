# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build (static export to /out)
pnpm lint         # Run ESLint
```

## Architecture

**Static Next.js 16 site** with React 19, configured for static export (`output: "export"` in next.config.ts). Deployed on Netlify.

### Key Patterns

- **App Router**: Pages in `/app`, components in `/components`
- **Client Components**: All interactive components use `"use client"` directive
- **Theme System**: `next-themes` provider wraps app; CSS variables in `globals.css` define `:root` and `.dark` tokens
- **Animations**: Framer Motion for scroll-triggered and hover animations
- **Styling**: Tailwind CSS v4 with mobile-first responsive design (`md:`, `lg:` breakpoints)

### Directory Structure

```
/app
  layout.tsx      # Root layout with ThemeProvider
  page.tsx        # Home page composing section components
  globals.css     # Tailwind + CSS custom properties

/components       # All client-side React components
  Header.tsx      # Fixed header, logo, theme toggle
  Hero.tsx        # Hero section with animated floating dots
  Projects.tsx    # Projects grid with scroll animations
  Founder.tsx     # CTA section
  Footer.tsx      # Minimal footer
  ThemeProvider.tsx

/public           # Static assets and project screenshots
/docs/plans       # Design documentation
```

### Theme Colors

- **Accent**: `#c4d600` (Tributech lime green)
- Dark/light mode tokens defined as CSS variables in `globals.css`
- Header switches logo based on theme

### Image Handling

Uses Next.js `Image` component with `unoptimized: true` (required for static export). Images use `fill` layout with `object-cover`.

# Tributech Landing Page Design

## Overview

Single-page marketing site for tributech.com.au — a professional consulting business focused on Software, Startup, and AI services.

**Tone:** Modern Startup Vibe — dynamic, energetic, showcasing innovation and agility.

## Tech Stack

- Next.js 14+ with App Router, static export
- Tailwind CSS v4
- next-themes for dark/light mode
- Framer Motion for animations
- Deployed to Netlify via GitHub

## Color Palette

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| Background | `#1a1a1a` | `#ffffff` |
| Surface | `#242424` | `#f5f5f5` |
| Border | `#333333` | `#e0e0e0` |
| Text Primary | `#ffffff` | `#1a1a1a` |
| Text Secondary | `#a0a0a0` | `#666666` |
| Accent | `#c4d600` | `#c4d600` |

Default: Dark mode with user toggle (respects system preference).

## Page Structure

### Header (Fixed)
- Logo (horizontal) on left
- Sun/moon theme toggle on right
- Transparent, gains blur on scroll

### Hero Section
- Full viewport height, centered
- Bold headline + 2-3 sentence consulting blurb
- Animated background: orbital dots from logo, floating with lime glow
- Subtle gradient shift in background

### Projects Grid
- Section title: "What We're Building" with lime underline accent
- 3-column grid (stacks on mobile)
- Equal-sized cards with:
  - Screenshot (rounded corners)
  - Project title
  - One-line description
  - Hover: lift, lime glow, subtle image scale

**Projects:**
1. Robin.fm — "Podcast production sidekick for creators"
2. Old World Rankings — "Tournament rankings for Warhammer: The Old World"
3. Personal Site — "Portfolio and thought leadership hub"

### Founder CTA Section
- Eyebrow: "The Founder" in lime, uppercase
- Heading: "Colin Goudie"
- Brief bio paragraph
- CTA button → colingoudie.me

### Footer
- Minimal: "© 2025 Tributech Pty Ltd"
- Centered, secondary gray text

## File Structure

```
/app
  layout.tsx
  page.tsx
  globals.css
/components
  Header.tsx
  Hero.tsx
  Projects.tsx
  Founder.tsx
  Footer.tsx
/public
  tributech-logo-rgb.png
  logo-square-transparent.png
  /screenshots
    project-robinfm.png
    project-oldworldrankings.png
    project-personalwebsite.png
```

## Responsive Behavior

- Desktop: 3-column project grid
- Tablet: 2-column grid
- Mobile: Single column, stacked sections

# Numen Games – Website v2

Second-generation rewrite of the Numen Games corporate website.

Built with a modern, scalable architecture focused on maintainability, performance and controlled animation systems.

---

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4
- Framer Motion
- next-intl (i18n)
- Vitest

---

## Getting Started

Install dependencies:

npm install

Run development server:

npm run dev

Run tests:

npm run test

Build for production:

npm run build

---

## Architecture Overview

- src/app → Routes (App Router)
- src/components → Reusable UI components
- src/context → Global state (theme management)
- src/i18n → Internationalization configuration
- docs/ → Technical documentation

---

## Theming

- Light mode → Sky Blue accent
- Dark mode → Solar Gold accent
- CSS variables control the palette
- --accent switches automatically based on theme
- Numinia forces dark mode intentionally for atmospheric reasons

---

## Responsive Strategy

Mobile-first design.

- Services → Cards on mobile, editorial layout on desktop
- Pricing → Compact cards on mobile, 3-column layout on desktop
- Contact → Full-screen modal overlay

---

## Branching Strategy

- main → Production
- develop → Integration branch
- feature/* → Isolated feature branches

No direct commits to main.

Example feature branches:

- feature/contact-animation
- feature/pricing-refactor
- feature/services-layout

---

## Testing

Run unit tests with:

npm run test

Tests are located alongside components.

---

## Deployment

Intended for deployment on Vercel.

- main → Production
- develop → Preview environment
- feature/* → Preview branches

---

## Status

Base architecture complete.

Next planned phases:

- Advanced animation system
- Contact form backend integration
- Performance optimization
- Visual refinement

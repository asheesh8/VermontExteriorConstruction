# Vermont Custom Exteriors — Website

Immersive marketing site for **Vermont Custom Exteriors**, a roofing / siding / deck / gutter
contractor based in Williston, VT, serving Chittenden County and seven surrounding Vermont
counties.

Built from scratch as a modern replacement for the client's WordPress/Elementor site, using
the client's real project photography and business content throughout.

## Highlights

- **Immersive hero** — aerial drone time-lapse video (roof job from underlayment to finished
  shingles) that plays once and crossfades to a static hold frame; parallax content drift on
  scroll.
- **Scroll-driven motion** — section reveals, staggered card entrances, animated process
  timeline, counter stats, and a counter-scrolling gallery film strip (Framer Motion,
  `prefers-reduced-motion` respected throughout).
- **Interactive Vermont map** — stylized state silhouette with pulsing county pins linked to
  eight county service-area pages.
- **Filterable project gallery** — masonry grid of 28 real job-site photos with category
  filters and a keyboard-navigable lightbox.
- **34 static pages** — home, about, gallery, contact, 12 service pages, and 11 service-area
  pages (8 counties + 3 town spotlights), all statically generated with per-page metadata,
  JSON-LD LocalBusiness schema, sitemap, and robots.txt.
- **Fully responsive** — from 375 px phones to wide desktop, with a slide-down mobile menu.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static generation, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev)
- [lucide-react](https://lucide.dev) icons
- Fonts: Fraunces (display) + Manrope (body) via `next/font`

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all pages statically generated)
```

## Content sources

- Copy, testimonials, FAQs, service descriptions, and contact details mirror the client's
  live site content.
- Photos in `public/images/gallery` are the client's own project photos (downscaled to
  1920 px / JPEG q78 for web).
- `public/video/hero-timelapse.mp4` is an AI-generated (Adobe Firefly) aerial time-lapse
  built from one of the client's real drone photos, re-encoded from 57 MB to ~10 MB
  (1080p H.264) with extracted poster and end-hold frames.

## Notes

- The contact form composes a pre-filled email (no backend required). Swap
  `src/components/ContactForm.tsx` to a form service (Formspree, Resend, etc.) when ready.
- Business data (phone, address, hours, socials) is centralized in `src/lib/site.ts`;
  services in `src/lib/services.ts`; service areas in `src/lib/areas.ts`.

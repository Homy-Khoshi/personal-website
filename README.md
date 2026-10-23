# Portfolio update — Next.js App Router

Copy `src/` into your existing Next.js project, replacing the existing `src/app/page.tsx` and `src/app/globals.css`, and adding `src/app/work/[slug]/page.tsx`, `src/components/ImageSlot.tsx`, and `src/lib/content.ts`.

Requires a Next.js App Router project with TypeScript and Tailwind CSS v4 (as created by current `create-next-app`).

## Assets
- `public/profile.jpg` — headshot
- `public/resume.pdf` — public resume
- `public/work/cjsf.jpg` — experience photo
- `public/work/contract-flow.jpg` — experience photo
- `public/work/changescope.jpg` — project screenshot
- `public/work/skillmatch.jpg` — project screenshot
- `public/work/linux-shell.jpg` — project screenshot

Missing images automatically show styled placeholders. Add images with those exact names to replace them. Do not upload private or confidential employer/client images without permission.

## Customize
- Edit `src/lib/content.ts` to update the card text, details, and technology tags. All detail pages are generated from this one file.
- Update the placeholder LinkedIn URL in `src/app/page.tsx` to your real profile.
- The resume link requires `public/resume.pdf`.
- To add a project, append an entry to the `entries` array in `src/lib/content.ts`; the homepage and `/work/[slug]` page are created automatically.
- Detail pages contain a clearly marked section for future screenshots, demos, architecture, and lessons learned.

## Run
```sh
npm run dev
npm run build
```

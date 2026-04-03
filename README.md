# Samarth Tours & Travels - Frontend Context

This document is designed to provide comprehensive architectural and structural context for any AI agents or developers working on or extending this project.

## 🎯 Project Overview
This is a premium, static-first frontend simulation of a Tours & Travels booking platform (inspired by Savaari). It is built entirely with dummy data and focuses on modern UI/UX principles like glassmorphism, responsive design, and smooth user flows.

**Core Stack:**
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + PostCSS
- **Icons:** `lucide-react`
- **Output:** Statically Exported (`output: 'export'`) for GitHub Pages deployment.

---

## 🏗️ Technical Constraints & Rules (AI Guidelines)

When modifying this repository, adhere to the following constraints:

1. **Static Export Strictness:** 
   This app uses `output: 'export'` in `next.config.js`. 
   - **DO NOT** use Next.js dynamic API routes (`app/api/*`).
   - **DO NOT** use the Next.js `<Image />` component without `unoptimized: true` (already configured in next.config.js). Standard `<img>` tags or `bg-[url(...)]` are preferred for external URLs.
   
2. **Server vs. Client Components:**
   - By default, all pages in `/app` are Server Components. 
   - **CRITICAL:** Do not pass inline event handlers (like `onSubmit`, `onClick`) to standard HTML elements inside Server Components. Doing so will break the Next.js static generation build.
   - For interactivity (e.g., `components/BookingForm.tsx`), explicitly mark the file with `"use client";` at the top and utilize React hooks (`useState`, `useRouter`).

3. **Dummy Data Only:**
   The project has no backend. All data parsing, cab generation, and location mappings should reference the arrays exported from `lib/dummy-data.ts`.

4. **CI/CD Lockfile:**
   The GitHub Actions workflow (`.github/workflows/deploy.yml`) uses `npm install`. Do not add strict environment caching that explicitly demands a `package-lock.json` unless one is properly committed, as the pipeline relies on generating dependencies on the fly.

---

## 📂 Folder Structure & Taxonomy

### `/app` (Routing)
- `layout.tsx` & `globals.css`: The root template injecting the `Inter` font, custom scrollbar rules, global Tailwind directives, and wrapping the content in `<Navbar />` and `<Footer />`.
- `page.tsx`: The Landing Page. Sequentially imports the Hero, FeatureCards, SetsUsApart, ServicesGrid, and ContentSection.
- `search/page.tsx`: The Cab Search view. Renders the interactive layout of the `FiltersSidebar` and dynamic `CabCard` mappings.
- `services/page.tsx`, `cities/page.tsx`, `about/page.tsx`, `contact/page.tsx`: Secondary informational pages utilizing shared components and static grids.

### `/components` (UI Building Blocks)
- **Wrappers:** `Navbar.tsx`, `Footer.tsx`
- **Landing Elements:**
  - `HeroSection.tsx`: Background hero banner with trust badges.
  - `BookingForm.tsx`: **[Client Component]** The tabbed widget for route scheduling. Exerts client-side routing `router.push('/search')`.
  - `FeatureCards.tsx`, `SetsUsApart.tsx`: Grid icon blocks detailing value propositions.
  - `ServicesGrid.tsx`: Visual layout mapping over `serviceKinds` (Roundtrip, Oneway, etc.).
  - `ContentSection.tsx`: 50/50 dual-column text and image description.
- **Search Elements:**
  - `FiltersSidebar.tsx`: Static visual filter toggles for Car type and Price logic.
  - `CabCard.tsx`: Individual car display block taking a `cab` Object prop.

### `/lib` (Data Store)
- `dummy-data.ts`: Holds hardcoded JSON arrays used across the site:
  - `popularCities`: Standard array of strings.
  - `dummyCabs`: Array of objects (`id`, `name`, `type`, `price`, `image`).
  - `serviceKinds`: Array of service metadata and localized images.

## 🎨 Theming Elements

- **Primary Color:** Orange (`#ff6b00`)
- **Typography:** `Inter` (sans-serif)
- **Styling Concepts:** Uses rounded borders (`rounded-2xl`, `rounded-full`), soft grays (`bg-gray-50`), and custom Tailwind plugins/layers (see `.glass` utility in `globals.css`).

All stylistic interventions should mirror this clean, open, and heavily padded aesthetic.

# Project Rules for Sihuni Customer Web (Tenant-Facing React/Next.js)

**Versi 1.0**  
**Tanggal: 25 November 2025**  
**Berdasarkan**: Business Model Canvas V1.1 (tenant-only) & PRD V1.0.  
**Tujuan**: Panduan AI/dev untuk maintain consistency, quality, dan alignment dengan business goals (15k MAU, 25% conversion, GMV Rp300M/bln Year 1).

## 1. Project Overview
- **Scope**: Next.js web app khusus **tenant/customer** untuk marketplace rental kamar/gudang/property. Fitur MVP: Hero search → Listing grid/filter → Detail → Booking → Midtrans payment.
- **Target Users**: Tenant individu (kamar), keluarga/UMKM (property), bisnis (gudang).
- **Business Focus**: Frictionless UX (<3 clicks to book), mobile-first, revenue dari commission 15%.
- **Backend**: Integrasi API eksternal (project lain) untuk /api/listings, /api/booking.
- **Deployment**: Vercel (Next.js optimized).

## 2. Tech Stack (Dari package.json - NO new deps unless critical)
| Category | Tools/Libs |
|----------|------------|
| **Framework** | Next.js 16 (App Router), React 19 |
| **UI** | Shadcn UI (ui/ folder: button, card, carousel, etc.), Tailwind CSS 4, clsx/cva |
| **State/Data** | TanStack Query recommended (untuk API fetch), React Hook Form (forms) |
| **Utils** | lucide-react (icons), next-themes (dark mode), embla-carousel |
| **Payments** | Tripay (integrate di checkout) |
| **Other** | Google Maps Places API (search), React Datepicker (booking dates) |

**Rules**: Gunakan **existing Shadcn components** (e.g., Card untuk listing, Carousel foto). Tambah baru via `npx shadcn-ui add`.

## 3. Code Conventions & Style
- **No Comments**: JANGAN tambah comments kecuali user minta explicitly.
- **Naming**: Kebab-case files (existing: Area.tsx), PascalCase components.
- **Patterns**:
  - Mobile-first: Gunakan hooks/use-mobile.ts.
  - Theme: Wrap di ThemeProvider.tsx.
  - Layout: app/layout.tsx (global).
- **File Structure**:
  ```
  app/          # Next App Router
    components/ # Page-specific (Hero, Popular, etc.)
  components/   # Shared (ui/, navbar, footer)
  hooks/        # Custom hooks
  lib/utils.ts  # Helpers
  public/images # Assets
  ```
- **Security**: No hardcode secrets. Gunakan env vars (.env.local). JWT untuk future auth.
- **Accessibility**: ARIA labels di Shadcn, keyboard nav.

## 4. Build, Test, Lint & Verify Commands
**SELALU jalankan ini setelah edit** (via RunCommand):
```json
{
  "lint": "eslint . --fix",
  "typecheck": "tsc --noEmit",
  "build": "next build",
  "dev": "next dev",
  "start": "next start"
}
```
- **Post-Change Ritual**:
  1. `npm run lint`
  2. `npm run typecheck` (TypeScript strict)
  3. `npm run build` (catch hydration errors)
- **No Tests Yet**: Tambah Jest/RTL jika PRD update minta.
- **Prettier/ESLint**: Config di eslint.config.mjs/postcss.config.mjs.

## 5. Feature Development Rules (Dari PRD MVP)
- **Mimic Existing**: Lihat app/components/ (Hero.tsx, Popular.tsx) untuk patterns.
- **User Flows**:
  1. Home (page.tsx): Hero search → Popular/Recommendation.
  2. Search Results: Infinite scroll grid Cards.
  3. Detail: Dynamic route /listing/[id] → Carousel, filters sidebar.
  4. Booking: Modal/Dialog → Datepicker → Total calc → Midtrans redirect.
- **API Mocks**: Gunakan JSON placeholders untuk dev paralel (e.g., dummy listings).
- **Prioritas**: MoSCoW dari PRD (Must: Search/Listing/Booking/Payment).
- **Performance**: <2s load, code-split dynamic imports.

## 6. DOs & DON'Ts
| DO | DON'T |
|----|-------|
| Edit existing files (app/page.tsx, components/). | Buat new files/docs (*.md) unless explicit. |
| Use SearchCodebase/Grep untuk explore code. | Commit/push tanpa ask. |
| Batch tool calls (Read multiple files). | Tambah deps (e.g., no Redux yet). |
| TodoWrite untuk multi-step tasks. | Hardcode data (use API mocks). |
| Run lint/build after changes. | Ignore mobile responsive. |

## 7. Integrations Checklist
- **Midtrans**: Snap.js di checkout page. Test sandbox.
- **Backend API**: TanStack Query fetch /api/listings?query=jakarta&price=1-5jt.
- **Google Maps**: Autocomplete di search bar.
- **Analytics**: GA4 events (search_submit, booking_start).

## 8. Success Criteria (Link BMC/PRD KPI)
- Conversion 25% search→book.
- Payment success 95%.
- Bounce <40%.

**Update Rules**: Edit file ini jika business/PRD berubah. AI harus baca ulang setiap session.

*Rules ini ensure code aligned business value, zero waste.*

# Product Requirements Document (PRD) - Sihuni Customer Web (Tenant-Facing)

**Versi 1.0**  
**Tanggal: 25 November 2025**  
**Author: Senior Business Analyst**  
**Berdasarkan**: Business Model Canvas V1.1 (pure tenant focus).  
**Scope**: MVP React/Next.js web app untuk tenant: listing browse, search/filter, booking, payment. Integrasi API backend (project lain) untuk data listing/payment split.

## 1. Overview & Business Objectives
**Deskripsi**: Sihuni Customer Web adalah frontend React khusus tenant untuk marketplace rental kamar/gudang/property. Tenant bisa search listing, view detail, book, bayar via Midtrans, dan track booking. Revenue: Commission 15%, premium sub, add-ons.

**Objectives** (dari BMC):
- Achieve 15k MAU, 25% conversion search→booking.
- GMV Rp 300M/bln Year 1.
- Frictionless UX: <3 clicks to booking.

**Target Release**: MVP dalam 1 bln.

## 2. User Personas
| Persona | Deskripsi | Goals | Pain Points |
|---------|-----------|-------|-------------|
| **Andi (Individu)** | Mahasiswa 22 th, cari kamar murah Jakarta. Mobile-first. | Cepat cari/filter harga <Rp2jt, book instan. | Listing outdated, payment ribet. |
| **Sari (Keluarga/UMKM)** | Ibu rumah tangga/owner warung, sewa property Rp10jt/bln. | Filter fasilitas (AC, dapur), review terpercaya. | No calendar availability, dispute susah. |
| **Budi (Bisnis)** | Owner UMKM logistik, sewa gudang 100m². | Filter ukuran/lokasi gudang, bulk booking. | No VR tour, payment enterprise. |

## 3. Key Features & User Stories (Prioritas MoSCoW)
### MVP (Must-Have)
1. **Homepage & Hero Search** (Must)
   - AS a tenant, I want homepage dengan hero search bar agar bisa langsung cari listing.
   | User Story | Acceptance Criteria (GWT) |
   |------------|---------------------------|
   | Search listings | Given di homepage, When ketik "kamar Jakarta Selatan" + filter harga, Then tampil grid listing relevan. |
   
2. **Listing Grid & Detail** (Must)
   - AS a tenant, I want browse listing dengan foto/review agar pilih yang cocok.
   | User Story | AC |
   |------------|----|
   | View detail | Given klik listing, When load page, Then show foto carousel, deskripsi, harga, calendar availability, review avg 4.5/5. |
   | Filter advanced | Given search results, When apply filter (lokasi, harga Rp1-5jt, tipe: kamar/gudang/property, fasilitas: AC/WiFi), Then update results real-time. |

3. **Booking Flow** (Must)
   - AS a tenant, I want book listing dengan dates agar reserve cepat.
   | User Story | AC |
   |------------|----|
   | Select dates & book | Given di detail, When pilih check-in/out, Then show total harga + tombol "Book Now". |

4. **Payment Integration** (Must)
   - AS a tenant, I want bayar aman via Midtrans agar transaksi sukses.
   | User Story | AC |
   |------------|----|
   | Checkout & pay | Given klik Book, When redirect Midtrans (3D Secure), Then konfirmasi booking + invoice download post-payment. |

### V1 (Should-Have - 2 bln)
- Tenant Dashboard: History booking, wishlist, invoice.
- Review System: Post-stay rating/review.
- Promo: Apply kode diskon 10-20%.

### V2 (Could-Have - 4 bln)
- AI Recommendations: "Listing serupa".
- Wishlist & Compare.
- VR Tour (360° foto).

**Prioritas Matrix** (Value vs Effort):
| High Value/Low Effort | High Value/High Effort |
|-----------------------|------------------------|
| Search/Filter        | Payment Flow          |

## 4. Non-Functional Requirements
- **Performance**: Page load <2s, mobile responsive (Tailwind/Shadcn UI).
- **Security**: JWT auth tenant, HTTPS, no store CVV.
- **Accessibility**: WCAG 2.1 AA, keyboard nav.
- **Scalability**: Handle 15k MAU (Vercel deploy).
- **Tech Stack**: Next.js 14, React 18, Shadcn UI (existing), Tanstack Query (API), React Datepicker.
- **Integrations**:
  | API/Partner | Endpoint | Purpose |
  |-------------|----------|---------|
  | Backend     | /api/listings | Fetch listings/search. |
  | Backend     | /api/booking | Create booking. |
  | Midtrans    | Snap.js   | Payment gateway. |
  | Google Maps | Places API| Lokasi search. |

## 5. UI/UX Guidelines
- **Design System**: Gunakan existing Shadcn UI (button, card, carousel).
- **Flows**:
  1. Home → Search → Results → Detail → Book → Checkout → Success.
- **Mobile-First**: Hero responsive, infinite scroll listings.
- **Dark Mode**: Theme toggle (existing).
- **Wireframe Deskripsi** (implement di Figma/pena):
  - Hero: Search input + kategori chips (Kamar/Gudang/Property).
  - Listing Card: Foto, harga, rating, lokasi badge.
  - Booking Modal: Date picker, total calc.

## 6. Success Metrics & KPI (link BMC)
| Metric | Target MVP | Tool |
|--------|------------|------|
| Conversion | 25% search→book | GA4 Events |
| Bounce Rate | <40% | Hotjar |
| Avg Session | 3+ pages | GA4 |
| Payment Success | 95% | Midtrans Dashboard |

## 7. Risks & Dependencies
| Risk | Mitigation |
|------|------------|
| Backend API Delay | Mock data untuk dev paralel. |
| Midtrans Cert | Sandbox testing dulu. |
| Low Listings | Seed 200 dummy listings. |

## 8. Roadmap & Milestones
- **Week 1-2**: Homepage + Search/Listing.
- **Week 3**: Booking + Payment.
- **Week 4**: Testing/deploy MVP.
- **Post-MVP**: Analytics + V1 features.

**Assumptions**: Backend API ready untuk listings/booking. No auth di MVP (guest booking via email).  
**Approval Needed**: Dev lead sign-off pada Week 0 sprint planning.

*PRD ini actionable untuk React team. Update berdasarkan feedback.*

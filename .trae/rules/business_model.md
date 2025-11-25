# Business Model Canvas untuk Platform Sihuni

**Versi 1.0**  
**Tanggal: 25 November 2025**  
**Deskripsi Proyek**: Sihuni adalah platform web berbasis React untuk customer-facing, fokus pada listing dan transaksi sewa kamar, gudang, dan properti. User (tenant) bisa browse listing, book, bayar via payment gateway, dan transaksi end-to-end. Landlord listing aset mereka.

Platform ini dirancang sebagai **marketplace rental ala Airbnb + penyewaan gudang**, dengan revenue utama dari commission transaksi (15-20%), subscription premium landlord, dan add-ons.

## 1. Customer Segments (Segmen Pelanggan)
- **Primary: Tenant/Penyewa** (80% traffic)
  - Individu: Mahasiswa/pekerja muda (sewa kamar Rp 1-5jt/bln).
  - Keluarga/UMKM: Sewa properti lengkap (Rp 5-20jt/bln).
  - Bisnis: Sewa gudang/storage (Rp 2-10jt/bln).
- **Secondary: Landlord/Pemilik Properti** (20% traffic, high-value)
  - Pemilik rumah/kos/gudang individu.
  - Agen properti/real estate.
- **Niche: Enterprise** (gudang bulk rental korporat).

## 2. Value Propositions (Nilai Utama)
| Segmen     | Value Proposition |
|------------|-------------------|
| **Tenant** | - Listing lengkap: Foto 360°, VR tour, review real-time.<br>- Filter advanced: Lokasi, harga, fasilitas, ukuran gudang.<br>- Booking instan + payment aman (Midtrans/Xendit).<br>- Garansi: Refund, dispute AI.<br>- Promo: Diskon first booking 10-20%. |
| **Landlord** | - Zero upfront untuk basic listing.<br>- Dashboard analytics: Occupancy rate, AI pricing.<br>- Auto-matching tenant.<br>- Payment split otomatis (80% landlord, 20% platform).<br>- Kontrak digital legal. |
| **Overall** | One-stop: Listing → Booking → Payment → Kontrak → Maintenance. Fokus lokal Indonesia (Maps, BPJS verif). |

## 3. Channels (Saluran Distribusi)
- **Acquisition**: SEO, Google Ads, TikTok/IG, partnership kampus/perusahaan.
- **Web App**: Homepage → Search → Detail → Booking.
- **Retention**: Push notif (Firebase), email.
- **Support**: WhatsApp, live chat.

## 4. Customer Relationships (Hubungan Pelanggan)
- Automated: AI chatbot.
- Personalized: Dashboard tenant/landlord.
- Community: Review + rating.
- Self-Service: FAQ, video tutorial.

## 5. Revenue Streams (Sumber Pendapatan) - **Proyeksi Year 1: Rp 85M/bln**
| Stream              | Deskripsi                          | Estimasi (10k users) | Pricing          |
|---------------------|------------------------------------|----------------------|------------------|
| **Commission**      | 18% dari booking sewa             | Rp 50M/bln          | 18% x nilai booking |
| **Premium Listing** | Boost top listing                 | Rp 10M/bln          | Rp 100-500rb/bln |
| **Sub Landlord Pro**| Unlimited + analytics             | Rp 15M/bln          | Rp 300rb-1jt/bln |
| **Add-ons**         | Asuransi, cleaning (2-5%)         | Rp 5M/bln           | 2-5%             |
| **Ads**             | Sponsored dari agen               | Rp 5M/bln           | CPC Rp 5rb      |
| **Total**           | -                                 | **Rp 85M/bln**      | Break-even 6 bln |

**Pricing**: Freemium landlord, dynamic AI pricing.

## 6. Key Resources (Sumber Daya Utama)
- Tech: React/Next.js, Node/Supabase, Midtrans.
- Human: 5 dev (MVP), 2 ops.
- Data: ML recommendation.
- Legal: Kontrak template.

## 7. Key Activities (Aktivitas Utama)
- Verifikasi listing (AI + manual).
- Payment split.
- Matching algorithm.
- Marketing growth.

## 8. Key Partners (Mitra Utama)
- Payment: Midtrans/Xendit.
- Maps: Google Maps.
- Legal: Notary online.
- Marketing: Influencer, Rumah123.

## 9. Cost Structure (Struktur Biaya) - **Year 1: Rp 90M/bln**
| Kategori       | Estimasi Bulanan |
|----------------|------------------|
| Server/Cloud   | Rp 5M           |
| Payment Fee    | Rp 10M          |
| Marketing      | Rp 20M          |
| Ops/Team       | Rp 50M          |
| Legal          | Rp 5M           |
| **Total**      | **Rp 90M**      |

**Margin**: 5% Year 1 → 40% Year 3.

## Risk Analysis & Mitigation
| Risk             | Prob. | Impact | Mitigation                  |
|------------------|-------|--------|-----------------------------|
| Low Adoption     | Med   | High   | Seed 100 listing partnership|
| Payment Fraud    | High  | High   | KYC + 3D Secure             |
| Dispute          | Med   | Med    | Escrow + AI mediation       |
| Regulasi         | Low   | High   | Lawyer consult, pajak comply|
| Kompetisi        | Med   | Med    | Niche gudang hyperlocal     |

## KPI & Success Metrics
- **Acquisition**: 10k MAU, 20% conv. listing→booking.
- **Engagement**: 70% repeat, 4.5/5 rating.
- **Financial**: GMV Rp 300M/bln, Churn <10%.
- Tools: Google Analytics, Mixpanel.

## Roadmap Implementasi Web (React)
1. **MVP (1-2 bln)**: Listing/search/booking/payment.
2. **V1 (3 bln)**: Dashboard, review, premium.
3. **V2 (6 bln)**: AI recs, mobile app.
4. **Scale**: IoT gudang CCTV.

**TAM Estimasi**: Rental hunian Rp 200T, gudang Rp 100T (BPS 2024).  
**Soliditas**: Diversified revenue, network effect, low barrier.

*Dokumen ini dapat di-update berdasarkan feedback atau data real.*

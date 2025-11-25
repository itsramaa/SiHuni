import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Pendaftaran & Akun",
    faqs: [
      {
        question: "Bagaimana cara mendaftar di Sihuni?",
        answer: "Anda dapat mendaftar dengan mengklik tombol 'Daftar' di pojok kanan atas halaman utama. Isi formulir pendaftaran dengan informasi yang valid dan verifikasi email Anda untuk mengaktifkan akun."
      },
      {
        question: "Apakah pendaftaran di Sihuni gratis?",
        answer: "Ya, pendaftaran di Sihuni sepenuhnya gratis. Anda hanya membayar ketika melakukan pemesanan properti."
      },
      {
        question: "Saya lupa password, bagaimana cara reset?",
        answer: "Klik 'Lupa Password' di halaman login, masukkan email Anda, dan kami akan mengirimkan link reset password. Klik link tersebut dan buat password baru."
      }
    ]
  },
  {
    title: "Pencarian Properti",
    faqs: [
      {
        question: "Bagaimana cara mencari properti di Sihuni?",
        answer: "Gunakan fitur pencarian di halaman utama dengan memasukkan lokasi, jenis properti, dan rentang harga. Anda juga dapat menggunakan filter lanjutan untuk menyaring hasil pencarian."
      },
      {
        question: "Apakah saya bisa menyimpan properti favorit?",
        answer: "Ya, Anda dapat menyimpan properti favorit dengan mengklik ikon hati di halaman listing. Properti favorit akan tersedia di halaman profil Anda."
      },
      {
        question: "Bagaimana cara menghubungi pemilik properti?",
        answer: "Setelah menemukan properti yang sesuai, klik 'Hubungi Pemilik' untuk melihat informasi kontak atau kirim pesan langsung melalui platform kami."
      }
    ]
  },
  {
    title: "Pemesanan & Pembayaran",
    faqs: [
      {
        question: "Bagaimana proses pemesanan di Sihuni?",
        answer: "Pilih properti → Pilih tanggal sewa → Isi detail pemesanan → Lakukan pembayaran → Tunggu konfirmasi dari pemilik. Setelah dikonfirmasi, Anda akan menerima detail lengkap properti."
      },
      {
        question: "Metode pembayaran apa yang tersedia?",
        answer: "Kami menerima berbagai metode pembayaran: transfer bank, kartu kredit/debit, e-wallet (OVO, GoPay, ShopeePay), dan virtual account."
      },
      {
        question: "Apakah pembayaran di Sihuni aman?",
        answer: "Ya, kami menggunakan sistem keamanan tingkat tinggi dan gateway pembayaran terpercaya. Semua transaksi dienkripsi dan dilindungi."
      },
      {
        question: "Bagaimana kebijakan pembatalan?",
        answer: "Kebijakan pembatalan bervariasi tergantung pemilik properti. Rincian kebijakan pembatalan akan ditampilkan sebelum Anda melakukan pemesanan."
      }
    ]
  },
  {
    title: "Keamanan & Verifikasi",
    faqs: [
      {
        question: "Apakah properti di Sihuni sudah diverifikasi?",
        answer: "Ya, kami melakukan verifikasi terhadap semua properti yang terdaftar di platform kami untuk memastikan keamanan dan kelayakan properti."
      },
      {
        question: "Bagaimana Sihuni melindungi data saya?",
        answer: "Kami menggunakan enkripsi SSL, firewall, dan sistem keamanan lainnya untuk melindungi data pribadi Anda. Kami tidak pernah membagikan informasi Anda kepada pihak ketiga tanpa persetujuan."
      }
    ]
  }
];

const quickLinks = [
  { title: "Panduan Pencarian", description: "Pelajari cara mencari properti dengan efektif" },
  { title: "Kebijakan Pembatalan", description: "Pahami kebijakan pembatalan kami" },
  { title: "Keamanan Akun", description: "Tips menjaga keamanan akun Anda" },
  { title: "Metode Pembayaran", description: "Pilihan pembayaran yang tersedia" },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Pusat Bantuan</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang menggunakan Sihuni. 
              Jika Anda tidak menemukan jawaban yang Anda cari, hubungi tim dukungan kami.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Panduan Cepat</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Pelajari Lebih Lanjut
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Masih Membutuhkan Bantuan?</CardTitle>
                <CardDescription>
                  Tim dukungan kami siap membantu Anda dengan pertanyaan atau masalah apa pun
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  📧 Email Dukungan
                </Button>
                <Button variant="outline" size="lg">
                  💬 Chat Langsung
                </Button>
                <Button variant="outline" size="lg">
                  📞 Telepon: +62 21 1234 5678
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Operating Hours */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Jam Operasional Dukungan:</strong> Senin - Jumat: 08:00 - 18:00 | 
              Sabtu - Minggu: 09:00 - 17:00 (WIB)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
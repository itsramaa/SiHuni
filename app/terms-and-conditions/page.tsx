import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Syarat dan Ketentuan</h1>
            <p className="text-lg text-muted-foreground">
              Terakhir diperbarui: 25 November 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Ketentuan Umum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Dengan mengakses dan menggunakan situs web Sihuni, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. 
                    Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak diperkenankan menggunakan situs web kami.
                  </p>
                  <p>
                    Sihuni berhak untuk mengubah, memodifikasi, atau memperbarui syarat dan ketentuan ini setiap saat. 
                    Perubahan akan berlaku segera setelah diposting di situs web ini.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Penggunaan Situs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Anda setuju untuk menggunakan situs web ini hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. 
                    Anda dilarang menggunakan situs web ini untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Menyebarkan konten yang melanggar hukum, berbahaya, atau menyinggung</li>
                    <li>Melakukan kegiatan yang dapat mengganggu operasi situs</li>
                    <li>Mencoba untuk mendapatkan akses tidak sah ke sistem atau jaringan kami</li>
                    <li>Menggunakan situs untuk kegiatan penipuan atau phishing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Pemesanan dan Pembayaran</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Semua pemesanan melalui Sihuni tunduk pada ketersediaan dan persetujuan pemilik properti. 
                    Kami berhak menolak atau membatalkan pemesanan atas kebijakan kami sendiri.
                  </p>
                  <p>
                    Pembayaran harus dilakukan sesuai dengan metode pembayaran yang tersedia. 
                    Biaya yang ditampilkan sudah termasuk pajak dan biaya layanan sesuai kebijakan kami.
                  </p>
                  <p>
                    Kebijakan pembatalan dan pengembalian uang mengikuti ketentuan yang berlaku dan akan diinformasikan pada saat pemesanan.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Kebijakan Privasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. 
                    Informasi yang Anda berikan akan digunakan sesuai dengan kebijakan privasi kami.
                  </p>
                  <p>
                    Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, 
                    kecuali jika diwajibkan oleh hukum atau untuk memproses transaksi Anda.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Seluruh konten di situs web ini, termasuk namun tidak terbatas pada teks, grafik, logo, gambar, 
                    dan perangkat lunak, adalah milik Sihuni atau pemberi lisensi kami dan dilindungi oleh hukum hak cipta.
                  </p>
                  <p>
                    Anda dilarang untuk mereproduksi, mendistribusikan, memodifikasi, atau menggunakan konten dari situs ini 
                    tanpa izin tertulis dari kami.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Pembatasan Tanggung Jawab</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Sihuni tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, 
                    atau konsekuensial yang timbul dari penggunaan situs web ini atau layanan kami.
                  </p>
                  <p>
                    Kami tidak menjamin akurasi, kelengkapan, atau keandalan informasi yang disediakan di situs ini. 
                    Informasi dapat berubah tanpa pemberitahuan sebelumnya.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Hubungan dengan Pemilik Properti</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Sihuni bertindak sebagai platform yang menghubungkan penyewa dengan pemilik properti. 
                    Kami tidak memiliki properti yang terdaftar di platform kami.
                  </p>
                  <p>
                    Segala transaksi dan perjanjian sewa-menyewa dilakukan antara penyewa dan pemilik properti. 
                    Sihuni hanya menyediakan platform untuk memfasilitasi proses ini.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Hukum yang Berlaku</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                    Setiap perselisihan yang timbul dari penggunaan situs web ini akan diselesaikan di pengadilan yang berwenang di Indonesia.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Kontak Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, 
                    silakan hubungi kami melalui:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Email: info@sihuni.com</li>
                    <li>Telepon: +62 21 1234 5678</li>
                    <li>Alamat: Jl. Sudirman No. 123, Jakarta Pusat</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Dengan menggunakan situs web Sihuni, Anda menyetujui syarat dan ketentuan yang berlaku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
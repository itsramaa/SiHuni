import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Kebijakan Privasi</h1>
            <p className="text-lg text-muted-foreground">
              Terakhir diperbarui: 25 November 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Pengantar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Kebijakan Privasi ini menjelaskan bagaimana Sihuni mengumpulkan, menggunakan, 
                    dan melindungi informasi pribadi Anda saat Anda menggunakan situs web dan layanan kami.
                  </p>
                  <p>
                    Kami berkomitmen untuk melindungi privasi Anda dan memastikan bahwa informasi pribadi Anda 
                    ditangani dengan aman dan sesuai dengan hukum yang berlaku.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Informasi yang Kami Kumpulkan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Kami dapat mengumpulkan informasi berikut:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, 
                      alamat fisik, dan informasi identifikasi lainnya yang Anda berikan saat mendaftar atau membuat pemesanan.
                    </li>
                    <li>
                      <strong>Informasi Akun:</strong> Username, password, dan preferensi akun Anda.
                    </li>
                    <li>
                      <strong>Informasi Transaksi:</strong> Detail pemesanan, riwayat pembayaran, 
                      dan informasi terkait transaksi yang Anda lakukan melalui platform kami.
                    </li>
                    <li>
                      <strong>Informasi Penggunaan:</strong> Cara Anda menggunakan situs web kami, 
                      termasuk halaman yang Anda kunjungi, waktu kunjungan, dan interaksi Anda dengan fitur-fitur kami.
                    </li>
                    <li>
                      <strong>Informasi Teknis:</strong> Alamat IP, jenis browser, sistem operasi, 
                      dan informasi perangkat lainnya yang terkait dengan akses Anda.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Cara Kami Menggunakan Informasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Kami menggunakan informasi yang kami kumpulkan untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Memproses dan mengelola pemesanan Anda</li>
                    <li>Menyediakan layanan pelanggan dan dukungan</li>
                    <li>Mengirimkan informasi tentang pemesanan dan pembaruan akun</li>
                    <li>Meningkatkan dan mengoptimalkan situs web kami</li>
                    <li>Mengirimkan promosi dan penawaran khusus (dengan persetujuan Anda)</li>
                    <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
                    <li>Melindungi keamanan dan integritas platform kami</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Pembagian Informasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                    untuk tujuan pemasaran tanpa persetujuan eksplisit Anda.
                  </p>
                  <p>
                    Kami dapat membagikan informasi Anda dengan:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Pemilik Properti:</strong> Informasi yang diperlukan untuk memproses pemesanan Anda 
                      dan memfasilitasi komunikasi dengan pemilik properti.
                    </li>
                    <li>
                      <strong>Penyedia Layanan:</strong> Mitra teknologi, pembayaran, dan layanan lainnya 
                      yang membantu kami mengoperasikan platform kami.
                    </li>
                    <li>
                      <strong>Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum atau untuk mematuhi proses hukum.
                    </li>
                    <li>
                      <strong>Perlindungan Kami:</strong> Untuk melindungi hak, properti, atau keamanan kami dan pengguna kami.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Keamanan Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda 
                    dari akses, penggunaan, atau pengungkapan yang tidak sah.
                  </p>
                  <p>
                    Langkah-langkah ini termasuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Enkripsi data saat transmisi dan penyimpanan</li>
                    <li>Akses terbatas ke informasi pribadi</li>
                    <li>Audit keamanan berkala</li>
                    <li>Pemantauan sistem untuk mendeteksi ancaman keamanan</li>
                    <li>Pelatihan keamanan untuk karyawan kami</li>
                  </ul>
                  <p>
                    Namun, harap diperhatikan bahwa tidak ada metode transmisi melalui internet 
                    atau metode penyimpanan elektronik yang 100% aman.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Retensi Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Kami akan menyimpan informasi pribadi Anda selama diperlukan untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Menyediakan layanan yang Anda minta</li>
                    <li>Mematuhi kewajiban hukum dan peraturan</li>
                    <li>Menyelesaikan perselisihan dan menegakkan perjanjian kami</li>
                    <li>Melindungi dari penipuan dan penyalahgunaan</li>
                  </ul>
                  <p>
                    Setelah periode ini, kami akan menghapus atau menganonymisasi informasi Anda secara aman.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Hak Anda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Anda memiliki hak-hak tertentu terkait dengan informasi pribadi Anda, termasuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Akses:</strong> Meminta akses ke informasi pribadi yang kami miliki tentang Anda.
                    </li>
                    <li>
                      <strong>Koreksi:</strong> Meminta koreksi atas informasi yang tidak akurat atau tidak lengkap.
                    </li>
                    <li>
                      <strong>Penghapusan:</strong> Meminta penghapusan informasi pribadi Anda dalam keadaan tertentu.
                    </li>
                    <li>
                      <strong>Portabilitas:</strong> Meminta salinan informasi Anda dalam format yang dapat dibaca mesin.
                    </li>
                    <li>
                      <strong>Keberatan:</strong> Menolak pemrosesan informasi Anda untuk tujuan tertentu.
                    </li>
                    <li>
                      <strong>Persetujuan:</strong> Menarik persetujuan Anda kapan saja untuk pemrosesan berbasis persetujuan.
                    </li>
                  </ul>
                  <p>
                    Untuk menjalankan hak-hak ini, silakan hubungi kami melalui informasi kontak yang tersedia di bagian akhir kebijakan ini.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Cookies dan Teknologi Pelacakan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Kami menggunakan cookies dan teknologi serupa untuk meningkatkan pengalaman Anda di situs web kami. 
                    Cookies adalah file kecil yang ditempatkan di perangkat Anda untuk mengumpulkan informasi tentang penggunaan situs.
                  </p>
                  <p>
                    Anda dapat mengontrol penggunaan cookies melalui pengaturan browser Anda. 
                    Namun, menonaktifkan cookies dapat memengaruhi fungsionalitas tertentu dari situs web kami.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Tautan ke Situs Pihak Ketiga</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Situs web kami dapat berisi tautan ke situs web pihak ketiga. 
                    Kami tidak bertanggung jawab atas praktik privasi atau konten dari situs web ini.
                  </p>
                  <p>
                    Kami mendorong Anda untuk membaca kebijakan privasi dari setiap situs web yang Anda kunjungi.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Perubahan Kebijakan Privasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                    Perubahan akan diposting di halaman ini dengan tanggal efektif yang diperbarui.
                  </p>
                  <p>
                    Kami mendorong Anda untuk meninjau kebijakan privasi ini secara berkala untuk tetap mengetahui 
                    bagaimana kami melindungi informasi Anda.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Kontak Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menjalankan hak privasi Anda, 
                    silakan hubungi kami melalui:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Email: privacy@sihuni.com</li>
                    <li>Telepon: +62 21 1234 5678</li>
                    <li>Alamat: Jl. Sudirman No. 123, Jakarta Pusat</li>
                  </ul>
                  <p>
                    Kami akan menanggapi permintaan Anda dalam waktu yang wajar sesuai dengan hukum yang berlaku.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Dengan menggunakan situs web Sihuni, Anda menyetujui kebijakan privasi ini dan praktik pengumpulan data kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
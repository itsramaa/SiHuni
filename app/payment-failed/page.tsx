import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4">
              <XCircle className="w-16 h-16 text-red-500 mx-auto" />
            </div>
            <CardTitle className="text-2xl">Pembayaran Gagal</CardTitle>
            <CardDescription>
              Maaf, pembayaran Anda tidak dapat diproses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted rounded-lg p-4 text-left">
              <h3 className="font-semibold mb-2">Kemungkinan Penyebab:</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Saldo tidak mencukupi</li>
                <li>• Kartu kredit/debit kadaluarsa</li>
                <li>• Informasi pembayaran tidak valid</li>
                <li>• Masalah koneksi jaringan</li>
                <li>• Bank penerbit menolak transaksi</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Jangan khawatir, pemesanan Anda masih tersimpan. 
                Silakan coba lakukan pembayaran kembali atau gunakan metode pembayaran lain.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  <strong>Catatan:</strong> Pemesanan akan dibatalkan otomatis jika pembayaran tidak diselesaikan dalam 24 jam.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/booking" className="flex-1">
                <Button className="w-full">
                  Coba Lagi
                </Button>
              </Link>
              <Link href="/profile" className="flex-1">
                <Button variant="outline" className="w-full">
                  Lihat Pemesanan
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Butuh bantuan? Hubungi kami di info@sihuni.com atau +62 21 1234 5678
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
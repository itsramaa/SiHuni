import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            </div>
            <CardTitle className="text-2xl">Pembayaran Berhasil!</CardTitle>
            <CardDescription>
              Pemesanan Anda telah dikonfirmasi dan pembayaran telah diterima
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted rounded-lg p-4 text-left">
              <h3 className="font-semibold mb-2">Detail Pemesanan</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nomor Pemesanan:</span>
                  <span className="font-medium">#SIH202411250001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Properti:</span>
                  <span className="font-medium">Kosan Mawar Indah</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Periode Sewa:</span>
                  <span className="font-medium">1 Des 2024 - 1 Jan 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Pembayaran:</span>
                  <span className="font-medium">Rp 800.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium text-green-600">Dikonfirmasi</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Detail lengkap pemesanan telah dikirim ke email Anda. 
                Silakan hubungi pemilik properti untuk informasi lebih lanjut tentang check-in.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <strong>Info Pemilik:</strong> Bapak Suryanto - +62 812-3456-7890
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/profile" className="flex-1">
                <Button className="w-full">
                  Lihat Pemesanan Saya
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  Kembali ke Beranda
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, User, Phone, Mail } from "lucide-react";
import Image from "next/image";

interface BookingSummaryProps {
  property: {
    name: string;
    type: string;
    image: string;
    location: string;
    price: string;
  };
  bookingDetails: {
    startDate: string;
    endDate: string;
    duration: number;
    totalPrice: number;
  };
  onConfirm: () => void;
  onBack: () => void;
}

export function BookingSummary({ property, bookingDetails, onConfirm, onBack }: BookingSummaryProps) {
  return (
    <div className="space-y-6">
      {/* Property Info */}
      <Card>
        <CardHeader>
          <CardTitle>Detail Properti</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Image
              src={property.image}
              alt={property.name}
              width={120}
              height={90}
              className="rounded-lg object-cover"
            />
            <div className="flex-1 space-y-2">
              <div>
                <h3 className="font-semibold">{property.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {property.type}
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{property.location}</span>
              </div>
              <p className="text-sm font-medium text-primary">{property.price}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Booking Details */}
      <Card>
        <CardHeader>
          <CardTitle>Detail Pemesanan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Check-in</span>
              </div>
              <span className="text-sm font-medium">{bookingDetails.startDate}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Check-out</span>
              </div>
              <span className="text-sm font-medium">{bookingDetails.endDate}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Durasi</span>
              <span className="text-sm font-medium">{bookingDetails.duration} bulan</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">Total Pembayaran</span>
              <span className="text-lg font-bold text-primary">
                Rp {bookingDetails.totalPrice.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms and Conditions */}
      <Card>
        <CardHeader>
          <CardTitle>Syarat & Ketentuan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Pembayaran harus dilunasi sebelum check-in</p>
            <p>• Kebijakan pembatalan mengikuti ketentuan pemilik properti</p>
            <p>• Kerusakan properti akan dikenakan biaya tambahan</p>
            <p>• Perpanjangan sewa harus dikonfirmasi minimal 7 hari sebelumnya</p>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Kembali
        </Button>
        <Button onClick={onConfirm} className="flex-1">
          Konfirmasi & Bayar
        </Button>
      </div>
    </div>
  );
}
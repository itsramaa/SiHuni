import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, CheckCircle, XCircle, Clock3 } from "lucide-react";
import Image from "next/image";

interface BookingHistoryProps {
  bookings: Booking[];
}

interface Booking {
  id: string;
  property: {
    name: string;
    image: string;
    location: string;
  };
  dates: {
    start: string;
    end: string;
  };
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  total: number;
  createdAt: string;
}

const statusConfig = {
  confirmed: {
    label: 'Terkonfirmasi',
    color: 'bg-green-100 text-green-800',
    icon: CheckCircle,
  },
  pending: {
    label: 'Menunggu',
    color: 'bg-yellow-100 text-yellow-800',
    icon: Clock3,
  },
  cancelled: {
    label: 'Dibatalkan',
    color: 'bg-red-100 text-red-800',
    icon: XCircle,
  },
  completed: {
    label: 'Selesai',
    color: 'bg-blue-100 text-blue-800',
    icon: CheckCircle,
  },
};

export function BookingHistory({ bookings }: BookingHistoryProps) {
  const confirmedBookings = bookings.filter(b => b.status === 'confirmed');
  const pendingBookings = bookings.filter(b => b.status === 'pending');
  const pastBookings = bookings.filter(b => ['completed', 'cancelled'].includes(b.status));

  const BookingCard = ({ booking }: { booking: Booking }) => {
    const status = statusConfig[booking.status];
    const StatusIcon = status.icon;

    return (
      <Card className="overflow-hidden">
        <div className="flex">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={booking.property.image}
              alt={booking.property.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold">{booking.property.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{booking.property.location}</span>
                </div>
              </div>
              <Badge className={status.color}>
                <StatusIcon className="w-3 h-3 mr-1" />
                {status.label}
              </Badge>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{booking.dates.start} - {booking.dates.end}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Dipesan: {booking.createdAt}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-semibold">Rp {booking.total.toLocaleString('id-ID')}</span>
              <div className="flex gap-2">
                {booking.status === 'confirmed' && (
                  <Button variant="outline" size="sm">
                    Detail
                  </Button>
                )}
                {booking.status === 'pending' && (
                  <Button variant="outline" size="sm">
                    Bayar
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Riwayat Pemesanan</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Aktif ({confirmedBookings.length})</TabsTrigger>
            <TabsTrigger value="pending">Menunggu ({pendingBookings.length})</TabsTrigger>
            <TabsTrigger value="past">Riwayat ({pastBookings.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-4 mt-4">
            {confirmedBookings.length > 0 ? (
              confirmedBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>Tidak ada pemesanan aktif</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="pending" className="space-y-4 mt-4">
            {pendingBookings.length > 0 ? (
              pendingBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>Tidak ada pemesanan menunggu</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4 mt-4">
            {pastBookings.length > 0 ? (
              pastBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>Tidak ada riwayat pemesanan</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Users } from 'lucide-react';
import Link from 'next/link';

interface BookingFormProps {
  listingPrice: string;
  listingName: string;
  onBook?: () => void;
}

export function BookingForm({ listingPrice, listingName, onBook }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const basePrice = parseInt(listingPrice.replace(/[^0-9]/g, '')) || 800000;
  const totalNights = checkIn && checkOut ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 3600 * 24)) : 0;
  const totalPrice = totalNights * basePrice;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-600">{listingPrice}/bulan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="flex items-center gap-2 mb-1">
            <CalendarDays className="w-4 h-4" />
            Check In
          </Label>
          <Input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        </div>
        <div>
          <Label className="flex items-center gap-2 mb-1">
            <CalendarDays className="w-4 h-4" />
            Check Out
          </Label>
          <Input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        </div>
        <div>
          <Label className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4" />
            Tamu
          </Label>
          <Input type="number" min={1} value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
        </div>
        <div className="text-lg font-bold border-t pt-2">
          Total: Rp {totalPrice.toLocaleString('id-ID')} ({totalNights} bulan)
        </div>
        <Button onClick={onBook} className="w-full h-12 text-lg" asChild>
          <Link href="/checkout">
            Lanjut Bayar dengan Tripay
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

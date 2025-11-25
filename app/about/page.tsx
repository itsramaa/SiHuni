"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Tentang Sihuni
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Platform sewa hunian terlengkap di Indonesia untuk kamar, gudang, dan properti. 
          Temukan, booking, dan bayar dengan mudah.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Image src="/images/logo-sihuni.png" alt="Sihuni" width={48} height={48} className="rounded-lg" />
              Misi Kami
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Memberikan akses mudah ke hunian berkualitas dengan transaksi aman dan cepat.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Hunian Lengkap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Kamar kos mahasiswa/pekerja</li>
              <li>• Gudang untuk UMKM</li>
              <li>• Properti lengkap keluarga</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fitur Unggulan</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Filter advanced & search pintar</li>
              <li>• Booking instan</li>
              <li>• Payment Tripay aman</li>
              <li>• Review real tenant</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" asChild>
          <a href="/search">
            Mulai Cari Hunian
          </a>
        </Button>
      </div>
    </div>
  );
}

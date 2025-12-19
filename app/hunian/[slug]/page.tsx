"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Heart,
  Share2,
  MapPin,
  Wifi,
  Snowflake,
  Utensils,
  Car,
  Bed,
  Calendar,
  CheckCircle2,
  XCircle,
  Users,
  Home,
  Building2,
  Package,
} from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface Facility {
  icon: React.ReactNode;
  name: string;
  available: boolean;
}

interface Room {
  id: string;
  name: string;
  price: number;
  size: string;
  beds: number;
}

interface NearbyProperty {
  id: string;
  title: string;
  price: number;
  type: "kosan" | "ruko" | "gudang";
  image: string;
  distance: string;
}

const dummyProperty = {
  title: "Kosan Putri Hijau Premium",
  type: "kosan" as const,
  rating: 4.8,
  reviews: 127,
  location: "Jl. Putri Hijau No. 45, Depok, Jawa Barat",
  description:
    "Kosan premium dekat kampus UI dengan fasilitas lengkap. Lingkungan nyaman, akses mudah ke transportasi umum.",
  gallery: [
    { src: "/images/kosan-1.jpg", alt: "Facade" },
    { src: "/images/kosan-2.jpg", alt: "Room" },
    { src: "/images/kosan-3.jpg", alt: "Facilities" },
    { src: "/images/kosan-4.jpg", alt: "Kitchen" },
    { src: "/images/kosan-5.jpg", alt: "Bathroom" },
    { src: "/images/kosan-6.jpg", alt: "Living area" },
  ],
  facilities: [
    {
      icon: <Wifi className="w-5 h-5" />,
      name: "WiFi 50Mbps",
      available: true,
    },
    { icon: <Snowflake className="w-5 h-5" />, name: "AC", available: true },
    {
      icon: <Utensils className="w-5 h-5" />,
      name: "Dapur Bersama",
      available: true,
    },
    {
      icon: <Car className="w-5 h-5" />,
      name: "Parkir Motor",
      available: true,
    },
    {
      icon: <Bed className="w-5 h-5" />,
      name: "Kasur Single",
      available: true,
    },
  ],
  rooms: [
    { id: "1", name: "Kamar Standard", price: 1500000, size: "3x3m", beds: 1 },
    { id: "2", name: "Kamar Deluxe", price: 1800000, size: "3x4m", beds: 1 },
  ],
  rules: [
    "Tidak boleh merokok",
    "Jam tenang 22:00-06:00",
    "Pernah tamu max 2 orang",
  ],
  policies: ["Deposit 1 bulan", "Pembayaran bulanan", "Kontrak min 6 bulan"],
  about:
    "Properti ini dikelola oleh PT SiHuni Mandiri sejak 2020. Sudah menaungi 50+ properti di Depok.",
};

const nearbyProperties: NearbyProperty[] = [
  {
    id: "1",
    title: "Ruko Margonda",
    price: 8500000,
    type: "ruko",
    image: "/images/ruko-1.jpg",
    distance: "1.2km",
  },
  {
    id: "2",
    title: "Gudang Sentosa",
    price: 25000000,
    type: "gudang",
    image: "/images/gudang-1.jpg",
    distance: "3.5km",
  },
  {
    id: "3",
    title: "Kosan UI View",
    price: 1200000,
    type: "kosan",
    image: "/images/kosan-2.jpg",
    distance: "0.8km",
  },
];

export default function HunianPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [activeTab, setActiveTab] = useState<"harian" | "bulanan" | "tahunan">(
    "harian"
  );
  const [love, setLove] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const dailyPrice = 50000;
  const monthlyPrice = 1500000;
  const yearlyPrice = 16200000;
  const dailyTotal = dailyPrice * 30; // Example 30 days

  const getIncludes = () => [
    "WiFi gratis",
    "Listrik & air unlimited",
    "Kebersihan mingguan",
    ...(activeTab === "harian" ? ["Kasur & lemari"] : []),
  ];

  const getExcludes = () => [
    "Makanan & minuman",
    ...(activeTab === "harian" ? ["Laundry"] : []),
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb + Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/kosan">Hunian</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{dummyProperty.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
              <Share2 className="w-4 h-4" />
              <span className="sr-only">Bagikan</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0"
              onClick={() => setLove(!love)}
            >
              <Heart
                className={`w-4 h-4 ${
                  love ? "fill-primary text-primary" : "text-muted-foreground"
                }`}
              />
              <span className="sr-only">Favorit</span>
            </Button>
          </div>
        </div>

        {/* Hero Gallery */}
        <div className="relative mb-12">
          <Carousel className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <CarouselContent>
              {dummyProperty.gallery.slice(0, 4).map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => setGalleryOpen(true)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
          </Carousel>
          <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
            <DialogContent className="max-w-6xl p-0 max-h-[90vh]">
              <DialogHeader className="p-6 pb-4">
                <DialogTitle>
                  Galeri Lengkap ({dummyProperty.gallery.length} foto)
                </DialogTitle>
              </DialogHeader>
              <Carousel className="w-full h-[70vh]">
                <CarouselContent>
                  {dummyProperty.gallery.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative h-full w-full">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DialogContent>
          </Dialog>
          <Badge className="absolute top-6 right-6 bg-background/90 text-foreground hover:bg-background cursor-pointer z-10">
            Lihat semua foto
          </Badge>
          <div className="absolute bottom-6 left-6 flex gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {dummyProperty.type.toUpperCase()}
            </Badge>
            <Badge variant="outline">
              ★ {dummyProperty.rating} ({dummyProperty.reviews})
            </Badge>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <CardTitle className="text-3xl lg:text-4xl font-bold mb-4">
                {dummyProperty.title}
              </CardTitle>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-lg text-muted-foreground">
                  {dummyProperty.location}
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {dummyProperty.description}
              </p>
            </div>

            {/* Facilities */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-6 h-6" />
                  Fasilitas
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {dummyProperty.facilities.map((f, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-xl bg-muted/50"
                  >
                    {f.icon}
                    <span className="font-medium">{f.name}</span>
                    {f.available ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                    ) : (
                      <XCircle className="w-4 h-4 text-destructive ml-auto" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Rooms */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Kamar Tersedia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {dummyProperty.rooms.map((room) => (
                    <Card
                      key={room.id}
                      className="hover:shadow-md transition-shadow p-6"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{room.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {room.size} | {room.beds} tempat tidur
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">
                            Rp {room.price.toLocaleString("id-ID")}
                          </div>
                          <div className="text-sm text-primary">/bulan</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Sticky Pricing */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <Card className="border-0 shadow-xl lg:shadow-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Mulai Menghuni</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs
                    value={activeTab}
                    onValueChange={(v) => setActiveTab(v as any)}
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="harian">Harian</TabsTrigger>
                      <TabsTrigger value="bulanan">Bulanan</TabsTrigger>
                      <TabsTrigger value="tahunan">Tahunan</TabsTrigger>
                    </TabsList>
                    <TabsContent value="harian" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          Pilih tanggal selesai
                        </div>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left"
                        >
                          30 Hari (Rp {dailyTotal.toLocaleString("id-ID")})
                        </Button>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-sm font-medium mb-3">Terdapat</div>
                        <div className="space-y-2">
                          {getIncludes().map((inc, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              {inc}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-3">
                          Tidak Terdapat
                        </div>
                        <div className="space-y-2">
                          {getExcludes().map((exc, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <XCircle className="w-4 h-4 text-destructive" />
                              {exc}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button
                        size="lg"
                        className="w-full text-lg font-semibold"
                      >
                        Pesan Hunian - Rp {dailyTotal.toLocaleString("id-ID")}
                      </Button>
                    </TabsContent>
                    <TabsContent value="bulanan" className="space-y-6 pt-4">
                      <div className="grid grid-cols-2 gap-2 text-center p-4 bg-muted/50 rounded-xl">
                        <div>
                          <div className="text-2xl font-bold">
                            Rp {monthlyPrice.toLocaleString("id-ID")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            /bulan
                          </div>
                        </div>
                        <div className="border-l">
                          <div className="text-lg font-semibold">
                            Deposit 1 bln
                          </div>
                          <div className="text-sm">
                            Dikembalikan akhir kontrak
                          </div>
                        </div>
                      </div>
                      <Button
                        size="lg"
                        className="w-full text-lg font-semibold"
                      >
                        Ajukan Menghuni
                      </Button>
                    </TabsContent>
                    <TabsContent value="tahunan" className="space-y-6 pt-4">
                      <div className="grid grid-cols-2 gap-2 text-center p-4 bg-muted/50 rounded-xl">
                        <div>
                          <div className="text-2xl font-bold">
                            Rp {yearlyPrice.toLocaleString("id-ID")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            /tahun
                          </div>
                        </div>
                        <div className="border-l">
                          <div className="text-lg font-semibold">
                            Diskon 10%
                          </div>
                          <div className="text-sm">dari harga bulanan</div>
                        </div>
                      </div>
                      <Button
                        size="lg"
                        className="w-full text-lg font-semibold"
                      >
                        Ajukan Menghuni
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Rules & Policies */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Aturan & Tata Tertib</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {dummyProperty.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Kebijakan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {dummyProperty.policies.map((policy, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {policy}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* About */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Tentang Properti</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{dummyProperty.about}</p>
          </CardContent>
        </Card>

        {/* Nearby */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Hunian Lain Dekat Sini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearbyProperties.map((prop) => (
                <Link key={prop.id} href="/hunian/example" className="group">
                  <Card className="h-full hover:shadow-md transition-all overflow-hidden border-0">
                    <div className="relative h-32 overflow-hidden rounded-t-xl">
                      <Image
                        src={prop.image}
                        alt={prop.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="font-medium line-clamp-1 mb-1">
                        {prop.title}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>{prop.distance}</span>
                        <Badge variant="outline">{prop.type}</Badge>
                      </div>
                      <div className="text-lg font-bold mt-2">
                        Rp {prop.price.toLocaleString("id-ID")}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

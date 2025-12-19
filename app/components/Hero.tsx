"use client";
import Image from "next/image";
import Link from "next/link";
import { Home, House, Store, User2, Warehouse } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { SearchFilter } from "@/components/search-filter";

// Use a style object for the polygonal clip-path for the hero image container
const clippedContainerStyle: React.CSSProperties = {
  clipPath:
    "polygon(0 0, 53% 0, 58% 8%, 100% 8%, 100% 76%, 71% 76%, 80% 100%, 0 100%)",
  WebkitClipPath:
    "polygon(0 0, 53% 0, 58% 8%, 100% 8%, 100% 76%, 71% 76%, 80% 100%, 0 100%)",
  overflow: "hidden",
  borderRadius: "12px",
};

const slides = [
  {
    title: "Menyediakan Hunian Yang Tepat Untuk Anda",
    desc1: "Temukan kosan, ruko, dan gudang di lokasi strategis",
    desc2: "Fasilitas lengkap dengan harga kompetitif",
    desc3: "Proses booking cepat dan mudah",
  },
  {
    title: "Hunian Ideal untuk Bisnis dan Keluarga",
    desc1: "Ruko modern dan gudang aman terjamin",
    desc2: "Lokasi strategis dekat pusat kota",
    desc3: "Kontrak fleksibel sesuai kebutuhan Anda",
  },
];

const testimoniData = [
  {
    name: "Andi Rahman",
    role: "Mahasiswa",
    city: "Jakarta",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fallback: "AR",
    text: "Saya sangat puas dengan layanan SiHuni. Proses pencarian kosan jadi jauh lebih mudah dan cepat!",
  },
  {
    name: "Siti Nurhaliza",
    role: "Karyawan Swasta",
    city: "Bandung",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fallback: "SN",
    text: "Ruko yang saya sewa melalui SiHuni sangat strategis dan harganya terjangkau. Recommended!",
  },
  {
    name: "Budi Santoso",
    role: "Pengusaha",
    city: "Surabaya",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    fallback: "BS",
    text: "Gudangnya bersih dan aman. Pelayanan admin juga ramah dan respon cepat. Top markotop!",
  },
  {
    name: "Maya Putri",
    role: "Freelancer",
    city: "Yogyakarta",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    fallback: "MP",
    text: "Booking kosan di SiHuni gampang banget, tinggal klik dan langsung bisa move in. Sukses terus!",
  },
];

export default function Hero() {
  const isMobile = useIsMobile();
  const autoPlayBanner = useRef(
    Autoplay({ delay: isMobile ? 8000 : 5000, stopOnInteraction: true })
  );
  const autoPlayTestimoni = useRef(
    Autoplay({ delay: isMobile ? 10000 : 8000, stopOnInteraction: true })
  );
  const [carouselApi, setCarouselApi] = useState<EmblaCarouselType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<
    {
      id: string;
      title: string;
      location: string;
      href: string;
      type: "kosan" | "ruko" | "gudang";
    }[]
  >([]);

  // Get active slide index
  useEffect(() => {
    if (!carouselApi) return;

    setActiveIndex(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  // Debounced search effect
  useEffect(() => {
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    const handler = setTimeout(() => {
      setLoading(true);
      // Dummy data for demo
      const dummy: typeof results = [
        {
          id: "1",
          title: "Kosan Putri Hijau",
          location: "Depok, Jawa Barat",
          href: "/kosan/putri-hijau",
          type: "kosan",
        },
        {
          id: "2",
          title: "Ruko Margonda",
          location: "Depok, Jawa Barat",
          href: "/ruko/margonda",
          type: "ruko",
        },
        {
          id: "3",
          title: "Gudang Sentosa",
          location: "Bogor, Jawa Barat",
          href: "/gudang/sentosa",
          type: "gudang",
        },
      ].filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setTimeout(() => {
        setResults(dummy);
        setLoading(false);
      }, 500);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Close dropdown when input loses focus
  useEffect(() => {
    const handleFocusOut = (e: FocusEvent) => {
      const commandList = document.querySelector("[cmdk-list]");
      if (commandList && !commandList.contains(e.relatedTarget as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("focusout", handleFocusOut);
    return () => document.removeEventListener("focusout", handleFocusOut);
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center bg-transparent">
        <Carousel
          className="w-full h-full"
          opts={{ loop: true }}
          plugins={[autoPlayBanner.current]}
          onMouseEnter={autoPlayBanner.current.stop}
          onMouseLeave={() => {
            autoPlayBanner.current.play(false);
          }}
          setApi={setCarouselApi}
        >
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:right-0 flex flex-col lg:flex-row items-end lg:items-center gap-1.5 sm:gap-2 z-50">
            <NavigationMenu viewport={isMobile} className="w-auto">
              <NavigationMenuList className="flex flex-col lg:flex-row gap-1 lg:gap-0 flex-wrap">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-9 px-3 text-xs sm:text-sm w-full lg:w-auto justify-center lg:justify-start"
                    >
                      <Link href="/login" className="flex gap-1.5 items-center">
                        <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">
                          Daftarkan Property Saya
                        </span>
                      </Link>
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="mt-1 lg:mt-0">
                  <Button
                    size="sm"
                    variant="link"
                    className="h-9 px-3 text-xs sm:text-sm w-full lg:w-auto justify-center lg:justify-start"
                  >
                    <Link href="/login" className="flex gap-1.5 items-center">
                      <User2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Masuk</span>
                    </Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <NavigationMenu
            viewport={isMobile}
            className="z-50 absolute px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 left-4 sm:left-6 lg:left-8 top-4 sm:top-6 lg:top-0"
          >
            <NavigationMenuList className="flex items-center gap-2 sm:gap-4 flex-wrap">
              <Button variant="link" className="p-0 h-auto w-auto">
                <Image
                  src="/images/logo-sihuni.png"
                  alt="SiHuni Logo"
                  width={96}
                  height={96}
                  // className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-28"
                  // sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, (max-width: 1024px) 64px, (max-width: 1280px) 80px, 96px"
                />
              </Button>
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger>Hunian</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex-row items-center gap-2">
                          <House />
                          Kosan
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex-row items-center gap-2">
                          <Store />
                          Ruko
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex-row items-center gap-2">
                          <Warehouse />
                          Gudang
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger>SiHuni Ekosistem</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">
                          <div className="font-medium">SiHuni PMS</div>
                          <div className="text-muted-foreground">
                            Property Management System
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/help-center">Tentang Kami</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="absolute bottom-[25%] lg:bottom-1/3 gap-4 lg:gap-8 z-50 px-4 sm:px-8 lg:px-12 py-3 sm:py-6">
            <div className="relative w-full px-2 max-w-xs sm:max-w-sm lg:max-w-lg mx-auto">
              <div className="mb-2 sm:mb-4">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                    containScroll: false,
                  }}
                  className="w-full"
                  plugins={[Fade(), autoPlayTestimoni.current]}
                  onMouseEnter={autoPlayTestimoni.current.stop}
                  onMouseLeave={() => {
                    autoPlayTestimoni.current.play(false);
                  }}
                >
                  <CarouselContent>
                    {testimoniData.map((item, index) => (
                      <CarouselItem key={index}>
                        <Card className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 shadow-lg border-0 bg-background/95 backdrop-blur-sm">
                          <div className="flex-shrink-0">
                            <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                              <AvatarImage
                                src={item.avatar}
                                alt={`${item.name} Avatar`}
                              />
                              <AvatarFallback className="text-xs sm:text-sm">
                                {item.fallback}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="min-w-0 flex-1">
                            <CardHeader className="p-0 mb-1">
                              <CardTitle className="text-sm sm:text-base font-semibold leading-tight">
                                {item.name}
                              </CardTitle>
                              <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                                {item.role}, {item.city}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <p className="text-xs sm:text-sm leading-relaxed line-clamp-2">
                                {item.text}
                              </p>
                            </CardContent>
                          </div>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              <SearchFilter
                aria-label="Cari hunian, lokasi, kosan, ruko, atau gudang"
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                open={open}
                onOpenChange={setOpen}
                loading={loading}
                searchResults={results}
              />
            </div>
          </div>

          <div
            className="relative w-full rounded-[24px] sm:rounded-[40px] bg-[#1f1f1d] shadow-[0px_20px_60px_rgba(15,15,15,0.3)] sm:shadow-[0px_30px_80px_rgba(15,15,15,0.2)] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
            style={clippedContainerStyle}
          >
            <CarouselContent className="h-full w-full ml-0">
              {slides.map((_, index) => (
                <CarouselItem key={index} className="relative h-full">
                  <Image
                    src="/images/test-3.png"
                    alt="description"
                    fill
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      objectPosition: "right",
                      zIndex: 1,
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <div className="absolute bottom-2 right-2 z-50">
            <div className="text-right sm:text-end mb-2 sm:mb-4 max-w-xs sm:max-w-sm lg:max-w-2xs min-h-20 sm:min-h-28 p-2 sm:p-4">
              <h1 className="text-sm sm:text-lg lg:text-xl font-bold leading-tight line-clamp-1 mb-1 sm:mb-2">
                {slides[activeIndex].title}
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-1 mb-1">
                {slides[activeIndex].desc1}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-1">
                {slides[activeIndex].desc2}
              </p>
            </div>
            <div className="flex items-center justify-end gap-1 sm:gap-2 lg:gap-4 xl:gap-16 pt-1 sm:pt-2">
              <CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10 static translate-y-0 p-1.5 sm:p-2 hover:bg-background/50 rounded-full transition-all" />
              <CarouselDots className="static shrink-0" />
              <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10 static translate-y-0 p-1.5 sm:p-2 hover:bg-background/50 rounded-full transition-all" />
            </div>
          </div>
        </Carousel>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#201d17]/30 via-transparent/50 to-transparent z-10" />
      </div>
    </>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { House, Store, User2, Warehouse } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

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
    desc1: "asdasdasd",
    desc2: "asdasdasd",
    desc3: "asdasdasd",
  },
  {
    title: "Deskripsi Slide 2",
    desc1: "contoh teks kedua",
    desc2: "lorem ipsum kedua",
    desc3: "data kedua",
  },
  // Tambah sendiri
];

export default function Hero() {
  const isMobile = useIsMobile();
  const autoPlay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const [carouselApi, setCarouselApi] = useState<EmblaCarouselType>();
  const [activeIndex, setActiveIndex] = useState(0);

  // Get active slide index
  useEffect(() => {
    if (!carouselApi) return;

    setActiveIndex(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  // State for search functionality
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
          plugins={[autoPlay.current]}
          onMouseEnter={autoPlay.current.stop}
          onMouseLeave={autoPlay.current.reset}
          setApi={setCarouselApi}
        >
          <div className="absolute right-0 flex items-center gap-2">
            <NavigationMenu viewport={isMobile} className="z-999">
              <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/terms-and-conditions">Syarat & Ketentuan</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/help-center">Pusat Bantuan</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <Button size="sm" className="ml-8">
                  <Link href="/login" className="flex gap-2">
                    <User2 /> Masuk
                  </Link>
                </Button>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <NavigationMenu viewport={isMobile} className="z-10 absolute p-8">
            <NavigationMenuList className="flex-wrap">
              <Button variant="link">
                <Image
                  src="/images/logo-sihuni.png"
                  alt="SiHuni Logo"
                  width={96}
                  height={96}
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
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/help-center">Tentang Kami</Link>
                </NavigationMenuLink>
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
            </NavigationMenuList>
          </NavigationMenu>

          <div className="absolute bottom-1/3 gap-8 z-50 px-12 py-6">
            <div className="relative w-full max-w-lg">
              <div className="mb-4">
                <Card className="flex flex-row items-center gap-4 p-4 shadow border bg-background">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Testimoni User"
                      />
                      <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-base">Andi Rahman</CardTitle>
                      <CardDescription className="mb-1">
                        Mahasiswa, Jakarta
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-sm">
                        Saya sangat puas dengan layanan SiHuni. Proses pencarian
                        kosan jadi jauh lebih mudah dan cepat!
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
              <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                <CommandInput
                  placeholder="Bisa cari lokasi, nama kosan, ruko atau gudang..."
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                  onFocus={() => setOpen(true)}
                />
                {open && (
                  <CommandList className="absolute top-full left-0 right-0 mt-1 max-h-60 overflow-auto rounded-lg border bg-background shadow-lg z-50">
                    {searchQuery.length < 2 ? (
                      <CommandEmpty>
                        Ketik minimal 2 karakter untuk mulai mencari...
                      </CommandEmpty>
                    ) : loading ? (
                      <CommandEmpty>Memuat hasil...</CommandEmpty>
                    ) : results.length === 0 ? (
                      <CommandEmpty>
                        Tidak ditemukan hasil untuk &quot;{searchQuery}&quot;
                      </CommandEmpty>
                    ) : (
                      results.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          passHref
                          legacyBehavior
                        >
                          <a
                            className="flex items-center gap-3 px-4 py-2 hover:bg-accent cursor-pointer"
                            onClick={() => {
                              setSearchQuery(item.title);
                              setOpen(false);
                            }}
                          >
                            {item.type === "kosan" && (
                              <House className="w-4 h-4" />
                            )}
                            {item.type === "ruko" && (
                              <Store className="w-4 h-4" />
                            )}
                            {item.type === "gudang" && (
                              <Warehouse className="w-4 h-4" />
                            )}
                            <div>
                              <div className="font-medium">{item.title}</div>
                              <div className="text-xs text-muted-foreground">
                                {item.location}
                              </div>
                            </div>
                          </a>
                        </Link>
                      ))
                    )}
                  </CommandList>
                )}
              </Command>
            </div>
          </div>

          <div
            className="relative w-full rounded-[40px] bg-[#1f1f1d] shadow-[0px_30px_80px_rgba(15,15,15,0.2)] h-[70vh]"
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
          <div className="absolute bottom-0 right-4 z-50">
            <div className="text-end mb-4 max-w-2xs min-h-28">
              <h1 className="text-lg font-bold">{slides[activeIndex].title}</h1>
              <p>{slides[activeIndex].desc1}</p>
              <p>{slides[activeIndex].desc2}</p>
            </div>
            <div className="flex items-center justify-end gap-16">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselDots className="static" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
        </Carousel>
        <div className="relative inset-0 rounded-[40px] bg-linear-to-t from-[#201d17] via-transparent to-transparent" />
      </div>
    </>
  );
}

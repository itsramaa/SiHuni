"use client";

import Link from "next/link";
import { House, Store, User2, Warehouse } from "lucide-react";
import { useEffect, useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SearchFilter } from "./search-filter";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

interface NavbarProps {
  hideOnTopHome?: boolean;
}

export function Navbar({ hideOnTopHome = false }: NavbarProps) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [hidden, setHidden] = useState(hideOnTopHome);
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

  useEffect(() => {
    if (!hideOnTopHome) return;

    const onScroll = () => {
      setHidden(window.scrollY < 500);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideOnTopHome]);

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
    <NavigationMenu
      viewport={isMobile}
      className={`
        z-100 sticky top-0 w-full max-w-7xl flex justify-between items-center
        bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60 py-4
        transition-transform duration-300 px-8 rounded-2xl
        ${hidden && isHome ? "-translate-y-full hidden" : "translate-y-0"}
      `}
    >
      <div className="flex gap-4 items-center">
        <Link href={"/"}>
          <Image
            src="/images/logo-sihuni.png"
            alt="SiHuni Logo"
            width={96}
            height={96}
          />
        </Link>
        <NavigationMenuList className="flex-wrap">
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
      </div>
      <div className="flex items-center gap-4">
        <SearchFilter
          aria-label="Cari hunian, lokasi, kosan, ruko, atau gudang"
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          open={open}
          onOpenChange={setOpen}
          loading={loading}
          searchResults={results}
        />
        <Button size="sm">
          <Link href="/login" className="flex gap-2">
            <User2 /> Masuk
          </Link>
        </Button>
      </div>
    </NavigationMenu>
  );
}

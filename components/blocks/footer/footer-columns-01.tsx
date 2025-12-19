"use client";

import { Github, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Shield, Clock, Award, CreditCard, Building, Home, Warehouse, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const PROPERTY_CATEGORIES = [
  {
    title: "Jenis Properti",
    items: [
      { title: "Kosan & Kontrakan", href: "#", icon: Home },
      { title: "Ruko & Toko", href: "#", icon: Building },
      { title: "Gudang & Industri", href: "#", icon: Warehouse },
      { title: "Apartemen", href: "#", icon: Building },
      { title: "Rumah", href: "#", icon: Home },
    ],
  },
];

const SERVICES = [
  {
    title: "Layanan",
    items: [
      { title: "Cari Properti", href: "#" },
      { title: "Jadi Mitra", href: "#" },
      { title: "Pasang Iklan", href: "#" },
      { title: "Panduan Sewa", href: "#" },
      { title: "Kebijakan Privasi", href: "#" },
    ],
  },
];

const SUPPORT = [
  {
    title: "Bantuan",
    items: [
      { title: "Pusat Bantuan", href: "#" },
      { title: "Syarat & Ketentuan", href: "#" },
      { title: "Kebijakan Pengembalian", href: "#" },
      { title: "Kebijakan Privasi", href: "#" },
      { title: "Hubungi Kami", href: "#" },
    ],
  },
];

const CITIES = [
  {
    title: "Kota Populer",
    items: [
      { title: "Jakarta", href: "#" },
      { title: "Bandung", href: "#" },
      { title: "Surabaya", href: "#" },
      { title: "Yogyakarta", href: "#" },
      { title: "Malang", href: "#" },
      { title: "Semarang", href: "#" },
    ],
  },
];

const TRUST_INDICATORS = [
  { icon: Shield, text: "100% Aman" },
  { icon: Clock, text: "24/7 Support" },
  { icon: Award, text: "Terpercaya" },
];

const PAYMENT_METHODS = [
  "Midtrans", "Bank Transfer", "E-Wallet", "Credit Card"
];

const SOCIAL_MEDIA = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

const YEAR = new Date().getFullYear();

export const title = "Sihuni Marketplace Footer";

export default function FooterColumns01() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <div>
                <h6 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Sihuni
                </h6>
                <p className="text-muted-foreground mt-2 text-sm">
                  Platform sewa properti terpercaya di Indonesia. Temukan kosan, ruko, gudang, dan properti lainnya dengan mudah dan aman.
                </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3">
                {TRUST_INDICATORS.map((indicator, index) => {
                  const Icon = indicator.icon;
                  return (
                    <Badge key={index} variant="secondary" className="gap-1">
                      <Icon className="h-3 w-3" />
                      {indicator.text}
                    </Badge>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>support@sihuni.id</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Property Categories */}
          <div>
            {PROPERTY_CATEGORIES.map(({ title, items }) => (
              <div key={title} className="space-y-3">
                <h6 className="font-semibold">{title}</h6>
                <ul className="space-y-2">
                  {items.map(({ title, href, icon: Icon }) => (
                    <li key={title}>
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            {SERVICES.map(({ title, items }) => (
              <div key={title} className="space-y-3">
                <h6 className="font-semibold">{title}</h6>
                <ul className="space-y-2">
                  {items.map(({ title, href }) => (
                    <li key={title}>
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Support */}
          <div>
            {SUPPORT.map(({ title, items }) => (
              <div key={title} className="space-y-3">
                <h6 className="font-semibold">{title}</h6>
                <ul className="space-y-2">
                  {items.map(({ title, href }) => (
                    <li key={title}>
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Popular Cities */}
          <div>
            {CITIES.map(({ title, items }) => (
              <div key={title} className="space-y-3">
                <h6 className="font-semibold">{title}</h6>
                <ul className="space-y-2">
                  {items.map(({ title, href }) => (
                    <li key={title}>
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Payment Methods */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Metode Pembayaran</p>
              <div className="flex flex-wrap gap-2">
                {PAYMENT_METHODS.map((method) => (
                  <Badge key={method} variant="outline" className="text-xs">
                    {method}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground text-end">Ikuti Kami</p>
              <div className="flex gap-2">
                {SOCIAL_MEDIA.map(({ name, icon: Icon, href }) => (
                  <Button
                    key={name}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <a
                      href={href}
                      aria-label={name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Copyright */}
        <div className="py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-muted-foreground text-center text-sm md:text-left">
              &copy; {YEAR} Sihuni. Hak Cipta Dilindungi. Platform sewa properti terpercaya di Indonesia.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                15.000+ Tenant
              </span>
              <span>•</span>
              <span>25% Conversion Rate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
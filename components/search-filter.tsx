"use client";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Command, CommandInput, CommandList, CommandEmpty } from "@/components/ui/command";
import { House, Store, Warehouse } from "lucide-react";
import Link from "next/link";

interface SearchFilterProps {
  mode?: "search" | "filter" | "both";
  onModeChange?: (mode: "search" | "filter" | "both") => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  location?: string;
  onLocationChange?: (location: string) => void;
  priceRange?: [number, number];
  onPriceChange?: (price: [number, number]) => void;
  propertyTypes?: {
    kamar: boolean;
    gudang: boolean;
    property: boolean;
  };
  onPropertyTypesChange?: (types: { kamar: boolean; gudang: boolean; property: boolean }) => void;
  facilities?: {
    wifi: boolean;
    ac: boolean;
    kitchen: boolean;
    parking: boolean;
  };
  onFacilitiesChange?: (facilities: { wifi: boolean; ac: boolean; kitchen: boolean; parking: boolean }) => void;
  searchResults?: Array<{
    id: string;
    title: string;
    location: string;
    href: string;
    type: "kosan" | "ruko" | "gudang";
  }>;
  loading?: boolean;
}

export function SearchFilter({
  mode = "search",
  onModeChange,
  searchQuery = "",
  onSearchChange,
  open = false,
  onOpenChange,
  location = "",
  onLocationChange,
  priceRange = [0, 20000],
  onPriceChange,
  propertyTypes = { kamar: false, gudang: false, property: false },
  onPropertyTypesChange,
  facilities = { wifi: false, ac: false, kitchen: false, parking: false },
  onFacilitiesChange,
  searchResults = [],
  loading = false,
}: SearchFilterProps) {
  const handleSearchChange = (value: string) => {
    onSearchChange?.(value);
    onOpenChange?.(value.length >= 2);
  };

  const handleTypeChange = (type: keyof typeof propertyTypes) => {
    const updated = { ...propertyTypes, [type]: !propertyTypes[type] };
    onPropertyTypesChange?.(updated);
  };

  const handleFacilityChange = (facility: keyof typeof facilities) => {
    const updated = { ...facilities, [facility]: !facilities[facility] };
    onFacilitiesChange?.(updated);
  };

  const handlePriceChange = (value: [number, number]) => {
    onPriceChange?.(value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLocationChange?.(e.target.value);
  };

  return (
    <>
      {(mode === "search" || mode === "both") && (
        <div className="">
          <Command
            className="w-full rounded-xl border shadow-lg ring-2 ring-background/50"
            aria-label="Cari hunian, lokasi, kosan, ruko, atau gudang"
          >
            <CommandInput
              id="search-input"
              role="combobox"
              aria-expanded={open}
              aria-haspopup="listbox"
              aria-autocomplete="list"
              aria-controls="search-list"
              aria-label="Masukkan kata kunci pencarian"
              placeholder="Cari kosan, ruko, gudang, atau lokasi..."
              value={searchQuery}
              onValueChange={handleSearchChange}
              onFocus={() => onOpenChange?.(searchQuery.length >= 2)}
              className="h-12 text-base placeholder:text-muted-foreground/80"
            />
            {open && (
              <CommandList
                id="search-list"
                role="listbox"
                className="absolute top-full left-0 right-0 mt-1 max-h-60 overflow-auto rounded-lg border bg-background shadow-lg z-50"
              >
                {searchQuery.length < 2 ? (
                  <CommandEmpty role="presentation">
                    Ketik minimal 2 karakter untuk mulai mencari...
                  </CommandEmpty>
                ) : loading ? (
                  <CommandEmpty role="presentation">
                    Memuat hasil...
                  </CommandEmpty>
                ) : searchResults.length === 0 ? (
                  <CommandEmpty role="presentation">
                    Tidak ditemukan hasil untuk &quot;{searchQuery}&quot;
                  </CommandEmpty>
                ) : (
                  searchResults.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      passHref
                      legacyBehavior
                    >
                      <a
                        role="option"
                        aria-selected={false}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-accent cursor-pointer focus:bg-accent focus:outline-none"
                        onClick={() => {
                          onSearchChange?.(item.title);
                          onOpenChange?.(false);
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
      )}

      {(mode === "filter" || mode === "both") && (
        <>
          <h3 className="font-semibold mb-4">Filter</h3>
          
          {/* Location */}
          <div className="mb-6">
            <Label htmlFor="location">Lokasi</Label>
            <Input
              id="location"
              placeholder="Kota, area, atau alamat"
              value={location}
              onChange={handleLocationChange}
            />
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <Label>Harga per bulan (Rp juta)</Label>
            <Slider
              min={0}
              max={20000}
              step={100}
              value={priceRange}
              onValueChange={handlePriceChange}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>0</span>
              <span>{(priceRange[1] / 1000).toFixed(1)} jt</span>
            </div>
          </div>

          {/* Property Type */}
          <Accordion type="single" collapsible className="mb-6">
            <AccordionItem value="property-type">
              <AccordionTrigger>Tipe Properti</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="kamar"
                      checked={propertyTypes.kamar}
                      onCheckedChange={() => handleTypeChange("kamar")}
                    />
                    <Label htmlFor="kamar">Kamar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="gudang"
                      checked={propertyTypes.gudang}
                      onCheckedChange={() => handleTypeChange("gudang")}
                    />
                    <Label htmlFor="gudang">Gudang</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="property"
                      checked={propertyTypes.property}
                      onCheckedChange={() => handleTypeChange("property")}
                    />
                    <Label htmlFor="property">Properti Lengkap</Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Facilities */}
          <Accordion type="single" collapsible>
            <AccordionItem value="facilities">
              <AccordionTrigger>Fasilitas</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="wifi"
                      checked={facilities.wifi}
                      onCheckedChange={() => handleFacilityChange("wifi")}
                    />
                    <Label htmlFor="wifi">WiFi</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ac"
                      checked={facilities.ac}
                      onCheckedChange={() => handleFacilityChange("ac")}
                    />
                    <Label htmlFor="ac">AC</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="kitchen"
                      checked={facilities.kitchen}
                      onCheckedChange={() => handleFacilityChange("kitchen")}
                    />
                    <Label htmlFor="kitchen">Dapur</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="parking"
                      checked={facilities.parking}
                      onCheckedChange={() => handleFacilityChange("parking")}
                    />
                    <Label htmlFor="parking">Parkir</Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      )}
    </>
  );
}
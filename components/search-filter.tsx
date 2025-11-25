"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

interface SearchFilterProps {
  onFilterChange?: (filters: unknown) => void;
}

export function SearchFilter({ onFilterChange }: SearchFilterProps) {
  // Location
  const [location, setLocation] = useState("");
  
  // Price range (in 1000s)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  
  // Property types
  const [propertyTypes, setPropertyTypes] = useState({
    kamar: false,
    gudang: false,
    property: false,
  });
  
  // Facilities
  const [facilities, setFacilities] = useState({
    wifi: false,
    ac: false,
    kitchen: false,
    parking: false,
  });

  const handleTypeChange = (type: keyof typeof propertyTypes) => {
    const updated = { ...propertyTypes, [type]: !propertyTypes[type] };
    setPropertyTypes(updated);
    onFilterChange?.({ location, priceRange, propertyTypes: updated, facilities });
  };

  const handleFacilityChange = (facility: keyof typeof facilities) => {
    const updated = { ...facilities, [facility]: !facilities[facility] };
    setFacilities(updated);
    onFilterChange?.({ location, priceRange, propertyTypes, facilities: updated });
  };

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
    onFilterChange?.({ location, priceRange: value, propertyTypes, facilities });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocation(value);
    onFilterChange?.({ location: value, priceRange, propertyTypes, facilities });
  };

  return (
    <div className="w-64 p-4 border rounded-lg">
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
    </div>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface SearchFilterProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  propertyType: string[];
  priceRange: [number, number];
  categories: string[];
  facilities: string[];
  location: string;
}

export function SearchFilter({ onFilterChange }: SearchFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    propertyType: [],
    priceRange: [0, 20],
    categories: [],
    facilities: [],
    location: "",
  });

  const propertyTypes = [
    { id: "kosan", label: "Kosan" },
    { id: "ruko", label: "Ruko" },
    { id: "gudang", label: "Gudang" },
  ];

  const categories = [
    { id: "campur", label: "Campur" },
    { id: "wanita", label: "Wanita" },
    { id: "pria", label: "Pria" },
    { id: "ac", label: "Ber-AC" },
    { id: "wifi", label: "WiFi" },
    { id: "km-dalam", label: "KM Dalam" },
  ];

  const facilities = [
    { id: "parkir", label: "Parkir" },
    { id: "security", label: "Security" },
    { id: "laundry", label: "Laundry" },
    { id: "dapur", label: "Dapur" },
    { id: "tv", label: "TV" },
    { id: "kulkas", label: "Kulkas" },
  ];

  const handlePropertyTypeChange = (type: string) => {
    const newTypes = filters.propertyType.includes(type)
      ? filters.propertyType.filter(t => t !== type)
      : [...filters.propertyType, type];
    
    const newFilters = { ...filters, propertyType: newTypes };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleFacilityChange = (facility: string) => {
    const newFacilities = filters.facilities.includes(facility)
      ? filters.facilities.filter(f => f !== facility)
      : [...filters.facilities, facility];
    
    const newFilters = { ...filters, facilities: newFacilities };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handlePriceRangeChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: [value[0], value[1]] as [number, number] };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearAllFilters = () => {
    const newFilters: FilterState = {
      propertyType: [],
      priceRange: [0, 20],
      categories: [],
      facilities: [],
      location: "",
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <Card className="sticky top-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filter</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-xs"
          >
            Hapus Semua
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Property Type */}
        <div>
          <h3 className="font-medium mb-3">Jenis Properti</h3>
          <div className="space-y-2">
            {propertyTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={filters.propertyType.includes(type.id)}
                  onCheckedChange={() => handlePropertyTypeChange(type.id)}
                />
                <Label htmlFor={type.id} className="text-sm font-normal">
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-medium mb-3">Rentang Harga</h3>
          <div className="space-y-3">
            <Slider
              defaultValue={[0, 20]}
              max={20}
              step={1}
              value={filters.priceRange}
              onValueChange={handlePriceRangeChange}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Rp 0 jt</span>
              <span>Rp {filters.priceRange[1]} jt</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-medium mb-3">Kategori</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={filters.categories.includes(category.id)}
                  onCheckedChange={() => handleCategoryChange(category.id)}
                />
                <Label htmlFor={category.id} className="text-sm font-normal">
                  {category.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="font-medium mb-3">Fasilitas</h3>
          <div className="space-y-2">
            {facilities.map((facility) => (
              <div key={facility.id} className="flex items-center space-x-2">
                <Checkbox
                  id={facility.id}
                  checked={filters.facilities.includes(facility.id)}
                  onCheckedChange={() => handleFacilityChange(facility.id)}
                />
                <Label htmlFor={facility.id} className="text-sm font-normal">
                  {facility.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <Button className="w-full" onClick={() => onFilterChange?.(filters)}>
          Terapkan Filter
        </Button>
      </CardContent>
    </Card>
  );
}
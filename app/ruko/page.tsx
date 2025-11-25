"use client";
import { useState } from "react";
import { SearchFilter } from "@/components/search-filter";
import { ListingCard } from "@/components/listing-card";

const dummyRukoListings = [
  {
    id: "ruko-1",
    name: "Ruko Strategis di Pusat Bisnis",
    type: "Ruko",
    categories: ["Ruko Komersial", "Strategis"],
    price: "Rp 25.000.000",
    city: "Jakarta Barat",
    district: "Grogol",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop",
    rating: 4.8
  },
  {
    id: "ruko-2",
    name: "Ruko 3 Lantai Modern",
    type: "Ruko",
    categories: ["Modern", "3 Lantai"],
    price: "Rp 35.000.000",
    city: "Jakarta Selatan",
    district: "Pondok Indah",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80&auto=format&fit=crop",
    rating: 4.9
  },
  {
    id: "ruko-3",
    name: "Ruko Corner Elit",
    type: "Ruko",
    categories: ["Corner", "Elit"],
    price: "Rp 45.000.000",
    city: "Jakarta Pusat",
    district: "Thamrin",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop",
    rating: 4.7
  }
];

export default function RukoPage() {
  const [filteredListings, setFilteredListings] = useState(dummyRukoListings);

  const handleFilterChange = (filters: any) => {
    // Filter logic here
    console.log("Filters applied:", filters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Cari Ruko</h1>
        <p className="text-muted-foreground">Temukan ruko ideal untuk bisnis Anda</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <SearchFilter onFilterChange={handleFilterChange} />
        </div>
        
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
          
          {filteredListings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada ruko yang sesuai dengan kriteria Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
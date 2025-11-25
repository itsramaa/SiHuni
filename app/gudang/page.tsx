"use client";
import { useState } from "react";
import { SearchFilter } from "@/components/search-filter";
import { ListingCard } from "@/components/listing-card";

const dummyGudangListings = [
  {
    id: "gudang-1",
    name: "Gudang Strategis Jakarta Timur",
    type: "Gudang",
    categories: ["Gudang Komersial", "Strategis"],
    price: "Rp 15.000.000",
    city: "Jakarta Timur",
    district: "Cakung",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80&auto=format&fit=crop",
    rating: 4.7
  },
  {
    id: "gudang-2",
    name: "Gudang Cold Storage Modern",
    type: "Gudang",
    categories: ["Cold Storage", "Modern"],
    price: "Rp 35.000.000",
    city: "Jakarta Barat",
    district: "Tangerang",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80&auto=format&fit=crop",
    rating: 4.9
  },
  {
    id: "gudang-3",
    name: "Gudang Industri Besar",
    type: "Gudang",
    categories: ["Industri", "Besar"],
    price: "Rp 50.000.000",
    city: "Jakarta Utara",
    district: "Pulogadung",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80&auto=format&fit=crop",
    rating: 4.5
  }
];

export default function GudangPage() {
  const [filteredListings, setFilteredListings] = useState(dummyGudangListings);

  const handleFilterChange = (filters: any) => {
    // Filter logic here
    console.log("Filters applied:", filters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Cari Gudang</h1>
        <p className="text-muted-foreground">Temukan gudang ideal untuk bisnis Anda</p>
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
              <p className="text-muted-foreground">Tidak ada gudang yang sesuai dengan kriteria Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import { SearchFilter } from "@/components/search-filter";
import { ListingCard } from "@/components/listing-card";

const dummyKosanListings = [
  {
    id: "kosan-1",
    name: "Kosan Mawar Indah",
    type: "Kosan",
    categories: ["Campur", "Kosan Murah"],
    price: "Rp 800.000",
    city: "Jakarta",
    district: "Setiabudi",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80&auto=format&fit=crop",
    rating: 4.5
  },
  {
    id: "kosan-2",
    name: "Kosan Putri Exclusive",
    type: "Kosan",
    categories: ["Putri", "Exclusive"],
    price: "Rp 1.200.000",
    city: "Jakarta",
    district: "Menteng",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80&auto=format&fit=crop",
    rating: 4.8
  },
  {
    id: "kosan-3",
    name: "Kosan Cowok Strategis",
    type: "Kosan",
    categories: ["Putra", "Strategis"],
    price: "Rp 900.000",
    city: "Jakarta",
    district: "Thamrin",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0264?w=400&q=80&auto=format&fit=crop",
    rating: 4.3
  }
];

export default function KosanPage() {
  const [filteredListings, setFilteredListings] = useState(dummyKosanListings);

  const handleFilterChange = (filters: any) => {
    // Filter logic here
    console.log("Filters applied:", filters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Cari Kosan</h1>
        <p className="text-muted-foreground">Temukan kosan terbaik untuk kebutuhan Anda</p>
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
              <p className="text-muted-foreground">Tidak ada kosan yang sesuai dengan kriteria Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
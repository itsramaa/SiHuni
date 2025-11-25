import { SearchFilter } from "@/components/search-filter";
import { ListingCard } from "@/components/listing-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const mockListings = [
  {
    id: 1,
    name: "Kosan Mawar Indah",
    type: "Kosan",
    categories: ["Campur", "Kosan Murah"],
    price: "Rp 800.000/bulan",
    city: "Jakarta",
    district: "Setiabudi",
    village: "Menteng Atas",
    nearest: "Stasiun Karet",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80&auto=format&fit=crop",
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 2,
    name: "Kosan Melati Asri",
    type: "Kosan",
    categories: ["Wanita", "Kosan Murah"],
    price: "Rp 900.000/bulan",
    city: "Bandung",
    district: "Coblong",
    village: "Dago",
    nearest: "ITB",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&q=80&auto=format&fit=crop",
    rating: 4.3,
    reviews: 8,
  },
  {
    id: 3,
    name: "Ruko Modern Plaza",
    type: "Ruko",
    categories: ["Strategis", "Ruko Modern"],
    price: "Rp 5.000.000/bulan",
    city: "Surabaya",
    district: "Wonocolo",
    village: "Ketintang",
    nearest: "Universitas Airlangga",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80&auto=format&fit=crop",
    rating: 4.7,
    reviews: 15,
  },
  {
    id: 4,
    name: "Gudang Sentral Logistics",
    type: "Gudang",
    categories: ["Luas", "Strategis"],
    price: "Rp 12.000.000/bulan",
    city: "Tangerang",
    district: "Cikokol",
    village: "Panunggangan",
    nearest: "Bandara Soekarno Hatta",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80&auto=format&fit=crop",
    rating: 4.2,
    reviews: 6,
  },
];

export default function SearchPage() {
  const [listings, setListings] = useState(mockListings);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    // Simulate loading more listings
    const moreListings = mockListings.map(listing => ({
      ...listing,
      id: listing.id + listings.length,
    }));
    setListings([...listings, ...moreListings]);
    
    // Simulate end of results after 2 loads
    if (listings.length >= 8) {
      setHasMore(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <SearchFilter />
          </div>
          
          {/* Listings Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">Hasil Pencarian</h1>
              <p className="text-muted-foreground">{listings.length} properti ditemukan</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {listings.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>
            
            {hasMore && (
              <div className="text-center">
                <Button onClick={loadMore} variant="outline">
                  Muat Lebih Banyak
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
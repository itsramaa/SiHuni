"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SearchFilter } from "@/components/search-filter";
import { House, Store, Warehouse, MapPin, DollarSign } from "lucide-react";

interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  type: "kosan" | "ruko" | "gudang";
  image: string;
  rating: number;
}

export default function PopularPage() {
  const params = useParams();
  const slug = (params?.slug as string)?.replace(/-/g, " ") || "lokasi populer";

  // Dummy data based on slug
  const allListings: Listing[] = [
    {
      id: "1",
      title: "Kosan Putri Hijau Premium",
      location: "Depok, Jawa Barat",
      price: 1500000,
      type: "kosan",
      image: "/images/kosan-1.jpg",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Ruko Margonda Raya",
      location: "Depok, Jawa Barat",
      price: 8500000,
      type: "ruko",
      image: "/images/ruko-1.jpg",
      rating: 4.5,
    },
    {
      id: "3",
      title: "Gudang Sentosa Logistik",
      location: "Bogor, Jawa Barat",
      price: 25000000,
      type: "gudang",
      image: "/images/gudang-1.jpg",
      rating: 4.9,
    },
    {
      id: "4",
      title: "Kosan University View",
      location: "Depok, Jawa Barat",
      price: 1200000,
      type: "kosan",
      image: "/images/kosan-2.jpg",
      rating: 4.7,
    },
    {
      id: "5",
      title: "Ruko Bebas Parkir",
      location: "Bogor, Jawa Barat",
      price: 7200000,
      type: "ruko",
      image: "/images/ruko-2.jpg",
      rating: 4.6,
    },
    {
      id: "6",
      title: "Gudang Industri Modern",
      location: "Depok, Jawa Barat",
      price: 32000000,
      type: "gudang",
      image: "/images/gudang-2.jpg",
      rating: 4.9,
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [propertyTypes, setPropertyTypes] = useState({
    kamar: false,
    gudang: false,
    property: false,
  });
  const [facilities, setFacilities] = useState({
    wifi: false,
    ac: false,
    kitchen: false,
    parking: false,
  });
  const [openSearch, setOpenSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Listing[]>([]);

  // Filter listings
  const filteredListings = allListings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          listing.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !location || listing.location.toLowerCase().includes(location.toLowerCase());
    const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1];
    const matchesType = (!propertyTypes.kamar || listing.type === "kosan") &&
                        (!propertyTypes.gudang || listing.type === "gudang") &&
                        (!propertyTypes.property || listing.type === "ruko");
    return matchesSearch && matchesLocation && matchesPrice && matchesType;
  });

  // Debounced search results
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => {
      const results = allListings
        .filter((item) => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.location.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5);
      setSearchResults(results);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground/70 bg-clip-text text-transparent mb-4">
            Hunian Populer di {slug.charAt(0).toUpperCase() + slug.slice(1)}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Temukan hunian terbaik dengan harga terjangkau dan fasilitas lengkap di area ini.
          </p>
        </div>

        {/* Top Search */}
        <div className="mb-8">
          <SearchFilter
            mode="search"
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            open={openSearch}
            onOpenChange={setOpenSearch}
            searchResults={searchResults.map(r => ({
              id: r.id,
              title: r.title,
              location: r.location,
              href: `/popular/${slug}/${r.id}`,
              type: r.type,
            }))}
            loading={loading}
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-card border rounded-2xl shadow-sm sticky top-8">
              <SearchFilter
                mode="filter"
                location={location}
                onLocationChange={setLocation}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
                propertyTypes={propertyTypes}
                onPropertyTypesChange={setPropertyTypes}
                facilities={facilities}
                onFacilitiesChange={setFacilities}
              />
            </div>
            <div className="hidden lg:block h-32 bg-gradient-to-br from-muted to-transparent rounded-2xl shadow-sm" />
          </div>

          {/* Listings Grid */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="text-sm text-muted-foreground">
                Menampilkan {filteredListings.length} dari {allListings.length} hunian
              </div>
              <Button variant="outline" size="sm" className="px-4">
                Urutkan: Terpopuler
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredListings.length > 0 ? (
                filteredListings.map((listing) => (
                  <Link key={listing.id} href={`/listing/${listing.id}`} className="group">
                    <Card className="group-hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card hover:bg-background h-full">
                      <div className="relative h-48 sm:h-52 overflow-hidden rounded-t-2xl">
                        <Image
                          src={listing.image}
                          alt={listing.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge variant={listing.type === "kosan" ? "default" : listing.type === "ruko" ? "secondary" : "outline"}>
                            {listing.type === "kosan" ? "Kosan" : listing.type === "ruko" ? "Ruko" : "Gudang"}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="p-6 pb-4">
                        <CardTitle className="text-lg font-semibold line-clamp-1 group-hover:text-foreground/90">
                          {listing.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1 text-sm">
                          <MapPin className="w-4 h-4" />
                          {listing.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 pb-6 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-2xl font-bold text-primary">
                          <DollarSign className="w-5 h-5" />
                          {listing.price.toLocaleString("id-ID")}
                          <span className="text-base font-normal text-muted-foreground">/bln</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          ★ {listing.rating}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <House className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Tidak ada hunian ditemukan</h3>
                  <p className="text-muted-foreground mb-6">Coba ubah filter atau kata kunci pencarian</p>
                  <Button variant="outline">Reset Filter</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
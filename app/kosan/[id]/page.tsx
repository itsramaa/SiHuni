"use client";
import { useParams } from "next/navigation";
import { ListingCard } from "@/components/listing-card";
import { KosanDetailSection } from "./components/KosanDetailSection";
import { BookingForm } from "@/components/booking-form";

export default function KosanDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const dummyKosan = {
    id,
    name: "Kosan Mawar Indah",
    price: "Rp 800.000",
    rules: ["Tidak merokok", "Tidak membawa hewan peliharaan"],
    facilities: ["WiFi", "AC", "Dapur"],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ListingCard
        id={dummyKosan.id}
        name={dummyKosan.name}
        type="Kosan"
        categories={["Campur", "Kosan Murah"]}
        price={dummyKosan.price}
        city="Jakarta"
        district="Setiabudi"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80&auto=format&fit=crop"
        rating={4.5}
      />
      <KosanDetailSection
        rules={dummyKosan.rules}
        facilities={dummyKosan.facilities}
      />
      <BookingForm
        listingPrice={dummyKosan.price}
        listingName={dummyKosan.name}
      />
    </div>
  );
}
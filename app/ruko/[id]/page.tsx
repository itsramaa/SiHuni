"use client";
import { useParams } from "next/navigation";
import { ListingCard } from "@/components/listing-card";
import { RukoDetailSection } from "./components/RukoDetailSection";
import { BookingForm } from "@/components/booking-form";

export default function RukoDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const dummyRuko = {
    id,
    name: "Ruko Strategis di Pusat Bisnis",
    price: "Rp 25.000.000",
    specifications: {
      buildingArea: "120 m²",
      landArea: "150 m²",
      floors: "3 Lantai",
      bathrooms: "3 Kamar Mandi"
    },
    facilities: ["Listrik 6600W", "Air PAM", "Parkir Mobil", "Garasi"],
    businessType: ["Toko", "Kantor", "Klinik", "Restoran", "Salon"]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ListingCard
        id={dummyRuko.id}
        name={dummyRuko.name}
        type="Ruko"
        categories={["Ruko Komersial", "Strategis"]}
        price={dummyRuko.price}
        city="Jakarta Barat"
        district="Grogol"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop"
        rating={4.8}
      />
      <RukoDetailSection
        specifications={dummyRuko.specifications}
        facilities={dummyRuko.facilities}
        businessType={dummyRuko.businessType}
      />
      <BookingForm
        listingPrice={dummyRuko.price}
        listingName={dummyRuko.name}
      />
    </div>
  );
}
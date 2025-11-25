"use client";
import { useParams } from "next/navigation";
import { ListingCard } from "@/components/listing-card";
import { GudangDetailSection } from "./components/GudangDetailSection";
import { BookingForm } from "@/components/booking-form";

export default function GudangDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const dummyGudang = {
    id,
    name: "Gudang Strategis Jakarta Timur",
    price: "Rp 15.000.000",
    specifications: {
      area: "500 m²",
      height: "8 meter",
      access: "Truk container",
      security: "24 jam + CCTV"
    },
    facilities: ["Listrik 4400W", "Air", "Parkir Luas", "Akses Tol"]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ListingCard
        id={dummyGudang.id}
        name={dummyGudang.name}
        type="Gudang"
        categories={["Gudang Komersial", "Strategis"]}
        price={dummyGudang.price}
        city="Jakarta Timur"
        district="Cakung"
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80&auto=format&fit=crop"
        rating={4.7}
      />
      <GudangDetailSection
        specifications={dummyGudang.specifications}
        facilities={dummyGudang.facilities}
      />
      <BookingForm
        listingPrice={dummyGudang.price}
        listingName={dummyGudang.name}
      />
    </div>
  );
}
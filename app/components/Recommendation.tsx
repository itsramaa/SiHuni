"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Combobox } from "../../components/combobox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export type Property = {
  name: string;
  type: string;
  categories?: string[];
  price: string;
  city: string;
  district: string;
  village: string;
  nearest: string;
  image: string;
};

export type ComboboxOption = {
  value: string;
  label: string;
};

export type RecommendationProps = {
  title?: string;
  description?: string;
  options?: ComboboxOption[];
  data?: Property[];
};

const Recommendation = ({
  title = "",
  description = "",
  options = [],
  data = [],
}: RecommendationProps) => {
  // Pick initial selection to be first option if exists, otherwise empty string
  const [selectedCity, setSelectedCity] = useState(
    options[0]?.value ?? ""
  );

  // Filter data based on selected city
  const filteredData = useMemo(() => {
    if (!selectedCity) return data;
    // Find label from value to display/compare city correctly
    // We assume value is lowercase (eg: "jakarta"), city is title case ("Jakarta")
    const selectedLabel =
      options.find((opt) => opt.value === selectedCity)?.label ?? "";
    // Filter props with matching city (case-insensitive)
    return data?.filter(
      (item) =>
        item.city &&
        item.city.toLowerCase() === selectedLabel.toLowerCase()
    );
  }, [selectedCity, data, options]);

  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Rekomendasi {title}</h1>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex gap-2">
          <Combobox
            options={options}
            placeholder="Pilih Kota"
            value={selectedCity}
            onChange={setSelectedCity}
          />
          <Link href="#">
            <Button variant="outline">Lihat Semua</Button>
          </Link>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                <Link href={`/hunian/${encodeURIComponent(item.name)}`} className="">
                  <Card className="flex flex-col h-full py-0 border-0">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={`${item.name} image`}
                        width={320}
                        height={160}
                        className="w-full h-40 object-cover rounded-xl"
                      />
                    )}
                    <CardHeader className="px-2 gap-0">
                      <div className="flex flex-wrap gap-1 mb-1">
                        {item.categories?.map((cat, i, arr) => (
                          <span key={i} className="text-xs text-muted-foreground">
                            {cat}
                            {i < arr.length - 1 && " •"}
                          </span>
                        ))}
                      </div>
                      <CardTitle className="text-lg truncate">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {`${item.village}, ${item.district}, ${item.city}`}
                      </CardDescription>
                      {item.nearest && (
                        <CardDescription className="text-xs">
                          Dekat {item.nearest}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="px-2 mb-2 flex flex-col gap-0">
                      <div className="font-semibold text-primary">
                        {item.price}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))
          ) : (
            <div className="w-full flex justify-center items-center p-10 text-muted-foreground text-sm">
              Tidak ada hasil untuk kota ini.
            </div>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Recommendation;

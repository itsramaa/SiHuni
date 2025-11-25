"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Combobox } from "../../components/combobox";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type PopularProperty = {
  type: string;
  city: string;
  total_property: number;
  image: string;
};

export type PopularComboboxOption = {
  value: string;
  label: string;
};

export type PopularProps = {
  title?: string;
  description?: string;
  options?: PopularComboboxOption[];
  data?: PopularProperty[];
};

const Popular = ({
  title = "",
  description = "",
  options = [],
  data = [],
}: PopularProps) => {
  // State for selected option in combobox
  const [selectedOption, setSelectedOption] = useState<string>(
    options.length > 0 ? options[0].value : ""
  );

  // Find the label of the selected option
  const selectedLabel =
    options.find((opt) => opt.value === selectedOption)?.label ?? "";

  return (
    <section className="w-full">
      
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Area Populer</h1>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <Combobox
          options={options}
          value={selectedOption}
          onChange={(val) => setSelectedOption(val)}
          searchEnabled={false}
          placeholder="Pilih Kota"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {data
          ?.filter(
            (item) =>
              !selectedLabel ||
              item.type.toLowerCase().replace(/\s+/g, "-") === selectedOption
          )
          .slice(0, 9)
          .map((item, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(item.city)}`}
              className=""
            >
              <Card className="relative flex flex-col h-32 md:h-40 lg:h-48 justify-end overflow-hidden py-0">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={`${item.city} background`}
                    fill
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                )}
                <div className="z-10 flex flex-col px-2">
                  <CardTitle className="relative text-lg truncate py-0 text-white drop-shadow font-bold">
                    {item.city}
                  </CardTitle>
                  <CardDescription className="relative text-sm truncate pb-2 text-white/70 drop-shadow font-medium">
                    {item.total_property} properti
                  </CardDescription>
                </div>
                <div className="absolute inset-0 bg-black/30 z-0" />
              </Card>
            </Link>
          ))}
        <Link href={`/lihat-semua`} className="">
          <Card className="relative flex flex-col h-32 md:h-40 lg:h-48 justify-center items-center overflow-hidden py-0">
            <Button variant={"link"} size={"lg"}>
              Lihat Semua <ChevronRight />
            </Button>
          </Card>
        </Link>
      </div>
    </section>
  );
};

export default Popular;

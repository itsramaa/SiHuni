"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export type AreaProperty = {
  area: string;
  name: string;
  logo?: string;
  image: string;
};

export type AreaTabOption = {
  value: string;
  label: string;
};

export type AreaProps = {
  title?: string;
  description?: string;
  options?: AreaTabOption[];
  data?: AreaProperty[];
};

const Area = ({
  title = "",
  description = "",
  options = [],
  data = [],
}: AreaProps) => {
  // Default selected tab: first available option value
  const [selectedTab, setSelectedTab] = useState(
    options.length > 0 ? options[0].value : ""
  );

  return (
    <section className="w-full">
      <div className="flex flex-col justify-between items-start mb-4 gap-1">
        <h1 className="text-2xl font-bold">{title || "Area Populer"}</h1>
        <p className="text-sm text-gray-500">{description}</p>
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="min-w-[200px]"
        >
          <TabsList>
            {options.map((option) => (
              <TabsTrigger key={option.value} value={option.value}>
                {option.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        {options.map((option) => (
          <TabsContent
            value={option.value}
            key={option.value}
            className="p-0 m-0"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {data
                ?.filter(
                  (item) =>
                    item.area.toLowerCase().replace(/\s+/g, "-") ===
                    option.value
                )
                .slice(0, 9)
                .map((item, index) => (
                  <Card
                    key={index}
                    className="relative flex flex-col h-32 md:h-40 lg:h-48 justify-center overflow-hidden py-0 border-0"
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={`${item.name} background`}
                        fill
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                      />
                    )}
                    <div className="z-10 flex flex-col px-2">
                      <CardTitle className="relative text-lg text-center truncate py-0 text-white drop-shadow font-bold">
                        {item.name}
                      </CardTitle>
                    </div>
                    <div className="absolute inset-0 bg-black/30 z-0" />
                  </Card>
                ))}
              <Link href={`/lihat-semua`} className="">
                <Card className="relative flex flex-col h-32 md:h-40 lg:h-48 justify-center items-center overflow-hidden py-0 border-0">
                  <Button variant={"link"} size={"lg"}>
                    Lihat Semua <ChevronRight />
                  </Button>
                </Card>
              </Link>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Area;

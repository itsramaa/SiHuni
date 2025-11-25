"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GudangDetailSectionProps {
  specifications: {
    area: string;
    height: string;
    access: string;
    security: string;
  };
  facilities: string[];
}

export function GudangDetailSection({ specifications, facilities }: GudangDetailSectionProps) {
  return (
    <Card className="mb-6">
      <CardTitle>Detail Gudang</CardTitle>
      <CardContent>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Spesifikasi Gudang</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Luas Area</p>
              <p className="font-medium">{specifications.area}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tinggi Plafon</p>
              <p className="font-medium">{specifications.height}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Akses Kendaraan</p>
              <p className="font-medium">{specifications.access}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Keamanan</p>
              <p className="font-medium">{specifications.security}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Fasilitas Gudang</h3>
          <div className="flex flex-wrap gap-2">
            {facilities.map((facility, i) => (
              <Badge key={i}>{facility}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
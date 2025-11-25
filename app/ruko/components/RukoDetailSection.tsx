"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RukoDetailSectionProps {
  specifications: {
    buildingArea: string;
    landArea: string;
    floors: string;
    bathrooms: string;
  };
  facilities: string[];
  businessType: string[];
}

export function RukoDetailSection({ specifications, facilities, businessType }: RukoDetailSectionProps) {
  return (
    <Card className="mb-6">
      <CardTitle>Detail Ruko</CardTitle>
      <CardContent>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Spesifikasi Bangunan</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Luas Bangunan</p>
              <p className="font-medium">{specifications.buildingArea}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Luas Tanah</p>
              <p className="font-medium">{specifications.landArea}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Jumlah Lantai</p>
              <p className="font-medium">{specifications.floors}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Kamar Mandi</p>
              <p className="font-medium">{specifications.bathrooms}</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Cocok untuk Bisnis</h3>
          <div className="flex flex-wrap gap-2">
            {businessType.map((type, i) => (
              <Badge key={i} variant="outline">{type}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Fasilitas Ruko</h3>
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
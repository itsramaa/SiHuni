"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface KosanDetailSectionProps {
  rules: string[];
  facilities: string[];
}

export function KosanDetailSection({ rules, facilities }: KosanDetailSectionProps) {
  return (
    <Card className="mb-6">
      <CardTitle>Kosan Detail</CardTitle>
      <CardContent>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Aturan Kosan</h3>
          <ul className="space-y-1">
            {rules.map((rule, i) => (
              <li key={i} className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">•</Badge>
                {rule}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Fasilitas Kosan</h3>
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ListingCardProps {
  id: number;
  name: string;
  type: string;
  categories: string[];
  price: string;
  city: string;
  district: string;
  village: string;
  nearest: string;
  image: string;
  rating?: number;
  reviews?: number;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
}

export function ListingCard({
  id,
  name,
  type,
  categories,
  price,
  city,
  district,
  village,
  nearest,
  image,
  rating = 0,
  reviews = 0,
  isFavorite = false,
  onToggleFavorite,
}: ListingCardProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite?.(id);
  };

  return (
    <Link href={`/${type.toLowerCase()}/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
              {type}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm hover:bg-white"
            onClick={handleFavoriteClick}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>
        </div>
        
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg line-clamp-2">{name}</CardTitle>
            {rating > 0 && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground flex-shrink-0">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating}</span>
                <span className="text-xs">({reviews})</span>
              </div>
            )}
          </div>
          <CardDescription className="flex items-center gap-1 text-sm">
            <MapPin className="w-3 h-3" />
            <span>{city}, {district}</span>
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-1">
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
          
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">{village}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Dekat: {nearest}
            </p>
          </div>
          
          <div className="pt-3 border-t">
            <p className="text-lg font-bold text-primary">{price}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
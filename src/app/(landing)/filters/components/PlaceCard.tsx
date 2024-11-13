"use client";

import { MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Place } from "@/app/types/place";
import Image from "next/image";


export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link href={`/place/${place.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="relative h-48">
          <Image
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            fill
          />
          <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm">
            {"$".repeat(place.priceLevel)}
          </Badge>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {place.name}
            </h3>
            <div className="flex items-center bg-primary/10 px-2 py-1 rounded-full">
              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400 mr-1" />
              <span className="text-sm font-medium">{place.rating}</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {place.location}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
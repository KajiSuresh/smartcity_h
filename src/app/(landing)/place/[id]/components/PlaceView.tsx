"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Star, Clock, Phone, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { places } from "@/app/data/places";
import Image from "next/image";

export default function PlaceView() {
  const params = useParams();
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);

  const place = places.find(p => p.id.toString() === params.id);

  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <div className="bg-background mt-24">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to results
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
                fill
              />
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400 mr-1" />
                <span className="font-medium">{place.rating}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{place.name}</h1>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {place.location}
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Experience the perfect blend of modern cuisine and cozy atmosphere at {place.name}. 
                    Located in the heart of {place.location}, we offer an unforgettable dining experience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Open 9:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <Link href="#" className="text-primary hover:underline">
                        Visit website
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Make a Reservation</CardTitle>
                <CardDescription>
                  Select a date and time for your visit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border mb-6"
                />
                <Link href={`/place/${place.id}/reserve?date=${date?.toISOString()}`}>
                  <Button className="w-full" disabled={!date}>
                    Continue to Reservation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
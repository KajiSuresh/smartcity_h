
import { places } from "@/app/data/places";
import PlaceView from "./components/PlaceView";

export function generateStaticParams() {
  return places.map((place) => ({
    id: place.id.toString(),
  }));
}

export default function PlacePage() {
  return <PlaceView />;
}
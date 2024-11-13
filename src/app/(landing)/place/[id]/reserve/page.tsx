
import { places } from "@/app/data/places";
import ReservationForm from "./components/ReservationForm";

export function generateStaticParams() {
  return places.map((place) => ({
    id: place.id.toString(),
  }));
}

export default function ReservePage() {
  return <ReservationForm />;
}
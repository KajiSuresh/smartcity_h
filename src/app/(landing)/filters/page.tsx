"use client";

import { useState } from "react";
import SearchHeader from "./components/SearchHeader";
import FilterSidebar from "./components/FilterSidebar";
import PlaceCard from "./components/PlaceCard";
import { places } from "@/app/data/places";


export default function FiltersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(place.category);
    const matchesPrice = place.priceLevel <= priceRange[0] + 1 || priceRange[0] === 0;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className=" bg-background mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <SearchHeader onSearch={setSearchQuery} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <FilterSidebar
                selectedCategories={selectedCategories}
                priceRange={priceRange}
                onCategoryToggle={handleCategoryToggle}
                onPriceRangeChange={setPriceRange}
              />
            </div>
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlaces.map((place) => (
                  <PlaceCard key={place.id} place={place} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
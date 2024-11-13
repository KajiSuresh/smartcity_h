"use client";

import { Utensils, Coffee, Music, Hotel } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const categories = [
  { id: "restaurants", label: "Restaurants", icon: Utensils },
  { id: "cafes", label: "Cafes", icon: Coffee },
  { id: "nightlife", label: "Nightlife", icon: Music },
  { id: "hotels", label: "Hotels", icon: Hotel },
];

interface FilterSidebarProps {
  selectedCategories: string[];
  priceRange: number[];
  onCategoryToggle: (categoryId: string) => void;
  onPriceRangeChange: (value: number[]) => void;
}

export default function FilterSidebar({
  selectedCategories,
  priceRange,
  onCategoryToggle,
  onPriceRangeChange,
}: FilterSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="flex items-center space-x-3">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => onCategoryToggle(category.id)}
                />
                <label
                  htmlFor={category.id}
                  className="flex items-center space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={onPriceRangeChange}
          max={4}
          step={1}
          className="mb-6"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Budget</span>
          <span>Luxury</span>
        </div>
      </div>
    </div>
  );
}
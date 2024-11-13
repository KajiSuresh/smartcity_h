"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchHeader({ onSearch }: { onSearch: (value: string) => void }) {
  return (
    <div className="relative">
      <Input
        placeholder="Search places, areas, or categories..."
        className="w-full h-12 pl-12 pr-4 rounded-lg border border-input bg-background"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
    </div>
  );
}
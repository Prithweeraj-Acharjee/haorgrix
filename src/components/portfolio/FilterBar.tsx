"use client";
import { cn } from "@/lib/utils";

const categories = [
  { label: "All", value: "all" },
  { label: "AI & Data", value: "ai-data" },
  { label: "Software", value: "software" },
  { label: "Design & Growth", value: "design-growth" },
];

interface FilterBarProps {
  active: string;
  onChange: (value: string) => void;
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={cn(
            "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all",
            active === cat.value
              ? "bg-steel text-white shadow-md"
              : "bg-white text-text-primary border border-steel-light hover:border-steel hover:text-steel"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

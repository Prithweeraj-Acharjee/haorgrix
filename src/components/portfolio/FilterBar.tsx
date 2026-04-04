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
    <div className="flex flex-wrap gap-4 justify-center mb-20 relative z-20">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={cn(
            "px-8 py-3 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-500",
            active === cat.value
              ? "bg-white text-art-midnight shadow-[0_0_30px_rgba(255,255,255,0.15)] scale-105"
              : "bg-white/5 border border-white/10 text-white/40 hover:text-white/90 hover:border-white/20 hover:bg-white/10"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

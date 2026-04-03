import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ label, title, description, align = "center", light = false }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4 mb-16", align === "center" && "text-center")}>
      {label && (
        <p className="text-caption font-bold uppercase tracking-[0.4em] text-steel">{label}</p>
      )}
      <h2 className={cn("text-h2", light ? "text-white" : "text-text-primary")}>
        {title}
      </h2>
      {description && (
        <p className={cn("text-body max-w-2xl", align === "center" && "mx-auto", light ? "text-white/70" : "text-text-secondary")}>
          {description}
        </p>
      )}
    </div>
  );
}

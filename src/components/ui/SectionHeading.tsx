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
        <p className="text-xs font-black uppercase tracking-[0.4em] text-sky">{label}</p>
      )}
      <h2 className={cn("text-3xl md:text-4xl font-extrabold tracking-tight", light ? "text-white" : "text-text-primary")}>
        {title}
      </h2>
      {description && (
        <p className={cn("text-base max-w-2xl", align === "center" && "mx-auto", light ? "text-white/70" : "text-text-secondary")}>
          {description}
        </p>
      )}
    </div>
  );
}

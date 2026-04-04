"use client";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/stats";

export default function StatsBar() {
  return (
    <section className="relative bg-art-midnight py-24 md:py-32 overflow-hidden border-y border-white/5">
      {/* Background decoration - Surrealist glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-art-accent/20 to-transparent" />
      </div>

      <div className="max-w-site mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center relative group">
              {i > 0 && <div className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 w-px h-12 bg-white/5" />}
              <div className="text-[42px] md:text-[54px] font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-art-accent/50 mb-2 font-sans tracking-tight group-hover:scale-105 transition-transform duration-500">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[11px] text-white/30 uppercase tracking-[0.4em] font-mono font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { Brain, Code2, TrendingUp, Cloud, Database, Palette } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-7 h-7" />,
  Code2: <Code2 className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  Cloud: <Cloud className="w-7 h-7" />,
  Database: <Database className="w-7 h-7" />,
  Palette: <Palette className="w-7 h-7" />,
};

const gradients = [
  "from-[#4a7a94] to-steel",
  "from-steel to-[#6a9ab5]",
  "from-[#3d6b84] to-steel-dark",
  "from-[#2a5a70] to-steel",
  "from-steel-dark to-[#4a7a94]",
];

export default function Pillars() {
  return (
    <section className="py-28 bg-white relative">
      <div className="max-w-site mx-auto px-6">
        <SectionHeading
          label="What We Do"
          title="Five Pillars of Execution"
          description="We operate at the intersection of AI, full-stack engineering, cloud infrastructure, data intelligence, and premium design."
        />

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.12}>
              <div className="group relative rounded-2xl overflow-hidden h-full">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradients[i]}`} />

                <div className="bg-ice border border-steel-light/50 rounded-2xl p-8 pt-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-steel to-steel-dark text-white flex items-center justify-center mb-6 shadow-lg shadow-steel/20">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-xl font-extrabold text-text-primary mb-2 tracking-tight">{service.title}</h3>
                  <p className="text-xs font-semibold text-steel mb-3 italic">{service.pitch}</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-8">{service.description}</p>

                  <div className="mt-auto space-y-3">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3 text-sm text-text-primary">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky to-steel shrink-0" />
                        {cap}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[calc(66.666%+0.75rem)] mx-auto">
          {services.slice(3).map((service, i) => (
            <FadeIn key={service.title} delay={(i + 3) * 0.12}>
              <div className="group relative rounded-2xl overflow-hidden h-full">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradients[i + 3]}`} />

                <div className="bg-ice border border-steel-light/50 rounded-2xl p-8 pt-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-steel to-steel-dark text-white flex items-center justify-center mb-6 shadow-lg shadow-steel/20">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-xl font-extrabold text-text-primary mb-2 tracking-tight">{service.title}</h3>
                  <p className="text-xs font-semibold text-steel mb-3 italic">{service.pitch}</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-8">{service.description}</p>

                  <div className="mt-auto space-y-3">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3 text-sm text-text-primary">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky to-steel shrink-0" />
                        {cap}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

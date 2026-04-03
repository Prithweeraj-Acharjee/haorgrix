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
  "from-[#4a7a94] to-primary",
  "from-primary to-[#6a9ab5]",
  "from-[#3d6b84] to-primary-dark",
  "from-[#2a5a70] to-primary",
  "from-primary-dark to-[#4a7a94]",
];

export default function Pillars() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-site mx-auto px-6">
        <SectionHeading
          label="What We Do"
          title="Five Pillars of Execution"
          description="We operate at the intersection of AI, full-stack engineering, cloud infrastructure, data intelligence, and rigorous design systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.12}>
              <div className="group relative rounded-2xl overflow-hidden h-full">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradients[i]}`} />

                <div className="bg-neutral-100 border border-neutral-200/50 rounded-2xl p-8 pt-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-h3 text-neutral-800 mb-2">{service.title}</h3>
                  <p className="text-caption text-primary mb-4 italic">{service.pitch}</p>
                  <p className="text-body text-neutral-500 mb-6">{service.description}</p>

                  <div className="mt-auto space-y-3">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-caption text-neutral-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary shrink-0" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-[calc(66.666%+1rem)] mx-auto">
          {services.slice(3).map((service, i) => (
            <FadeIn key={service.title} delay={(i + 3) * 0.12}>
              <div className="group relative rounded-2xl overflow-hidden h-full">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradients[i + 3]}`} />

                <div className="bg-neutral-100 border border-neutral-200/50 rounded-2xl p-8 pt-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-h3 text-neutral-800 mb-2">{service.title}</h3>
                  <p className="text-caption text-primary mb-4 italic">{service.pitch}</p>
                  <p className="text-body text-neutral-500 mb-6">{service.description}</p>

                  <div className="mt-auto space-y-3">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-caption text-neutral-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary shrink-0" />
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

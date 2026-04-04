"use client";
import { Brain, Code2, TrendingUp, Cloud, Database, Palette } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-10 h-10" />,
  Code2: <Code2 className="w-10 h-10" />,
  TrendingUp: <TrendingUp className="w-10 h-10" />,
  Cloud: <Cloud className="w-10 h-10" />,
  Database: <Database className="w-10 h-10" />,
  Palette: <Palette className="w-10 h-10" />,
};

const gradients = [
  "from-[#4a94ba] to-primary",
  "from-primary to-[#5ea9d1]",
  "from-[#356b86] to-primary-dark",
  "from-[#42728f] to-primary",
  "from-primary-dark to-[#4a94ba]",
];

export default function Pillars() {
  return (
    <section className="py-32 md:py-48 bg-art-midnight relative">
      {/* Background Subtle Gradient Blobs for Depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-art-primary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-art-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-site mx-auto px-6 relative z-10">
        <SectionHeading
          label="What We Do"
          title="The Elements of Creation"
          description="We do not just build systems; we sculpt them. These are the fundamental mediums we use to architect world-class digital experiences."
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 gap-y-16 mb-16 px-4 md:px-0 mt-20">
          {services.slice(0, 3).map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.15}>
              <div className="group relative h-full">
                {/* Cubist Underlying Shadow / Offset Layer */}
                <div className={`absolute -inset-2 md:-inset-4 bg-gradient-to-br ${gradients[i]} opacity-10 rounded-[2.5rem] blur-xl group-hover:opacity-30 transition-opacity duration-1000 -z-10 translate-y-4`} />
                <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                {/* Primary Glass Card */}
                <div className="bg-[#141622]/80 backdrop-blur-3xl ring-1 ring-white/5 rounded-[2rem] p-10 hover:ring-white/20 transition-all duration-700 h-full flex flex-col relative z-10 overflow-hidden">
                  
                  {/* Subtle poetic corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl group-hover:bg-art-accent/10 transition-colors duration-1000" />

                  {/* Offset Icon Floating */}
                  <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 ring-1 ring-white/10 text-art-accent flex items-center justify-center mb-10 shadow-2xl shadow-black/50 group-hover:-translate-y-2 group-hover:bg-white/10 transition-all duration-700 backdrop-blur-md">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-[26px] font-medium tracking-tight text-white/90 mb-3 group-hover:text-white transition-colors capitalize font-sans">{service.title}</h3>
                  <p className="text-[13px] text-art-primary/70 font-mono uppercase tracking-[0.2em] mb-6 italic">{service.pitch}</p>
                  
                  <p className="text-[16px] text-white/40 leading-[1.8] font-light mb-10 group-hover:text-white/60 transition-colors duration-700">{service.description}</p>

                  <div className="mt-auto space-y-4 pt-8 border-t border-white/5">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-4 text-body font-light text-white/50 group-hover:text-white/70 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-art-accent/60 shrink-0" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16 md:max-w-[75%] mx-auto">
          {services.slice(3).map((service, i) => (
            <FadeIn key={service.title} delay={(i + 3) * 0.15}>
              <div className="group relative h-full">
                {/* Cubist Underlying Shadow / Offset Layer */}
                <div className={`absolute -inset-2 md:-inset-4 bg-gradient-to-br ${gradients[i + 3]} opacity-10 rounded-[2.5rem] blur-xl group-hover:opacity-30 transition-opacity duration-1000 -z-10 translate-y-4`} />
                <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                <div className="bg-[#141622]/80 backdrop-blur-3xl ring-1 ring-white/5 rounded-[2rem] p-10 hover:ring-white/20 transition-all duration-700 h-full flex flex-col relative z-10 overflow-hidden">
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl group-hover:bg-art-deep/10 transition-colors duration-1000" />

                  <div className="w-16 h-16 rounded-[1.2rem] bg-white/5 ring-1 ring-white/10 text-art-accent flex items-center justify-center mb-10 shadow-2xl shadow-black/50 group-hover:-translate-y-2 group-hover:bg-white/10 transition-all duration-700 backdrop-blur-md">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-[26px] font-medium tracking-tight text-white/90 mb-3 group-hover:text-white transition-colors capitalize font-sans">{service.title}</h3>
                  <p className="text-[13px] text-art-primary/70 font-mono uppercase tracking-[0.2em] mb-6 italic">{service.pitch}</p>
                  
                  <p className="text-[16px] text-white/40 leading-[1.8] font-light mb-10 group-hover:text-white/60 transition-colors duration-700">{service.description}</p>

                  <div className="mt-auto space-y-4 pt-8 border-t border-white/5">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-4 text-body font-light text-white/50 group-hover:text-white/70 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-art-accent/60 shrink-0" />
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

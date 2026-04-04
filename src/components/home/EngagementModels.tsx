"use client";
import { Rocket, Users, Database } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

const models = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "End-to-End Project Delivery",
    description: "Fixed scope, full ownership. We handle everything from initial strategy to final deployment for a defined project requirement.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Engineering Teams",
    description: "Your outsourced CTO and engineering department on a monthly retainer, continually iterating and scaling your existing products.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data & API Licensing",
    description: "Access our proprietary scraped datasets, retail analytics, or B2B lead generation engines via secure API access. No software build required.",
  },
];

export default function EngagementModels() {
  return (
    <section className="py-32 md:py-48 bg-art-midnight relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-art-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 relative z-10">
        <SectionHeading
          label="Work With Us"
          title="Engagement Models"
          description="Flexible partnership structures tailored to your operational tempo and goals."
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, i) => (
            <FadeIn key={model.title} delay={i * 0.15}>
              <div className="group relative bg-[#141622]/40 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-12 border border-white/5 hover:border-white/20 transition-all duration-700 h-full flex flex-col shadow-2xl shadow-black/40 hover:-translate-y-4 hover:shadow-art-accent/10">
                {/* Luminous Glow Behind Icon */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-art-accent/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

                <div className="w-16 h-16 rounded-[1.2rem] bg-white/5 ring-1 ring-white/10 text-art-accent flex items-center justify-center mb-10 shadow-2xl shadow-black/50 group-hover:-translate-y-3 group-hover:bg-white/10 transition-all duration-1000 group-hover:scale-110 group-hover:shadow-art-accent/20">
                  <div className="animate-[pulse_4s_ease-in-out_infinite]">
                    {model.icon}
                  </div>
                </div>

                <h3 className="text-[26px] font-medium text-white/90 mb-5 group-hover:text-white transition-colors font-sans tracking-tight">{model.title}</h3>
                <p className="text-[16px] text-white/40 leading-relaxed font-light mb-10">{model.description}</p>
                
                {/* Micro-interaction indicator */}
                <div className="mt-auto flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.3em] text-white/20 group-hover:text-art-accent transition-colors duration-500">
                  <div className="h-[1px] w-8 bg-white/10 group-hover:w-12 group-hover:bg-art-accent transition-all duration-500" />
                  <span>Explore Model</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

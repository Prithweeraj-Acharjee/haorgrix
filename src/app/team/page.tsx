"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AmbientCanvas from "@/components/ui/AmbientCanvas";
import { teamMembers } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="bg-art-midnight min-h-screen relative overflow-hidden">
      {/* Physics-Based Ambient Flow Field */}
      <AmbientCanvas />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        {/* Surrealist background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-art-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-art-accent/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-site mx-auto px-6 text-center">
          <FadeIn>
            <div className="mb-12">
              <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 shadow-[0_0_30px_rgba(130,202,235,0.1)]">
                <div className="w-2.5 h-2.5 rounded-full bg-art-accent animate-[pulse_2s_ease-in-out_infinite]" />
                <span className="text-[12px] text-white font-sans uppercase tracking-[0.4em] font-medium">The Founding Squad</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-[48px] md:text-[84px] font-medium text-white leading-[1.05] tracking-tight mb-8 font-sans">
              The <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-art-accent via-white to-art-primary animate-gradient-x italic pr-6 pb-1">Architects</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-8 text-[18px] md:text-[20px] text-white/40 max-w-2xl mx-auto font-light leading-relaxed tracking-wide mb-12">
              We eliminate the bloated account management layer. You speak directly with the architects,
              design engineers, and QA leads building your product.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex items-center justify-center gap-3 text-white/30">
              <MapPin className="w-4 h-4 text-art-accent" />
              <span className="text-[11px] font-mono uppercase tracking-[0.3em]">Dhaka, Bangladesh — 23.8103° N, 90.4125° E</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 sm:py-32 relative z-10">
        <div className="max-w-site mx-auto px-6">
          <SectionHeading
            label="Our People"
            title="Guided by Specialists"
            description="An elite unit of cross-disciplinary experts in Systems Architecture, Product Marketing, Creative Engineering, AI QA, and Data Acquisition."
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.15}>
                <div className="group relative bg-[#141622]/40 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 h-full flex flex-col shadow-2xl shadow-black/40 hover:-translate-y-4 hover:shadow-art-accent/10 pb-4">
                  {/* Interactive Top Accent Stripe */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${member.gradient} opacity-40 group-hover:opacity-100 group-hover:animate-gradient-x transition-all duration-700`} />

                  <div className="p-8 sm:p-10 flex flex-col items-center text-center">
                    {/* Square photo with glow */}
                    <div className="relative w-full h-[320px] bg-white/5 rounded-[2rem] overflow-hidden mb-10 group-hover:shadow-2xl group-hover:shadow-art-accent/10 transition-all duration-700">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-[28px] font-medium text-white/90 tracking-tight group-hover:text-white transition-colors font-sans">{member.name}</h3>
                    <p className="text-[14px] text-art-accent font-mono uppercase tracking-[0.2em] mt-2 mb-6">{member.shortRole}</p>

                    {/* Bio */}
                    <p className="text-[15px] sm:text-[16px] text-white/40 font-light leading-relaxed mb-8 h-24 overflow-hidden group-hover:text-white/60 transition-colors duration-700">{member.bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                      {member.skills.map((skill) => (
                        <span key={skill} className="text-[10px] font-mono text-white/30 bg-white/5 border border-white/5 px-4 py-2 rounded-full uppercase tracking-wider group-hover:border-art-accent/30 group-hover:text-art-accent/80 transition-all duration-500 hover:-translate-y-0.5">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Focus */}
                    <div className="pt-8 border-t border-white/5 w-full mt-auto">
                      <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/30 mb-4">Core Competency</p>
                      <div className="space-y-3">
                        {member.focus.map((f) => (
                          <div key={f} className="flex items-center justify-center gap-3 text-[14px] text-white/60 font-light group-hover:text-white/80 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-art-accent/40 shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="max-w-site mx-auto px-6 relative z-10">
          <SectionHeading
            label="Our Philosophy"
            title="Engineering-First. Visually Stunning."
            description="We build with tomorrow's data realities in mind. Intelligence is integrated, never bolted on."
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                label: "No Compromise",
                desc: "Beautiful design backed by impenetrable architecture. We never sacrifice logic for aesthetics.",
                gradient: "from-[#4A94BA] to-[#82CAEB]"
              },
              {
                label: "AI-Native",
                desc: "Every system is built to scale with machine intelligence. Data is our core medium.",
                gradient: "from-art-accent to-art-primary"
              },
              {
                label: "Architect Access",
                desc: "No account managers. Direct line to the founding engineers building your world-class product.",
                gradient: "from-art-primary to-[#4A94BA]"
              },
            ].map((v, i) => (
              <FadeIn key={v.label} delay={i * 0.15}>
                <div className="group relative bg-[#141622]/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-10 h-full transition-all duration-700 shadow-2xl hover:-translate-y-4 hover:border-white/20 hover:shadow-art-accent/10 overflow-hidden">
                  {/* Micro Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${v.gradient} opacity-20 group-hover:opacity-100 group-hover:animate-gradient-x transition-all duration-700`} />
                  
                  <h3 className="text-[22px] font-medium text-white mb-4 group-hover:text-art-accent transition-colors font-sans">{v.label}</h3>
                  <p className="text-[16px] text-white/40 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-700">{v.desc}</p>

                  <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-art-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 relative overflow-hidden">
        <div className="max-w-site mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 mb-12">
              <div className="w-2.5 h-2.5 rounded-full bg-art-accent animate-pulse" />
              <span className="text-[12px] text-white font-sans uppercase tracking-[0.4em] font-medium">Next Steps</span>
            </div>
            
            <h2 className="text-[48px] md:text-[64px] font-medium text-white mb-8 font-sans leading-tight">
              Ready to <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-art-accent to-white animate-gradient-x pr-6 pb-1">Collaborate?</span>
            </h2>
            
            <p className="text-[18px] text-white/40 max-w-xl mx-auto mb-16 font-light leading-relaxed">
              Stop managing scattered contractors. Get direct access to our core founding engineering team.
            </p>
            
            <div className="flex flex-wrap gap-8 justify-center">
              <Button href="/contact" size="lg" className="bg-white text-art-midnight hover:bg-art-accent border-0 px-12 py-5 text-[14px] font-bold tracking-[0.2em] transition-all duration-500 shadow-2xl shadow-white/5">
                Book a Direct Call
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg" className="bg-transparent border-white/10 text-white hover:bg-white/5 px-12 py-5 text-[14px] font-light tracking-[0.2em] transition-all duration-500">
                View Our Portfolio <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

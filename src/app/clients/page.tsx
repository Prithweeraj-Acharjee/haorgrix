"use client";

import { MapPin, ExternalLink, FileText, Mail, Phone, Scale, DollarSign } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AmbientCanvas from "@/components/ui/AmbientCanvas";
import { clients } from "@/data/clients";

export default function ClientsPage() {
  return (
    <div className="bg-art-midnight min-h-screen relative overflow-hidden">
      {/* Physics-Based Ambient Flow Field */}
      <AmbientCanvas />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-art-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-art-accent/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-site mx-auto px-6 text-center">
          <FadeIn>
            <div className="mb-12">
              <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 shadow-[0_0_30px_rgba(130,202,235,0.1)]">
                <div className="w-2.5 h-2.5 rounded-full bg-art-accent animate-[pulse_2s_ease-in-out_infinite]" />
                <span className="text-[12px] text-white font-sans uppercase tracking-[0.4em] font-medium">Trusted Partners</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-[48px] md:text-[84px] font-medium text-white leading-[1.05] tracking-tight mb-8 font-sans">
              Our <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-art-accent via-white to-art-primary animate-gradient-x italic pr-4 pb-1">Clients</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-8 text-[18px] md:text-[20px] text-white/40 max-w-3xl mx-auto font-light leading-relaxed tracking-wide mb-12">
              We partner with forward-thinking organizations across industries to deliver
              technology solutions that drive real business outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Clients List */}
      <section className="py-24 md:py-32">
        <div className="max-w-site mx-auto px-6">
          <SectionHeading
            label="Active Partners"
            title="Organizations We Work With"
            description="Each partnership is built on trust, transparency, and a shared commitment to excellence."
            light={true}
          />

          <div className="space-y-12">
            {clients.map((client, i) => (
              <FadeIn key={client.slug} delay={i * 0.15}>
                <div className="group relative bg-[#141622]/40 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 shadow-2xl shadow-black/40 hover:-translate-y-4 hover:shadow-art-accent/10">
                  {/* Interactive Top Accent Stripe */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${client.gradient} opacity-40 group-hover:opacity-100 group-hover:animate-gradient-x transition-all duration-700`} />

                  <div className="p-8 sm:p-12 md:p-16">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16">
                      <div className="flex flex-col md:flex-row md:items-center gap-8 flex-1">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center shadow-2xl shadow-black/50 shrink-0 group-hover:scale-110 transition-transform duration-700`}>
                          <span className="text-[28px] font-bold text-white/90">{client.initial}</span>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-[32px] md:text-[42px] font-medium text-white/90 tracking-tight font-sans mb-3">
                            {client.name}
                          </h2>
                          <div className="flex items-center gap-3 text-[14px] text-white/30 font-light tracking-wide font-mono">
                            <MapPin className="w-4 h-4 text-art-accent/60" />
                            {client.location}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <div className="inline-flex items-center px-6 py-4 rounded-full bg-white/5 border border-white/10 text-art-accent text-[11px] font-mono font-medium uppercase tracking-[0.2em] h-[52px]">
                          {client.industry}
                        </div>
                        
                        <a
                          href={client.profilePdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white/90 text-[12px] font-bold tracking-[0.25em] uppercase hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-xl h-[52px]"
                        >
                          <FileText className="w-5 h-5 text-art-accent" />
                          Company Profile
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[17px] text-white/50 leading-relaxed font-light mb-12 max-w-4xl tracking-wide">
                      {client.description}
                    </p>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/5 group-hover:border-white/10 transition-all duration-700">
                        <div className="flex items-center gap-3 mb-6">
                          <Scale className="w-5 h-5 text-art-accent" />
                          <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-white/40">Legal Advisory Services</h3>
                        </div>
                        <div className="space-y-3">
                          {client.services.slice(0, 6).map((s) => (
                            <div key={s} className="flex items-center gap-3 text-[15px] text-white/60 font-light">
                              <div className="w-1.5 h-1.5 rounded-full bg-art-accent/40 shrink-0" />
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/5 group-hover:border-white/10 transition-all duration-700">
                        <div className="flex items-center gap-3 mb-6">
                          <DollarSign className="w-5 h-5 text-art-accent" />
                          <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-white/40">Financial Advisory Services</h3>
                        </div>
                        <div className="space-y-3">
                          {client.services.slice(6).map((s) => (
                            <div key={s} className="flex items-center gap-3 text-[15px] text-white/60 font-light">
                              <div className="w-1.5 h-1.5 rounded-full bg-art-accent/40 shrink-0" />
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact row */}
                    <div className="pt-10 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4 items-center">
                      {client.website && (
                        <a
                          href={client.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2.5 text-[13px] font-mono text-white/40 hover:text-white transition-colors duration-500"
                        >
                          <ExternalLink className="w-4 h-4 text-art-accent/60 group-hover/link:text-art-accent transition-colors" />
                          {client.website.replace("https://www.", "")}
                        </a>
                      )}
                      {client.contact?.email && (
                        <a
                          href={`mailto:${client.contact.email}`}
                          className="group/link inline-flex items-center gap-2.5 text-[13px] font-mono text-white/40 hover:text-white transition-colors duration-500"
                        >
                          <Mail className="w-4 h-4 text-art-accent/60 group-hover/link:text-art-accent transition-colors" />
                          {client.contact.email}
                        </a>
                      )}
                      {client.contact?.phone?.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/[\s-]/g, "")}`}
                          className="group/link inline-flex items-center gap-2.5 text-[13px] font-mono text-white/40 hover:text-white transition-colors duration-500"
                        >
                          <Phone className="w-4 h-4 text-art-accent/60 group-hover/link:text-art-accent transition-colors" />
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
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
              Ready to <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-art-accent to-white animate-gradient-x pr-4">Scale?</span>
            </h2>
            
            <p className="text-[18px] text-white/40 max-w-xl mx-auto mb-16 font-light leading-relaxed">
              Let&apos;s discuss how Haorgrix can build, automate, and scale your digital infrastructure for a world-class experience.
            </p>
            
            <Button href="/contact" size="lg" className="bg-white text-art-midnight hover:bg-art-accent border-0 px-12 py-5 text-[14px] font-bold tracking-[0.2em] transition-all duration-500 shadow-2xl shadow-white/5">
              Start Your Project
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

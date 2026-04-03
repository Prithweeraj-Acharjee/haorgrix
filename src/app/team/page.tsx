"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { teamMembers } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="bg-ice">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#2a4a5e] via-steel-dark to-steel">
        {/* Grid background */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="teamGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(169,224,246,0.1)" strokeWidth="0.8" />
              </pattern>
              <radialGradient id="teamGridFade" cx="50%" cy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="70%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="teamGridMask">
                <rect width="100%" height="100%" fill="url(#teamGridFade)" />
              </mask>
            </defs>
            <g mask="url(#teamGridMask)">
              <rect width="100%" height="100%" fill="url(#teamGrid)" />
            </g>
          </svg>
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sky/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] bg-[#2a5a70]/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-site mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-sky animate-pulse" />
              <span className="text-xs text-sky/90 font-mono uppercase tracking-wider">The Founding Squad</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-white">
              Architecture
            </span>{" "}
            Team
          </motion.h1>

          <motion.p
            className="mt-5 text-base md:text-lg text-white/45 max-w-2xl mx-auto leading-relaxed font-body"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We eliminate the bloated account management layer. You speak directly with the architects,
            design engineers, and QA leads building your product.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-2 text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-wider">Dhaka, Bangladesh</span>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ice to-transparent" />
      </section>

      {/* Team Grid */}
      <section className="py-24 md:py-28">
        <div className="max-w-site mx-auto px-6">
          <SectionHeading
            label="Our People"
            title="Guided by Specialists"
            description="An elite unit of cross-disciplinary experts in Systems Architecture, Product Marketing, Creative Engineering, AI QA, and Data Acquisition."
          />

          {/* Equal grid — 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden h-full border border-steel-light/50 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`h-1.5 bg-gradient-to-r ${member.gradient}`} />

                  <div className="p-7 flex flex-col items-center text-center">
                    {/* Large square photo */}
                    <div className={`w-full aspect-square bg-gradient-to-br ${member.gradient} p-1 mb-6 rounded-xl shadow-xl shadow-steel/20`}>
                      <div className="w-full h-full rounded-lg overflow-hidden">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-xl font-extrabold text-text-primary tracking-tight">{member.name}</h3>
                    <p className="text-xs font-semibold text-steel mt-1 mb-4">{member.shortRole}</p>

                    {/* Bio */}
                    <p className="text-sm text-text-secondary leading-relaxed mb-5 font-body">{member.bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                      {member.skills.map((skill) => (
                        <span key={skill} className="text-[11px] font-medium text-text-primary bg-ice border border-steel-light/60 px-2.5 py-1 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Focus */}
                    <div className="pt-4 border-t border-steel-light/50 w-full">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-text-secondary mb-2">Key Focus</p>
                      <div className="space-y-1.5">
                        {member.focus.map((f) => (
                          <div key={f} className="flex items-center justify-center gap-2 text-sm text-text-primary">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky to-steel shrink-0" />
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

      {/* Values Strip */}
      <section className="py-20 bg-gradient-to-br from-[#2a4a5e] via-steel-dark to-steel relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="valuesGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(169,224,246,0.08)" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#valuesGrid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-sky mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Engineering-First. Visually Stunning.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                label: "No Compromise",
                desc: "Beautiful design backed by impenetrable architecture. We never sacrifice one for the other.",
              },
              {
                label: "AI-Native",
                desc: "We build with tomorrow's data realities in mind. Intelligence is integrated, never bolted on.",
              },
              {
                label: "Premium Partnership",
                desc: "We act as your external CTO and Product team. Direct access to the architects building your product.",
              },
            ].map((v, i) => (
              <FadeIn key={v.label} delay={i * 0.12}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 h-full">
                  <h3 className="text-base font-bold text-white mb-2">{v.label}</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-body">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-sky mb-4">Ready?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-4">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel to-sky">Great</span>
            </h2>
            <p className="text-base text-text-secondary max-w-xl mx-auto mb-10 font-body">
              Stop managing scattered contractors. Get direct access to our founding engineering team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" size="lg">
                Book a Discovery Call
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                <span className="flex items-center gap-2">
                  View Our Work <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

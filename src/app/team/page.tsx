"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { teamMembers } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-neutral-900">
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
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] bg-primary/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-site mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-caption text-accent/90 font-mono uppercase tracking-wider">The Founding Squad</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-h1 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              Architecture
            </span>{" "}
            Team
          </motion.h1>

          <motion.p
            className="mt-4 text-body text-white/45 max-w-2xl mx-auto font-body px-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We eliminate the bloated account management layer. You speak directly with the architects,
            design engineers, and QA leads building your product.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-2 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-caption font-mono uppercase tracking-wider">Dhaka, Bangladesh</span>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-neutral-50 to-transparent" />
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-24 md:py-28">
        <div className="max-w-site mx-auto px-6">
          <SectionHeading
            label="Our People"
            title="Guided by Specialists"
            description="An elite unit of cross-disciplinary experts in Systems Architecture, Product Marketing, Creative Engineering, AI QA, and Data Acquisition."
          />

          {/* Equal grid — 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden h-full border border-neutral-200/50 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`h-1.5 bg-gradient-to-r ${member.gradient}`} />

                  <div className="p-6 flex flex-col items-center text-center">
                    {/* Large square photo */}
                    <div className="w-full h-[240px] sm:h-[280px] bg-neutral-100 rounded-xl overflow-hidden mb-5 sm:mb-6 shadow-lg shadow-primary/10">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-h3 text-neutral-800 tracking-tight">{member.name}</h3>
                    <p className="text-caption text-primary mt-1 mb-4">{member.shortRole}</p>

                    {/* Bio */}
                    <p className="text-body text-neutral-500 mb-5">{member.bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                      {member.skills.map((skill) => (
                        <span key={skill} className="text-caption font-medium text-neutral-800 bg-neutral-100 border border-neutral-200/50 px-2.5 py-1 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Focus */}
                    <div className="pt-4 border-t border-neutral-200/50 w-full">
                      <p className="text-caption font-mono uppercase tracking-wider text-neutral-500 mb-2">Key Focus</p>
                      <div className="space-y-1.5">
                        {member.focus.map((f) => (
                          <div key={f} className="flex items-center justify-center gap-2 text-body text-neutral-800">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary shrink-0" />
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
      <section className="py-14 sm:py-20 bg-neutral-900 relative overflow-hidden">
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
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-caption font-bold uppercase tracking-[0.4em] text-accent mb-3 sm:mb-4">Our Philosophy</p>
            <h2 className="text-h2 text-white">
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
                  <h3 className="text-h3 text-white mb-2">{v.label}</h3>
                  <p className="text-body text-white/50">{v.desc}</p>
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
            <p className="text-caption font-bold uppercase tracking-[0.4em] text-accent mb-4">Ready?</p>
            <h2 className="text-h2 text-neutral-900 mb-4">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Great</span>
            </h2>
            <p className="text-body text-neutral-500 max-w-xl mx-auto mb-10">
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

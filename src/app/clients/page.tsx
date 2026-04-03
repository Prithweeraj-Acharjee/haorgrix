"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, FileText, Mail, Phone, Scale, DollarSign } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { clients } from "@/data/clients";

export default function ClientsPage() {
  return (
    <div className="bg-ice">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#2a4a5e] via-steel-dark to-steel">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="clientsGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(169,224,246,0.1)" strokeWidth="0.8" />
              </pattern>
              <radialGradient id="clientsGridFade" cx="50%" cy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="70%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="clientsGridMask">
                <rect width="100%" height="100%" fill="url(#clientsGridFade)" />
              </mask>
            </defs>
            <g mask="url(#clientsGridMask)">
              <rect width="100%" height="100%" fill="url(#clientsGrid)" />
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
              <span className="text-xs text-sky/90 font-mono uppercase tracking-wider">Trusted Partners</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-white">
              Clients
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-body px-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We partner with forward-thinking organizations across industries to deliver
            technology solutions that drive real business outcomes.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-ice to-transparent" />
      </section>

      {/* Clients */}
      <section className="py-24 md:py-28">
        <div className="max-w-site mx-auto px-6">
          <SectionHeading
            label="Active Partners"
            title="Organizations We Work With"
            description="Each partnership is built on trust, transparency, and a shared commitment to excellence."
          />

          <div className="space-y-10">
            {clients.map((client, i) => (
              <FadeIn key={client.slug} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-steel-light/50 bg-white hover:shadow-xl transition-all duration-300">
                  {/* Top accent */}
                  <div className={`h-1.5 bg-gradient-to-r ${client.gradient}`} />

                  <div className="p-5 sm:p-8 md:p-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-8">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${client.gradient} flex items-center justify-center shadow-lg shadow-steel/15 shrink-0`}>
                        <span className="text-xl font-extrabold text-white/90">{client.initial}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">{client.name}</h2>
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-steel bg-ice border border-steel-light/60 px-3 py-1 rounded-full w-fit">
                            {client.industry}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-sm text-text-secondary">
                          <MapPin className="w-3.5 h-3.5 text-steel" />
                          {client.location}
                        </div>
                      </div>

                      {/* PDF Download */}
                      <a
                        href={client.profilePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-steel to-[#4a7a94] text-white text-sm font-semibold hover:shadow-lg hover:shadow-steel/20 transition-all duration-200 shrink-0"
                      >
                        <FileText className="w-4 h-4" />
                        Company Profile
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed mb-8 font-body max-w-3xl">
                      {client.description}
                    </p>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-ice/60 rounded-xl p-6 border border-steel-light/30">
                        <div className="flex items-center gap-2 mb-4">
                          <Scale className="w-4 h-4 text-steel" />
                          <h3 className="text-xs font-bold uppercase tracking-wider text-steel">Legal Advisory Services</h3>
                        </div>
                        <div className="space-y-2">
                          {client.services.slice(0, 6).map((s) => (
                            <div key={s} className="flex items-center gap-2 text-sm text-text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky to-steel shrink-0" />
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-ice/60 rounded-xl p-6 border border-steel-light/30">
                        <div className="flex items-center gap-2 mb-4">
                          <DollarSign className="w-4 h-4 text-steel" />
                          <h3 className="text-xs font-bold uppercase tracking-wider text-steel">Financial Advisory Services</h3>
                        </div>
                        <div className="space-y-2">
                          {client.services.slice(6).map((s) => (
                            <div key={s} className="flex items-center gap-2 text-sm text-text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky to-steel shrink-0" />
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact row */}
                    <div className="pt-6 border-t border-steel-light/50 flex flex-wrap gap-4 items-center">
                      {client.website && (
                        <a
                          href={client.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-steel hover:text-steel-dark font-medium transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {client.website.replace("https://www.", "")}
                        </a>
                      )}
                      {client.contact?.email && (
                        <a
                          href={`mailto:${client.contact.email}`}
                          className="inline-flex items-center gap-1.5 text-sm text-steel hover:text-steel-dark font-medium transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          {client.contact.email}
                        </a>
                      )}
                      {client.contact?.phone?.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/[\s-]/g, "")}`}
                          className="inline-flex items-center gap-1.5 text-sm text-steel hover:text-steel-dark font-medium transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
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
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-sky mb-4">Partner With Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-4">
              Ready to Join Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel to-sky">Client Portfolio</span>?
            </h2>
            <p className="text-base text-text-secondary max-w-xl mx-auto mb-10 font-body">
              Let&apos;s discuss how HaorGrix can build, automate, and scale your digital infrastructure.
            </p>
            <Button href="/contact" size="lg">
              Start a Conversation
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

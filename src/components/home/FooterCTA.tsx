"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FooterCTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a3a4e] via-neutral-900 to-primary-dark py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(169,224,246,0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-site mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-caption text-accent/80 font-mono uppercase tracking-wider">Start a Project</span>
          </div>

          <h2 className="text-h1 text-white">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Build?</span>
          </h2>

          <p className="mt-6 text-body text-white/40 max-w-lg mx-auto">
            Whether you need autonomous automation, a scalable high-concurrency platform, or structural application engineering. We build to spec.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button href="/contact" size="lg" className="bg-accent text-neutral-900 border-accent hover:bg-white font-bold">
              Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

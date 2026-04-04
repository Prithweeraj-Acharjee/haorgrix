"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FooterCTA() {
  return (
    <section className="relative bg-art-midnight py-32 md:py-48 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-art-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(74,148,186,0.05),transparent_70%)]" />
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

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Button href="/contact" size="lg" className="bg-art-primary text-white hover:bg-art-accent border-0 shadow-[0_0_30px_rgba(74,148,186,0.2)]">
              Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

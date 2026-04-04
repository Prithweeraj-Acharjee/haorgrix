"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="relative bg-art-midnight py-48 md:py-64 overflow-hidden">
      {/* Decorative Event Horizon Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-art-primary/10 rounded-full blur-[180px] opacity-40 animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(130,202,235,0.08),transparent_50%)]" />
      </div>

      <div className="max-w-site mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated Signature Badge */}
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 mb-12 shadow-[0_0_30px_rgba(74,148,186,0.1)]">
            <div className="w-2.5 h-2.5 rounded-full bg-art-accent animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="text-[12px] text-white font-sans uppercase tracking-[0.4em] font-medium">Connect with Haorgrix</span>
          </div>

          <h2 className="text-[48px] md:text-[84px] font-medium text-white leading-[1.05] tracking-tight mb-10 font-sans">
            Ready to <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-art-accent via-white to-art-primary animate-gradient-x italic pr-6 pb-1">Architect?</span>
          </h2>

          <p className="mt-8 text-[18px] md:text-[20px] text-white/40 max-w-2xl mx-auto font-light leading-relaxed mb-16 tracking-wide">
            Whether you need machine intelligence, a scalable high-concurrency platform, or structural design engineering. We build for the next century.
          </p>

          <div className="flex flex-wrap gap-8 justify-center items-center">
            <Button href="/contact" size="lg" className="group relative bg-white text-art-midnight hover:bg-art-accent hover:text-art-midnight border-0 px-12 py-6 text-[14px] font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_0_50px_rgba(255,255,255,0.15)] overflow-hidden transition-all duration-700">
              <span className="relative z-10 flex items-center">
                Start Your Project <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
              {/* Shimmer element on button */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform" />
            </Button>
            
            <Link href="/team" className="text-[12px] font-mono uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors duration-500">
              Meet the Architects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

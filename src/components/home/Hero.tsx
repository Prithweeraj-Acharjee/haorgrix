"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ArtCanvas from "@/components/ui/ArtCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-art-midnight">
      {/* Physics-Based Flow Field Canvas */}
      <ArtCanvas />

      {/* Giant watermark logo behind everything - softer and warmer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 4, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/images/logo-svg.svg"
            alt=""
            width={1200}
            height={1200}
            className="w-[900px] md:w-[1100px] lg:w-[1300px] h-auto opacity-[0.02] filter drop-shadow-[0_0_40px_rgba(74,148,186,0.2)]"
            priority
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-site mx-auto px-6 w-full pt-20 pb-20 sm:pt-28 sm:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 shadow-[0_0_30px_rgba(74,148,186,0.08)]">
              <div className="w-1.5 h-1.5 rounded-full bg-art-accent animate-[pulse_3s_ease-in-out_infinite]" />
              <span className="text-caption text-white/80 font-mono uppercase tracking-[0.3em]">AI • Software • Data • Growth</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-white text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-h1 block font-bold tracking-tight">Where imagination</span>
            <span className="text-h1 block font-bold tracking-tight -mt-2 md:-mt-3">becomes</span>
            <span className="text-h1 block italic font-medium text-white drop-shadow-[0_0_20px_rgba(130,202,235,0.6)] mt-2 pr-4">
              infrastructure.
            </span>
          </motion.h1>

          <motion.p
            className="mt-12 text-[16px] md:text-[19px] text-white/85 max-w-2xl mx-auto font-body font-medium leading-relaxed tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            We merge machine intelligence, system architecture, and design engineering to craft products that are not only powerful under the hood, but refined in experience — built to evolve as your business grows.
          </motion.p>

          <motion.div
            className="mt-14 flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button href="/portfolio" size="lg" className="bg-art-primary text-white hover:bg-art-accent font-medium tracking-wide border-0 shadow-[0_0_25px_rgba(74,148,186,0.3)]">
              View the Canvas
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/5 hover:border-art-accent/50 transition-colors duration-500 font-light">
              Collaborate
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade - Deep Art Midnight */}
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 bg-gradient-to-t from-art-midnight to-transparent pointer-events-none" />
    </section>
  );
}

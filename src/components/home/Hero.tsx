"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-900">
      {/* Grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(169,224,246,0.12)" strokeWidth="0.8" />
            </pattern>
            <pattern id="heroDots" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="0" r="1.5" fill="rgba(169,224,246,0.2)" />
              <circle cx="60" cy="0" r="1.5" fill="rgba(169,224,246,0.2)" />
              <circle cx="0" cy="60" r="1.5" fill="rgba(169,224,246,0.2)" />
              <circle cx="60" cy="60" r="1.5" fill="rgba(169,224,246,0.2)" />
            </pattern>
            <radialGradient id="gridFade" cx="50%" cy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="70%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="gridMask">
              <rect width="100%" height="100%" fill="url(#gridFade)" />
            </mask>
          </defs>
          <g mask="url(#gridMask)">
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
            <rect width="100%" height="100%" fill="url(#heroDots)" />
          </g>
        </svg>

        {/* Animated circuit nodes */}
        {[
          { x: "12%", y: "25%", size: 8, delay: 0 },
          { x: "82%", y: "22%", size: 6, delay: 1 },
          { x: "68%", y: "65%", size: 10, delay: 0.5 },
          { x: "20%", y: "72%", size: 6, delay: 1.5 },
          { x: "45%", y: "12%", size: 5, delay: 2 },
          { x: "92%", y: "55%", size: 5, delay: 0.8 },
          { x: "55%", y: "45%", size: 7, delay: 1.2 },
          { x: "35%", y: "55%", size: 4, delay: 0.3 },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: node.x, top: node.y }}
          >
            <motion.div
              className="rounded-full bg-accent/30 border border-accent/20"
              style={{ width: node.size, height: node.size }}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.4, 1] }}
              transition={{ duration: 4, delay: node.delay, repeat: Infinity }}
            />
          </motion.div>
        ))}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[
            { x1: "12%", y1: "25%", x2: "45%", y2: "12%", delay: 0.5 },
            { x1: "45%", y1: "12%", x2: "82%", y2: "22%", delay: 0.8 },
            { x1: "82%", y1: "22%", x2: "92%", y2: "55%", delay: 1.1 },
            { x1: "92%", y1: "55%", x2: "68%", y2: "65%", delay: 1.4 },
            { x1: "20%", y1: "72%", x2: "68%", y2: "65%", delay: 1.7 },
            { x1: "12%", y1: "25%", x2: "20%", y2: "72%", delay: 2.0 },
            { x1: "55%", y1: "45%", x2: "68%", y2: "65%", delay: 1.0 },
            { x1: "35%", y1: "55%", x2: "55%", y2: "45%", delay: 1.3 },
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
              stroke="rgba(169,224,246,0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: line.delay }}
            />
          ))}
        </svg>

        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/40 rounded-full blur-3xl" />

        {/* Giant watermark logo behind everything */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/images/logo-dark.png"
              alt=""
              width={800}
              height={800}
              className="w-[700px] md:w-[900px] lg:w-[1100px] h-auto opacity-[0.06]"
              priority
            />
          </motion.div>
        </div>

        {/* Floating logo particles - small transparent logos scattered */}
        {[
          { x: "75%", y: "15%", size: 80, opacity: 0.03, delay: 0, duration: 20 },
          { x: "10%", y: "60%", size: 60, opacity: 0.025, delay: 3, duration: 25 },
          { x: "85%", y: "70%", size: 50, opacity: 0.02, delay: 6, duration: 22 },
        ].map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute pointer-events-none"
            style={{ left: particle.x, top: particle.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/logo-dark.png"
              alt=""
              width={particle.size}
              height={particle.size}
              className="h-auto"
              style={{ width: particle.size, opacity: particle.opacity }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-site mx-auto px-6 w-full pt-20 sm:pt-0">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-caption text-accent/90 font-mono uppercase tracking-wider">AI / Software / Data / Growth</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-h1 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            We Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              Intelligent Systems
            </span>{" "}
            for Modern Enterprises
          </motion.h1>

          <motion.p
            className="mt-6 text-body text-white/45 max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From advanced AI and high concurrency backend infrastructure to premium digital experiences. We architect, build, and scale complete digital ecosystems.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Button href="/portfolio" size="lg" className="bg-accent text-neutral-900 border-accent hover:bg-white font-bold">
              Explore Our Work
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              Partner With Us
            </Button>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            className="mt-12 sm:mt-16 flex gap-6 sm:gap-12 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { value: "25+", label: "Projects" },
              { value: "99.9%", label: "Uptime" },
              { value: "50M+", label: "Data Points" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-8 bg-white/10 -ml-6 mr-3 hidden md:block" />}
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-[10px] text-white/60 font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-40 bg-gradient-to-t from-neutral-50 to-transparent" />
    </section>
  );
}

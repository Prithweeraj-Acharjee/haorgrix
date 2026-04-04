"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SectionHeading({ label, title, description, align = "center", light = false }: SectionHeadingProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("space-y-6 mb-24 md:mb-32", align === "center" && "text-center flex flex-col items-center")}
    >
      
      {label && (
        <motion.div 
          variants={itemVariants} 
          className="mb-8"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-art-primary/50 to-art-accent/50 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="relative inline-flex items-center gap-6 bg-[#141622]/90 backdrop-blur-2xl border border-white/10 rounded-full px-12 py-4 shadow-[0_0_50px_rgba(74,148,186,0.15)] overflow-hidden">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] -translate-x-[200%] animate-[shimmer_6s_infinite]" />
              
              <div className="w-3.5 h-3.5 rounded-full bg-art-accent animate-[pulse_2.5s_ease-in-out_infinite] shadow-[0_0_12px_rgba(130,202,235,0.8)]" />
              <span className="text-[15px] sm:text-[16px] text-white font-sans uppercase tracking-[0.6em] font-bold">{label}</span>
            </div>
          </div>
        </motion.div>
      )}
      
      <motion.h2 variants={itemVariants} className={cn("text-h2 leading-tight tracking-tight", light ? "text-white" : "text-neutral-900")}>
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={itemVariants} className={cn("text-body max-w-3xl font-light leading-relaxed tracking-wide", light ? "text-white/80" : "text-neutral-500")}>
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

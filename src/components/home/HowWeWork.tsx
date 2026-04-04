"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export default function HowWeWork() {
  const [openStep, setOpenStep] = useState(0);

  return (
    <section className="py-32 md:py-48 bg-art-midnight relative overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-art-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 relative z-10">
        <SectionHeading
          label="Our Process"
          title="How We Work"
          description="A rigorous 7-stage pipeline that moves at the speed of the market while maintaining uncompromising quality."
          light={true}
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {processSteps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.05}>
              <div className={`group transition-all duration-500 rounded-[2rem] border ${openStep === i ? "bg-[#141622]/60 border-white/10 shadow-2xl shadow-black/40" : "bg-white/5 border-white/5 hover:border-white/10"}`}>
                <button
                  onClick={() => setOpenStep(openStep === i ? -1 : i)}
                  className="w-full px-8 py-6 flex items-center gap-6 text-left"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[18px] font-bold shrink-0 transition-all duration-500 ${openStep === i ? "bg-art-accent text-art-midnight shadow-[0_0_20px_rgba(130,202,235,0.5)]" : "bg-white/5 text-white/40 ring-1 ring-white/10"}`}>
                    {step.number}
                  </div>
                  <span className={`text-[20px] font-medium flex-1 transition-colors duration-500 ${openStep === i ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                    {step.title}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${openStep === i ? "border-art-accent/40 bg-art-accent/10" : "border-white/5 bg-white/5 opacity-40"}`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-500 ${openStep === i ? "rotate-180 text-art-accent" : "text-white"}`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openStep === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pl-[104px]">
                        <p className="text-[16px] text-white/50 leading-relaxed font-light max-w-2xl">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

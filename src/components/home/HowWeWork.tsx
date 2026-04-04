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
    <section className="py-32 md:py-48 bg-white relative">
      <div className="max-w-site mx-auto px-6">
        <SectionHeading
          label="Our Process"
          title="How We Work"
          description="A rigorous 7-stage pipeline that moves at the speed of the market while maintaining uncompromising quality."
        />

        <div className="max-w-2xl mx-auto space-y-4">
          {processSteps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.05}>
              <div className="bg-neutral-100 rounded-xl border border-neutral-200/50 overflow-hidden">
                <button
                  onClick={() => setOpenStep(openStep === i ? -1 : i)}
                  className="w-full px-6 py-4 flex items-center gap-4 text-left hover:bg-neutral-200/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center text-body font-bold shrink-0">
                    {step.number}
                  </div>
                  <span className="text-body font-bold text-neutral-900 flex-1">{step.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 transition-transform ${openStep === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openStep === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pl-20 text-body text-neutral-500">
                        {step.description}
                      </p>
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

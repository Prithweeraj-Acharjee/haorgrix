"use client";
import { Rocket, Users, Database } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

const models = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "End-to-End Project Delivery",
    description: "Fixed scope, full ownership. We handle everything from initial strategy to final deployment for a defined project requirement.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Engineering Teams",
    description: "Your outsourced CTO and engineering department on a monthly retainer, continually iterating and scaling your existing products.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data & API Licensing",
    description: "Access our proprietary scraped datasets, retail analytics, or B2B lead generation engines via secure API access. No software build required.",
  },
];

export default function EngagementModels() {
  return (
    <section className="py-32 md:py-48 bg-white relative">
      <div className="max-w-site mx-auto px-6">
        <SectionHeading
          label="Work With Us"
          title="Engagement Models"
          description="Flexible partnership structures tailored to your operational tempo and goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, i) => (
            <FadeIn key={model.title} delay={i * 0.15}>
              <div className="bg-neutral-50/50 rounded-2xl p-8 border-l-4 border-art-primary hover:shadow-lg transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-lg bg-art-primary/10 text-art-primary flex items-center justify-center mb-6">
                  {model.icon}
                </div>
                <h3 className="text-h3 text-neutral-800 mb-4">{model.title}</h3>
                <p className="text-body text-neutral-500">{model.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

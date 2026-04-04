"use client";
import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import AmbientCanvas from "@/components/ui/AmbientCanvas";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterBar from "@/components/portfolio/FilterBar";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-32 pb-48 bg-art-midnight min-h-screen relative overflow-hidden">
      {/* Physics-Based Ambient Flow Field */}
      <AmbientCanvas />

      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-art-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-art-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 relative z-10">
        <FadeIn>
          <SectionHeading
            label="Portfolio"
            title="Our Work"
            description="Real projects, real case studies, real results. Click any project for the full story."
            light={true}
          />
        </FadeIn>

        <FilterBar active={filter} onChange={setFilter} />

        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </div>
  );
}

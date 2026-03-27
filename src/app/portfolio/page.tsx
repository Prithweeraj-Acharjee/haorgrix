"use client";
import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterBar from "@/components/portfolio/FilterBar";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-ice">
      <div className="max-w-site mx-auto px-6">
        <SectionHeading
          label="Portfolio"
          title="Our Work"
          description="Real projects, real case studies, real results. Click any project for the full story."
        />

        <FilterBar active={filter} onChange={setFilter} />

        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

"use client";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

const categoryColors: Record<string, string> = {
  "ai-data": "from-[#2a4a5e] to-[#4a7a94]",
  software: "from-steel-dark to-steel",
  "design-growth": "from-[#3d6b84] to-[#6a9ab5]",
};

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-28 bg-ice relative">
      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />

      <div className="max-w-site mx-auto px-6 relative">
        <SectionHeading
          label="Our Work"
          title="Featured Projects"
          description="Real problems. Real solutions. Measurable results."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {featured.map((project, i) => {
            const isLarge = i === 0;
            return (
              <FadeIn
                key={project.slug}
                delay={i * 0.1}
                className={isLarge ? "md:col-span-12" : "md:col-span-6 lg:col-span-4"}
              >
                <Link href={`/portfolio/${project.slug}`} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative bg-white rounded-2xl overflow-hidden border border-steel-light/50 shadow-sm hover:shadow-xl transition-shadow h-full"
                  >
                    {/* Project visual */}
                    <div className={`${isLarge ? "h-56 md:h-64" : "h-48"} relative overflow-hidden`}>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${categoryColors[project.category] || "from-steel-dark to-steel"} opacity-40`} />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/10">
                          {project.industry}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] text-text-secondary font-mono">{project.year}</span>
                        <span className="text-[10px] text-text-secondary">&bull;</span>
                        <span className="text-[10px] text-text-secondary font-mono">{project.client}</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-text-primary mb-2 group-hover:text-steel transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{project.description}</p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.techStack.slice(0, isLarge ? 6 : 4).map((tech) => (
                          <span key={tech} className="text-[10px] font-mono bg-ice text-text-secondary px-2.5 py-1 rounded-md border border-steel-light/50">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Results preview */}
                      {isLarge && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-steel-light/50">
                          {project.results.map((r) => (
                            <div key={r.metric}>
                              <div className="text-lg font-extrabold text-steel">{r.value}</div>
                              <div className="text-[10px] text-text-secondary leading-tight">{r.metric}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <Button href="/portfolio" size="lg">
            View All Projects <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

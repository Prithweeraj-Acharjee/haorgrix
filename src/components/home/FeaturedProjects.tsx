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
  "ai-data": "from-[#356b86] to-[#4a94ba]",
  software: "from-primary-dark to-primary",
  "design-growth": "from-[#42728f] to-[#5ea9d1]",
};

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-32 md:py-48 bg-art-midnight relative overflow-hidden">
      {/* Subtle bg decoration - Surrealist glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-art-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-art-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 relative">
        <SectionHeading
          label="Our Work"
          title="Featured Projects"
          description="Real problems. Real solutions. Measurable results."
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
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
                    whileHover={{ y: -8 }}
                    className="relative bg-[#141622]/40 backdrop-blur-3xl rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 h-full flex flex-col shadow-2xl shadow-black/40 group hover:shadow-art-accent/10"
                  >
                    {/* Top Accent Stripe - Team Card Style */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-art-primary via-art-accent to-art-primary opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Project visual */}
                    <div className={`${isLarge ? "h-64 md:h-[400px]" : "h-64"} relative overflow-hidden`}>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${categoryColors[project.category] || "from-[#0F111A]/80"} via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity`} />

                      {/* Category badge - Glass Capsule Style */}
                      <div className="absolute top-6 left-6">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md text-white/90 px-4 py-2 rounded-full border border-white/10 shadow-2xl">
                          {project.industry}
                        </span>
                      </div>

                      {/* Arrow Button - Case Study Style */}
                      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100 border border-white/20 shadow-2xl">
                        <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[12px] text-art-accent font-mono tracking-widest uppercase">{project.year}</span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-[12px] text-white/40 font-mono tracking-wider uppercase">{project.client}</span>
                      </div>
                      
                      <h3 className="text-[28px] md:text-[32px] font-medium text-white/90 mb-4 group-hover:text-white transition-colors leading-tight font-sans">
                        {project.title}
                      </h3>
                      <p className="text-[16px] text-white/50 leading-relaxed font-light mb-8 max-w-2xl">{project.description}</p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.slice(0, isLarge ? 8 : 4).map((tech) => (
                          <span key={tech} className="text-[11px] font-mono text-white/40 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 tracking-wider group-hover:border-white/10 transition-colors uppercase">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Results preview */}
                      {isLarge && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-auto pt-10 border-t border-white/5">
                          {project.results.map((r) => (
                            <div key={r.metric}>
                              <div className="text-[28px] font-bold text-art-accent mb-1">{r.value}</div>
                              <div className="text-[11px] text-white/30 uppercase tracking-[0.1em] font-mono leading-tight">{r.metric}</div>
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

        <div className="text-center mt-20">
          <Button href="/portfolio" size="lg" className="bg-transparent border-white/10 text-white hover:bg-white/5 hover:border-art-accent/50 px-10 transition-all duration-500 font-light tracking-widest uppercase text-[12px]">
            View All Projects <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

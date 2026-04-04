"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div layout layoutId={project.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Link href={`/portfolio/${project.slug}`} className="group block h-full">
        <div className="group relative bg-[#141622]/40 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 h-full flex flex-col shadow-2xl shadow-black/40 hover:-translate-y-4 hover:shadow-art-accent/10">
          {/* Interactive Top Accent Stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-art-primary via-art-accent to-art-primary opacity-40 group-hover:opacity-100 group-hover:animate-gradient-x transition-all duration-700" />
          
          <div className="h-64 relative overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            
            {/* Industry Badge - Glass Capsule Style */}
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

          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] text-art-accent font-mono tracking-[0.2em] uppercase">{project.year}</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[11px] text-white/30 font-mono tracking-wider uppercase">{project.category}</span>
            </div>

            <h3 className="text-[24px] font-medium text-white/90 mb-4 group-hover:text-white transition-colors font-sans leading-tight">
              {project.title}
            </h3>
            <p className="text-[15px] text-white/40 font-light leading-relaxed line-clamp-2 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span key={tech} className="text-[10px] font-mono text-white/30 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-lg uppercase tracking-wider group-hover:border-white/10 transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8 text-[12px] font-bold tracking-[0.1em] uppercase text-art-accent group-hover:text-white transition-colors">
              View Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

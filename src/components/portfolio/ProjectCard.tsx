"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div layout layoutId={project.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <div className="bg-white rounded-2xl overflow-hidden border border-steel-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="h-48 bg-gradient-to-br from-steel-light to-sky/30 flex items-center justify-center">
            <div className="text-steel/20 text-7xl font-extrabold">{project.title.charAt(0)}</div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider bg-steel-light text-steel px-2 py-1 rounded">
                {project.industry}
              </span>
              <span className="text-[10px] text-text-secondary">{project.year}</span>
            </div>
            <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-steel transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.techStack.slice(0, 4).map((tech) => (
                <span key={tech} className="text-[10px] font-mono bg-ice text-text-secondary px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm font-semibold text-steel">
              View Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

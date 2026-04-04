import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import FadeIn from "@/components/ui/FadeIn";

import AmbientCanvas from "@/components/ui/AmbientCanvas";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <div className="pt-32 pb-48 bg-art-midnight min-h-screen relative overflow-hidden">
      {/* Physics-Based Ambient Flow Field */}
      <AmbientCanvas />

      {/* Surrealist background accents */}
      <div className="absolute top-0 left-0 w-[1000px] h-[800px] bg-art-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-art-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <Link href="/portfolio" className="inline-flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.3em] text-white/40 hover:text-art-accent transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" /> Back to Portfolio
          </Link>
        </FadeIn>

        {/* Hero / Header Card With Team Card Features */}
        <FadeIn>
          <div className="relative bg-[#141622]/40 backdrop-blur-3xl rounded-[3rem] overflow-hidden border border-white/5 mb-24 shadow-2xl shadow-black/50 group hover:border-white/20 transition-all duration-700">
            {/* Interactive Top Accent Stripe */}
            <div className="h-1.5 w-full bg-gradient-to-r from-art-primary via-art-accent to-art-primary opacity-40 group-hover:opacity-100 group-hover:animate-gradient-x transition-all duration-700" />
            
            <div className="relative p-8 md:p-14 lg:p-16 flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
              {/* Image Container - Reduced size for better text flow */}
              <div className="relative w-full lg:w-[420px] h-[300px] md:h-[420px] rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:shadow-[0_0_80px_rgba(130,202,235,0.15)] transition-all duration-1000 shrink-0">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                
                {/* Industry Badge */}
                <div className="absolute top-6 left-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md text-white/90 px-4 py-2 rounded-full border border-white/10">
                    {project.industry}
                  </span>
                </div>

                {/* Arrow Button */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left min-w-0">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-art-accent">{project.year}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/30">{project.client}</span>
                </div>

                <h1 className="text-[32px] md:text-[42px] lg:text-[48px] xl:text-[56px] font-medium text-white leading-[1.1] tracking-tight mb-8 font-sans break-words">
                  {project.title.split('—').map((part, i) => (
                    <span key={i} className={i === 1 ? "italic inline-block text-transparent bg-clip-text bg-gradient-to-r from-art-accent via-white to-art-primary animate-gradient-x pr-8 pb-1 whitespace-normal break-words" : "break-words"}>
                      {i === 1 ? `— ${part}` : part}
                    </span>
                  ))}
                </h1>
                
                <p className="text-[15px] md:text-[17px] text-white/40 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 tracking-wide">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Content Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-24">
            {/* Challenge */}
            <FadeIn>
              <div>
                <h2 className="text-[11px] font-mono uppercase tracking-[0.5em] text-art-accent mb-8">The Challenge</h2>
                <div className="group relative bg-[#141622]/40 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-white/20 transition-all duration-700 shadow-2xl hover:-translate-y-4 hover:shadow-art-accent/10 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-art-primary via-art-accent to-art-primary opacity-30 group-hover:opacity-100 group-hover:animate-gradient-x transition-all duration-700" />
                  <p className="text-[15px] md:text-[18px] text-white/60 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-700">{project.challenge}</p>
                </div>
              </div>
            </FadeIn>

            {/* Approach */}
            <FadeIn>
              <div>
                <h2 className="text-[11px] font-mono uppercase tracking-[0.5em] text-art-accent mb-8">Our Approach</h2>
                <div className="group relative bg-[#141622]/40 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-white/20 transition-all duration-700 shadow-2xl hover:-translate-y-4 hover:shadow-art-accent/10 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-art-primary via-art-accent to-art-primary opacity-30 group-hover:opacity-100 group-hover:animate-gradient-x transition-all duration-700" />
                  <p className="text-[15px] md:text-[18px] text-white/60 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-700">{project.approach}</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 space-y-16">
            {/* Tech Stack Card */}
            <FadeIn>
              <div className="group relative bg-[#141622]/40 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-10 border border-white/5 hover:border-white/20 transition-all duration-700 h-full shadow-2xl hover:-translate-y-4 hover:shadow-art-accent/10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-art-primary via-art-accent to-art-primary opacity-30 group-hover:opacity-100 group-hover:animate-gradient-x transition-all duration-700" />
                <h2 className="text-[11px] font-mono uppercase tracking-[0.5em] text-art-accent mb-10">Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] md:text-[12px] font-mono bg-white/5 text-white/40 border border-white/5 px-4 md:px-5 py-2 md:py-2.5 rounded-xl uppercase tracking-wider transition-all duration-500 hover:border-art-accent/40 hover:text-white hover:bg-art-accent/5 hover:-translate-y-1">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Subtle glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-art-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Results Grid */}
        <FadeIn>
          <div className="mt-32">
            <h2 className="text-center text-[11px] font-mono uppercase tracking-[0.5em] text-art-accent mb-16">Results & Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {project.results.map((r) => (
                <div key={r.metric} className="group relative bg-[#141622]/40 backdrop-blur-3xl rounded-[2.5rem] p-8 pb-10 border border-white/5 text-center shadow-2xl transition-all duration-700 hover:border-art-accent/30 hover:-translate-y-3 hover:shadow-art-accent/10 overflow-hidden">
                  {/* Top Accent Stripe - Global Design Signature */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-art-primary via-art-accent to-art-primary opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Metric Value - Responsive Scaling */}
                  <div className="text-[28px] sm:text-[32px] md:text-[38px] xl:text-[42px] font-bold text-art-accent mb-3 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(130,202,235,0.4)] transition-all duration-700 leading-tight break-words px-2">
                    {r.value}
                  </div>
                  
                  {/* Metric Label */}
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 group-hover:text-white/40 transition-colors duration-500 max-w-[140px] mx-auto leading-relaxed">
                    {r.metric}
                  </div>

                  {/* Micro-glow interaction */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-art-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Navigation Bar */}
        <div className="mt-40 pt-20 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-0">
          {prev ? (
            <Link href={`/portfolio/${prev.slug}`} className="flex flex-col items-start gap-4 group w-full sm:w-auto">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">Previous Evolution</span>
              <div className="flex items-center gap-4 md:gap-6 text-[18px] md:text-[24px] font-medium text-white/40 group-hover:text-art-accent transition-all duration-500">
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-3" />
                <span className="max-w-[140px] md:max-w-[200px] truncate">{prev.title.split('—')[0]}</span>
              </div>
            </Link>
          ) : <div className="hidden sm:block" />}

          {next ? (
            <Link href={`/portfolio/${next.slug}`} className="flex flex-col items-end gap-4 group text-right w-full sm:w-auto mt-8 sm:mt-0">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">Next Evolution</span>
              <div className="flex items-center gap-4 md:gap-6 text-[18px] md:text-[24px] font-medium text-white/40 group-hover:text-art-accent transition-all duration-500">
                <span className="max-w-[140px] md:max-w-[200px] truncate">{next.title.split('—')[0]}</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-3" />
              </div>
            </Link>
          ) : <div className="hidden sm:block" />}
        </div>
      </div>
    </div>
  );
}

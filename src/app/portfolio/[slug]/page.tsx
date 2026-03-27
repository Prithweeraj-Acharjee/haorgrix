import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

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
    <div className="pt-28 pb-24 bg-ice">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-steel mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </FadeIn>

        {/* Hero */}
        <FadeIn>
          <div className="bg-gradient-to-br from-steel-dark to-steel rounded-2xl h-64 md:h-80 flex items-center justify-center mb-8">
            <div className="text-white/10 text-[120px] font-extrabold">{project.title.charAt(0)}</div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-wider bg-steel-light text-steel px-3 py-1 rounded">{project.industry}</span>
            <span className="text-xs text-text-secondary">{project.client}</span>
            <span className="text-xs text-text-secondary">{project.year}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-4">{project.title}</h1>
          <p className="text-lg text-text-secondary">{project.description}</p>
        </FadeIn>

        {/* Challenge */}
        <FadeIn>
          <div className="mt-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-sky mb-4">The Challenge</h2>
            <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
          </div>
        </FadeIn>

        {/* Approach */}
        <FadeIn>
          <div className="mt-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-sky mb-4">Our Approach</h2>
            <p className="text-text-secondary leading-relaxed">{project.approach}</p>
          </div>
        </FadeIn>

        {/* Tech Stack */}
        <FadeIn>
          <div className="mt-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-sky mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-sm font-mono bg-white text-text-primary px-4 py-2 rounded-lg border border-steel-light">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Results */}
        <FadeIn>
          <div className="mt-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-sky mb-6">Results & Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.results.map((r) => (
                <div key={r.metric} className="bg-white rounded-xl p-5 border border-steel-light text-center">
                  <div className="text-2xl font-extrabold text-steel">{r.value}</div>
                  <div className="text-xs text-text-secondary mt-1">{r.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-steel-light flex justify-between items-center">
          {prev ? (
            <Button href={`/portfolio/${prev.slug}`} variant="secondary" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Previous
            </Button>
          ) : <div />}
          {next ? (
            <Button href={`/portfolio/${next.slug}`} variant="secondary" size="sm">
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: number;
  category: "ai-data" | "software" | "design-growth";
  thumbnail: string;
  description: string;
  challenge: string;
  approach: string;
  techStack: string[];
  results: { metric: string; value: string }[];
  screenshots: string[];
  featured: boolean;
}

export interface Service {
  title: string;
  icon: string;
  pitch: string;
  description: string;
  capabilities: string[];
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

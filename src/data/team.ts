export interface TeamMember {
  name: string;
  role: string;
  shortRole: string;
  initial: string;
  gradient: string;
  bio: string;
  skills: string[];
  focus: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sampanna Mahapatra",
    role: "Chief Product Officer & Systems Architect",
    shortRole: "CPO & Systems Architect",
    initial: "S",
    gradient: "from-[#2a4a5e] via-steel-dark to-steel",
    bio: "Sam architects our high-level tech stacks and data pipelines. His unique blend of technical engineering and creative vision ensures every product is built for infinite scale.",
    skills: ["Systems Architecture", "Database Mapping", "Backend Engineering", "Data Pipelines"],
    focus: ["Lead Scraping Systems", "Backend Logic", "Project Workflow"],
  },
  {
    name: "Prithweeraj",
    role: "Lead, Creative & Design Engineering",
    shortRole: "Design Engineering Lead",
    initial: "P",
    gradient: "from-steel via-[#4a7a94] to-[#6a9ab5]",
    bio: "Prithweeraj is the gatekeeper of HaorGrix's visual language. He bridges the gap between aesthetic vision and pixel-perfect technical reality across all products.",
    skills: ["UI/UX Architecture", "Design Systems", "Brand Aesthetic", "Prototyping"],
    focus: ["Figma Design Systems", "User Experience Mapping", "Interface Prototyping"],
  },
  {
    name: "Dibbando",
    role: "Lead, Product Marketing & Visual Strategy",
    shortRole: "Marketing & Strategy Lead",
    initial: "D",
    gradient: "from-[#3d6b84] to-steel-dark via-steel",
    bio: "Dibbando translates hardware-logic into market-ready stories. He owns the product's visual presentation and ensures our engineering resonates with the target audience.",
    skills: ["Go-To-Market Strategy", "Visual Narrative", "Market Research", "Sales Enablement"],
    focus: ["Pitch Deck Strategy", "Visual Asset Creation", "User Advocacy"],
  },
  {
    name: "Sudipa",
    role: "Lead, AI Evaluation & Quality Assurance",
    shortRole: "AI & QA Lead",
    initial: "Su",
    gradient: "from-steel to-[#4a7a94] via-[#2a5a70]",
    bio: "Sudipa is the gatekeeper of quality. She ensures our AI models are performant, safe, and unbiased, while maintaining rigorous QA standards across all software builds.",
    skills: ["Model Benchmarking", "AI Safety Protocols", "Automated Testing", "Software Reliability"],
    focus: ["Real-time Model Monitoring", "Automated Testing", "Feedback Loops"],
  },
  {
    name: "Tanvir",
    role: "Lead, Acquisition & Data Scraping",
    shortRole: "Acquisition & Data Lead",
    initial: "T",
    gradient: "from-[#2a5a70] via-steel-dark to-[#4a7a94]",
    bio: "Tanvir fuels our growth engines. He builds the proprietary datasets needed to train our internal AI and designs the automated systems that fill our sales pipelines.",
    skills: ["Data Intelligence", "Ethical Mining", "Lead Generation", "CRM Automation"],
    focus: ["Web Scraping Architecture", "CRM Automation", "Funnel Optimization"],
  },
];

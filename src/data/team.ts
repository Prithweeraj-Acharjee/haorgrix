export interface TeamMember {
  name: string;
  role: string;
  shortRole: string;
  initial: string;
  image: string;
  gradient: string;
  bio: string;
  skills: string[];
  focus: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Prithweeraj A. Porag",
    role: "Lead, Creative & Design Engineering",
    shortRole: "Lead, Creative & Design Engineering",
    initial: "PA",
    image: "/images/team/prithweeraj.jpg",
    gradient: "from-steel via-[#4a7a94] to-[#6a9ab5]",
    bio: "Prithweeraj is the gatekeeper of HaorGrix's visual language. He bridges the gap between aesthetic vision and pixel-perfect technical reality across all products.",
    skills: ["UI/UX Architecture", "Design Systems", "Brand Aesthetic", "Prototyping"],
    focus: ["Figma Design Systems", "User Experience Mapping", "Interface Prototyping"],
  },
  {
    name: "Sampanna Mahapatra",
    role: "Lead, Product Management & Systems Architect",
    shortRole: "Lead, Product Management & Systems Architect",
    initial: "SM",
    image: "/images/team/sampanna.jpg",
    gradient: "from-[#2a4a5e] via-steel-dark to-steel",
    bio: "Sam architects our high-level tech stacks and data pipelines. His unique blend of technical engineering and creative vision ensures every product is built for infinite scale.",
    skills: ["Systems Architecture", "Database Mapping", "Backend Engineering", "Data Pipelines"],
    focus: ["Lead Scraping Systems", "Backend Logic", "Project Workflow"],
  },
  {
    name: "Dibbando Paul",
    role: "Lead, Product Marketing & Visual Strategy",
    shortRole: "Lead, Product Marketing & Visual Strategy",
    initial: "DP",
    image: "/images/team/dibbando.png",
    gradient: "from-[#3d6b84] to-steel-dark via-steel",
    bio: "Dibbando translates complex technical products into compelling, market-ready narratives. He owns go-to-market strategy, visual asset creation, and ensures our engineering resonates with the target audience.",
    skills: ["Go-To-Market Strategy", "Visual Asset Creation", "Market Research", "Sales Enablement"],
    focus: ["Product Positioning & Messaging", "Pitch Decks & Case Studies", "User Advocacy"],
  },
  {
    name: "Sudipa Biswas",
    role: "Lead, AI Evaluation & Quality Assurance",
    shortRole: "Lead, AI Evaluation & Quality Assurance",
    initial: "SB",
    image: "/images/team/sudipa.jpg",
    gradient: "from-steel to-[#4a7a94] via-[#2a5a70]",
    bio: "Sudipa is the gatekeeper of quality. She designs rigorous testing frameworks to assess AI accuracy, fairness, and safety, while owning end-to-end QA strategy across all software builds.",
    skills: ["Model Benchmarking", "AI Safety & Fairness", "Automated Testing", "Continuous Monitoring"],
    focus: ["AI Model Evaluation", "End-to-End QA Strategy", "Feedback Loops"],
  },
  {
    name: "Tanvir Alam",
    role: "Lead, Acquisition & Data Scraping",
    shortRole: "Lead, Acquisition & Data Scraping",
    initial: "TA",
    image: "/images/team/tanvir.png",
    gradient: "from-[#2a5a70] via-steel-dark to-[#4a7a94]",
    bio: "Tanvir fuels our growth engines. He architects ethical web scraping systems, builds massive high-quality datasets for the ML team, and designs automated lead generation pipelines that fill our sales funnel.",
    skills: ["Data Intelligence", "Lead Generation", "Conversion Optimization", "CRM Automation"],
    focus: ["Data Mining & Scraping Systems", "Automated Lead Pipelines", "Funnel Optimization"],
  },
];

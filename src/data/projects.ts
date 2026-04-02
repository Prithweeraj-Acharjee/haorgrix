import { Project } from "@/types";

export const projects: Project[] = [
  // --- HaorGrix Internal Products (first) ---
  {
    slug: "autodoc-ai-platform",
    title: "AutoDoc — AI Document Workflow Platform",
    client: "HaorGrix (Internal Product)",
    industry: "Enterprise Productivity",
    year: 2026,
    category: "ai-data",
    thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=85&auto=format&fit=crop",
    description: "AI-powered platform that transforms raw text into complete, professionally formatted documentation suites in seconds",
    challenge:
      "Businesses waste hours drafting NDAs, PRDs, Proposals, and Tech Architecture documents manually. Formatting is inconsistent, critical clauses are missed, and enterprise clients handling sensitive IP need privacy-first solutions.",
    approach:
      "We built AutoDoc — a dual-engine platform offering both a B2B SaaS with industry-specific document packs and a self-hosted enterprise option. A single raw text input generates a complete synced documentation suite: NDA, BRD, PRD, WBS, Commercial Proposal, MSA, SOW, SAD, and more. Privacy-first with local LLM deployment for enterprise clients.",
    techStack: ["Next.js", "Python", "LLM APIs", "Docker", "PostgreSQL", "Redis", "Stripe", "Vercel"],
    results: [
      { metric: "Document Generation Time", value: "<60s" },
      { metric: "Template Accuracy", value: "98%" },
      { metric: "Enterprise Privacy", value: "Self-Hosted" },
      { metric: "Industry Packs Available", value: "15+" },
    ],
    screenshots: [],
    featured: true,
  },
  {
    slug: "haorgrix-hr-suite",
    title: "Smart HR — Workforce Management Suite",
    client: "HaorGrix (Internal Product)",
    industry: "Human Resources",
    year: 2026,
    category: "software",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85&auto=format&fit=crop",
    description: "Modern workforce management platform with AI-driven performance analytics for hybrid and remote teams",
    challenge:
      "SMBs and scale-ups are stuck between basic Google Sheets HR tracking and bloated legacy platforms like Workday or SAP. They need enterprise features — attendance, payroll, performance reviews — wrapped in a fast, intuitive interface their employees actually want to use.",
    approach:
      "We designed a freemium cloud SaaS with frictionless attendance tracking, automated payroll integrations, and AI-driven burnout and productivity analytics. The system includes custom organizational hierarchies, local regulation compliance, and a mobile app for on-the-go employees. Enterprise clients get white-labeled, self-hosted deployments.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "React Native", "AWS", "Stripe"],
    results: [
      { metric: "Employee Onboarding Time", value: "<2 min" },
      { metric: "Burnout Prediction Accuracy", value: "87%" },
      { metric: "Free Tier Capacity", value: "15 Users" },
      { metric: "Mobile App Rating", value: "4.8/5" },
    ],
    screenshots: [],
    featured: true,
  },
  {
    slug: "smart-project-manager",
    title: "Smart PM — Predictive Project Management",
    client: "HaorGrix (Internal Product)",
    industry: "Project Management",
    year: 2026,
    category: "software",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=85&auto=format&fit=crop",
    description: "Analytics-first project management suite with AI-powered sprint prediction and real-time collaboration",
    challenge:
      "Teams running complex, multi-stage deliverables need more than simple task checklists. Existing tools like Asana or Trello lack predictive analytics — managers only discover bottlenecks after deadlines are already blown.",
    approach:
      "We built an analytics-first collaboration suite with real-time Socket.IO updates, AI-assisted sprint velocity analysis, and predictive health tracking that alerts management to bottlenecks before they escalate. Includes Gantt charts, external client portals, and native Jira/GitHub syncing. Available as a white-label product for large agencies.",
    techStack: ["React", "Node.js", "Socket.IO", "PostgreSQL", "Redis", "D3.js", "Docker", "AWS"],
    results: [
      { metric: "Sprint Prediction Accuracy", value: "89%" },
      { metric: "Bottleneck Detection", value: "72h Early" },
      { metric: "Real-time Collaboration", value: "Native" },
      { metric: "White-Label Deployments", value: "Available" },
    ],
    screenshots: [],
    featured: true,
  },

  // --- Resume / Real Projects ---
  {
    slug: "ut-campus-twin",
    title: "UT Campus Twin — Real-Time Digital Twin",
    client: "University of Toledo",
    industry: "Smart Campus & IoT",
    year: 2026,
    category: "software",
    thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=85&auto=format&fit=crop",
    description: "Real-time digital twin synchronizing student and admin views of campus occupancy, parking, and alerts",
    challenge:
      "The University of Toledo lacked real-time visibility into campus occupancy, parking availability, and emergency alert propagation. Students and administrators relied on outdated, disconnected systems with no unified live view.",
    approach:
      "Built a real-time digital twin platform synchronizing student and admin views of campus occupancy, parking, and alerts. Engineered a Python simulation engine with SSI scoring and WebSocket-driven live state updates. Dual interfaces give students live campus data while admins get control dashboards.",
    techStack: ["Next.js", "FastAPI", "Python", "WebSockets", "SSI Scoring", "Vercel"],
    results: [
      { metric: "Real-Time Sync", value: "Live" },
      { metric: "Dual Interface", value: "Student + Admin" },
      { metric: "Update Latency", value: "<500ms" },
      { metric: "Campus Systems Integrated", value: "3+" },
    ],
    screenshots: [],
    featured: true,
  },
  {
    slug: "aesthetic-resistance",
    title: "Aesthetic Resistance — Generative Art System",
    client: "Independent Research",
    industry: "Computational Art & GPU",
    year: 2026,
    category: "design-growth",
    thumbnail: "https://images.unsplash.com/photo-1633186710895-309db2eca9e4?w=800&q=85&auto=format&fit=crop",
    description: "Browser-based real-time generative system using custom GLSL fragment shaders and GPU rendering",
    challenge:
      "Generative AI ecosystems exhibit convergence dynamics and representational bias. There was no interactive tool to visualize and resist dominant aesthetic reinforcement loops in real-time within the browser.",
    approach:
      "Created a browser-based real-time generative system using custom GLSL fragment shaders. Engineered a dual-force GPU rendering model combining aesthetic attractors with time-driven distortion, producing unique non-repeating visual outputs. The system runs entirely on the client GPU with zero server dependency.",
    techStack: ["WebGL", "GLSL", "Next.js", "GPU Rendering", "Procedural Generation", "Vercel"],
    results: [
      { metric: "Rendering", value: "60fps Real-Time" },
      { metric: "Server Dependency", value: "Zero" },
      { metric: "Unique Outputs", value: "Infinite" },
      { metric: "Platform", value: "Browser-Native" },
    ],
    screenshots: [],
    featured: false,
  },
  {
    slug: "conservatwin-platform",
    title: "ConservaTwin — Heritage Conservation Platform",
    client: "Open Source",
    industry: "Cultural Heritage & IoT",
    year: 2026,
    category: "ai-data",
    thumbnail: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=85&auto=format&fit=crop",
    description: "Open-source digital twin platform with multi-tenant museum management, PRI engine, and AI conservation advisor",
    challenge:
      "Museums and heritage sites lack affordable, intelligent monitoring systems. Existing solutions are expensive, proprietary, and disconnected from conservation science — making preventive preservation nearly impossible for smaller institutions.",
    approach:
      "Built an open-source digital twin platform with multi-tenant museum management, a Preservation Risk Index (PRI) engine, and an AI conservation advisor. Designed $5 IoT sensor integration using ESP32 + DHT22 with anomaly detection and material-aware risk profiling. The platform provides real-time environmental monitoring tied to conservation best practices.",
    techStack: ["FastAPI", "Next.js", "ESP32", "DHT22", "IoT", "AI Advisor", "PostgreSQL", "Vercel"],
    results: [
      { metric: "Sensor Cost", value: "$5 Per Unit" },
      { metric: "Risk Detection", value: "Real-Time PRI" },
      { metric: "AI Advisor", value: "Material-Aware" },
      { metric: "License", value: "Open Source" },
    ],
    screenshots: [],
    featured: false,
  },
  {
    slug: "bengali-fake-news-detection",
    title: "Bengali Fake News Detection — LSTM Ensemble",
    client: "QPAIN 2026 (IEEE Xplore)",
    industry: "AI Research & NLP",
    year: 2026,
    category: "ai-data",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=800&q=85&auto=format&fit=crop",
    description: "Multi-layered LSTM ensemble for misinformation detection in Bangladeshi media, published at IEEE",
    challenge:
      "Misinformation in Bengali-language media is rampant, and existing NLP models are trained primarily on English corpora. There was no robust, ensemble-based approach specifically targeting Bengali fake news at corpus level.",
    approach:
      "Designed a multi-layer LSTM ensemble architecture optimized for Bengali text classification. Achieved 82.43% accuracy through ensemble optimization and corpus-level evaluation. The research was published at QPAIN 2026 on IEEE Xplore, contributing to Bangladeshi media integrity.",
    techStack: ["Python", "TensorFlow", "LSTM", "NLP", "Ensemble Learning", "IEEE Xplore"],
    results: [
      { metric: "Detection Accuracy", value: "82.43%" },
      { metric: "Published At", value: "IEEE Xplore" },
      { metric: "Language", value: "Bengali" },
      { metric: "Architecture", value: "Multi-Layer LSTM" },
    ],
    screenshots: [],
    featured: false,
  },
];

import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "industrial-safety-ai",
    title: "Industrial Safety Monitoring System",
    client: "FactoryGuard Industries",
    industry: "Manufacturing",
    year: 2025,
    category: "ai-data",
    thumbnail: "/images/projects/safety-monitoring.jpg",
    description: "Real-time PPE detection and hazard monitoring using computer vision",
    challenge:
      "A large manufacturing facility needed to reduce workplace accidents by monitoring PPE compliance across 50+ camera feeds simultaneously, replacing a manual inspection process that missed 60% of violations.",
    approach:
      "We built a custom computer vision pipeline using YOLOv8 for real-time object detection, deployed on edge devices at each camera location. The system processes 30fps per feed, detects hard hats, safety vests, goggles, and restricted zone breaches, then pushes instant alerts to floor supervisors via a custom dashboard.",
    techStack: ["Python", "YOLOv8", "TensorRT", "FastAPI", "React", "WebSocket", "Redis", "PostgreSQL"],
    results: [
      { metric: "Violation Detection Rate", value: "94%" },
      { metric: "Workplace Incidents Reduced", value: "67%" },
      { metric: "Camera Feeds Processed", value: "50+" },
      { metric: "Alert Response Time", value: "<3 seconds" },
    ],
    screenshots: [],
    featured: true,
  },
  {
    slug: "retail-analytics-dashboard",
    title: "Predictive Retail Analytics Platform",
    client: "ShopMetrics Global",
    industry: "Retail & E-Commerce",
    year: 2025,
    category: "ai-data",
    thumbnail: "/images/projects/retail-analytics.jpg",
    description: "ML-powered demand forecasting and trend prediction for global retail",
    challenge:
      "A multi-brand retail conglomerate was losing revenue from overstock and stockouts. Their legacy reporting tools gave backward-looking data with 48-hour delays, making real-time decision-making impossible.",
    approach:
      "We engineered a real-time analytics engine that ingests sales data, weather patterns, social media trends, and competitor pricing through automated scraping pipelines. An ensemble ML model forecasts demand per SKU per store with 72-hour lookahead. The entire system feeds into a custom executive dashboard.",
    techStack: ["Python", "Scikit-learn", "Apache Kafka", "Snowflake", "dbt", "Next.js", "D3.js", "AWS"],
    results: [
      { metric: "Forecast Accuracy", value: "91%" },
      { metric: "Overstock Reduced", value: "42%" },
      { metric: "Data Points Processed Daily", value: "12M+" },
      { metric: "Revenue Impact", value: "+18%" },
    ],
    screenshots: [],
    featured: true,
  },
  {
    slug: "logistics-management-platform",
    title: "End-to-End Logistics Operations Portal",
    client: "SwiftRoute Logistics",
    industry: "Logistics & Supply Chain",
    year: 2024,
    category: "software",
    thumbnail: "/images/projects/logistics-platform.jpg",
    description: "Custom warehouse management and fleet tracking system for 200+ vehicles",
    challenge:
      "A rapidly scaling logistics company was running operations across spreadsheets, WhatsApp groups, and three disconnected legacy tools. Dispatchers had zero real-time visibility into fleet locations, warehouse capacity, or delivery ETAs.",
    approach:
      "We architected a unified operations platform with real-time GPS fleet tracking, automated dispatch assignment, warehouse inventory management with barcode scanning, and a customer-facing delivery tracking portal. Built as a microservices architecture to handle 10x growth.",
    techStack: ["Node.js", "React", "PostgreSQL", "Redis", "Docker", "Google Maps API", "Socket.io", "AWS ECS"],
    results: [
      { metric: "Dispatch Efficiency", value: "+55%" },
      { metric: "Delivery Accuracy", value: "99.2%" },
      { metric: "Vehicles Tracked", value: "200+" },
      { metric: "System Uptime", value: "99.9%" },
    ],
    screenshots: [],
    featured: true,
  },
  {
    slug: "enterprise-saas-platform",
    title: "Multi-Tenant SaaS Operations Suite",
    client: "OpsLayer Inc.",
    industry: "Enterprise Software",
    year: 2025,
    category: "software",
    thumbnail: "/images/projects/saas-platform.jpg",
    description: "Scalable multi-tenant platform handling 50K+ concurrent users",
    challenge:
      "A B2B startup needed to take their MVP from handling 500 users to enterprise-grade scale supporting 50,000+ concurrent users across multiple tenant organizations, with role-based access, audit logging, and SOC 2 compliance.",
    approach:
      "We re-architected the entire backend into a microservices system with tenant isolation at the database level. Implemented row-level security, comprehensive audit trails, SSO integration, and automated scaling policies. The frontend was rebuilt as a modular design system for rapid feature development.",
    techStack: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "Stripe", "Vercel", "AWS"],
    results: [
      { metric: "Concurrent Users Supported", value: "50K+" },
      { metric: "API Response Time (p95)", value: "<200ms" },
      { metric: "Tenant Onboarding Time", value: "< 5 min" },
      { metric: "Monthly Recurring Revenue", value: "+340%" },
    ],
    screenshots: [],
    featured: false,
  },
  {
    slug: "brand-identity-system",
    title: "Complete Enterprise Brand Architecture",
    client: "NexaTech Solutions",
    industry: "Technology",
    year: 2025,
    category: "design-growth",
    thumbnail: "/images/projects/brand-identity.jpg",
    description: "Full visual identity, design system, and conversion-optimized web presence",
    challenge:
      "A well-funded tech startup had strong engineering but zero brand presence. Their website was a default template, their pitch decks were inconsistent, and they were losing enterprise deals to competitors with more polished positioning.",
    approach:
      "We built a complete brand architecture from scratch: logo system, typography matrix, color theory, icon library, and comprehensive brand guidelines. Then designed and developed a conversion-optimized website with psychology-driven page flows, and created a scalable Figma design system for their product team.",
    techStack: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "Plausible"],
    results: [
      { metric: "Inbound Lead Increase", value: "3.2x" },
      { metric: "Website Conversion Rate", value: "8.4%" },
      { metric: "Page Load Time", value: "<1.5s" },
      { metric: "Design System Components", value: "120+" },
    ],
    screenshots: [],
    featured: false,
  },
  {
    slug: "lead-generation-engine",
    title: "Automated B2B Lead Generation System",
    client: "GrowthPipe Agency",
    industry: "Marketing & Sales",
    year: 2024,
    category: "design-growth",
    thumbnail: "/images/projects/lead-gen-engine.jpg",
    description: "Custom scraping infrastructure generating 10K+ qualified leads monthly",
    challenge:
      "A digital agency was manually sourcing B2B leads from LinkedIn, Google Maps, and industry directories. The process was slow, inconsistent, and capped at ~500 leads per month, nowhere near enough to feed their sales pipeline.",
    approach:
      "We built an automated scraping infrastructure with rotating proxies, CAPTCHA bypass, and intelligent rate limiting. The system crawls multiple data sources, deduplicates and enriches contact data with email verification, then feeds qualified leads into their CRM with automated cold email sequences.",
    techStack: ["Python", "Scrapy", "Playwright", "PostgreSQL", "Redis", "SendGrid", "HubSpot API", "Docker"],
    results: [
      { metric: "Leads Generated Monthly", value: "10K+" },
      { metric: "Email Deliverability", value: "96%" },
      { metric: "Cost Per Lead Reduction", value: "78%" },
      { metric: "Pipeline Revenue Impact", value: "+$2.1M" },
    ],
    screenshots: [],
    featured: true,
  },
];

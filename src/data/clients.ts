export interface Client {
  name: string;
  slug: string;
  industry: string;
  location: string;
  description: string;
  services: string[];
  profilePdf: string;
  website?: string;
  contact?: {
    email?: string;
    phone?: string[];
  };
  gradient: string;
  initial: string;
}

export const clients: Client[] = [
  {
    name: "Lexfin Consulting",
    slug: "lexfin",
    industry: "Legal & Financial Advisory",
    location: "Dhaka, Bangladesh",
    description:
      "Lexfin Consulting is a leading provider of legal and financial advisory services, serving clients across diverse industries. Their team of experienced professionals delivers innovative solutions with a focus on integrity, expertise, and client-centricity.",
    services: [
      "Banking & Finance Law",
      "Corporate & Commercial Law",
      "Tax, VAT & Customs",
      "Regulatory & Compliance",
      "Litigation & Arbitration",
      "Accounting & Internal Control",
      "Financial Due Diligence",
      "Business Valuation",
      "Forensic Investigations",
      "Performance Improvement",
      "Change Management",
      "Strategy Development",
    ],
    profilePdf: "/docs/lexfin-profile.pdf",
    website: "https://www.lexfinbd.com",
    contact: {
      email: "lexfinbd@gmail.com",
      phone: ["+880 1711-082600", "+880 1850-055132"],
    },
    gradient: "from-[#1a3a4a] via-[#2a5a6e] to-[#3a7a94]",
    initial: "LC",
  },
];

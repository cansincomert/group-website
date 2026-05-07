export type Partner = {
  slug: string;
  name: string;
  legalName?: string;
  url?: string;
  hq: string;
  role: string;
  domain: string;
  description: string;
  highlights: string[];
  solutionSlug: string;
};

export const partners: Partner[] = [
  {
    slug: "kuantek",
    name: "Kuantek",
    legalName: "Kuantek Elektronik A.Ş.",
    url: "https://www.kuantek.com.tr/",
    hq: "Gebze, Kocaeli",
    role: "FPGA & Embedded Electronics",
    domain: "Hardware",
    description:
      "Embedded electronics and FPGA design house specialising in IP-core development, embedded HW/SW and IoT / Industry 4.0 hardware engineering.",
    highlights: [
      "FPGA IP core design",
      "Embedded HW/SW co-design",
      "Industry 4.0 device engineering",
    ],
    solutionSlug: "iot-hardware",
  },
  {
    slug: "intheca",
    name: "Intheca",
    legalName: "Intheca Elektronik",
    url: "https://intheca.com/",
    hq: "Türkiye",
    role: "Electronics & Embedded Software",
    domain: "Hardware",
    description:
      "Electronics and embedded software development partner working alongside Kuantek on field-grade IoT and metering hardware.",
    highlights: [
      "Embedded firmware",
      "Industrial electronics",
      "IoT field devices",
    ],
    solutionSlug: "iot-hardware",
  },
  {
    slug: "hayen",
    name: "Hayen Teknoloji",
    legalName: "Hayen Bilişim Teknolojileri",
    url: "https://hayenteknoloji.com/",
    hq: "Üsküdar, Istanbul",
    role: "Head-end Software & IoT Data",
    domain: "Software",
    description:
      "IoT and remote meter-reading software specialist. Owner-operator of the GridBox head-end and meter data management platform deployed across multiple Turkish electricity distribution operators.",
    highlights: [
      "GridBox head-end platform",
      "Remote meter reading at DSO scale",
      "Energy-efficiency analytics",
    ],
    solutionSlug: "headend-integration",
  },
  {
    slug: "utiligize",
    name: "Utiligize",
    url: "https://utiligize.com/",
    hq: "Copenhagen, Denmark",
    role: "Asset Management for Utilities",
    domain: "Software",
    description:
      "Danish B2B SaaS provider of asset-management and grid-forecasting software for electricity utilities and DSOs, with predictive lifetime models across ~35 asset classes plus EV, battery, wind and solar load forecasting.",
    highlights: [
      "Asset Management Systems",
      "Lifecycle modelling for grid assets",
      "International deployments with Infinium",
    ],
    solutionSlug: "headend-integration",
  },
  {
    slug: "ant",
    name: "ANT Enerji",
    hq: "Türkiye",
    role: "Electricity Supply & Market Ops",
    domain: "Energy",
    description:
      "Energy supply and EPİAŞ market-side operations partner. Handles wholesale procurement, balancing-group operations and tariff optimisation for industrial consumers and OIZs.",
    highlights: [
      "Bilateral supply contracts",
      "Day-ahead and intraday trading",
      "Balancing & imbalance management",
    ],
    solutionSlug: "energy-markets",
  },
  {
    slug: "cozeka",
    name: "CoZeka",
    legalName: "CoZeka Technology",
    url: "https://www.cozeka.com/",
    hq: "Türkiye",
    role: "AI Development & Analytics",
    domain: "AI",
    description:
      "Applied AI and analytics company building forecasting, predictive maintenance and optimisation models — including wind farm modelling delivered for SANKO Çatalca RES.",
    highlights: [
      "Generation & consumption forecasting",
      "Predictive maintenance",
      "EMS optimisation",
    ],
    solutionSlug: "ai-development",
  },
  {
    slug: "cleture",
    name: "Cleture",
    url: "https://www.cleture.com/",
    hq: "Türkiye",
    role: "ESG, CO₂ & Water Reporting",
    domain: "Sustainability",
    description:
      "Modular ESG/sustainability SaaS platform that consolidates operational data, calculates environmental and CO₂ impact, and produces auditor-ready disclosures aligned with EU and Turkish regulation.",
    highlights: [
      "Scope 1–3 carbon accounting",
      "Water & resource tracking",
      "Auditor-ready ESG reporting",
    ],
    solutionSlug: "sustainability",
  },
  {
    slug: "enel",
    name: "Enel Enerji",
    legalName: "Enel Enerji Elektronik A.Ş.",
    url: "https://enel.com.tr/",
    hq: "Istanbul, Türkiye",
    role: "UPS & Power Electronics",
    domain: "Power Electronics",
    description:
      "Turkish power-electronics manufacturer founded in 1988. Designs and produces UPS systems, voltage regulators, batteries and solar power electronics, with exports to more than 60 countries.",
    highlights: [
      "Online & line-interactive UPS",
      "Voltage stabilisers and regulators",
      "Battery and solar power systems",
    ],
    solutionSlug: "power-electronics",
  },
];

export const findPartner = (slug: string) =>
  partners.find((p) => p.slug === slug);

export const partnersBySolution = (solutionSlug: string) =>
  partners.filter((p) => p.solutionSlug === solutionSlug);

import {
  Cpu,
  Server,
  LineChart,
  BrainCircuit,
  Leaf,
  Plug,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  icon: LucideIcon;
  description: string;
  capabilities: string[];
  partnerSlugs: string[];
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "iot-hardware",
    name: "IoT Hardware & Remote Read-outs",
    short: "IoT & Hardware",
    tagline: "Field-grade devices that capture real-time data at the edge.",
    icon: Cpu,
    description:
      "Embedded electronics, smart meters and remote read-out devices engineered for utilities, industry and infrastructure operators. From FPGA-grade silicon to ruggedised meter enclosures — designed in Türkiye, deployed at scale.",
    capabilities: [
      "Single-phase, three-phase and CT/CTPT smart meters",
      "Handheld units (HHD) with PLC, RF and BPLC support",
      "FPGA / embedded firmware development",
      "IDIS, ISO 17025, DLMS/COSEM, STS, Wi-SUN compliance",
    ],
    partnerSlugs: ["kuantek", "intheca"],
    outcomes: [
      "Tamper-resistant metering at -40°C to +80°C",
      "Plug-and-play GPRS / 3G / 4G / PLC / RF connectivity",
      "Class 0.2s active-energy accuracy",
    ],
  },
  {
    slug: "headend-integration",
    name: "Head-end Software & System Integration",
    short: "Head-end",
    tagline: "One platform for every meter, asset and data stream.",
    icon: Server,
    description:
      "GridBox — the head-end and meter data management platform powering four privatised electricity distribution operators in Türkiye since their privatisation, plus deployments in Africa, Iraq and Denmark. Built to be database-independent and to talk to anything in the field.",
    capabilities: [
      "GridBox HeadEnd, Settlement, LMS and Loss-Leak modules",
      "ALT-MBS Customer Information System (CIS)",
      "ERP, banking and government-services integration",
      "Asset Management Systems with Utiligize (Denmark)",
    ],
    partnerSlugs: ["hayen", "utiligize"],
    outcomes: [
      "4 privatised Turkish DSOs running on the platform",
      "International deployments in Africa & Iraq",
      "GSM, DSL, PLC, RF, BPL device coverage",
    ],
  },
  {
    slug: "energy-markets",
    name: "Energy Markets & Trading Operations",
    short: "Energy Markets",
    tagline: "Cost-optimised energy procurement and market operations.",
    icon: LineChart,
    description:
      "Energy supply, balancing, and EPİAŞ market-side operations for industrial consumers, OIZs and campuses. Wholesale execution, dispatch optimisation and tariff structuring — built around the Turkish electricity market.",
    capabilities: [
      "Bilateral electricity supply contracts",
      "EPİAŞ day-ahead and intraday market operations",
      "Imbalance and balancing-group management",
      "Tariff design for OIZs, campuses and industrial sites",
    ],
    partnerSlugs: ["ant"],
    outcomes: [
      "Direct procurement for industrial customers",
      "Real-time market participation",
      "Measurable opex reduction on energy bills",
    ],
  },
  {
    slug: "ai-development",
    name: "Applied AI & Forecasting",
    short: "AI",
    tagline: "Predictive models trained on real grid and asset data.",
    icon: BrainCircuit,
    description:
      "AI-driven generation forecasting, predictive maintenance and consumption optimisation for renewable assets, EMS deployments and distribution networks. Includes wind farm modelling delivered for SANKO Çatalca RES.",
    capabilities: [
      "Wind & solar generation forecasting (mast / mast-less)",
      "Predictive maintenance for renewable assets",
      "Load and consumption prediction for DSOs",
      "EMS optimisation and anomaly detection",
    ],
    partnerSlugs: ["cozeka"],
    outcomes: [
      "Wind farm modelling delivered with and without mast data",
      "AI layered onto existing EMS deployments",
      "Forecast-driven procurement and dispatch",
    ],
  },
  {
    slug: "sustainability",
    name: "Environmental Data & ESG Reporting",
    short: "Sustainability",
    tagline: "From operational data to auditor-ready ESG disclosures.",
    icon: Leaf,
    description:
      "CO₂, water and environmental data automation aligned with European and Turkish reporting frameworks. Operational metering data is converted into auditable Scope 1–3 disclosures and energy-efficiency reporting.",
    capabilities: [
      "Modular ESG data collection and consolidation",
      "Scope 1, 2 and 3 carbon accounting",
      "Water and resource-use tracking",
      "Auditor-ready reports for EU & Turkish regulations",
    ],
    partnerSlugs: ["cleture"],
    outcomes: [
      "MEB Energy Efficiency Project (MebEn)",
      "Continuous reporting from existing meter data",
      "Compliance with CSRD-aligned frameworks",
    ],
  },
  {
    slug: "power-electronics",
    name: "Power Electronics & UPS Systems",
    short: "Power Electronics",
    tagline: "Mission-critical power continuity for sites that cannot fail.",
    icon: Plug,
    description:
      "UPS systems, voltage regulators, batteries and solar power electronics for data centres, hospitals, OIZs and grid-edge installations. Manufactured in Türkiye since 1988 and exported to 60+ countries.",
    capabilities: [
      "Online and line-interactive UPS systems",
      "Voltage regulators and stabilisers",
      "Battery systems and solar inverters",
      "Site engineering, commissioning and service",
    ],
    partnerSlugs: ["enel"],
    outcomes: [
      "Manufacturing depth since 1988",
      "Exports to more than 60 countries",
      "Field-proven continuity for critical loads",
    ],
  },
];

export const findSolution = (slug: string) =>
  solutions.find((s) => s.slug === slug);

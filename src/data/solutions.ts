import {
  CircuitBoard,
  Eye,
  Activity,
  Battery,
  Cpu,
  Leaf,
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
    slug: "hw",
    name: "Infinium HW",
    short: "Hardware",
    tagline: "Embedded systems and industrial electronics.",
    icon: CircuitBoard,
    description:
      "Infinium HW designs the embedded boards, FPGA-grade silicon, sensors and ruggedised industrial electronics that bridge the rest of the platform with the physical world — from smart meters to handheld units and field IoT devices.",
    capabilities: [
      "FPGA & embedded HW/SW co-design",
      "Single-phase, three-phase and CT/CTPT smart meters",
      "Handheld units (HHD) with PLC, RF and BPLC",
      "IDIS, ISO 17025, DLMS/COSEM, STS, Wi-SUN compliance",
    ],
    partnerSlugs: ["intheca", "kuantek"],
    outcomes: [
      "Tamper-resistant metering at -40°C to +80°C",
      "Class 0.2s active-energy accuracy",
      "Plug-and-play GPRS / 3G / 4G / PLC / RF connectivity",
    ],
  },
  {
    slug: "vision",
    name: "Infinium Vision Intelligence",
    short: "Vision",
    tagline: "Computer vision for surveillance, analytics and smart cities.",
    icon: Eye,
    description:
      "Infinium Vision Intelligence develops vision pipelines for security, traffic, industrial monitoring and urban analytics — combining a head-end / data backbone with applied AI models trained on real grid and asset data.",
    capabilities: [
      "Real-time surveillance and analytics pipelines",
      "Smart-city traffic and incident detection",
      "Industrial-monitoring vision models",
      "Head-end integration with operator dashboards",
    ],
    partnerSlugs: ["hayen", "cozeka"],
    outcomes: [
      "Vision pipelines deployed alongside metering data",
      "AI inference layered into existing operator tooling",
      "Anomaly detection across video and telemetry streams",
    ],
  },
  {
    slug: "monitoring",
    name: "Infinium Monitoring",
    short: "Monitoring",
    tagline: "Energy tracking and operational dashboards.",
    icon: Activity,
    description:
      "Infinium Monitoring delivers real-time energy and asset telemetry, asset-management modelling and power-continuity instrumentation — surfacing actionable signals through dashboards built for plant teams, utilities and OIZs.",
    capabilities: [
      "Energy and consumption tracking",
      "Operational dashboards for plants & sites",
      "Asset-management lifecycle modelling",
      "UPS, voltage and power-quality telemetry",
    ],
    partnerSlugs: ["upu", "utiligize", "enel"],
    outcomes: [
      "Live dashboards across renewable and industrial assets",
      "Lifecycle models for ~35 grid asset classes",
      "Power-continuity instrumentation on critical loads",
    ],
  },
  {
    slug: "energies",
    name: "Infinium Energies",
    short: "Energy",
    tagline: "Renewable & hydrogen systems, deployed at scale.",
    icon: Battery,
    description:
      "Infinium Energies builds and integrates renewable generation, energy supply and hydrogen infrastructure — from project development and EPC through grid commissioning and EPİAŞ market operations.",
    capabilities: [
      "Solar, wind and battery-storage EPC",
      "Hydrogen systems research & development",
      "EPİAŞ day-ahead and intraday market operations",
      "Bilateral electricity supply & balancing",
    ],
    partnerSlugs: ["inrag", "goktekin", "ant"],
    outcomes: [
      "Battery storage facility delivered with TÜBİTAK",
      "Wind farm modelling for SANKO Çatalca RES",
      "Direct procurement and balancing for industrial customers",
    ],
  },
  {
    slug: "compute",
    name: "Infinium Compute",
    short: "Compute",
    tagline: "AI silicon and edge compute for industrial workloads.",
    icon: Cpu,
    description:
      "Infinium Compute brings high-performance AI silicon and edge inference platforms to industrial sites, energy assets and smart-city infrastructure — running the models built across the rest of the platform.",
    capabilities: [
      "AI accelerators",
      "Edge compute nodes",
      "On-prem inference",
      "Model deployment & ops",
    ],
    partnerSlugs: ["sophgo"],
    outcomes: [
      "Edge inference at substations & industrial sites",
      "On-prem deployment for regulated workloads",
      "Hardware-aligned model optimisation",
    ],
  },
  {
    slug: "sustainability",
    name: "Infinium Sustainability",
    short: "Sustainability",
    tagline: "ESG, carbon tracking and reporting infrastructure.",
    icon: Leaf,
    description:
      "Infinium Sustainability turns operational data into auditable ESG and carbon insight — Scope 1, 2 and 3 accounting, water and resource tracking, and audit-ready disclosures aligned with European and Turkish regulation.",
    capabilities: [
      "Modular ESG data collection & consolidation",
      "Scope 1, 2 and 3 carbon accounting",
      "Water and resource-use tracking",
      "CSRD-aligned auditor-ready reporting",
    ],
    partnerSlugs: ["cleture"],
    outcomes: [
      "MEB Energy Efficiency Project (MebEn)",
      "Continuous reporting from existing meter data",
      "Compliance with EU & Turkish frameworks",
    ],
  },
];

export const findSolution = (slug: string) =>
  solutions.find((s) => s.slug === slug);

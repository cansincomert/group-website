import { Battery, Cpu, Eye, CircuitBoard, Leaf, Activity, type LucideIcon } from "lucide-react";

export type Unit = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  icon: LucideIcon;
  capabilities: string[];
  partners: { name: string; note?: string }[];
  description: string;
};

export const units: Unit[] = [
  {
    slug: "energies",
    name: "Infinium Energies",
    short: "Energy",
    tagline: "Renewable & hydrogen systems, deployed at scale.",
    icon: Battery,
    capabilities: ["Renewable installation", "Hydrogen systems", "Grid integration", "EPC partnerships"],
    partners: [{ name: "INRAG" }, { name: "Göktekin Enerji" }],
    description:
      "Infinium Energies builds and integrates renewable generation and hydrogen infrastructure — from project development to commissioning — in partnership with established EPC and research operators.",
  },
  {
    slug: "compute",
    name: "Infinium Compute",
    short: "Compute",
    tagline: "AI silicon and edge compute for industrial workloads.",
    icon: Cpu,
    capabilities: ["AI accelerators", "Edge compute nodes", "On-prem inference", "Model deployment"],
    partners: [{ name: "Sophgo", note: "AI chip partner" }],
    description:
      "Infinium Compute brings high-performance AI silicon and edge inference platforms to industrial sites, energy assets, and smart-city infrastructure.",
  },
  {
    slug: "vision",
    name: "Infinium Vision Intelligence",
    short: "Vision",
    tagline: "Computer vision for surveillance, analytics and smart cities.",
    icon: Eye,
    capabilities: ["Computer vision", "Surveillance & analytics", "Smart city pipelines", "Real-time inference"],
    partners: [],
    description:
      "Infinium Vision Intelligence develops vision pipelines for security, traffic, industrial monitoring and urban analytics — running on Infinium Compute hardware.",
  },
  {
    slug: "hw",
    name: "Infinium HW",
    short: "Hardware",
    tagline: "Embedded systems and industrial electronics.",
    icon: CircuitBoard,
    capabilities: ["Embedded systems", "Industrial electronics", "Custom firmware", "Ruggedized devices"],
    partners: [],
    description:
      "Infinium HW designs the embedded boards, sensors and industrial electronics that bridge our compute and energy stacks with the physical world.",
  },
  {
    slug: "sustainability",
    name: "Infinium Sustainability",
    short: "Sustainability",
    tagline: "ESG, carbon tracking and reporting infrastructure.",
    icon: Leaf,
    capabilities: ["ESG frameworks", "Carbon accounting", "Scope 1–3 tracking", "Compliance reporting"],
    partners: [{ name: "Cleture" }],
    description:
      "Infinium Sustainability turns operational data into auditable ESG and carbon insight, in partnership with Cleture's reporting platform.",
  },
  {
    slug: "monitoring",
    name: "Infinium Monitoring",
    short: "Monitoring",
    tagline: "Energy tracking and operational dashboards.",
    icon: Activity,
    capabilities: ["Energy tracking", "Operational dashboards", "Anomaly detection", "Asset telemetry"],
    partners: [{ name: "Upu.io" }],
    description:
      "Infinium Monitoring delivers real-time energy and asset telemetry, surfacing actionable signals through dashboards built with Upu.io.",
  },
];

export const partners = [
  { name: "Sophgo", role: "AI Compute" },
  { name: "INRAG", role: "Hydrogen R&D" },
  { name: "Göktekin Enerji", role: "Energy EPC" },
  { name: "Upu.io", role: "Monitoring" },
  { name: "Cleture", role: "Sustainability" },
];
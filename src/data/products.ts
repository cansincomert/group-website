import { Boxes, Database, Gauge, GraduationCap, Radio, Workflow, type LucideIcon } from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  family: string;
  tagline: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  since?: number;
};

export const products: Product[] = [
  {
    slug: "gridbox",
    name: "GridBox",
    family: "Head-end & MDM",
    tagline: "Head-end and meter data management for distribution operators.",
    icon: Boxes,
    since: 2011,
    description:
      "GridBox is the head-end and meter data management suite that powers four privatised Turkish electricity distribution operators. Database-independent, vendor-neutral and built to integrate with any meter or downstream system.",
    features: [
      "GSM, DSL, PLC, RF and BPL device support",
      "Works with multiple MDM solutions",
      "GridBox HeadEnd · Settlement · LMS · Loss-Leak",
      "Free Consumer & Supplier Management",
    ],
  },
  {
    slug: "alt-mbs",
    name: "ALT-MBS",
    family: "Customer Information System",
    tagline: "End-to-end customer, billing and field operations platform.",
    icon: Database,
    description:
      "ALT-MBS is a high-throughput Customer Information System covering customer tracking, billing, collections, e-billing, ERP, banking and government-services integration, plus AMR/AMI integration and field operations.",
    features: [
      "OLTP-grade transaction processing",
      "ERP and online-banking integration",
      "E-billing and government-services integration",
      "Field personnel & operations management",
      "AMR / AMI and CRM / DMS / OMS integration",
    ],
  },
  {
    slug: "mass",
    name: "MASS",
    family: "National Smart Meter Programme",
    tagline: "Head-end protocol development for the Turkish National Smart Meter Programme.",
    icon: Workflow,
    description:
      "Protocol development and head-end commission work delivered for the Milli Akıllı Sayaç Sistemleri (MASS) initiative — the national programme standardising smart-meter communications across Türkiye.",
    features: [
      "HeadEnd protocol commission contributions",
      "Compliance with national smart-meter standards",
      "Integration with existing utility infrastructure",
    ],
  },
  {
    slug: "meben",
    name: "MebEn",
    family: "Energy Efficiency",
    tagline: "Ministry of Education energy-efficiency programme.",
    icon: GraduationCap,
    description:
      "MebEn is the Energy Efficiency Project run with Türkiye's Ministry of National Education, applying smart metering, monitoring and reporting across schools and education campuses.",
    features: [
      "Campus-level metering deployment",
      "Energy-efficiency dashboards",
      "Reporting aligned with MEB requirements",
    ],
  },
  {
    slug: "smart-meters",
    name: "Smart Meter Family",
    family: "Hardware",
    tagline: "Single-phase, three-phase and CT/CTPT smart meters.",
    icon: Gauge,
    description:
      "A complete smart-meter family covering 1P2W and 3P4W service types with CT and CT/PT variants, supporting GPRS / 3G / 4G / PLC / RF communication and IEC / STS standards.",
    features: [
      "Class 1 / 0.5 / 0.2s active-energy accuracy",
      "AC 240 V (single-phase) and 3×240/416 V (three-phase)",
      "100 A latch relay with credit-based switching",
      "AES-GCM encryption, STS compliance, full event logging",
      "-40 °C to +80 °C, IP54, polycarbonate + glass-fibre enclosure",
    ],
  },
  {
    slug: "hhd",
    name: "HHD — Handheld Unit",
    family: "User Interface Unit",
    tagline: "Field-ready handheld for paired smart-meter operations.",
    icon: Radio,
    description:
      "Advanced user-interface unit that pairs with the smart-meter family over PLC (G3 / HPLC / BPLC) or RF, surfacing real-time credit, consumption, voltage, current, power factor and frequency directly from the meter.",
    features: [
      "G3 / HPLC / BPLC and RF support",
      "Real-time credit & consumption",
      "Voltage, current, power, PF and frequency",
      "Direct meter read-back for high accuracy",
    ],
  },
];

export const findProduct = (slug: string) => products.find((p) => p.slug === slug);

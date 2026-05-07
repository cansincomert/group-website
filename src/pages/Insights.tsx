import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Group news",
    date: "January 2026",
    title: "Infinium Group is formed",
    excerpt:
      "Eight specialist companies and six solution domains — hardware, head-end software, energy markets, AI, ESG and power electronics — unify under a single integrator.",
  },
  {
    tag: "Product",
    date: "2025",
    title: "GridBox HeadEnd, LMS, Settlement and Loss-Leak go live",
    excerpt:
      "The latest GridBox modules — head-end, load management, settlement and loss / leak detection — round out a 15-year platform roadmap.",
  },
  {
    tag: "Partnership",
    date: "September 2024",
    title: "EMS for solar generation: corporate identity and screen designs delivered",
    excerpt:
      "Infinium delivers corporate identity, screen designs and function development for an Energy Management System on a solar generation plant.",
  },
  {
    tag: "Project",
    date: "May 2024",
    title: "Wind-farm modelling for SANKO Çatalca RES",
    excerpt:
      "Mast-based and mast-less wind forecasting models delivered for the SANKO Çatalca wind farm — joint work between Infinium and CoZeka.",
  },
  {
    tag: "R&D",
    date: "January 2024",
    title: "Battery Storage Facility — TÜBİTAK research project",
    excerpt:
      "Battery storage facility programme delivered as a TÜBİTAK research project, marking Infinium's entry into energy-storage R&D.",
  },
  {
    tag: "International",
    date: "Ongoing",
    title: "Asset Management with Utiligize — Denmark, Africa, Iraq",
    excerpt:
      "International deployments of GridBox and asset-management systems alongside Danish partner Utiligize.",
  },
  {
    tag: "Public sector",
    date: "Multi-year",
    title: "MASS — National Smart Meter Programme head-end",
    excerpt:
      "Head-end protocol commission contributions for the Milli Akıllı Sayaç Sistemleri programme, the national initiative standardising smart-meter communications across Türkiye.",
  },
  {
    tag: "Public sector",
    date: "Multi-year",
    title: "MebEn — Ministry of National Education energy-efficiency",
    excerpt:
      "Campus-level metering, monitoring and reporting deployed across Türkiye's education estate.",
  },
];

const Insights = () => (
  <>
    <PageHero
      eyebrow="Insights & News"
      title={
        <>
          Notes from across the{" "}
          <span className="text-gradient">Infinium platform.</span>
        </>
      }
      subtitle="Programme updates, partnership announcements and field notes from fifteen years of GridBox, ALT-MBS and the Infinium ecosystem."
    />
    <section className="container py-20">
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-primary">
                {p.tag}
              </span>
              <span>{p.date}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Insights;

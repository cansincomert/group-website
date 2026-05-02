import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Partnership",
    date: "May 2026",
    title: "Infinium Compute partners with Sophgo on edge AI silicon",
    excerpt: "A multi-year collaboration to bring high-performance AI accelerators to industrial and energy sites.",
  },
  {
    tag: "Thought Leadership",
    date: "Apr 2026",
    title: "Hydrogen in Turkey: from pilots to production",
    excerpt: "Why the next 24 months are decisive for the Turkish hydrogen value chain — and where capital should flow.",
  },
  {
    tag: "Sustainability",
    date: "Mar 2026",
    title: "Operational ESG: making Scope 3 measurable",
    excerpt: "How Infinium Sustainability and Cleture are turning operational data into auditable carbon insight.",
  },
  {
    tag: "Partnership",
    date: "Feb 2026",
    title: "Energy monitoring at scale with Upu.io",
    excerpt: "Inside the dashboards now running across renewable assets and industrial operators.",
  },
];

const Insights = () => (
  <>
    <PageHero
      eyebrow="Insights & News"
      title={<>Perspectives from across the <span className="text-gradient">Infinium platform.</span></>}
      subtitle="Partnership announcements, thought leadership and field notes from our business units."
    />
    <section className="container py-20">
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-primary">{p.tag}</span>
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
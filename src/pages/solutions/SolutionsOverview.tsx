import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { solutions } from "@/data/solutions";
import { partnersBySolution } from "@/data/partners";

const SolutionsOverview = () => (
  <>
    <PageHero
      eyebrow="Business Units"
      title={
        <>
          Six Infinium units.{" "}
          <span className="text-gradient">One integrator.</span>
        </>
      }
      subtitle="Each unit is led by specialist partners and integrated end-to-end by Infinium Group — Infinium HW, Vision Intelligence, Monitoring, Energies, Compute and Sustainability."
    />
    <section className="container py-20">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => {
          const linkedPartners = partnersBySolution(s.slug);
          return (
            <Link
              key={s.slug}
              to={`/solutions/${s.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-xl font-semibold leading-tight">
                {s.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>

              {linkedPartners.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {linkedPartners.map((p) => (
                    <span
                      key={p.slug}
                      className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {p.name}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-6 inline-flex items-center gap-1 text-sm text-primary">
                Open solution{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  </>
);

export default SolutionsOverview;

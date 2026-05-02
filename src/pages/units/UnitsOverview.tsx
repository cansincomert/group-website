import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { units } from "@/data/units";

const UnitsOverview = () => (
  <>
    <PageHero
      eyebrow="Business Units"
      title={<>Six focused units. <span className="text-gradient">One platform.</span></>}
      subtitle="Each Infinium unit is operator-led, partner-backed and engineered for measurable outcomes."
    />
    <section className="container py-20">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {units.map((u) => (
          <Link
            key={u.slug}
            to={`/units/${u.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <u.icon className="h-5 w-5" />
            </div>
            <div className="font-display text-xl font-semibold">{u.name}</div>
            <p className="mt-2 text-sm text-muted-foreground">{u.tagline}</p>
            <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
              Open unit <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default UnitsOverview;
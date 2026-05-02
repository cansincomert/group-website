import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { units } from "@/data/units";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

const UnitDetail = () => {
  const { slug } = useParams();
  const unit = units.find((u) => u.slug === slug);
  if (!unit) return <Navigate to="/units" replace />;

  const Icon = unit.icon;
  const idx = units.findIndex((u) => u.slug === unit.slug);
  const next = units[(idx + 1) % units.length];

  return (
    <>
      <PageHero
        eyebrow={unit.short}
        title={<>{unit.name}</>}
        subtitle={unit.tagline}
      />
      <section className="container py-16">
        <Link to="/units" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> All units
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Icon className="h-6 w-6" />
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">{unit.description}</p>

            <h3 className="mt-12 text-xs uppercase tracking-[0.22em] text-muted-foreground">Capabilities</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {unit.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2 rounded-lg border border-border bg-card/60 p-3">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Partners</div>
              {unit.partners.length === 0 ? (
                <p className="mt-3 text-sm text-muted-foreground">In-house developed within the Infinium platform.</p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {unit.partners.map((p) => (
                    <li key={p.name} className="rounded-lg border border-border bg-background/40 p-3">
                      <div className="font-display text-base font-semibold">{p.name}</div>
                      {p.note && <div className="text-xs text-muted-foreground">{p.note}</div>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Engage</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Discuss a deployment, pilot or partnership with the {unit.short} team.
              </p>
              <Button asChild size="sm" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Contact unit <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
              </Button>
            </div>
          </aside>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-border pt-8">
          <span className="text-sm text-muted-foreground">Next unit</span>
          <Link to={`/units/${next.slug}`} className="group inline-flex items-center gap-2 font-display text-lg font-semibold hover:text-primary">
            {next.name}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default UnitDetail;
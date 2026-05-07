import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { products } from "@/data/products";

const ProductsOverview = () => (
  <>
    <PageHero
      eyebrow="Products"
      title={
        <>
          Field-tested products,{" "}
          <span className="text-gradient">deployed since 2011.</span>
        </>
      }
      subtitle="GridBox, ALT-MBS and the Infinium hardware family — running across privatised distribution operators, OIZs, public-sector campuses and international deployments."
    />
    <section className="container py-20">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.slug}
            to={`/products/${p.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <p.icon className="h-5 w-5" />
              </div>
              {p.since && (
                <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                  Since {p.since}
                </span>
              )}
            </div>
            <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {p.family}
            </div>
            <div className="mt-1 font-display text-xl font-semibold">{p.name}</div>
            <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
            <div className="mt-auto pt-6 inline-flex items-center gap-1 text-sm text-primary">
              Open product{" "}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default ProductsOverview;

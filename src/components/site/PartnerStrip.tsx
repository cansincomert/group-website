import { Link } from "react-router-dom";
import { partners } from "@/data/partners";

export const PartnerStrip = () => (
  <section className="border-y border-border/60 bg-card/30 py-10">
    <div className="container">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Ecosystem partners
        </div>
        <Link
          to="/partners"
          className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {partners.map((p) => (
          <Link
            key={p.slug}
            to={`/partners/${p.slug}`}
            className="group flex flex-col items-center justify-center rounded-xl border border-border/60 bg-background/40 px-3 py-5 text-center transition-colors hover:border-primary/40"
          >
            <div className="font-display text-base font-semibold tracking-tight">
              {p.name}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              {p.domain}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

import { partners } from "@/data/units";

export const PartnerStrip = () => (
  <section className="border-y border-border/60 bg-card/30 py-10">
    <div className="container">
      <div className="mb-6 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
        Our Partners
      </div>
      <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-5">
        {partners.map((p) => (
          <div
            key={p.name}
            className="group relative flex flex-col items-center justify-center rounded-xl border border-border/60 bg-background/40 px-4 py-6 text-center transition-colors hover:border-primary/40"
          >
            <div className="font-display text-lg font-semibold tracking-tight">{p.name}</div>
            <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
              {p.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
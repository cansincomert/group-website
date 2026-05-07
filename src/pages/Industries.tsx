import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  Zap,
  Building2,
  Factory,
  GraduationCap,
  Hospital,
  Globe2,
} from "lucide-react";
import { clientGroups } from "@/data/clients";

const list = [
  {
    icon: Zap,
    name: "Electricity Distribution & Retail",
    body: "Privatised distribution operators across Türkiye — head-end metering, ALT-MBS billing, settlement, loss-leak detection and load management.",
  },
  {
    icon: Factory,
    name: "Industry & OIZs",
    body: "Organised Industrial Zones, factories and shopping malls. Energy procurement, metering, monitoring and ESG reporting in one stack.",
  },
  {
    icon: GraduationCap,
    name: "Education Campuses",
    body: "MebEn — the Ministry of National Education energy-efficiency programme rolled across schools and education campuses.",
  },
  {
    icon: Hospital,
    name: "Healthcare & Critical Loads",
    body: "Hospitals and mission-critical facilities backed by Enel Enerji UPS systems and continuous monitoring.",
  },
  {
    icon: Building2,
    name: "Public Sector",
    body: "TEDAŞ, EPDK R&D and EPİAŞ market participation — protocols, programmes and head-end commission work.",
  },
  {
    icon: Globe2,
    name: "International",
    body: "Asset management deployments with Utiligize in Denmark and Africa, plus GridBox applications in Iraq.",
  },
];

const Industries = () => (
  <>
    <PageHero
      eyebrow="Industries"
      title={
        <>
          Built for the operators of{" "}
          <span className="text-gradient">critical systems.</span>
        </>
      }
      subtitle="From privatised electricity distribution to OIZs, education campuses, hospitals and international utility deployments — Infinium Group ships into the systems that the country runs on."
    />

    <section className="container py-20">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((i) => (
          <article
            key={i.name}
            className="rounded-2xl border border-border bg-card p-7 shadow-card transition-colors hover:border-primary/40"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold leading-tight">{i.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {i.body}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="border-t border-border/60 bg-card/20 py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Track record"
          title={
            <>
              Customers and partners{" "}
              <span className="text-gradient">across Türkiye and beyond.</span>
            </>
          }
          subtitle="A reference list spanning seven distribution operators, multiple regulators, OIZs, public-sector programmes and international utilities."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {clientGroups.map((g) => (
            <article
              key={g.title}
              className="rounded-2xl border border-border bg-background/60 p-7 shadow-card"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary">
                {g.title}
              </div>
              {g.subtitle && (
                <div className="mt-1 text-xs text-muted-foreground">
                  {g.subtitle}
                </div>
              )}
              <ul className="mt-5 space-y-3">
                {g.items.map((c) => (
                  <li
                    key={c.name}
                    className="flex flex-col rounded-lg border border-border/60 bg-card/40 p-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium">{c.name}</span>
                    {c.note && (
                      <span className="text-xs text-muted-foreground">
                        {c.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Industries;

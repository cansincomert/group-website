import { Link } from "react-router-dom";
import {
  ArrowRight,
  CircuitBoard,
  Eye,
  Activity,
  Battery,
  Cpu,
  Leaf,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PartnerMarquee } from "@/components/site/PartnerMarquee";
import { SectionHeader, Eyebrow } from "@/components/site/SectionHeader";
import { solutions } from "@/data/solutions";
import { products } from "@/data/products";
import { milestones } from "@/data/history";
import { headlineStats } from "@/data/clients";
import hero from "@/assets/hero.jpg";

const pillars = [
  { icon: CircuitBoard, name: "Infinium HW", desc: "Embedded systems & industrial electronics.", to: "/solutions/hw" },
  { icon: Eye, name: "Vision Intelligence", desc: "Computer vision & smart-city analytics.", to: "/solutions/vision" },
  { icon: Activity, name: "Monitoring", desc: "Energy tracking & operational dashboards.", to: "/solutions/monitoring" },
  { icon: Battery, name: "Energies", desc: "Renewables, storage & hydrogen at scale.", to: "/solutions/energies" },
  { icon: Cpu, name: "Compute", desc: "AI silicon & edge inference.", to: "/solutions/compute" },
  { icon: Leaf, name: "Sustainability", desc: "ESG, carbon and audit-ready reporting.", to: "/solutions/sustainability" },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-hero" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
        <div className="container relative pt-24 pb-20 md:pt-36 md:pb-32">
          <div className="max-w-4xl animate-fade-up">
            <Eyebrow>Infinium Group · A Turkish technology conglomerate</Eyebrow>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl">
              Hardware, software and energy —{" "}
              <span className="text-gradient">integrated.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Twelve specialist companies. Six Infinium units. One
              integrator. Engineering the data, software and physical
              infrastructure of the Turkish energy sector since 2011.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/solutions">
                  Explore solutions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border bg-background/40 backdrop-blur"
              >
                <Link to="/about">About the group</Link>
              </Button>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {pillars.map((p, i) => (
              <Link
                key={p.name}
                to={p.to}
                style={{ animationDelay: `${100 + i * 80}ms` }}
                className="group relative animate-fade-up rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-base font-semibold">
                  {p.name}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                <ArrowRight className="absolute right-4 top-4 h-3.5 w-3.5 -translate-x-1 text-muted-foreground opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PartnerMarquee />

      {/* STATS */}
      <section className="container py-16 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {headlineStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <div className="font-display text-4xl font-semibold text-gradient md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium">{s.label}</div>
              <p className="mt-1 text-xs text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="container py-16 md:py-24">
        <SectionHeader
          eyebrow="Business Units"
          title={
            <>
              Six Infinium units.{" "}
              <span className="text-gradient">One integrator.</span>
            </>
          }
          subtitle="Each unit is led by specialist partners and integrated end-to-end by Infinium Group — hardware, vision intelligence, monitoring, renewable energies, AI compute and sustainability."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              to={`/solutions/${s.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-xl font-semibold leading-tight">
                {s.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
                Learn more{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-y border-border/60 bg-card/20 py-20 md:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Products"
            title={
              <>
                Field-tested platforms,{" "}
                <span className="text-gradient">deployed since 2011.</span>
              </>
            }
            subtitle="GridBox, ALT-MBS and the Infinium hardware family — running across privatised distribution operators, OIZs, public-sector campuses and international deployments."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
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
                <div className="mt-1 font-display text-lg font-semibold">
                  {p.name}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container py-20 md:py-24">
        <SectionHeader
          eyebrow="Track record"
          title={
            <>
              From the privatisation era{" "}
              <span className="text-gradient">to the conglomerate.</span>
            </>
          }
          subtitle="Fifteen years engineering the data, software and physical infrastructure of the Turkish energy sector — and now beyond."
        />
        <ol className="relative mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          {milestones.map((m) => (
            <li
              key={m.year}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="font-display text-3xl font-semibold text-gradient">
                {m.year}
              </div>
              <div className="mt-2 text-sm font-medium">{m.title}</div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {m.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <div className="absolute inset-0 bg-hero opacity-70" />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Build with Infinium.
              </h3>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Distribution operators, industrial groups, OIZs and public-sector
                campuses partner with Infinium Group to deploy unified
                infrastructure — measurable, integrated, supported.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/contact">
                Talk to us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { ArrowRight, Battery, Cpu, Eye, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PartnerStrip } from "@/components/site/PartnerStrip";
import { SectionHeader, Eyebrow } from "@/components/site/SectionHeader";
import { units } from "@/data/units";
import hero from "@/assets/hero.jpg";

const pillars = [
  { icon: Battery, name: "Energy", desc: "Renewables & hydrogen, deployed at scale.", to: "/units/energies" },
  { icon: Cpu, name: "Compute", desc: "AI silicon and edge inference.", to: "/units/compute" },
  { icon: Eye, name: "Vision", desc: "Computer vision for cities and industry.", to: "/units/vision" },
  { icon: Network, name: "Infrastructure", desc: "Embedded systems and monitoring.", to: "/units/hw" },
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
            <Eyebrow>Infinium Group</Eyebrow>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl">
              AI, Energy and Infrastructure —{" "}
              <span className="text-gradient">Unified.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Engineering the infrastructure of tomorrow. A multi-disciplinary platform
              integrating energy systems, artificial intelligence and industrial hardware.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/units">
                  Explore business units <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-background/40 backdrop-blur">
                <Link to="/about">About Infinium</Link>
              </Button>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Link
                key={p.name}
                to={p.to}
                style={{ animationDelay: `${100 + i * 80}ms` }}
                className="group relative animate-fade-up rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-lg font-semibold">{p.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <ArrowRight className="absolute right-5 top-5 h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PartnerStrip />

      {/* Business Units overview */}
      <section className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Business Units"
          title={<>One platform. <span className="text-gradient">Six disciplines.</span></>}
          subtitle="From renewable energy to embedded hardware, every unit is engineered to operate independently — and integrate seamlessly."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {units.map((u) => (
            <Link
              key={u.slug}
              to={`/units/${u.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <u.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-xl font-semibold">{u.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{u.tagline}</p>
              {u.partners.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {u.partners.map((p) => (
                    <span key={p.name} className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                      {p.name}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
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
                Energy operators, cities and industrial groups partner with us to deploy unified
                infrastructure — faster, smarter, measurable.
              </p>
            </div>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Talk to us <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
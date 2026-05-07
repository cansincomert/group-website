import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Layers, Compass, Sparkles, Building2, Users } from "lucide-react";
import { milestones } from "@/data/history";
import { Link } from "react-router-dom";

const points = [
  {
    icon: Layers,
    title: "Who we are",
    body: "Infinium Group is a Turkish technology conglomerate that integrates hardware, head-end software, energy markets, AI, sustainability and power electronics under one operating model.",
  },
  {
    icon: Compass,
    title: "Why we exist",
    body: "The energy transition, AI and industrial digitalisation are converging. Infinium exists to operationalise that convergence — at the scale of national distribution networks.",
  },
  {
    icon: Sparkles,
    title: "What makes us different",
    body: "Infinium owns the full stack — from FPGA silicon and smart meters to head-end software, energy procurement, ESG reporting and power continuity — through a tightly-knit partner ecosystem.",
  },
];

const founders = [
  {
    name: "M. Enes Kaya",
    role: "Co-founder · CEO",
    body: "Operating leadership of Infinium Group, responsible for product strategy, partner alignment and go-to-market across the platform.",
  },
  {
    name: "Cansın Cömert",
    role: "Co-founder · CTO",
    body: "Technical leadership across the GridBox suite, ALT-MBS and the integration layer that connects hardware, head-end and AI.",
  },
];

const About = () => (
  <>
    <PageHero
      eyebrow="About Infinium Group"
      title={
        <>
          A Turkish conglomerate built across{" "}
          <span className="text-gradient">disciplines.</span>
        </>
      }
      subtitle="Twelve specialist companies, eight solution domains, one integrator — engineering the data, software and physical infrastructure of the Turkish energy sector since 2011."
    />

    <section className="container py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {points.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="border-y border-border/60 bg-card/20 py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Operating model"
          title={
            <>
              Operator-led companies.{" "}
              <span className="text-gradient">Integrator-led delivery.</span>
            </>
          }
          subtitle="Each domain is led by specialist partners — Kuantek, Intheca, Hayen Teknoloji, Utiligize, Upu.io, ANT Enerji, Göktekin Enerji, INRAG, CoZeka, Sophgo, Cleture and Enel Enerji — while Infinium Group owns the system-integration layer, the GridBox and ALT-MBS platforms, and the customer relationship."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-background/60 p-7 shadow-card">
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Infinium Group</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The integrator. Owns the GridBox suite and ALT-MBS, contracts with
              utilities, OIZs and public-sector customers, and orchestrates the
              partner ecosystem on every deployment.
            </p>
            <Link
              to="/partners"
              className="mt-5 inline-flex text-sm text-primary hover:underline"
            >
              Meet the ecosystem →
            </Link>
          </article>
          <article className="rounded-2xl border border-border bg-background/60 p-7 shadow-card">
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Specialist partners</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Hardware (Kuantek, Intheca), head-end & asset management (Hayen
              Teknoloji, Utiligize), monitoring (Upu.io), energy markets
              (ANT Enerji), renewables & hydrogen (Göktekin Enerji, INRAG),
              AI & compute (CoZeka, Sophgo), sustainability (Cleture), power
              electronics (Enel Enerji).
            </p>
            <Link
              to="/solutions"
              className="mt-5 inline-flex text-sm text-primary hover:underline"
            >
              See the six solution domains →
            </Link>
          </article>
        </div>
      </div>
    </section>

    <section className="container py-20">
      <SectionHeader
        eyebrow="Founders"
        title="The team behind the integrator."
        subtitle="Infinium Group is led by an operator-CEO and a technical-CTO, governed by a three-seat board (CEO, CTO, Investor)."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {founders.map((f) => (
          <article
            key={f.name}
            className="rounded-2xl border border-border bg-card p-8 shadow-card"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-primary">
              {f.role}
            </div>
            <h3 className="mt-1 font-display text-2xl font-semibold">
              {f.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {f.body}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="border-t border-border/60 bg-card/20 py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Company history"
          title={
            <>
              From the privatisation era{" "}
              <span className="text-gradient">to the 2026 horizon.</span>
            </>
          }
          subtitle="Fifteen years of platform engineering, partner additions and reference deployments — plus the formation of Infinium Group itself."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {milestones.map((m) => (
            <li
              key={m.year}
              className="rounded-2xl border border-border bg-background/60 p-6 shadow-card"
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
      </div>
    </section>
  </>
);

export default About;

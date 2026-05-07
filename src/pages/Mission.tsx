import { PageHero } from "@/components/site/PageHero";
import { Target, Telescope, Compass } from "lucide-react";

const Mission = () => (
  <>
    <PageHero
      eyebrow="Mission & Vision"
      title={
        <>
          Operational today.{" "}
          <span className="text-gradient">Global tomorrow.</span>
        </>
      }
      subtitle="Infinium Group's purpose is to operationalise the convergence of energy, AI and industrial digitalisation — at the scale of national infrastructure."
    />
    <section className="container py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <Target className="h-5 w-5" />
            </div>
            <div className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Mission
            </div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              To deploy scalable, high-impact technology across energy, AI and
              critical infrastructure — under one integrator.
            </h2>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <Telescope className="h-5 w-5" />
            </div>
            <div className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Vision
            </div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              To be the global integrator of sustainable and intelligent energy
              systems — from Türkiye outward.
            </h2>
          </div>
        </article>
      </div>

      <article className="mt-6 overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Operating principles
            </div>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-xl border border-border bg-background/40 p-4 text-sm">
                <span className="font-medium">Specialist-led, integrator-delivered.</span>{" "}
                Each domain has a focused operating partner; Infinium owns the
                customer outcome.
              </li>
              <li className="rounded-xl border border-border bg-background/40 p-4 text-sm">
                <span className="font-medium">Database-independent, vendor-neutral.</span>{" "}
                The GridBox stack is engineered to talk to anything in the
                field.
              </li>
              <li className="rounded-xl border border-border bg-background/40 p-4 text-sm">
                <span className="font-medium">Field-grade by default.</span>{" "}
                If it cannot survive –40 °C, IP54 and tampering, it does not
                ship.
              </li>
              <li className="rounded-xl border border-border bg-background/40 p-4 text-sm">
                <span className="font-medium">Compliance-first.</span>{" "}
                IDIS, DLMS/COSEM, STS, ISO 17025, EPDK and EU/Turkish ESG
                regulation are baseline requirements.
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  </>
);

export default Mission;

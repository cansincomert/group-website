import { PageHero } from "@/components/site/PageHero";
import { Target, Telescope } from "lucide-react";

const Mission = () => (
  <>
    <PageHero
      eyebrow="Mission & Vision"
      title={<>Operational today. <span className="text-gradient">Global tomorrow.</span></>}
    />
    <section className="container py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <Target className="h-5 w-5" />
            </div>
            <div className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">Mission</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              To deploy scalable, high-impact technologies across energy, AI and infrastructure.
            </h2>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <Telescope className="h-5 w-5" />
            </div>
            <div className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">Vision</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              To become a global integrator of sustainable and intelligent systems.
            </h2>
          </div>
        </article>
      </div>
    </section>
  </>
);

export default Mission;
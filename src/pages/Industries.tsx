import { PageHero } from "@/components/site/PageHero";
import { Zap, Building2, Factory, Car } from "lucide-react";

const list = [
  { icon: Zap, name: "Energy & Utilities", body: "Renewable assets, hydrogen, grid integration and operational telemetry for energy operators." },
  { icon: Building2, name: "Smart Cities", body: "Urban computer vision, mobility analytics and energy dashboards for municipalities." },
  { icon: Factory, name: "Industrial", body: "Embedded systems, edge AI and ESG reporting for manufacturers and heavy industry." },
  { icon: Car, name: "Mobility", body: "Computer vision and edge inference platforms for transportation and fleet operations." },
];

const Industries = () => (
  <>
    <PageHero
      eyebrow="Industries"
      title={<>Built for the operators of <span className="text-gradient">critical systems.</span></>}
      subtitle="We work with the organisations that run the physical world — not just describe it."
    />
    <section className="container py-20">
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((i) => (
          <article key={i.name} className="rounded-2xl border border-border bg-card p-8 shadow-card transition-colors hover:border-primary/40">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold">{i.name}</h3>
            <p className="mt-2 text-muted-foreground">{i.body}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Industries;
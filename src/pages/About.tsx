import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Layers, Compass, Sparkles } from "lucide-react";

const points = [
  {
    icon: Layers,
    title: "Who we are",
    body: "Infinium Group is a multi-disciplinary technology platform integrating energy systems, artificial intelligence and industrial infrastructure under a single operating model.",
  },
  {
    icon: Compass,
    title: "Why we exist",
    body: "The energy transition, AI and industrial digitalisation are converging. We exist to deploy the systems that make this convergence operational — at industrial scale.",
  },
  {
    icon: Sparkles,
    title: "What makes us different",
    body: "We own the full stack — from silicon and sensors to renewables and reporting. Each business unit is operator-led, partner-backed and engineered for measurable outcomes.",
  },
];

const About = () => (
  <>
    <PageHero
      eyebrow="About"
      title={<>A platform built across <span className="text-gradient">disciplines.</span></>}
      subtitle="Infinium Group is a multi-disciplinary technology platform integrating energy systems, artificial intelligence, and industrial infrastructure."
    />
    <section className="container py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {points.map((p) => (
          <article key={p.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
    <section className="container pb-24">
      <SectionHeader
        eyebrow="Operating model"
        title="Operator-led units. Partner-backed delivery."
        subtitle="Each Infinium unit operates as a focused team with deep technical leadership, supported by an ecosystem of strategic partners — Sophgo, INRAG, Göktekin Enerji, Upu.io and Cleture."
      />
    </section>
  </>
);

export default About;
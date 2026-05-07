import { PageHero } from "@/components/site/PageHero";
import { Mail, MapPin, Briefcase, Handshake } from "lucide-react";

const Contact = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title={
        <>
          Let's build the{" "}
          <span className="text-gradient">next system.</span>
        </>
      }
      subtitle="Distribution operators, OIZs, public-sector buyers and international utilities — reach out for partnership, deployment or media enquiries."
    />
    <section className="container py-20">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <Mail className="h-5 w-5 text-primary" />
          <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Email
          </div>
          <a
            href="mailto:hello@infinium.group"
            className="mt-1 block text-2xl font-semibold hover:text-primary"
          >
            hello@infinium.group
          </a>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <MapPin className="h-5 w-5 text-primary" />
          <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Headquarters
          </div>
          <div className="mt-1 text-2xl font-semibold">Istanbul, Türkiye</div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <Briefcase className="h-5 w-5 text-primary" />
          <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Commercial
          </div>
          <div className="mt-1 text-base font-medium">
            RFPs, distribution-operator pilots, OIZ and campus deployments.
          </div>
          <a
            href="mailto:commercial@infinium.group"
            className="mt-3 inline-block text-sm text-primary hover:underline"
          >
            commercial@infinium.group
          </a>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <Handshake className="h-5 w-5 text-primary" />
          <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Partnerships
          </div>
          <div className="mt-1 text-base font-medium">
            International channel, asset-management and ESG platform
            partnerships.
          </div>
          <a
            href="mailto:partners@infinium.group"
            className="mt-3 inline-block text-sm text-primary hover:underline"
          >
            partners@infinium.group
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Contact;

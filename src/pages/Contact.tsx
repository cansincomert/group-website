import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import { Mail, MapPin, Briefcase, Handshake, ExternalLink } from "lucide-react";

const HQ_MAP_URL = "https://share.google/siLGPoRm0ZcraQnAx";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={
          <>
            {t("contact.titleA")}{" "}
            <span className="text-gradient">{t("contact.titleHighlight")}</span>
          </>
        }
        subtitle={t("contact.subtitle")}
      />
      <section className="container py-20">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <Mail className="h-5 w-5 text-primary" />
            <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("contact.email")}
            </div>
            <a
              href="mailto:info@infinium.group"
              className="mt-1 block text-2xl font-semibold hover:text-primary"
            >
              info@infinium.group
            </a>
          </div>
          <a
            href={HQ_MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl border border-border bg-card p-8 shadow-card transition-colors hover:border-primary/40"
          >
            <MapPin className="h-5 w-5 text-primary" />
            <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("contact.headquarters")}
            </div>
            <div className="mt-1 text-2xl font-semibold">Istanbul, Türkiye</div>
            <div className="mt-3 inline-flex items-center gap-1 text-sm text-primary opacity-80 group-hover:opacity-100">
              {t("contact.viewOnMap")}{" "}
              <ExternalLink className="h-3.5 w-3.5" />
            </div>
          </a>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <Briefcase className="h-5 w-5 text-primary" />
            <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("contact.commercial")}
            </div>
            <div className="mt-1 text-base font-medium">
              {t("contact.commercialBody")}
            </div>
            <a
              href="mailto:info@infinium.group?subject=Commercial%20enquiry"
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              info@infinium.group
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <Handshake className="h-5 w-5 text-primary" />
            <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("contact.partnerships")}
            </div>
            <div className="mt-1 text-base font-medium">
              {t("contact.partnershipsBody")}
            </div>
            <a
              href="mailto:info@infinium.group?subject=Partnership%20enquiry"
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              info@infinium.group
            </a>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <a
            href={HQ_MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="block p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t("contact.viewOnMap")}
                </div>
                <div className="mt-1 font-display text-lg font-semibold">
                  Infinium Group · Istanbul, Türkiye
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-primary">
                share.google/siLGPoRm0ZcraQnAx{" "}
                <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;

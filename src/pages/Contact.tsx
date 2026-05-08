import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import { Mail, MapPin, Briefcase, Handshake, ExternalLink } from "lucide-react";

const HQ_MAP_URL =
  "https://www.google.com/maps/place/Infinium+Group/@41.1047845,29.0244623,14.7z/data=!4m6!3m5!1s0x14cab5e46e6fa4f5:0xc49bf3ca2efe63a8!8m2!3d41.1080206!4d29.0141527!16s%2Fg%2F11yhdf2xpp";

const HQ_LAT = 41.1080206;
const HQ_LNG = 29.0141527;

const buildEmbedUrl = (lang: string) =>
  `https://www.google.com/maps?q=${HQ_LAT},${HQ_LNG}&hl=${encodeURIComponent(
    lang,
  )}&z=16&output=embed`;

const Contact = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? "en")
    .toString()
    .slice(0, 2)
    .toLowerCase();

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
            <div className="mt-1 text-2xl font-semibold">
              Infinium Group
            </div>
            <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("contact.addressLine1")}
              <br />
              {t("contact.addressLine2")}
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary opacity-80 group-hover:opacity-100">
              {t("contact.openInMaps")}{" "}
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

        {/* Embedded map */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <div className="flex flex-col gap-3 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t("contact.address")}
              </div>
              <div className="mt-1 font-display text-lg font-semibold">
                Infinium Group · Maslak, Sarıyer / İstanbul
              </div>
            </div>
            <a
              href={HQ_MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 self-start rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-primary hover:border-primary/40"
            >
              {t("contact.openInMaps")}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
            <iframe
              key={lang}
              title={t("contact.mapEmbedTitle")}
              src={buildEmbedUrl(lang)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

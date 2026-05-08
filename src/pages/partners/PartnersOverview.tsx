import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { useLocalisedPartners, useLocalisedSolutions } from "@/i18n/content";

const PartnersOverview = () => {
  const { t } = useTranslation();
  const partners = useLocalisedPartners();
  const solutions = useLocalisedSolutions();
  const findSolution = (slug: string) => solutions.find((s) => s.slug === slug);

  return (
    <>
      <PageHero
        eyebrow={t("partnersOverview.eyebrow")}
        title={
          <>
            {t("partnersOverview.titleA")}{" "}
            <span className="text-gradient">
              {t("partnersOverview.titleHighlight")}
            </span>
          </>
        }
        subtitle={t("partnersOverview.subtitle")}
      />
      <section className="container py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {partners.map((p) => {
            const solution = findSolution(p.solutionSlug);
            return (
              <article
                key={p.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-primary">
                      {p.domain}
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-semibold leading-tight">
                      {p.name}
                    </h3>
                    {p.legalName && (
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {p.legalName}
                      </div>
                    )}
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-border p-2 text-muted-foreground hover:border-primary/40 hover:text-primary"
                      aria-label={t("common.visitWebsite", { name: p.name })}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {p.hq}
                  </span>
                  {solution && (
                    <Link
                      to={`/solutions/${solution.slug}`}
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      {solution.short}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PartnersOverview;

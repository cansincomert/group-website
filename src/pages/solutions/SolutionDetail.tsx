import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { findPartner } from "@/data/partners";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import {
  useLocalisedSolution,
  useLocalisedSolutions,
} from "@/i18n/content";

const SolutionDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const solution = useLocalisedSolution(slug);
  const solutions = useLocalisedSolutions();

  if (!solution) return <Navigate to="/solutions" replace />;

  const Icon = solution.icon;
  const idx = solutions.findIndex((u) => u.slug === solution.slug);
  const next = solutions[(idx + 1) % solutions.length];
  const linkedPartners = solution.partnerSlugs
    .map((s) => findPartner(s))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={solution.short}
        title={<>{solution.name}</>}
        subtitle={solution.tagline}
      />
      <section className="container py-16">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {t("common.backToSolutions")}
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Icon className="h-6 w-6" />
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {solution.description}
            </p>

            <h3 className="mt-12 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t("common.capabilities")}
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {solution.capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 rounded-lg border border-border bg-card/60 p-3"
                >
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-sm">{c}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t("common.fieldOutcomes")}
            </h3>
            <ul className="mt-4 space-y-2">
              {solution.outcomes.map((o) => (
                <li
                  key={o}
                  className="rounded-lg border border-border bg-card/40 p-4 text-sm"
                >
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t("common.ecosystemPartners")}
              </div>
              {linkedPartners.length === 0 ? (
                <p className="mt-3 text-sm text-muted-foreground">
                  {t("common.inHouse")}
                </p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {linkedPartners.map((p) => (
                    <li
                      key={p!.slug}
                      className="rounded-lg border border-border bg-background/40 p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/partners/${p!.slug}`}
                          className="font-display text-base font-semibold hover:text-primary"
                        >
                          {p!.name}
                        </Link>
                        {p!.url && (
                          <a
                            href={p!.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary"
                            aria-label={t("common.visitWebsite", { name: p!.name })}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {t(`partnerData.${p!.slug}.role`, { defaultValue: p!.role })}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t("common.engage")}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {t("common.discussDeployment", { name: solution.short })}
              </p>
              <Button
                asChild
                size="sm"
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/contact">
                  {t("common.contactUnit")}{" "}
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-border pt-8">
          <span className="text-sm text-muted-foreground">
            {t("common.nextUnit")}
          </span>
          <Link
            to={`/solutions/${next.slug}`}
            className="group inline-flex items-center gap-2 font-display text-lg font-semibold hover:text-primary"
          >
            {next.name}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default SolutionDetail;

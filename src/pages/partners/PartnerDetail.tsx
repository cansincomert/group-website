import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Check, ExternalLink, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import {
  useLocalisedPartner,
  useLocalisedPartners,
  useLocalisedSolutions,
} from "@/i18n/content";
import { uc } from "@/lib/text";

const PartnerDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const partner = useLocalisedPartner(slug);
  const partners = useLocalisedPartners();
  const solutions = useLocalisedSolutions();

  if (!partner) return <Navigate to="/partners" replace />;

  const solution = solutions.find((s) => s.slug === partner.solutionSlug);
  const idx = partners.findIndex((p) => p.slug === partner.slug);
  const next = partners[(idx + 1) % partners.length];

  return (
    <>
      <PageHero
        eyebrow={partner.domain}
        title={<>{partner.name}</>}
        subtitle={partner.role}
      />
      <section className="container py-16">
        <Link
          to="/partners"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {t("common.backToPartners")}
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {partner.description}
            </p>

            <h3 className="mt-12 text-xs tracking-[0.22em] text-muted-foreground">
              {uc(t("common.whatTheyBring"))}
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {partner.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 rounded-lg border border-border bg-card/60 p-3"
                >
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="text-xs tracking-[0.22em] text-muted-foreground">
                {uc(t("common.profile"))}
              </div>
              <dl className="mt-3 space-y-3 text-sm">
                {partner.legalName && (
                  <div>
                    <dt className="text-muted-foreground">
                      {t("common.legalEntity")}
                    </dt>
                    <dd className="font-medium">{partner.legalName}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-muted-foreground">
                    {t("common.headquarters")}
                  </dt>
                  <dd className="font-medium inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {partner.hq}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t("common.domain")}</dt>
                  <dd className="font-medium">{partner.domain}</dd>
                </div>
                {partner.url && (
                  <div>
                    <dt className="text-muted-foreground">
                      {t("common.website")}
                    </dt>
                    <dd>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                      >
                        {partner.url
                          .replace(/^https?:\/\//, "")
                          .replace(/\/$/, "")}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {solution && (
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="text-xs tracking-[0.22em] text-muted-foreground">
                  {uc(t("common.linkedSolution"))}
                </div>
                <div className="mt-3 font-display text-base font-semibold">
                  {solution.name}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {solution.tagline}
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="mt-4 border-border"
                >
                  <Link to={`/solutions/${solution.slug}`}>
                    {t("common.openSolution")}{" "}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-border pt-8">
          <span className="text-sm text-muted-foreground">
            {t("common.nextPartner")}
          </span>
          <Link
            to={`/partners/${next.slug}`}
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

export default PartnerDetail;

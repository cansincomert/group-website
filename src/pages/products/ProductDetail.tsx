import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import {
  useLocalisedProduct,
  useLocalisedProducts,
} from "@/i18n/content";
import { uc } from "@/lib/text";

const ProductDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const product = useLocalisedProduct(slug);
  const products = useLocalisedProducts();

  if (!product) return <Navigate to="/products" replace />;

  const Icon = product.icon;
  const idx = products.findIndex((p) => p.slug === product.slug);
  const next = products[(idx + 1) % products.length];

  return (
    <>
      <PageHero
        eyebrow={product.family}
        title={<>{product.name}</>}
        subtitle={product.tagline}
      />
      <section className="container py-16">
        <Link
          to="/products"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {t("common.backToProducts")}
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Icon className="h-6 w-6" />
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <h3 className="mt-12 text-xs tracking-[0.22em] text-muted-foreground">
              {uc(t("common.capabilities"))}
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.features.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 rounded-lg border border-border bg-card/60 p-3"
                >
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-sm">{c}</span>
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
                <div>
                  <dt className="text-muted-foreground">{t("common.family")}</dt>
                  <dd className="font-medium">{product.family}</dd>
                </div>
                {product.since && (
                  <div>
                    <dt className="text-muted-foreground">
                      {t("common.inProductionSince")}
                    </dt>
                    <dd className="font-medium">{product.since}</dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="text-xs tracking-[0.22em] text-muted-foreground">
                {uc(t("common.engage"))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {t("common.productEngageBody", { name: product.name })}
              </p>
              <Button
                asChild
                size="sm"
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/contact">
                  {t("common.talkToUs")}{" "}
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-border pt-8">
          <span className="text-sm text-muted-foreground">
            {t("common.nextProduct")}
          </span>
          <Link
            to={`/products/${next.slug}`}
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

export default ProductDetail;

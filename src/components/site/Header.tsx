import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  useLocalisedProducts,
  useLocalisedSolutions,
} from "@/i18n/content";
import { Button } from "@/components/ui/button";

type NavItem = {
  to: string;
  labelKey: string;
  menu?: "solutions" | "products";
};

const nav: NavItem[] = [
  { to: "/about", labelKey: "nav.about" },
  { to: "/solutions", labelKey: "nav.units", menu: "solutions" },
  { to: "/products", labelKey: "nav.products", menu: "products" },
  { to: "/partners", labelKey: "nav.partners" },
  { to: "/industries", labelKey: "nav.industries" },
  { to: "/insights", labelKey: "nav.insights" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const { t } = useTranslation();
  const solutions = useLocalisedSolutions();
  const products = useLocalisedProducts();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#011140]/95 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.to} className="group relative">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-white font-medium"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {t(item.labelKey)}
                {item.menu && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </NavLink>
              {item.menu === "solutions" && (
                <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-[#011140] p-2 shadow-xl">
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/solutions/${s.slug}`}
                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/10 transition-colors"
                      >
                        <s.icon className="mt-0.5 h-4 w-4 text-sky-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            {s.name}
                          </div>
                          <div className="text-xs text-slate-400">
                            {s.tagline}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {item.menu === "products" && (
                <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-[#011140] p-2 shadow-xl">
                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/products/${p.slug}`}
                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/10 transition-colors"
                      >
                        <p.icon className="mt-0.5 h-4 w-4 text-sky-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            {p.name}
                          </div>
                          <div className="text-xs text-slate-400">{p.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button
            asChild
            size="sm"
            className="bg-transparent text-white border border-white/30 hover:bg-white hover:text-[#011140] transition-colors"
          >
            <Link to="/contact">{t("nav.contact")}</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("common.toggleMenu")}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#011140] lg:hidden">
          <div className="container flex flex-col py-3">
            {nav.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  loc.pathname === i.to
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t(i.labelKey)}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-white/20 px-3 py-2 text-center text-sm text-white"
            >
              {t("nav.contact")}
            </Link>
            <div className="mt-3 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

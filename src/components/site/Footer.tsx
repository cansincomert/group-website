import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { solutions } from "@/data/solutions";
import { partners } from "@/data/partners";

export const Footer = () => (
  <footer className="mt-24 bg-[#011140]">
    <div className="container grid gap-10 py-14 md:grid-cols-5">
      <div className="space-y-4 md:col-span-2">
        <Logo />
        <p className="max-w-sm text-sm text-slate-300">
          Infinium Group — the conglomerate uniting GridBox, ALT-MBS and a
          partner ecosystem of specialist companies in hardware, software,
          energy markets, AI, sustainability and power electronics.
        </p>
        <div className="text-xs text-slate-400">
          Engineering the Infrastructure of Tomorrow
        </div>
      </div>
      <FooterCol
        title="Company"
        links={[
          { to: "/about", label: "About & History" },
          { to: "/mission", label: "Mission & Vision" },
          { to: "/industries", label: "Industries" },
          { to: "/insights", label: "Insights" },
          { to: "/contact", label: "Contact" },
        ]}
      />
      <FooterCol
        title="Business Units"
        links={solutions.map((s) => ({
          to: `/solutions/${s.slug}`,
          label: s.name,
        }))}
      />
      <FooterCol
        title="Partners"
        links={partners.map((p) => ({
          to: `/partners/${p.slug}`,
          label: p.name,
        }))}
      />
    </div>
    <div className="border-t border-white/10">
      <div className="container flex flex-col items-start justify-between gap-2 py-6 text-xs text-slate-400 md:flex-row md:items-center">
        <span>
          © {new Date().getFullYear()} Infinium Group. All rights reserved.
        </span>
        <span>Istanbul · Türkiye</span>
      </div>
    </div>
  </footer>
);

const FooterCol = ({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) => (
  <div>
    <div className="mb-3 text-sm font-semibold text-white">{title}</div>
    <ul className="space-y-1.5">
      {links.map((l) => (
        <li key={l.to}>
          <Link
            to={l.to}
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

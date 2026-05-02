import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { units } from "@/data/units";

export const Footer = () => (
  <footer className="mt-24 bg-[#011140]">
    <div className="container grid gap-10 py-14 md:grid-cols-4">
      <div className="space-y-4">
        <Logo />
        <p className="max-w-xs text-sm text-slate-300">
          Engineering the infrastructure of tomorrow. Energy, AI compute and industrial systems- unified.
        </p>
      </div>
      <FooterCol title="Company" links={[
        { to: "/about", label: "About" },
        { to: "/mission", label: "Mission & Vision" },
        { to: "/industries", label: "Industries" },
        { to: "/insights", label: "Insights" },
        { to: "/contact", label: "Contact" },
      ]} />
      <FooterCol title="Business Units" links={units.map(u => ({ to: `/units/${u.slug}`, label: u.name }))} />
      <div>
        <div className="mb-3 text-sm font-semibold text-white">Partners</div>
        <ul className="space-y-1 text-sm text-slate-300">
          <li>Sophgo</li><li>INRAG</li><li>Göktekin Enerji</li><li>Upu.io</li><li>Cleture</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container flex flex-col items-start justify-between gap-2 py-6 text-xs text-slate-400 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Infinium Group. All rights reserved.</span>
        <span>Engineering the Infrastructure of Tomorrow</span>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: { to: string; label: string }[] }) => (
  <div>
    <div className="mb-3 text-sm font-semibold text-white">{title}</div>
    <ul className="space-y-1.5">
      {links.map((l) => (
        <li key={l.to}>
          <Link to={l.to} className="text-sm text-slate-300 transition-colors hover:text-white">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
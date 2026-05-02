import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { units } from "@/data/units";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/about", label: "About" },
  { to: "/mission", label: "Mission" },
  { to: "/units", label: "Business Units", hasMenu: true },
  { to: "/industries", label: "Industries" },
  { to: "/insights", label: "Insights" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.to} className="group relative">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {item.label}
                {item.hasMenu && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </NavLink>
              {item.hasMenu && (
                <div className="invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-2 shadow-card">
                    {units.map((u) => (
                      <Link
                        key={u.slug}
                        to={`/units/${u.slug}`}
                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-muted"
                      >
                        <u.icon className="mt-0.5 h-4 w-4 text-primary" />
                        <div>
                          <div className="text-sm font-medium">{u.name}</div>
                          <div className="text-xs text-muted-foreground">{u.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container flex flex-col py-3">
            {nav.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm ${
                  loc.pathname === i.to ? "bg-muted text-foreground" : "text-muted-foreground"
                }`}
              >
                {i.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-1 rounded-lg border border-border p-2">
              {units.map((u) => (
                <Link
                  key={u.slug}
                  to={`/units/${u.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2 text-xs text-muted-foreground hover:bg-muted"
                >
                  {u.short}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
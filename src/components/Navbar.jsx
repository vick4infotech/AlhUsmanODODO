import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/cn";

const nav = [
  { to: "/", label: "Home" },
  { to: "/profile", label: "Profile and Biography" },
  { to: "/achievements", label: "Governance and Achievements" },
  { to: "/awards", label: "Awards and Recognition" },
  { to: "/vision", label: "Vision and Future Agenda" },
  { to: "/media", label: "Media and Gallery" }
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "relative rounded-lg px-3 py-2 text-sm font-semibold transition",
          isActive ? "text-kogi-green" : "text-black/70 hover:text-black"
        )
      }
    >
      {({ isActive }) => (
        <span className="relative">
          {label}
          {isActive ? (
            <motion.span
              layoutId="nav-underline"
              className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-kogi-gold"
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
            />
          ) : null}
        </span>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-black/5 bg-white/75 backdrop-blur-md">
        <div className="container-pad flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-kogi-gold/40">
              <img
                src="/favicon.png"
                alt="Governor portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-bold text-kogi-green">
                Ahmed Usman Ododo
              </div>
              <div className="text-xs font-semibold text-black/60">
                Executive Governor, Kogi State
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((i) => (
              <NavItem key={i.to} {...i} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-xl bg-kogi-green px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-kogi-green2 lg:inline-flex"
            >
              Media Contact
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white p-2 text-black/70 shadow-soft transition hover:text-black lg:hidden"
              aria-label="Open menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-4 top-20 z-50 w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lift"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="p-3">
                <div className="mb-2 px-2 py-1 text-xs font-semibold text-black/50">
                  Navigate
                </div>
                <div className="flex flex-col">
                  {nav.map((i) => (
                    <NavItem
                      key={i.to}
                      {...i}
                      onClick={() => setOpen(false)}
                    />
                  ))}
                </div>
                <div className="mt-3 px-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-kogi-green px-4 py-3 text-sm font-semibold text-white transition hover:bg-kogi-green2"
                  >
                    Media Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

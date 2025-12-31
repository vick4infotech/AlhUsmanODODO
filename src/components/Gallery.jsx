import React from "react";
import { motion } from "framer-motion";
import LightboxModal from "./LightboxModal";
import { cn } from "../lib/cn";

const filterButton =
  "rounded-xl px-4 py-2 text-sm font-semibold ring-1 transition";

export default function Gallery({ items }) {
  const categories = React.useMemo(() => {
    const set = new Set(items.map((i) => i.category));
    return ["All", ...Array.from(set)];
  }, [items]);

  const [active, setActive] = React.useState("All");
  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const onClose = () => setOpen(false);
  const onPrev = () => setIndex((v) => (v - 1 + filtered.length) % filtered.length);
  const onNext = () => setIndex((v) => (v + 1) % filtered.length);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setActive(c);
              setIndex(0);
              setOpen(false);
            }}
            className={cn(
              filterButton,
              c === active
                ? "bg-kogi-green text-white ring-kogi-green"
                : "bg-white text-black/70 ring-black/10 hover:ring-kogi-gold/35"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((it, i) => (
          <motion.button
            layout
            key={it.src}
            type="button"
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={it.src}
              alt={it.title}
              className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,61,46,0.70))]" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
              <div className="text-sm font-bold text-white">{it.title}</div>
              <div className="mt-1 text-xs text-white/80">{it.category}</div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <LightboxModal
        open={open}
        items={filtered}
        index={index}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxModal({ open, items, index, onClose, onPrev, onNext }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  const item = items?.[index];

  return (
    <AnimatePresence>
      {open && item ? (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lift">
              <div className="flex items-center justify-between border-b border-black/5 p-4">
                <div>
                  <div className="text-sm font-bold text-kogi-green">
                    {item.title}
                  </div>
                  <div className="text-xs text-black/60">{item.category}</div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white p-2 text-black/70 hover:text-black"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative bg-black">
                <img
                  src={item.src}
                  alt={item.title}
                  className="max-h-[70vh] w-full object-contain"
                />

                <button
                  type="button"
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl bg-white/90 p-2 text-black shadow-soft hover:bg-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-white/90 p-2 text-black shadow-soft hover:bg-white"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="p-4 text-sm text-black/70">
                {item.caption}
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

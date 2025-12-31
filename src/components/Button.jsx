import React from "react";
import { cn } from "../lib/cn";

export default function Button({
  as: Comp = "button",
  className,
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-kogi-gold/60 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-kogi-green text-white shadow-lift hover:translate-y-[-1px] hover:bg-kogi-green2 active:translate-y-[0px]",
    secondary:
      "bg-white text-kogi-green ring-1 ring-black/10 shadow-soft hover:translate-y-[-1px] hover:ring-kogi-gold/30",
    ghost:
      "bg-transparent text-white/90 ring-1 ring-white/20 hover:bg-white/10"
  };

  return <Comp className={cn(base, variants[variant], className)} {...props} />;
}

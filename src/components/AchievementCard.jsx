import React from "react";
import MotionInView from "./MotionInView";
import { cn } from "../lib/cn";

export default function AchievementCard({
  icon: Icon,
  title,
  description,
  bullets = [],
  image,
  imageAlt = "",
  tone = "light"
}) {
  const shell =
    tone === "dark"
      ? "card-dark text-white"
      : "card text-kogi-ink";

  return (
    <MotionInView className={cn(shell, "overflow-hidden")} y={22}>
      <div className="grid gap-6 p-6 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-2xl ring-1",
                tone === "dark"
                  ? "bg-white/10 ring-white/15"
                  : "bg-kogi-green/5 ring-black/5"
              )}
            >
              {Icon ? (
                <Icon
                  size={20}
                  className={tone === "dark" ? "text-kogi-gold" : "text-kogi-green"}
                />
              ) : null}
            </div>
            <h3
              className={cn(
                "font-display text-xl font-bold",
                tone === "dark" ? "text-white" : "text-kogi-green"
              )}
            >
              {title}
            </h3>
          </div>
          <p className={cn("mt-3 text-sm leading-6", tone === "dark" ? "text-white/80" : "text-black/70")}>
            {description}
          </p>

          {bullets?.length ? (
            <ul className={cn("mt-4 space-y-2 text-sm", tone === "dark" ? "text-white/80" : "text-black/70")}>
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className={cn("mt-2 h-1.5 w-1.5 flex-none rounded-full", tone === "dark" ? "bg-kogi-gold" : "bg-kogi-gold2")} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="md:col-span-5">
          {image ? (
            <div className={cn("relative overflow-hidden rounded-2xl ring-1", tone === "dark" ? "ring-white/15" : "ring-black/5")}>
              <img
                src={image}
                alt={imageAlt || title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,61,46,0.35))]" />
            </div>
          ) : (
            <div className={cn("h-56 rounded-2xl bg-[linear-gradient(180deg,rgba(212,175,55,0.18),rgba(30,90,168,0.12))]")} />
          )}
        </div>
      </div>
    </MotionInView>
  );
}

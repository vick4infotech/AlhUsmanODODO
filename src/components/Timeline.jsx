import React from "react";
import MotionInView from "./MotionInView";
import { cn } from "../lib/cn";

export default function Timeline({ items = [] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-black/10 md:left-1/2 md:-ml-px" />
      <div className="space-y-10">
        {items.map((it, idx) => (
          <TimelineItem key={it.title + idx} item={it} side={idx % 2 === 0 ? "left" : "right"} index={idx} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, side, index }) {
  const isLeft = side === "left";
  return (
    <MotionInView
      y={20}
      delay={Math.min(0.12, index * 0.03)}
      className={cn(
        "relative grid gap-6 md:grid-cols-2 md:items-start",
        isLeft ? "" : ""
      )}
    >
      <div className={cn("md:pr-10", isLeft ? "md:text-right" : "md:col-start-2 md:pl-10 md:text-left")}>
        <div className="inline-flex items-center gap-2 rounded-full bg-kogi-green/5 px-4 py-2 text-xs font-bold text-kogi-green ring-1 ring-black/5">
          {item.year}
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-kogi-green">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-black/70">
          {item.description}
        </p>
      </div>

      <div className={cn("md:pl-10", isLeft ? "md:col-start-2" : "md:col-start-1 md:pr-10 md:text-right")}>
        <div className="card p-5">
          <div className="text-sm font-semibold text-black/80">
            {item.detailTitle}
          </div>
          {item.details?.length ? (
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              {item.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-kogi-gold2" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="absolute left-[14px] top-6 h-3 w-3 rounded-full bg-kogi-gold ring-4 ring-white md:left-1/2 md:-ml-1.5" />
    </MotionInView>
  );
}

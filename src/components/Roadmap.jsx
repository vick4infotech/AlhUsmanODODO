import React from "react";
import MotionInView from "./MotionInView";

export default function Roadmap({ phases = [] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {phases.map((p, idx) => (
        <MotionInView key={p.title} y={20} delay={idx * 0.06}>
          <div className="card overflow-hidden">
            <div className="bg-[linear-gradient(135deg,rgba(11,61,46,0.10),rgba(212,175,55,0.14),rgba(30,90,168,0.10))] p-6">
              <div className="inline-flex rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-kogi-green ring-1 ring-black/5">
                {p.period}
              </div>
              <div className="mt-4 font-display text-2xl font-bold text-kogi-green">
                {p.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-black/70">
                {p.description}
              </p>
            </div>
            <div className="p-6">
              <div className="text-sm font-bold text-black/80">
                Priority actions
              </div>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                {p.actions.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-kogi-gold2" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionInView>
      ))}
    </div>
  );
}

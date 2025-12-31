import React from "react";
import MotionInView from "./MotionInView";

function formatNumber(n) {
  return new Intl.NumberFormat().format(n);
}

export default function StatCounter({
  label,
  value,
  prefix = "",
  suffix = "",
  note = "",
  duration = 900
}) {
  const [display, setDisplay] = React.useState(0);
  const startedRef = React.useRef(false);

  return (
    <MotionInView
      className="card relative p-6"
      y={22}
      delay={0.05}
      once={true}
    >
      <CounterRunner
        value={value}
        duration={duration}
        startedRef={startedRef}
        onTick={setDisplay}
      />
      <div className="font-display text-3xl font-bold text-kogi-green sm:text-4xl">
        {prefix}
        {formatNumber(display)}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold text-black/70">{label}</div>
      {note ? <div className="mt-2 text-xs text-black/55">{note}</div> : null}
    </MotionInView>
  );
}

function CounterRunner({ value, duration, startedRef, onTick }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            animate();
            io.disconnect();
          }
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);

    let raf = 0;
    function animate() {
      const start = performance.now();
      const from = 0;
      const to = Number(value) || 0;

      const step = (t) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const next = Math.round(from + (to - from) * eased);
        onTick(next);
        if (p < 1) raf = requestAnimationFrame(step);
      };

      raf = requestAnimationFrame(step);
    }

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [duration, onTick, startedRef, value]);

return (
  <div
    ref={ref}
    className="absolute left-0 top-0 h-px w-px opacity-0 pointer-events-none"
    aria-hidden="true"
  />
);
}

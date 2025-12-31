import React from "react";
import { motion, useAnimation } from "framer-motion";

export default function MotionInView({
  children,
  delay = 0,
  y = 18,
  className,
  once = true
}) {
  const ref = React.useRef(null);
  const controls = useAnimation();

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            controls.start("show");
            if (once) io.disconnect();
          } else if (!once) {
            controls.start("hidden");
          }
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [controls, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

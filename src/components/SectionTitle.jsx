import React from "react";

export default function SectionTitle({ kicker, title, subtitle, align = "left" }) {
  const alignClasses =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses}`}>
      {kicker ? <div className="kicker">{kicker}</div> : null}
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-kogi-green sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-base leading-7 text-black/70">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

import React from "react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import MotionInView from "../components/MotionInView";
import Roadmap from "../components/Roadmap";
import { getIcon } from "../lib/iconMap";
import { vision } from "../content/siteContent";

export default function Vision() {
  return (
    <>
      <SEO title="Vision and Future Agenda" path="/vision" />

      <section className="section">
        <div className="container-pad">
          <SectionTitle
            kicker="Future agenda"
            title={vision.title}
            subtitle={vision.subtitle}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <MotionInView y={18}>
                <div className="card overflow-hidden">
                  <div className="p-8">
                    <div className="kicker">Vision</div>
                    <h2 className="mt-6 font-display text-3xl font-bold text-kogi-green sm:text-4xl">
                      {vision.headline}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-black/70">
                      {vision.narrative}
                    </p>
                  </div>
                </div>
              </MotionInView>
            </div>

            <div className="lg:col-span-5">
              <MotionInView y={18}>
                <div className="card overflow-hidden">
                  <div className="relative">
                    {/* Pexels source: https://www.pexels.com/photo/a-man-standing-in-front-of-a-government-building-17366012/ */}
                    <img
                      src="/images/government-building.jpg"
                      alt="Public institution"
                      className="h-48 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(11,61,46,0.70))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="font-display text-xl font-bold text-white">
                        Strategic priorities
                      </div>
                      <div className="mt-1 text-sm text-white/80">
                        A clear focus on security, people, productivity, and inclusion
                      </div>
                    </div>
                  </div>
                </div>
              </MotionInView>
            </div>
          </div>

          <div className="mt-16">
            <SectionTitle
              kicker="Priorities"
              title="Policy focus areas"
              subtitle="Four pillars guide planning, budgeting, and partnership engagements across the state."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {vision.priorities.map((p, idx) => {
                const Icon = getIcon(p.icon);
                return (
                  <MotionInView key={p.title} y={18} delay={idx * 0.06}>
                    <div className="card h-full p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-kogi-green/5 ring-1 ring-black/5">
                          {Icon ? <Icon size={20} className="text-kogi-green" /> : null}
                        </div>
                        <div className="text-sm font-bold text-kogi-green">
                          {p.title}
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-black/70">
                        {p.description}
                      </p>
                    </div>
                  </MotionInView>
                );
              })}
            </div>
          </div>

          <div className="mt-16">
            <SectionTitle
              kicker="Roadmap"
              title="Phased delivery plan"
              subtitle="A structured approach to stability, productivity, and long term competitiveness."
            />
            <div className="mt-10">
              <Roadmap phases={vision.roadmap} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

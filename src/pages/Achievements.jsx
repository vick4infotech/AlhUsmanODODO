import React from "react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import StatCounter from "../components/StatCounter";
import AchievementCard from "../components/AchievementCard";
import MotionInView from "../components/MotionInView";
import { getIcon } from "../lib/iconMap";
import { achievements } from "../content/siteContent";

export default function Achievements() {
  return (
    <>
      <SEO title="Governance and Achievements" path="/achievements" />

      <section className="section">
        <div className="container-pad">
          <SectionTitle
            kicker="Governance"
            title={achievements.title}
            subtitle={achievements.subtitle}
          />
          
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.stats.map((s) => (
              <StatCounter
                key={s.label}
                label={s.label}
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                note={s.note}
              />
              
            ))}
          </div>
          

          <MotionInView className="mt-14" y={18}>
            <div className="card overflow-hidden">
              <div className="grid gap-8 p-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <div className="kicker">Approach</div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-kogi-green sm:text-3xl">
                    Delivery with measurable priorities
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/70">
                    The administration focuses on practical interventions that strengthen the foundations of growth: safety, frontline services,
                    productive infrastructure, and an enabling environment for business.
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(11,61,46,0.06),rgba(212,175,55,0.14),rgba(30,90,168,0.10))] p-6 ring-1 ring-black/5">
                    <div className="text-sm font-bold text-black/80">What guides decisions</div>
                    <ul className="mt-4 space-y-2 text-sm text-black/70">
                      {[
                        "Citizen centred services",
                        "Value for money",
                        "Partnership and collaboration",
                        "Transparency and trust"
                      ].map((t) => (
                        <li key={t} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-kogi-gold2" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </MotionInView>

          <div className="mt-16 space-y-6">
            {achievements.categories.map((c, idx) => {
              const Icon = getIcon(c.icon);
              const tone = idx % 3 === 1 ? "dark" : "light";

              return (
                <AchievementCard
                  key={c.id}
                  icon={Icon}
                  title={c.title}
                  description={c.description}
                  bullets={c.bullets}
                  image={c.image}
                  imageAlt={c.title}
                  tone={tone}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

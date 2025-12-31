import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Button from "../components/Button";
import MotionInView from "../components/MotionInView";
import SectionTitle from "../components/SectionTitle";
import { getIcon } from "../lib/iconMap";
import { hero, quickHighlights, achievementsPreview } from "../content/siteContent";

export default function Home() {
  return (
    <>
      <SEO title="Home" path="/" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero.heroBackground.src}
            alt={hero.heroBackground.alt}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,61,46,0.92)_0%,rgba(11,61,46,0.78)_40%,rgba(11,61,46,0.62)_100%)]" />
          <div className="absolute inset-0 bg-premium-radial opacity-60" />
        </div>

        <div className="relative">
          <div className="container-pad min-h-[calc(100vh-4rem)] py-16 sm:py-20 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="kicker border-white/20 bg-white/10 text-white"
                >
                  {hero.kicker}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
                  className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                >
                  His Excellency Alhaji Ahmed Usman Ododo
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                  className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg"
                >
                  Executive Governor of Kogi State, Nigeria. {hero.subheadline}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <Button as={Link} to={hero.primaryCta.to}>
                    {hero.primaryCta.label}
                  </Button>
                  <Button as={Link} to={hero.secondaryCta.to} variant="ghost">
                    {hero.secondaryCta.label}
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
                  className="mt-10 grid gap-4 sm:grid-cols-2"
                >
                  {quickHighlights.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur"
                    >
                      <div className="text-xs font-bold uppercase tracking-wide text-white/70">
                        {h.label}
                      </div>
                      <div className="mt-2 font-display text-3xl font-bold text-white">
                        {h.value}
                      </div>
                      <div className="mt-2 text-sm text-white/80">{h.note}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
                  className="relative mx-auto max-w-md"
                >
                  <div className="absolute -inset-6 rounded-[2.25rem] bg-[linear-gradient(135deg,rgba(212,175,55,0.40),rgba(30,90,168,0.18),rgba(255,255,255,0.10))] blur-2xl" />
                  <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/10 p-6 shadow-lift">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wide text-white/70">
                          Executive Governor
                        </div>
                        <div className="mt-2 font-display text-2xl font-bold text-white">
                          Kogi State, Nigeria
                        </div>
                      </div>
                      <div className="h-10 w-10 rounded-2xl bg-white/10 ring-1 ring-white/15" />
                    </div>

                    <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/15">
                      <img
                        src={hero.portrait.src}
                        alt={hero.portrait.alt}
                        className="h-[420px] w-full object-cover"
                        loading="eager"
                      />
                    </div>

                    <div className="mt-6 text-sm leading-6 text-white/80">
                      {"Leadership anchored in service, stability, and shared prosperity."}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="section">
        <div className="container-pad">
          <SectionTitle
            kicker="Governance"
            title={achievementsPreview.title}
            subtitle={achievementsPreview.description}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {achievementsPreview.cards.map((c, idx) => {
              const Icon = getIcon(c.icon);
              return (
                <MotionInView key={c.title} y={22} delay={idx * 0.06}>
                  <div className="card overflow-hidden">
                    <div className="relative">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="h-44 w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(11,61,46,0.70))]" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                            {Icon ? <Icon size={20} className="text-kogi-gold" /> : null}
                          </div>
                          <div className="font-display text-xl font-bold text-white">
                            {c.title}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm leading-6 text-black/70">
                        {c.description}
                      </p>
                      <div className="mt-6">
                        <Button as={Link} to="/achievements" variant="secondary" className="w-full">
                          Explore this pillar
                        </Button>
                      </div>
                    </div>
                  </div>
                </MotionInView>
              );
            })}
          </div>

          <MotionInView className="mt-14" y={18}>
            <div className="card overflow-hidden">
              <div className="grid gap-8 p-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <div className="kicker">Official message</div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-kogi-green sm:text-3xl">
                    A government that listens and delivers
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/70">
                    This portfolio is designed as a public facing reference for partners, institutions, media, and citizens.
                    It brings together biography, priorities, verified highlights, and a clear agenda for inclusive development.
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(11,61,46,0.08),rgba(212,175,55,0.14),rgba(30,90,168,0.10))] p-6">
                    <div className="text-xs font-bold uppercase tracking-wide text-black/60">Next steps</div>
                    <div className="mt-3 space-y-3">
                      <Link to="/profile" className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-kogi-green ring-1 ring-black/5">
                        Biography and leadership
                        <span className="text-black/50 group-hover:text-black">→</span>
                      </Link>
                      <Link to="/vision" className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-kogi-green ring-1 ring-black/5">
                        Vision and future agenda
                        <span className="text-black/50 group-hover:text-black">→</span>
                      </Link>
                      <Link to="/media" className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-kogi-green ring-1 ring-black/5">
                        Media gallery
                        <span className="text-black/50 group-hover:text-black">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionInView>
        </div>
      </section>
    </>
  );
}

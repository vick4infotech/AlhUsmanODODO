import React from "react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import MotionInView from "../components/MotionInView";
import Timeline from "../components/Timeline";
import { biography } from "../content/siteContent";

export default function Profile() {
  return (
    <>
      <SEO title="Profile and Biography" path="/profile" />

      <section className="section">
        <div className="container-pad">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <SectionTitle
                kicker="Profile"
                title={biography.title}
                subtitle={biography.intro}
              />

              <div className="mt-8 space-y-4 text-sm leading-6 text-black/70">
                {biography.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <MotionInView className="mt-10" y={18}>
                <div className="card overflow-hidden">
                  <div className="grid gap-6 p-6 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-7">
                      <div className="kicker">Leadership philosophy</div>
                      <h3 className="mt-5 font-display text-2xl font-bold text-kogi-green">
                        Governance guided by service and public trust
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-black/70">
                        The administration emphasises practical execution and measurable outcomes, with an approach rooted in fairness,
                        accountability, and inclusive opportunity.
                      </p>
                    </div>
                    <div className="md:col-span-5">
                      <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(11,61,46,0.06),rgba(212,175,55,0.14),rgba(30,90,168,0.08))] p-5 ring-1 ring-black/5">
                        <div className="text-sm font-bold text-black/80">
                          Principles
                        </div>
                        <ul className="mt-4 space-y-2 text-sm text-black/70">
                          {biography.philosophy.points.map((pt) => (
                            <li key={pt} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-kogi-gold2" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionInView>
            </div>

            <div className="lg:col-span-5">
              <div className="card overflow-hidden">
                <div className="p-6">
                  <div className="kicker">Official portrait</div>
                  <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/5">
                    <img
                      src="/images/ododo-portrait.jpg"
                      alt="Portrait of Governor Ahmed Usman Ododo"
                      className="h-[460px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6 text-sm font-semibold text-kogi-green">
                    Executive Governor of Kogi State, Nigeria
                  </div>
                  <div className="mt-2 text-sm leading-6 text-black/70">
                    A profile shaped by public service, fiscal discipline, and commitment to inclusive development.
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-6">
                <MotionInView y={16}>
                  <div className="card p-6">
                    <div className="text-sm font-bold text-kogi-green">Education</div>
                    <div className="mt-4 space-y-4">
                      {biography.education.map((e) => (
                        <div key={e.title}>
                          <div className="text-sm font-semibold text-black/80">{e.title}</div>
                          <div className="mt-1 text-sm leading-6 text-black/70">{e.details}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionInView>

                <MotionInView y={16}>
                  <div className="card p-6">
                    <div className="text-sm font-bold text-kogi-green">Professional background</div>
                    <div className="mt-4 space-y-4">
                      {biography.professionalHighlights.map((e) => (
                        <div key={e.title}>
                          <div className="text-sm font-semibold text-black/80">{e.title}</div>
                          <div className="mt-1 text-sm leading-6 text-black/70">{e.details}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionInView>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <SectionTitle
              kicker="Timeline"
              title="Career timeline"
              subtitle="A structured view of professional foundations, public service experience, and executive leadership."
              align="center"
            />
            <div className="mt-10">
              <Timeline items={biography.timeline} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

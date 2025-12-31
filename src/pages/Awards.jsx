import React from "react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import MotionInView from "../components/MotionInView";
import { awards } from "../content/siteContent";

export default function Awards() {
  return (
    <>
      <SEO title="Awards and Recognition" path="/awards" />

      <section className="section">
        <div className="container-pad">
          <SectionTitle
            kicker="Recognition"
            title={awards.title}
            subtitle={awards.subtitle}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {awards.items.map((a, idx) => (
              <MotionInView key={`${a.title}-${a.year}`} y={20} delay={idx * 0.06}>
                <div className="card overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="inline-flex rounded-full bg-kogi-green/5 px-4 py-2 text-xs font-bold text-kogi-green ring-1 ring-black/5">
                          {a.year}
                        </div>
                        <h3 className="mt-5 font-display text-2xl font-bold text-kogi-green">
                          {a.title}
                        </h3>
                        <div className="mt-2 text-sm font-semibold text-black/70">
                          {a.org}
                        </div>
                      </div>

                      <div className="hidden h-14 w-14 rounded-2xl bg-[linear-gradient(135deg,rgba(11,61,46,0.08),rgba(212,175,55,0.16),rgba(30,90,168,0.12))] ring-1 ring-black/5 sm:block" />
                    </div>

                    <p className="mt-4 text-sm leading-6 text-black/70">
                      {a.description}
                    </p>
                  </div>
                </div>
              </MotionInView>
            ))}
          </div>

          <MotionInView className="mt-14" y={18}>
            <div className="card-dark overflow-hidden">
              <div className="p-8">
                <div className="kicker border-white/20 bg-white/10 text-white">
                  Partnerships
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold text-white">
                  Engagement with institutions and development partners
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/80">
                  Awards and recognitions complement an ongoing commitment to governance standards, improved service delivery, and a stronger investment reputation for Kogi State.
                  The communications office can provide official citations, releases, and media assets upon request.
                </p>
              </div>
            </div>
          </MotionInView>
        </div>
      </section>
    </>
  );
}

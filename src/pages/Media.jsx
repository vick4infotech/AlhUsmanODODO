import React from "react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import MotionInView from "../components/MotionInView";
import Gallery from "../components/Gallery";
import { media } from "../content/siteContent";

export default function Media() {
  return (
    <>
      <SEO title="Media and Gallery" path="/media" />

      <section className="section">
        <div className="container-pad">
          <SectionTitle
            kicker="Media"
            title={media.title}
            subtitle={media.subtitle}
          />

          <MotionInView className="mt-10" y={18}>
            <div className="card overflow-hidden">
              <div className="grid gap-8 p-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="kicker">Gallery</div>
                  <h2 className="mt-6 font-display text-3xl font-bold text-kogi-green sm:text-4xl">
                    Governance in action
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-black/70">
                    Browse images by category. Click any image to open a lightbox for full viewing.
                    All general imagery on this site is royalty free and sourced from Pexels.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  {/* Pexels source: https://www.pexels.com/photo/group-of-people-seated-around-a-table-having-a-discussion-3184311/ */}
                  <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                    <img
                      src="/images/leadership-meeting.jpg"
                      alt="Leadership meeting"
                      className="h-52 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </MotionInView>

          <div className="mt-12">
            <Gallery items={media.items} />
          </div>
        </div>
      </section>
    </>
  );
}

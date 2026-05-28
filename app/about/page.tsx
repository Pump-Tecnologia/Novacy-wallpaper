/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import MobileCarousel from "@/components/MobileCarousel";
import CtaBanner from "@/components/sections/CtaBanner";
import InternalPageHero from "@/components/sections/InternalPageHero";
import { aboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | NOVACY Wallpaper Installation NY & NJ",
  description:
    "Nearly a decade of precision wallpaper installation across New York & New Jersey. Built from experience, driven by craftsmanship.",
};

export default function About() {
  const { hero, story, nameBreakdown, differentiators, nyc, mvv, cta } = aboutContent;

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <InternalPageHero
        eyebrow={hero.eyebrow}
        title={hero.headline}
        accent={hero.headlineAccent}
        description={hero.subheadline}
        backgroundImage={hero.backgroundImage}
        backgroundPosition={hero.backgroundPosition}
      />

      {/* 2. THE STORY */}
      <AnimatedSection>
        <section className="py-14 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
            <div>
              <div className="relative aspect-[5/4] overflow-hidden border border-gray-200 bg-gray-50 lg:aspect-[4/3]">
                {story.image ? (
                  <Image
                    src={story.image}
                    alt={story.imagePlaceholder}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#f8fafc_0%,#eef4ff_100%)] p-8 text-center">
                    <p className="max-w-xs text-[11px] font-bold uppercase tracking-[0.22em] text-primary/38">
                      Photo placeholder
                      <br />
                      {story.imagePlaceholder}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                {story.sectionLabel}
              </p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-primary md:text-4xl">
                {story.heading}
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-gray-600">
                <p>{story.paragraphs[0]}</p>
                <p>{story.paragraphs[2]}</p>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-sm font-bold uppercase leading-relaxed tracking-[0.14em] text-primary">
                  Nearly ten years of installation experience, refined into a focused wallpaper practice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 3. NOVA & LEGACY */}
      <AnimatedSection>
        <section className="relative overflow-hidden bg-[#004198] py-14 text-white md:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/brand/background-pattern-blue.svg')" }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                {nameBreakdown.sectionLabel}
              </p>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                What NOVACY Means
              </h2>
            </div>

            <MobileCarousel label="Name System" theme="dark">
              <div className="h-full border border-gray-200 border-t-accent bg-white p-5">
                <h3 className="mb-4 text-xl font-bold text-primary">
                  {nameBreakdown.nova.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  {nameBreakdown.nova.desc}
                </p>
              </div>

              <div className="h-full border border-gray-200 border-t-accent bg-white p-5">
                <h3 className="mb-4 text-xl font-bold text-primary">
                  {nameBreakdown.legacy.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  {nameBreakdown.legacy.desc}
                </p>
              </div>
            </MobileCarousel>

            <div className="hidden border border-gray-200 border-t-accent bg-white md:grid md:grid-cols-2">
              <div className="border-b border-gray-200 p-6 md:border-b-0 md:border-r md:p-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  01 / Renewal
                </p>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {nameBreakdown.nova.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-gray-600">
                  {nameBreakdown.nova.desc}
                </p>
              </div>

              <div className="p-6 md:p-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  02 / Permanence
                </p>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {nameBreakdown.legacy.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-gray-600">
                  {nameBreakdown.legacy.desc}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#004198] p-6 text-white md:p-8">
              <p className="relative max-w-4xl text-base font-medium leading-relaxed text-white/88">
                &ldquo;{nameBreakdown.quote}&rdquo;
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. WHY NOVACY */}
      <AnimatedSection>
        <section className="py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1fr] md:items-end">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  The Standard
                </p>
                <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">
                  {differentiators.heading}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-gray-600">
                {differentiators.subheading}
              </p>
            </div>
            <MobileCarousel label="NOVACY Standard">
              {differentiators.items.map((item) => (
                <div
                  key={item.title}
                  className="group relative min-h-[390px] overflow-hidden border border-gray-200 border-t-accent bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.imagePlaceholder}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,20,58,0.08)_0%,rgba(0,31,84,0.3)_34%,rgba(0,35,94,0.72)_70%,rgba(0,31,84,0.95)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[radial-gradient(circle_at_18%_100%,rgba(2,89,223,0.45),transparent_52%)]" />
                  <div className="relative flex h-full min-h-[390px] flex-col justify-end p-6 text-white">
                    <div className="bg-primary/32 p-4 backdrop-blur-[2px]">
                      <h3 className="mb-3 text-lg font-bold leading-snug text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/86">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </MobileCarousel>

            <div className="hidden border border-gray-200 border-t-accent bg-white md:grid md:grid-cols-2 xl:grid-cols-4">
              {differentiators.items.map((item, index) => (
                <div
                  key={item.title}
                  className={`group relative min-h-[360px] overflow-hidden transition-colors duration-300 ${
                    index < 2 ? "border-b border-gray-200 xl:border-b-0" : ""
                  } ${index % 2 === 0 ? "md:border-r md:border-gray-200" : ""} ${
                    index < differentiators.items.length - 1 ? "xl:border-r xl:border-gray-200" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.imagePlaceholder}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,20,58,0.06)_0%,rgba(0,31,84,0.2)_34%,rgba(0,35,94,0.66)_70%,rgba(0,31,84,0.92)_100%)] transition-opacity duration-300 group-hover:opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[radial-gradient(circle_at_18%_100%,rgba(2,89,223,0.42),transparent_52%)]" />
                  <div className="relative flex h-full min-h-[360px] flex-col justify-end p-6 text-white">
                    <div className="max-w-[18rem] rounded-sm bg-primary/18 p-4 backdrop-blur-[2px] transition-all duration-300 group-hover:-translate-y-3 group-hover:bg-primary/34">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#7eb0ff] drop-shadow">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mb-3 text-lg font-bold leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                        {item.title}
                      </h3>
                      <p className="max-h-0 overflow-hidden text-sm leading-relaxed text-white/0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:max-h-44 group-hover:text-white/88">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 5. MISSION, VISION, VALUES */}
      <AnimatedSection>
        <section className="relative overflow-hidden py-14 md:py-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Visual Identity
              </p>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-primary md:text-4xl">
                {nyc.heading}
              </h2>
              <p className="text-base leading-relaxed text-gray-600">{nyc.body}</p>
            </div>

            <MobileCarousel label="Identity Pillars">
              <div className="h-full border border-gray-200 border-t-accent bg-[linear-gradient(135deg,#f8fafc_0%,#eef4ff_100%)] p-6 text-primary">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  01
                </p>
                <h3 className="mb-4 text-xl font-bold text-primary">{mvv.mission.title}</h3>
                <p className="text-base leading-relaxed text-gray-600">{mvv.mission.desc}</p>
              </div>

              <div className="h-full border border-gray-200 border-t-accent bg-[linear-gradient(135deg,#f8fafc_0%,#eef4ff_100%)] p-6 text-primary">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  02
                </p>
                <h3 className="mb-4 text-xl font-bold text-primary">{mvv.vision.title}</h3>
                <p className="text-base leading-relaxed text-gray-600">{mvv.vision.desc}</p>
              </div>

              <div className="h-full border border-gray-200 border-t-accent bg-[linear-gradient(135deg,#f8fafc_0%,#eef4ff_100%)] p-6 text-primary">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  03
                </p>
                <h3 className="mb-4 text-xl font-bold text-primary">{mvv.values.title}</h3>
                <ul className="space-y-3 text-base text-gray-600">
                  {mvv.values.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </MobileCarousel>

            <div className="hidden gap-4 md:grid md:grid-cols-3">
              <div className="border-t-2 border-accent bg-[linear-gradient(135deg,#f8fafc_0%,#eef4ff_100%)] p-6 text-primary md:p-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  01
                </p>
                <h3 className="mb-4 text-xl font-bold text-primary">{mvv.mission.title}</h3>
                <p className="text-base leading-relaxed text-gray-600">{mvv.mission.desc}</p>
              </div>
              <div className="border-t-2 border-accent bg-[linear-gradient(135deg,#f8fafc_0%,#eef4ff_100%)] p-6 text-primary md:p-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  02
                </p>
                <h3 className="mb-4 text-xl font-bold text-primary">{mvv.vision.title}</h3>
                <p className="text-base leading-relaxed text-gray-600">{mvv.vision.desc}</p>
              </div>
              <div className="border-t-2 border-accent bg-[linear-gradient(135deg,#f8fafc_0%,#eef4ff_100%)] p-6 text-primary md:p-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  03
                </p>
                <h3 className="mb-4 text-xl font-bold text-primary">{mvv.values.title}</h3>
                <ul className="space-y-3 text-base text-gray-600">
                  {mvv.values.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 6. CTA */}
      <CtaBanner
        heading={cta.heading}
        subheading="Serving residential and commercial clients across New York and New Jersey."
        cta={{ label: cta.label, href: cta.href }}
      />
    </div>
  );
}

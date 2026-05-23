/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  ClipboardCheck,
  Home,
  Layers,
  MapPin,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CtaBanner from "@/components/sections/CtaBanner";
import InternalPageHero from "@/components/sections/InternalPageHero";
import { servicesContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | NOVACY Wallpaper Installation",
  description:
    "Residential wallpaper installation, commercial wallpaper installation, wallpaper removal, and surface preparation across New York City and Northern New Jersey.",
};

const serviceIcons = [Home, Building2, Layers];
const reservationIcons = [ClipboardCheck, Check, CalendarCheck];

export default function Services() {
  const { hero, intro, services, deliverables, serviceAreas, reservation, cta } = servicesContent;

  return (
    <div className="bg-white">
      <InternalPageHero
        eyebrow={hero.eyebrow}
        title={hero.heading}
        accent={hero.headingAccent}
        description={hero.subheading}
        backgroundImage={hero.backgroundImage}
        backgroundPosition={hero.backgroundPosition}
      />

      <AnimatedSection>
        <section className="py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1fr] md:items-end">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  {intro.label}
                </p>
                <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">
                  {intro.heading}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-gray-600">{intro.body}</p>
            </div>

            <div className="grid border border-gray-200 border-t-accent bg-white md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] ?? Home;

                return (
                  <a
                    key={service.title}
                    href={`#${service.reservationKey}`}
                    className={`group p-6 transition-colors hover:bg-gray-50 md:p-8 ${
                      index < services.length - 1 ? "border-b border-gray-200 md:border-b-0 md:border-r" : ""
                    }`}
                  >
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center border border-accent/25 text-accent transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
                      {service.eyebrow}
                    </p>
                    <h2 className="mb-4 text-xl font-bold leading-tight text-primary transition-colors group-hover:text-accent">
                      {service.title}
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-gray-600">{service.desc}</p>
                    <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                      View Service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="space-y-0">
        {services.map((service, index) => {
          const Icon = serviceIcons[index] ?? Home;
          const isReversed = index % 2 === 1;

          return (
            <AnimatedSection key={service.title}>
              <article
                id={service.reservationKey}
                className={`border-t border-gray-200 ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
              >
                <div
                  className="mx-auto grid max-w-7xl gap-0 px-4 py-14 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8"
                >
                  <div
                    className={`relative order-2 min-h-[280px] overflow-hidden border border-gray-200 bg-[linear-gradient(135deg,#f8fafc_0%,#eef4ff_100%)] md:min-h-[420px] ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.imagePlaceholder}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(0,46,125,0)_0%,rgba(0,46,125,0.26)_100%)]" />
                  </div>

                  <div
                    className={`order-1 border border-gray-200 border-t-accent bg-white p-6 md:p-8 lg:p-10 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="mb-8 flex items-start justify-between gap-6">
                      <div>
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                          {service.eyebrow}
                        </p>
                        <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">
                          {service.title}
                        </h2>
                      </div>
                      <span className="hidden h-12 w-12 flex-shrink-0 items-center justify-center border border-accent/25 text-accent md:flex">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <p className="mb-7 text-base leading-relaxed text-gray-600">{service.desc}</p>

                    <div className="mb-7 grid gap-4 sm:grid-cols-2">
                      <div className="border border-gray-200 bg-gray-50 p-5">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                          Best For
                        </p>
                        <p className="text-sm leading-relaxed text-gray-600">{service.bestFor}</p>
                      </div>
                      <div className="border border-gray-200 bg-gray-50 p-5">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                          Outcome
                        </p>
                        <p className="text-sm leading-relaxed text-gray-600">{service.outcome}</p>
                      </div>
                    </div>

                    <div className="mb-7 border border-gray-200 bg-white p-5">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                        Technical Scope
                      </p>
                      <ul className="mb-5 flex flex-wrap gap-2">
                        {service.materials.map((item) => (
                          <li
                            key={item}
                            className="border border-gray-200 bg-gray-50 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-primary"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm leading-relaxed text-gray-600">{service.notes}</p>
                    </div>

                    <div className="mb-8 border-t border-gray-200 pt-6">
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                        What this includes
                      </p>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center bg-accent text-white">
                              <Check className="h-3 w-3" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border border-gray-200 bg-[linear-gradient(135deg,#f8fafc_0%,#eef4ff_100%)] p-5">
                      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                            Custom Quote Required
                          </p>
                          <p className="text-sm leading-relaxed text-gray-600">
                            Final pricing is based on measurements, material, wall condition, and
                            schedule. A 50% deposit is collected only after quote approval.
                          </p>
                        </div>
                        <p className="text-2xl font-bold text-primary">50%</p>
                      </div>

                      <Link
                        href={`/contact?service=${service.reservationKey}`}
                        className="inline-flex w-full items-center justify-center bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-primary"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </section>

      <AnimatedSection>
        <section className="border-t border-gray-200 bg-gray-50 py-14 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:px-8">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                {serviceAreas.label}
              </p>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-primary md:text-4xl">
                {serviceAreas.heading}
              </h2>
              <p className="text-base leading-relaxed text-gray-600">{serviceAreas.body}</p>
            </div>

            <div className="grid border border-gray-200 border-t-accent bg-white sm:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.items.map((area, index) => (
                <div
                  key={area}
                  className={`flex items-center gap-3 p-4 ${
                    index < serviceAreas.items.length - 1 ? "border-b border-gray-200" : ""
                  } sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r`}
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-accent/25 text-accent">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-bold text-primary">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative overflow-hidden bg-primary py-14 text-white md:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{ backgroundImage: "url('/brand/background-pattern-thin.svg')" }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-primary/76" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1fr] md:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  {reservation.label}
                </p>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                  {reservation.heading}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-white/72">{reservation.body}</p>
            </div>

            <div className="grid border border-white/16 md:grid-cols-3">
              {reservation.items.map((item, index) => {
                const Icon = reservationIcons[index] ?? ClipboardCheck;

                return (
                  <div
                    key={item.title}
                    className={`p-6 md:p-8 ${
                      index < reservation.items.length - 1
                        ? "border-b border-white/16 md:border-b-0 md:border-r"
                        : ""
                    }`}
                  >
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center border border-accent/40 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/68">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <CtaBanner heading={cta.heading} subheading={cta.subheading} cta={cta.cta} />
    </div>
  );
}

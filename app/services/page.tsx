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
import MobileCarousel from "@/components/MobileCarousel";
import CtaBanner from "@/components/sections/CtaBanner";
import InternalPageHero from "@/components/sections/InternalPageHero";
import { servicesContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | NOVACY Wallpaper Installation",
  description:
    "Residential wallpaper installation, commercial wallpaper installation, wallpaper removal, and surface preparation across New York & New Jersey.",
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

            <MobileCarousel label="Service Menu">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] ?? Home;

                return (
                  <a
                    key={service.title}
                    href={`#${service.reservationKey}`}
                    className="group relative block min-h-[330px] overflow-hidden border border-gray-200 border-t-accent bg-white p-6 transition-colors"
                  >
                    <div className="relative mb-8 flex justify-end">
                      <span className="flex h-11 w-11 items-center justify-center border border-accent/25 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="relative mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
                      {service.eyebrow}
                    </p>
                    <h2 className="relative mb-4 text-xl font-bold leading-tight text-primary">
                      {service.title}
                    </h2>
                    <p className="relative mb-6 text-sm leading-relaxed text-gray-600">{service.desc}</p>
                    <span className="relative inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                      View Service
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                );
              })}
            </MobileCarousel>

            <div className="hidden border border-gray-200 border-t-accent bg-white md:grid md:grid-cols-3">
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

      <AnimatedSection>
        <section className="border-t border-gray-200 bg-gray-50 py-14 md:hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Service Details
              </p>
              <h2 className="text-3xl font-bold leading-tight text-primary">
                Scope, Finish, Standard
              </h2>
            </div>

            <MobileCarousel label="Service Details">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] ?? Home;

                return (
                  <article
                    key={service.title}
                    className="relative overflow-hidden border border-gray-200 border-t-accent bg-white"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[length:210%_auto] bg-center bg-no-repeat opacity-70"
                      style={{ backgroundImage: "url('/brand/background-pattern-card-gray.svg')" }}
                    />
                    <div className="relative min-h-52 overflow-hidden bg-gray-100">
                      <img
                        src={service.image}
                        alt={service.imagePlaceholder}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,84,0)_0%,rgba(0,31,84,0.34)_100%)]" />
                    </div>

                    <div className="relative z-10 overflow-hidden p-6">
                      <div className="relative mb-6 flex justify-end">
                        <span className="flex h-11 w-11 items-center justify-center border border-accent/25 text-accent">
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>

                      <div className="relative">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3A74D8]">
                          {service.eyebrow}
                        </p>
                        <h3 className="mb-4 text-2xl font-bold leading-tight text-primary">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600">{service.desc}</p>

                        <div className="mt-6 border-t border-gray-200 pt-5">
                          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3A74D8]">
                            Best For
                          </p>
                          <p className="text-sm leading-relaxed text-gray-600">{service.bestFor}</p>
                        </div>

                        <div className="mt-6 border-t border-gray-200 pt-5">
                          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3A74D8]">
                            Technical Scope
                          </p>
                          <ul className="flex flex-wrap gap-2">
                            {service.materials.slice(0, 5).map((item) => (
                              <li
                                key={item}
                                className="border border-[#BFD4FF] bg-[#F7FAFF] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 border border-gray-200 bg-white/92 p-4">
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                            Custom Quote Required
                          </p>
                          <p className="text-sm leading-relaxed text-gray-600">
                            Final pricing is based on project scope, wall conditions, material
                            selection, and scheduling.
                          </p>
                        </div>

                        <Link
                          href={`/contact?service=${service.reservationKey}`}
                          className="mt-5 inline-flex w-full items-center justify-center bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </MobileCarousel>
          </div>
        </section>
      </AnimatedSection>

      <section className="hidden space-y-0 md:block">
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
                    className={`relative order-1 overflow-hidden border border-gray-200 border-t-accent bg-white p-6 md:p-8 lg:p-10 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[length:150%_auto] bg-center bg-no-repeat opacity-75"
                      style={{ backgroundImage: "url('/brand/background-pattern-card-gray.svg')" }}
                    />

                    <div className="relative z-10">
                      <div className="mb-8 flex items-start justify-between gap-6">
                        <div>
                          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#3A74D8]">
                            {service.eyebrow}
                          </p>
                          <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">
                            {service.title}
                          </h2>
                        </div>
                        <div className="hidden flex-1 items-center gap-4 md:flex">
                          <span className="h-px flex-1 bg-gray-200" />
                          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-accent/35 bg-[#EAF2FF] text-accent">
                            <Icon className="h-5 w-5" />
                          </span>
                        </div>
                      </div>

                      <p className="mb-7 text-base leading-relaxed text-gray-600">{service.desc}</p>

                      <MobileCarousel label="Project Fit" className="mb-7">
                        <div className="h-full border border-gray-200 border-t-accent bg-gray-50 p-5">
                          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                            Best For
                          </p>
                          <p className="text-sm leading-relaxed text-gray-600">{service.bestFor}</p>
                        </div>
                        <div className="h-full border border-gray-200 border-t-accent bg-gray-50 p-5">
                          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                            Outcome
                          </p>
                          <p className="text-sm leading-relaxed text-gray-600">{service.outcome}</p>
                        </div>
                      </MobileCarousel>

                      <div className="mb-7 hidden gap-4 md:grid md:grid-cols-2">
                        <div className="border border-gray-200 border-t-[#AFCBFF] bg-[#F7FAFF] p-5">
                          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3A74D8]">
                            Best For
                          </p>
                          <p className="text-sm leading-relaxed text-gray-600">{service.bestFor}</p>
                        </div>
                        <div className="border border-gray-200 border-t-[#AFCBFF] bg-[#F7FAFF] p-5">
                          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3A74D8]">
                            Outcome
                          </p>
                          <p className="text-sm leading-relaxed text-gray-600">{service.outcome}</p>
                        </div>
                      </div>

                      <div className="mb-7 border border-gray-200 border-t-[#AFCBFF] bg-white/92 p-5">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3A74D8]">
                          Technical Scope
                        </p>
                        <ul className="mb-5 flex flex-wrap gap-2">
                          {service.materials.map((item) => (
                            <li
                              key={item}
                              className="border border-[#BFD4FF] bg-[#F7FAFF] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-primary"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm leading-relaxed text-gray-600">{service.notes}</p>
                      </div>

                      <div className="mb-8 border-t border-gray-200 pt-6">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#3A74D8]">
                          What this includes
                        </p>
                        <MobileCarousel label="Included">
                          {deliverables.map((item) => (
                            <div
                              key={item}
                              className="flex min-h-24 items-center gap-3 border border-gray-200 border-t-accent bg-gray-50 p-4 text-sm text-gray-600"
                            >
                              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center bg-accent text-white">
                                <Check className="h-3 w-3" />
                              </span>
                              {item}
                            </div>
                          ))}
                        </MobileCarousel>

                        <ul className="hidden gap-3 md:grid md:grid-cols-2">
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
                              Final pricing is based on project scope, wall conditions, material
                              selection, and scheduling. A 50% deposit is required to secure your
                              installation date.
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
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </section>

      <AnimatedSection>
        <section className="border-t border-gray-200 bg-gray-50 py-14 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:overflow-visible lg:px-8">
            <div className="max-w-xl min-w-0">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                {serviceAreas.label}
              </p>
              <h2 className="mb-5 text-[2.05rem] font-bold leading-tight text-primary md:text-4xl">
                {serviceAreas.heading}
              </h2>
              <p className="text-base leading-relaxed text-gray-600">{serviceAreas.body}</p>
            </div>

            <MobileCarousel label="Service Areas">
              {serviceAreas.groups.map((group) => (
                <div key={group.title} className="h-full border border-gray-200 border-t-accent bg-white">
                  <div className="border-b border-gray-200 p-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                      {group.title}
                    </h3>
                  </div>
                  <div>
                    {group.items.map((area, index) => (
                      <div
                        key={area}
                        className={`flex min-w-0 items-center gap-3 p-4 ${
                          index < group.items.length - 1 ? "border-b border-gray-200" : ""
                        }`}
                      >
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-accent/25 text-accent">
                          <MapPin className="h-3.5 w-3.5" />
                        </span>
                        <span className="min-w-0 text-sm font-bold text-primary">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </MobileCarousel>

            <div className="hidden gap-4 md:grid md:grid-cols-2">
              {serviceAreas.groups.map((group) => (
                <div key={group.title} className="border border-gray-200 border-t-accent bg-white">
                  <div className="border-b border-gray-200 p-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                      {group.title}
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2">
                    {group.items.map((area, index) => (
                      <div
                        key={area}
                        className={`flex items-center gap-3 p-4 ${
                          index < group.items.length - 1 ? "border-b border-gray-200" : ""
                        } sm:[&:nth-child(odd)]:border-r`}
                      >
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-accent/25 text-accent">
                          <MapPin className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm font-bold text-primary">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative overflow-hidden bg-[#002E7D] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/brand/background-pattern-footer.svg')" }}
          />

          <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6 md:pt-16 lg:px-8">
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

            <MobileCarousel label="Scheduling Method" theme="dark">
              {reservation.items.map((item, index) => {
                const Icon = reservationIcons[index] ?? ClipboardCheck;

                return (
                  <div
                    key={item.title}
                    className="min-h-[220px] border border-gray-200 border-t-accent bg-white p-6"
                  >
                    <div className="mb-8 flex justify-end">
                      <span className="flex h-11 w-11 items-center justify-center border border-accent/40 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="mb-4 text-lg font-bold text-primary">{item.title}</h3>
                    <p className="text-[13px] leading-relaxed text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </MobileCarousel>

            <div className="hidden border border-white/16 md:grid md:grid-cols-3">
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

          <CtaBanner heading={cta.heading} subheading={cta.subheading} cta={cta.cta} integrated />
        </section>
      </AnimatedSection>
    </div>
  );
}

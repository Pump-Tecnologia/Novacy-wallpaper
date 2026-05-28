import type { Metadata } from "next";
import { ArrowRight, Clock, Ruler, Wallpaper } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactRequestSection from "@/components/ContactRequestSection";
import MobileCarousel from "@/components/MobileCarousel";
import InternalPageHero from "@/components/sections/InternalPageHero";
import { contactContent, servicesContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | NOVACY Wallpaper Installation",
  description:
    "Request a wallpaper installation consultation with NOVACY across New York & New Jersey.",
};

const prepIcons = [Ruler, Wallpaper, Clock];

type ContactPageProps = {
  searchParams: Promise<{ service?: string | string[] | undefined }>;
};

export default async function Contact({ searchParams }: ContactPageProps) {
  const query = await searchParams;
  const requestedService = Array.isArray(query.service) ? query.service[0] : query.service;
  const {
    hero,
    heading,
    subheading,
    serviceOptions,
    materialOptions,
    contactMethods,
    quotePrep,
    depositNote,
    imagePlaceholder,
    image,
    whatsapp,
    submitLabel,
  } = contactContent;

  return (
    <div className="bg-white">
      <InternalPageHero
        eyebrow={hero.eyebrow}
        title={hero.headline}
        accent={hero.headlineAccent}
        description={hero.subheadline}
        backgroundImage={hero.backgroundImage}
        backgroundPosition={hero.backgroundPosition}
      />

      <ContactRequestSection
        heading={heading}
        subheading={subheading}
        serviceOptions={serviceOptions}
        materialOptions={materialOptions}
        contactMethods={contactMethods}
        imagePlaceholder={imagePlaceholder}
        image={image}
        whatsapp={whatsapp}
        submitLabel={submitLabel}
        services={servicesContent.services}
        initialServiceKey={requestedService}
      />

      <AnimatedSection>
        <section className="relative overflow-hidden bg-[#002E7D] py-14 text-white md:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-center bg-no-repeat bg-[length:1500px_1500px] md:bg-cover md:[background-attachment:fixed]"
            style={{ backgroundImage: "url('/brand/background-pattern-footer.svg')" }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1fr] md:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Before the Quote
                </p>
                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                  What Helps Define the Scope
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-white/72">
                A few clear details help us understand the surface, timeline, and installation
                requirements before preparing a custom quote.
              </p>
            </div>

            <MobileCarousel label="Quote Inputs" theme="dark">
              {quotePrep.map((item, index) => {
                const Icon = prepIcons[index] ?? ArrowRight;

                return (
                  <div
                    key={item.title}
                    className="group min-h-[260px] border border-gray-200 border-t-accent bg-white p-6"
                  >
                    <div className="mb-8 flex justify-end">
                      <span className="flex h-11 w-11 items-center justify-center border border-accent/25 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-primary">{item.title}</h3>
                    <p className="text-[13px] leading-relaxed text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </MobileCarousel>

            <div className="hidden border border-gray-200 border-t-accent bg-white md:grid md:grid-cols-3">
              {quotePrep.map((item, index) => {
                const Icon = prepIcons[index] ?? ArrowRight;

                return (
                  <div
                    key={item.title}
                    className={`group p-6 transition-colors hover:bg-gray-50 md:p-8 ${
                      index < quotePrep.length - 1 ? "border-b border-gray-200 md:border-b-0 md:border-r" : ""
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
                    <h3 className="mb-4 text-xl font-bold text-primary">{item.title}</h3>
                    <p className="text-base leading-relaxed text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border border-accent/20 bg-white p-5">
              <p className="text-sm font-medium leading-relaxed text-primary">{depositNote}</p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

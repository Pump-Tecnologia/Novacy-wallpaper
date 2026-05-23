/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

type ServiceItem = {
  title: string;
  reservationKey: string;
  imagePlaceholder: string;
  contactImage: string;
};

type ContactMethod = {
  label: string;
  value: string;
  href: string | null;
};

type ContactRequestSectionProps = {
  heading: string;
  subheading: string;
  serviceOptions: readonly string[];
  materialOptions: readonly string[];
  contactMethods: readonly ContactMethod[];
  imagePlaceholder: string;
  image: string;
  whatsapp: {
    label: string;
    phone: string;
    message: string;
  };
  submitLabel: string;
  services: readonly ServiceItem[];
  initialServiceKey?: string;
};

const methodIcons = [Mail, Phone, MapPin];

export default function ContactRequestSection({
  heading,
  subheading,
  serviceOptions,
  materialOptions,
  contactMethods,
  imagePlaceholder,
  image,
  whatsapp,
  submitLabel,
  services,
  initialServiceKey,
}: ContactRequestSectionProps) {
  const initialService = useMemo(
    () => services.find((service) => service.reservationKey === initialServiceKey),
    [initialServiceKey, services],
  );
  const [selectedServiceTitle, setSelectedServiceTitle] = useState(
    initialService?.title ?? serviceOptions[0] ?? "",
  );
  const selectedService = services.find((service) => service.title === selectedServiceTitle);
  const formHeading = selectedService ? `Request ${selectedService.title}` : heading;
  const formSubheading = selectedService
    ? `Share dimensions, material status, timing, and photos for ${selectedService.title.toLowerCase()}.`
    : subheading;
  const formImage = selectedService?.contactImage ?? image;
  const formImagePlaceholder = selectedService?.imagePlaceholder ?? imagePlaceholder;

  return (
    <AnimatedSection>
      <section className="py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="border border-gray-200 border-t-accent bg-white p-6 md:p-8 lg:p-10">
            <div className="mb-8 max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Project Request
              </p>
              <h1 className="mb-4 text-3xl font-bold leading-tight text-primary md:text-4xl">
                {formHeading}
              </h1>
              <p className="text-base leading-relaxed text-gray-600">{formSubheading}</p>
            </div>

            <ContactForm
              serviceOptions={serviceOptions}
              materialOptions={materialOptions}
              initialService={selectedService?.title}
              submitLabel={submitLabel}
              whatsapp={whatsapp}
              onServiceChange={setSelectedServiceTitle}
            />
          </div>

          <aside className="space-y-5">
            <div className="relative min-h-[320px] overflow-hidden border border-gray-200 bg-gray-50">
              <img
                key={formImage}
                src={formImage}
                alt={formImagePlaceholder}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,84,0.04)_0%,rgba(0,31,84,0.22)_58%,rgba(0,31,84,0.62)_100%)]" />
            </div>

            <div className="grid border border-gray-200 bg-white">
              {contactMethods.map((method, index) => {
                const Icon = methodIcons[index] ?? Mail;
                const content = (
                  <>
                    <span className="flex h-10 w-10 items-center justify-center border border-accent/25 text-accent transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
                        {method.label}
                      </span>
                      <span className="mt-1 block text-sm font-bold text-primary">
                        {method.value}
                      </span>
                    </span>
                  </>
                );

                return method.href ? (
                  <a
                    key={method.label}
                    href={method.href}
                    className="group flex items-center gap-4 border-b border-gray-200 p-5 transition-colors last:border-b-0 hover:bg-gray-50"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={method.label}
                    className="group flex items-center gap-4 border-b border-gray-200 p-5 last:border-b-0"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
    </AnimatedSection>
  );
}

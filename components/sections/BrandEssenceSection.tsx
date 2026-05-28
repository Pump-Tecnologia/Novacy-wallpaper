"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MobileCarousel from "@/components/MobileCarousel";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

interface BrandEssenceSectionProps {
  heading: string;
  body: string;
  cta: { label: string; href: string };
  image?: string;
  imagePlaceholder?: string;
  process?: readonly {
    number: string;
    title: string;
    desc: string;
  }[];
}

const methodSummary: Record<string, string> = {
  "01": "Scope, space, quote.",
  "02": "Clean, smooth, ready.",
  "03": "Precision alignment, clean cuts, flawless finish.",
  "04": "Review, refine, approve.",
};

export default function BrandEssenceSection({
  heading,
  body,
  cta,
  image,
  imagePlaceholder,
  process,
}: BrandEssenceSectionProps) {
  return (
    <section className="py-18 md:py-20 text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex flex-col justify-between max-w-xl">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">
                Structure / Geometry / Architecture
              </p>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-5">
                {heading}
              </h2>
              <p className="max-w-lg text-base text-white/72 leading-relaxed">{body}</p>
              <p className="mt-5 max-w-md text-sm font-bold uppercase leading-relaxed tracking-[0.14em] text-white">
                Built from New York lines. Finished to last.
              </p>
            </div>
            <div className="mt-8">
              <Button
                label={cta.label}
                href={cta.href}
                className="!bg-white !text-primary hover:!bg-accent hover:!text-white text-xs"
              />
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden border border-white/12 bg-white/[0.06] lg:min-h-[360px]">
            {image ? (
              <>
                <Image
                  src={image}
                  alt={imagePlaceholder ?? "Wallpaper installation detail"}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </>
            ) : (
              <div className="flex h-full items-center justify-center p-8 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                Detail photo placeholder
                <br />
                Finish / alignment / texture
              </div>
            )}
          </div>
        </div>

        {process && (
          <div className="mt-16">
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
              The Method
            </p>
            <MobileCarousel label="Process Line" theme="dark">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="relative min-h-[190px] border border-gray-200 border-t-accent bg-white p-6"
                >
                  <div className="relative flex h-full flex-col">
                    <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-gray-600">
                      {methodSummary[step.number] ?? step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </MobileCarousel>

            <div className="hidden gap-8 md:grid md:grid-cols-4 md:gap-6">
              {process.map((step, index) => (
                <div
                  key={step.number}
                  className="relative grid grid-cols-[2.4rem_1fr] gap-5 md:block"
                >
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute left-9 right-[-1.5rem] top-[1.1rem] h-px bg-white/18" />
                  )}
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-primary text-[11px] font-bold text-accent">
                    {step.number}
                  </div>
                  <div className="max-w-md pb-1 md:mt-5">
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/58">
                      {methodSummary[step.number] ?? step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

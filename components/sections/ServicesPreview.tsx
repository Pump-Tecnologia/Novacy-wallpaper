"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, House, PaintRoller, type LucideIcon } from "lucide-react";
import MobileCarousel from "@/components/MobileCarousel";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  residential: House,
  commercial: Building2,
  removal: PaintRoller,
};

interface ServiceItem {
  title: string;
  desc: string;
  highlights?: readonly string[];
  iconKey: string;
  reservationKey?: string;
}

interface ServicesPreviewProps {
  heading: string;
  subheading: string;
  items: readonly ServiceItem[];
  cta: { label: string; href: string };
}

export default function ServicesPreview({ heading, subheading, items, cta }: ServicesPreviewProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-primary text-4xl font-bold mb-3">{heading}</h2>
            <p className="text-gray-500 max-w-md">{subheading}</p>
          </div>
          <Link
            href={cta.href}
            className="inline-flex w-fit items-center justify-center gap-2 border border-accent px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-white md:text-xs"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <MobileCarousel label="Service Paths">
          {items.map((item) => {
            const Icon = iconMap[item.iconKey] ?? House;
            return (
              <div
                key={item.title}
                className="group relative flex min-h-[360px] flex-col gap-6 overflow-hidden border border-gray-100 border-t-accent bg-white p-6 transition-colors duration-200"
              >
                <div className="relative flex h-12 w-12 items-center justify-center border border-accent/25 bg-white text-accent">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className="relative flex flex-1 flex-col">
                  <h3 className="mb-3 text-base font-bold text-primary">{item.title}</h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">{item.desc}</p>
                  {item.highlights && (
                    <div className="mt-7 border-t border-gray-100 pt-6">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
                        Includes
                      </p>
                      <ul className="space-y-3">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-[13px] font-medium text-primary">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.reservationKey && (
                    <div className="mt-7 border-t border-gray-100 pt-6">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
                        Quote-Based Scope
                      </p>
                      <div className="flex flex-col gap-4">
                        <p className="text-[13px] leading-relaxed text-gray-500">
                          Pricing is confirmed after measurements, photos, material, and wall condition are reviewed.
                        </p>
                        <Link
                          href={`/contact?service=${item.reservationKey}`}
                          className="inline-flex w-full items-center justify-center bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-primary"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </MobileCarousel>

        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-0 border border-gray-100"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, i) => {
            const Icon = iconMap[item.iconKey] ?? House;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                transition={{ duration: 0.2 }}
                className={`group relative min-h-[360px] overflow-hidden p-8 md:p-10 flex flex-col gap-8 cursor-default transition-colors duration-200 hover:bg-blue-50/30
                  ${i < items.length - 1 ? "border-r border-gray-100" : ""}
                `}
              >
                <div className="relative flex h-12 w-12 items-center justify-center border border-accent/25 text-accent transition-colors duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className="relative flex flex-1 flex-col">
                  <h3 className="text-primary font-bold text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  {item.highlights && (
                    <div className="mt-7 pt-6 border-t border-gray-100">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
                        Includes
                      </p>
                      <ul className="space-y-3">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm font-medium text-primary"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.reservationKey && (
                    <div className="mt-7 pt-6 border-t border-gray-100">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
                        Quote-Based Scope
                      </p>
                      <div className="flex flex-col gap-4">
                        <p className="text-sm leading-relaxed text-gray-500">
                          Pricing is confirmed after measurements, photos, material, and wall condition are reviewed.
                        </p>
                        <Link
                          href={`/contact?service=${item.reservationKey}`}
                          className="inline-flex w-full items-center justify-center bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-primary"
                        >
                          Request Quote
                        </Link>
                        <p className="text-xs leading-relaxed text-gray-400">
                          A 50% deposit secures the project date after quote approval.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import MobileCarousel from "@/components/MobileCarousel";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Stat { value: string; label: string }

export default function StatsBar({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="relative overflow-hidden bg-[#004198] text-white py-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/brand/background-pattern-blue.svg')" }}
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <MobileCarousel label="Project Proof" theme="dark">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-gray-200 border-t-accent bg-white p-6 text-center"
            >
              <p className="font-display text-4xl font-bold tracking-tight text-primary">{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </MobileCarousel>
      </div>

      <motion.div
        className="relative mx-auto hidden max-w-5xl grid-cols-3 gap-8 px-4 sm:px-6 md:grid lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={staggerItem} className="text-center">
            <p className="text-4xl md:text-5xl font-bold font-display tracking-tight">
              {stat.value}
            </p>
            <p className="text-xs tracking-widest uppercase mt-2 opacity-80 font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

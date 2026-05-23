"use client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Stat { value: string; label: string }

export default function StatsBar({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="relative overflow-hidden bg-accent text-white py-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.09]"
        style={{ backgroundImage: "url('/brand/background-pattern-thin.svg')" }}
      />
      <motion.div
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8"
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

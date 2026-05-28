"use client";
import { motion } from "framer-motion";
import MobileCarousel from "@/components/MobileCarousel";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

interface Pillar {
  title: string;
  desc: string;
}

interface PillarsSectionProps {
  heading: string;
  items: readonly Pillar[];
}

export default function PillarsSection({ heading, items }: PillarsSectionProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-primary text-3xl font-bold mb-4">{heading}</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
        </motion.div>

        {/* Cards com stagger */}
        <MobileCarousel label="Core Pillars">
          {items.map((pillar) => (
            <div
              key={pillar.title}
              className="h-full border border-gray-200 border-t-accent bg-white p-8"
            >
              <h3 className="mb-4 text-xl font-bold text-primary">{pillar.title}</h3>
              <p className="leading-relaxed text-gray-600">{pillar.desc}</p>
            </div>
          ))}
        </MobileCarousel>

        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {items.map((pillar) => (
            <motion.div
              key={pillar.title}
              className="bg-white p-10 shadow-xl border-t-4 border-accent"
              variants={staggerItem}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

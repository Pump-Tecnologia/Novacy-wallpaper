"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";

interface CtaBannerProps {
  heading: string;
  subheading?: string;
  cta: { label: string; href: string };
  integrated?: boolean;
}

export default function CtaBanner({ heading, subheading, cta, integrated = false }: CtaBannerProps) {
  return (
    <section
      className={`relative overflow-hidden text-center text-white ${
        integrated ? "bg-transparent py-16 md:py-20" : "bg-[#002E7D] py-28"
      }`}
    >
      {!integrated && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/brand/background-pattern-footer.svg')" }}
        />
      )}
      <motion.div
        className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-5">{heading}</h2>
        {subheading && (
          <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto">{subheading}</p>
        )}
        <Link
          href={cta.href}
          className="inline-block bg-accent text-white px-10 py-4 font-bold tracking-widest text-xs uppercase hover:bg-white hover:text-primary transition-colors duration-300"
        >
          {cta.label}
        </Link>
      </motion.div>
    </section>
  );
}

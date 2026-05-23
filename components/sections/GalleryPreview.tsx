"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

interface GalleryImage { src: string | null; alt: string; aspect: string }
interface GalleryPreviewProps {
  heading: string;
  subheading: string;
  images: readonly GalleryImage[];
  cta: { label: string; href: string };
}

const aspectMap: Record<string, string> = {
  portrait:  "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square:    "aspect-square",
};

export default function GalleryPreview({ heading, subheading, images, cta }: GalleryPreviewProps) {
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
            className="text-xs font-bold tracking-widest uppercase text-accent border-b-2 border-accent pb-0.5 hover:text-primary hover:border-primary transition-colors whitespace-nowrap"
          >
            {cta.label} →
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`${aspectMap[img.aspect] ?? "aspect-square"} overflow-hidden bg-gray-100 relative group`}
            >
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-xs p-4 text-center">
                  [{img.alt}]
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

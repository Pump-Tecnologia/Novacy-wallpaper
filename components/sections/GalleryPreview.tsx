"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MobileCarousel from "@/components/MobileCarousel";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

interface GalleryImage { src: string | null; alt: string; aspect: string }
interface GalleryPreviewProps {
  heading: string;
  subheading: string;
  images: readonly GalleryImage[];
  cta: { label: string; href: string };
}

const galleryAspect = "aspect-[4/5]";

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
            className="inline-flex w-fit items-center justify-center gap-2 border border-accent px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-white md:text-xs"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <MobileCarousel label="Installation Gallery">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${galleryAspect} relative overflow-hidden border border-gray-200 border-t-accent bg-gray-100`}
            >
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-4 text-center font-mono text-xs text-gray-400">
                  [{img.alt}]
                </div>
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,84,0)_0%,rgba(0,31,84,0.16)_100%)]" />
            </div>
          ))}
        </MobileCarousel>

        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-3"
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
              className={`${galleryAspect} overflow-hidden bg-gray-100 relative group`}
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

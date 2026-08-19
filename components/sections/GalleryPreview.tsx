"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MobileCarousel from "@/components/MobileCarousel";
import ZoomableImage from "@/components/ui/ZoomableImage";
import { fadeUp } from "@/lib/animations";

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

        <MobileCarousel
          label="Installation Gallery"
          mobileOnly={false}
          slideClassName="w-[calc(100%-1rem)] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`${galleryAspect} relative overflow-hidden border border-gray-200 border-t-accent bg-gray-100`}
            >
              {img.src ? (
                <ZoomableImage src={img.src} alt={img.alt} />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-4 text-center font-mono text-xs text-gray-500">
                  [{img.alt}]
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,84,0)_0%,rgba(0,31,84,0.16)_100%)]" />
            </div>
          ))}
        </MobileCarousel>
      </div>
    </section>
  );
}

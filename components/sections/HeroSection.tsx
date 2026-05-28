"use client";
import { useState } from "react";
import type { PointerEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { heroLine, heroFade } from "@/lib/animations";

interface HeroSectionProps {
  headline: string;
  headlineAccent: string;
  headlineSuffix?: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  imagePlaceholder?: string;
  beforeImage?: string;
  afterImage?: string;
  theme?: "dark" | "light";
}

export default function HeroSection({
  headline,
  headlineAccent,
  headlineSuffix,
  ctaPrimary,
  ctaSecondary,
  beforeImage,
  afterImage,
  theme = "dark",
}: HeroSectionProps) {
  const isDark = theme === "dark";
  const [reveal, setReveal] = useState(68);
  const hasReveal = Boolean(beforeImage && afterImage);
  const titleShadow = {
    textShadow:
      "0 2px 8px rgba(0, 20, 60, 0.45), 0 12px 32px rgba(0, 20, 60, 0.42)",
  };
  const updateRevealFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextReveal = ((event.clientX - rect.left) / rect.width) * 100;
    setReveal(Math.min(88, Math.max(12, nextReveal)));
  };
  const handleRevealPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updateRevealFromPointer(event);
  };
  const handleRevealPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) return;
    updateRevealFromPointer(event);
  };

  return (
    <section
      className={`relative flex min-h-[calc(100svh-4rem)] items-end overflow-hidden md:min-h-[calc(100vh-5rem)] ${
        isDark ? "bg-primary" : "bg-gray-50"
      }`}
    >
      {hasReveal && (
        <div
          className="absolute inset-0 cursor-ew-resize"
          onPointerDown={handleRevealPointerDown}
          onPointerMove={handleRevealPointerMove}
        >
          <Image
            src={afterImage ?? ""}
            alt="Finished wallpaper installation"
            fill
            priority
            unoptimized
            quality={95}
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
          >
            <Image
              src={beforeImage ?? ""}
              alt="Room before wallpaper installation"
              fill
              priority
              unoptimized
              quality={95}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/38 to-primary/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/82 via-transparent to-black/12" />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 w-px bg-white/90 shadow-[0_0_24px_rgba(255,255,255,0.75)]"
            style={{ left: `${reveal}%` }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[34%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-primary/80 text-white shadow-2xl backdrop-blur-sm md:top-[44%]"
            style={{ left: `${reveal}%` }}
          >
            <span className="h-3 w-3 rotate-45 border-b-2 border-l-2 border-white" />
            <span className="-ml-1 h-3 w-3 rotate-45 border-r-2 border-t-2 border-white" />
          </div>

          <div className="absolute left-4 top-24 rounded-sm bg-primary/65 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm sm:left-6 lg:left-8">
            Before
          </div>
          <div className="absolute right-4 top-24 rounded-sm bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur-sm sm:right-6 lg:right-8">
            After
          </div>

          <input
            aria-label="Reveal before and after installation"
            type="range"
            min="12"
            max="88"
            value={reveal}
            onChange={(event) => setReveal(Number(event.target.value))}
            className="absolute inset-x-0 top-[34%] z-20 h-16 -translate-y-1/2 cursor-ew-resize opacity-0 md:top-[44%]"
          />
        </div>
      )}

      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 pb-20 pt-48 sm:px-6 md:pb-20 lg:px-8 ${
          isDark ? "text-white" : "text-primary"
        }`}
      >
        {/* Linha 1 — headline principal */}
        <div className="overflow-hidden mb-1">
          <motion.span
            className="block max-w-[21rem] text-[3.35rem] font-bold leading-[1.02] sm:max-w-3xl sm:text-5xl md:text-6xl md:leading-[0.98] xl:text-7xl"
            style={titleShadow}
            variants={heroLine(0)}
            initial="hidden"
            animate="visible"
          >
            {headline}
          </motion.span>
        </div>

        {/* Linha 2 — accent + suffix */}
        <div className="overflow-hidden mb-8">
          <motion.span
            className="block max-w-[21rem] text-[3.35rem] font-bold leading-[1.02] sm:max-w-4xl sm:text-5xl md:text-6xl md:leading-[0.98] xl:text-7xl"
            style={titleShadow}
            variants={heroLine(0.15)}
            initial="hidden"
            animate="visible"
          >
            <span className="text-white">{headlineAccent}</span>
            {headlineSuffix && ` ${headlineSuffix}`}
          </motion.span>
        </div>

        {/* CTAs */}
        <motion.div
          className="grid max-w-md grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4"
          variants={heroFade(0.38)}
          initial="hidden"
          animate="visible"
        >
          <Button
            label={ctaPrimary.label}
            href={ctaPrimary.href}
            variant="accent"
            className="flex min-h-12 items-center justify-center px-4 py-3 text-center text-[11px] tracking-[0.18em] sm:w-auto sm:px-8"
          />
          {ctaSecondary && (
            <Button
              label={ctaSecondary.label}
              href={ctaSecondary.href}
              className="flex min-h-12 items-center justify-center border border-white/80 !bg-white/92 px-4 py-3 text-center text-[11px] tracking-[0.18em] !text-primary backdrop-blur-sm hover:!bg-white sm:w-auto sm:px-8"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}

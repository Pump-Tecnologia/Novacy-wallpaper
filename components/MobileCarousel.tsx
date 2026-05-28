"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type MobileCarouselProps = {
  label: string;
  children: React.ReactNode;
  theme?: "light" | "dark";
  className?: string;
  slideClassName?: string;
};

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileCarousel({
  label,
  children,
  theme = "light",
  className,
  slideClassName,
}: MobileCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = Children.toArray(children);
  const isDark = theme === "dark";

  const computeActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slideElements = Array.from(
      track.querySelectorAll<HTMLElement>("[data-mobile-carousel-slide]"),
    );
    const nextIndex = slideElements.reduce(
      (closest, slide, index) => {
        const distance = Math.abs(slide.offsetLeft - track.scrollLeft);
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index;

    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  }, []);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      computeActiveIndex();
    });
  }, [computeActiveIndex]);

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    const slide = track?.querySelectorAll<HTMLElement>("[data-mobile-carousel-slide]")[index];
    if (!track || !slide) return;

    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    computeActiveIndex();
  }, [slides.length, computeActiveIndex]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!slides.length) return null;

  return (
    <div className={cn("md:hidden", className)} data-mobile-carousel-theme={theme}>
      <div
        className={cn(
          "mb-4 flex items-center justify-between gap-4 border-t pt-4",
          isDark ? "border-white/16 text-white" : "border-gray-200 text-primary",
        )}
      >
        <div>
          <p
            className={cn(
              "text-[10px] font-bold uppercase tracking-[0.24em]",
              isDark ? "text-white/50" : "text-gray-400",
            )}
          >
            {label}
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goToSlide(Math.max(activeIndex - 1, 0))}
            className={cn(
              "flex h-10 w-10 items-center justify-center border transition-colors",
              isDark
                ? "border-white/35 text-white hover:border-white hover:bg-white hover:text-primary"
                : "border-gray-200 text-primary hover:border-accent hover:text-accent",
            )}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goToSlide(Math.min(activeIndex + 1, slides.length - 1))}
            className={cn(
              "flex h-10 w-10 items-center justify-center border transition-colors",
              isDark
                ? "border-white bg-white text-primary hover:border-accent hover:bg-accent hover:text-white"
                : "border-accent bg-accent text-white hover:bg-primary",
            )}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex touch-pan-x snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain pb-5 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              data-mobile-carousel-slide
              className={cn("w-[calc(100%-1rem)] min-w-0 shrink-0 snap-start", slideClassName)}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-px flex-1 transition-colors",
              index === activeIndex
                ? "bg-accent"
                : isDark
                  ? "bg-white/18"
                  : "bg-gray-200",
            )}
          />
        ))}
      </div>
    </div>
  );
}

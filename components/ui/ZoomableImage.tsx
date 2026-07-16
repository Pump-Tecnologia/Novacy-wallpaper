"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { Maximize2 } from "lucide-react";
import { useLightbox } from "@/components/ui/LightboxProvider";

interface ZoomableImageProps {
  src: string;
  alt: string;
  /** Classes for the clickable container (positioning/sizing). */
  className?: string;
  /** Classes for the inner img element. */
  imgClassName?: string;
}

export default function ZoomableImage({
  src,
  alt,
  className = "relative block h-full w-full",
  imgClassName = "h-full w-full object-cover",
}: ZoomableImageProps) {
  const { registerImage, openImage } = useLightbox();

  useEffect(() => {
    registerImage({ src, alt });
  }, [registerImage, src, alt]);

  return (
    <button
      type="button"
      aria-label={`View larger: ${alt}`}
      onClick={() => openImage(src)}
      className={`group/zoom cursor-zoom-in ${className}`}
    >
      <img src={src} alt={alt} className={imgClassName} />
      <span className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center border border-white/40 bg-primary/40 text-white backdrop-blur-[2px] transition-opacity duration-300 md:opacity-0 md:group-hover/zoom:opacity-100">
        <Maximize2 className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}

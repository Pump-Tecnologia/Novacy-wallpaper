"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import Lightbox, { type LightboxImage } from "@/components/ui/Lightbox";

interface LightboxContextValue {
  registerImage: (image: LightboxImage) => void;
  openImage: (src: string) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox(): LightboxContextValue {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
}

export default function LightboxProvider({ children }: { children: React.ReactNode }) {
  const imagesRef = useRef<readonly LightboxImage[]>([]);
  const [images, setImages] = useState<readonly LightboxImage[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  // Images register themselves in DOM order; duplicates (e.g. the same photo
  // rendered in both the mobile carousel and the desktop grid) are deduped by src.
  const registerImage = useCallback((image: LightboxImage) => {
    if (imagesRef.current.some((existing) => existing.src === image.src)) return;
    imagesRef.current = [...imagesRef.current, image];
    setImages(imagesRef.current);
  }, []);

  const openImage = useCallback((src: string) => {
    const imageIndex = imagesRef.current.findIndex((image) => image.src === src);
    if (imageIndex !== -1) setIndex(imageIndex);
  }, []);

  const value = useMemo(() => ({ registerImage, openImage }), [registerImage, openImage]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <Lightbox
        images={images}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </LightboxContext.Provider>
  );
}

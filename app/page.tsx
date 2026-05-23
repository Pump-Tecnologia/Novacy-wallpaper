import type { Metadata } from "next";
import { homeContent, homeExtras } from "@/lib/content";
import HeroSection       from "@/components/sections/HeroSection";
import ServicesPreview   from "@/components/sections/ServicesPreview";
import BrandEssenceSection from "@/components/sections/BrandEssenceSection";
import GalleryPreview    from "@/components/sections/GalleryPreview";
import CtaBanner         from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "NOVACY | Premium Wallpaper Installation in NYC",
  description:
    "Premium wallpaper installation in New York City, Long Island, and Northern New Jersey. Nearly a decade of craftsmanship and precision.",
};

export default function Home() {
  const { hero, brandEssence } = homeContent;
  const { process, servicesPreview, gallery, ctaBanner } = homeExtras;

  return (
    <div>
      {/* 1 — HERO */}
      <HeroSection
        headline={hero.headline}
        headlineAccent={hero.headlineAccent}
        headlineSuffix={hero.headlineSuffix}
        subheadline={hero.subheadline}
        ctaPrimary={hero.ctaPrimary}
        ctaSecondary={hero.ctaSecondary}
        beforeImage={hero.beforeImage}
        afterImage={hero.afterImage}
        theme="dark"
      />

      {/* 2 — SERVIÇOS PREVIEW */}
      <ServicesPreview
        heading={servicesPreview.heading}
        subheading={servicesPreview.subheading}
        items={servicesPreview.items}
        cta={servicesPreview.cta}
      />

      {/* 3 — BRAND ESSENCE */}
      <div className="relative overflow-hidden bg-primary text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: "url('/brand/background-pattern-thin.svg')" }}
        />
        <div className="absolute inset-0 bg-primary/78" />
        <div className="relative">
          <BrandEssenceSection
            heading={brandEssence.heading}
            body={brandEssence.body}
            cta={brandEssence.cta}
            image={brandEssence.image}
            imagePlaceholder={brandEssence.imagePlaceholder}
            process={process.steps}
          />
        </div>
      </div>

      {/* 4 — GALERIA */}
      <GalleryPreview
        heading={gallery.heading}
        subheading={gallery.subheading}
        images={gallery.images}
        cta={gallery.cta}
      />

      {/* 5 — CTA FINAL */}
      <CtaBanner
        heading={ctaBanner.heading}
        subheading={ctaBanner.subheading}
        cta={ctaBanner.cta}
      />
    </div>
  );
}

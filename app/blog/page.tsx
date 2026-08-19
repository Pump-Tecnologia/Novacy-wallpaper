import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import MobileCarousel from "@/components/MobileCarousel";
import CtaBanner from "@/components/sections/CtaBanner";
import InternalPageHero from "@/components/sections/InternalPageHero";
import LightboxProvider from "@/components/ui/LightboxProvider";
import ZoomableImage from "@/components/ui/ZoomableImage";
import { blogContent, homeExtras } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | NOVACY Wallpaper Installation NY & NJ",
  description:
    "Wallpaper installation guides, material tips, and planning notes for residential and commercial projects across New York & New Jersey.",
};

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Blog() {
  const { hero, intro, posts } = blogContent;
  const [featuredPost, ...regularPosts] = posts;

  return (
    <LightboxProvider>
    <div className="bg-white">
      <InternalPageHero
        eyebrow={hero.eyebrow}
        title={hero.heading}
        accent={hero.headingAccent}
        description={hero.subheading}
        backgroundImage={hero.backgroundImage}
        backgroundPosition={hero.backgroundPosition}
      />

      <AnimatedSection>
        <section className="py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1fr] md:items-end">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  {intro.label}
                </p>
                <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">
                  {intro.heading}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-gray-600">{intro.body}</p>
            </div>

            <article className="grid overflow-hidden border border-gray-200 border-t-accent bg-white lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-gray-50">
                <ZoomableImage
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,84,0.02)_0%,rgba(0,31,84,0.18)_60%,rgba(0,31,84,0.42)_100%)]" />
              </div>

              <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
                <div>
                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                      <BookOpen className="h-4 w-4" />
                      Featured Guide
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                      <CalendarDays className="h-4 w-4" />
                      {formatDate(featuredPost.date)}
                    </span>
                  </div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
                    {featuredPost.category}
                  </p>
                  <h2 className="mb-5 text-3xl font-bold leading-tight text-primary md:text-4xl">
                    {featuredPost.title}
                  </h2>
                  <p className="max-w-2xl text-base leading-relaxed text-gray-600">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-accent transition-colors hover:text-primary"
                  >
                    Read Guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative overflow-hidden bg-[#002E7D] py-14 text-white md:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[length:auto_130%] bg-center md:bg-cover md:[background-attachment:fixed]"
            style={{ backgroundImage: "url('/brand/background-pattern-footer.svg')" }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Resource Library
                </p>
                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                  More Planning Guides
                </h2>
              </div>
              <p className="max-w-lg text-base leading-relaxed text-white/72">
                Short, practical articles to help define scope, materials, and expectations before
                installation begins.
              </p>
            </div>

            <MobileCarousel label="Planning Guides" theme="dark">
              {regularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex min-h-[420px] flex-col overflow-hidden border border-gray-200 border-t-accent bg-white"
                >
                  <div className="relative min-h-40 overflow-hidden bg-gray-50">
                    <ZoomableImage
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,84,0)_0%,rgba(0,31,84,0.22)_100%)]" />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-5 flex justify-end">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500">
                      {post.category}
                    </p>
                    <h3 className="mb-4 text-lg font-bold leading-tight text-primary">
                      {post.title}
                    </h3>
                    <p className="flex-1 text-[13px] leading-relaxed text-gray-600">{post.excerpt}</p>
                    <div className="mt-7 border-t border-gray-200 pt-5">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent"
                      >
                        Read Guide
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </MobileCarousel>

            <div className="hidden border border-gray-200 border-t-accent bg-white md:grid md:grid-cols-2 xl:grid-cols-3">
              {regularPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`group flex min-h-[360px] flex-col transition-colors hover:bg-gray-50 ${
                    index < regularPosts.length - 2 ? "border-b border-gray-200 xl:border-b-0" : ""
                  } ${index % 2 === 0 ? "md:border-r md:border-gray-200 xl:border-r-0" : ""} ${
                    index < regularPosts.length - 1 ? "xl:border-r xl:border-gray-200" : ""
                  } ${index === 2 ? "md:border-r md:border-gray-200" : ""}`}
                >
                  <div className="relative min-h-40 overflow-hidden bg-gray-50">
                    <ZoomableImage
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0"
                      imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,84,0)_0%,rgba(0,31,84,0.22)_100%)]" />
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500">
                      {post.category}
                    </p>
                    <h3 className="mb-4 text-xl font-bold leading-tight text-primary transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                    <div className="mt-7 border-t border-gray-200 pt-5">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:text-primary"
                      >
                        Read Guide
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <CtaBanner
        heading="Planning a wallpaper project?"
        subheading="Share your project type, dimensions, wallpaper details, and location. NOVACY will review the scope and define the next step."
        cta={homeExtras.ctaBanner.cta}
      />
    </div>
    </LightboxProvider>
  );
}

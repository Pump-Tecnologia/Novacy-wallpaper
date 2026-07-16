import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Check, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CtaBanner from "@/components/sections/CtaBanner";
import InternalPageHero from "@/components/sections/InternalPageHero";
import LightboxProvider from "@/components/ui/LightboxProvider";
import ZoomableImage from "@/components/ui/ZoomableImage";
import { blogArticles } from "@/lib/blogArticles";
import { blogContent, homeExtras } from "@/lib/content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getPost(slug: string) {
  return blogContent.posts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return blogContent.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Blog | NOVACY Wallpaper Installation",
    };
  }

  return {
    title: `${post.title} | NOVACY Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  const article = blogArticles[slug];

  if (!post || !article) {
    notFound();
  }

  return (
    <LightboxProvider>
    <div className="bg-white">
      <InternalPageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        backgroundImage={blogContent.hero.backgroundImage}
        backgroundPosition={blogContent.hero.backgroundPosition}
      />

      <AnimatedSection>
        <section className="py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-accent transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Journal
              </Link>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <div className="grid overflow-hidden border border-gray-200 border-t-accent bg-white lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-gray-50">
                <ZoomableImage
                  src={post.image}
                  alt={article.imagePlaceholder}
                  className="absolute inset-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,84,0.02)_0%,rgba(0,31,84,0.18)_58%,rgba(0,31,84,0.42)_100%)]" />
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Article Overview
                </p>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-primary md:text-4xl">
                  {post.title}
                </h1>
                <p className="text-base leading-relaxed text-gray-600">{article.intro}</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative overflow-hidden bg-[#004198] py-14 md:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/brand/background-pattern-blue.svg')" }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.42fr] lg:px-8">
            <article className="border border-gray-200 bg-white">
              {article.sections.map((section, index) => (
                <section
                  key={section.heading}
                  className={`p-6 md:p-8 lg:p-10 ${
                    index < article.sections.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mb-5 text-2xl font-bold leading-tight text-primary md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-gray-600">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </article>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-gray-200 border-t-accent bg-white p-6 md:p-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Quick Check
                </p>
                <h2 className="mb-6 text-2xl font-bold leading-tight text-primary">
                  {article.checklistTitle}
                </h2>
                <ul className="space-y-4">
                  {article.checklist.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-accent text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </AnimatedSection>

      <CtaBanner
        heading="Need help planning the wall?"
        subheading="Share your project type, dimensions, wallpaper details, and location. NOVACY will review the scope and define the next step."
        cta={homeExtras.ctaBanner.cta}
      />
    </div>
    </LightboxProvider>
  );
}

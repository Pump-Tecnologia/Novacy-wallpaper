interface InternalPageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  backgroundImage?: string;
  backgroundPosition?: string;
}

export default function InternalPageHero({
  eyebrow,
  title,
  accent,
  description,
  backgroundImage,
  backgroundPosition = "center",
}: InternalPageHeroProps) {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-primary text-white md:min-h-[520px]">
      {backgroundImage && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover opacity-70"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundPosition,
          }}
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: "url('/brand/background-pattern-thin.svg')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,46,125,0.98)_0%,rgba(0,46,125,0.88)_42%,rgba(0,46,125,0.56)_70%,rgba(0,46,125,0.36)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,46,125,0.28)_0%,rgba(0,46,125,0)_42%,rgba(0,46,125,0.26)_100%)]"
      />

      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-4 py-20 sm:px-6 md:min-h-[520px] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-white/58">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.06] text-white md:text-5xl lg:text-6xl">
            {title}
            {accent && (
              <>
                <br />
                <span className="text-accent">{accent}</span>
              </>
            )}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  heading,
  subheading,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <p
          className={`text-xs font-bold tracking-[0.3em] uppercase mb-4 ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {heading}
      </h2>
      {centered && <div className="h-1 w-20 bg-accent mx-auto" />}
      {subheading && (
        <p
          className={`text-lg mt-4 max-w-2xl ${
            light ? "opacity-80 text-white" : "text-gray-600"
          } ${centered ? "mx-auto" : ""}`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "muted" | "brand";
};

const backgroundClasses: Record<NonNullable<SectionProps["background"]>, string> = {
  white: "bg-surface",
  muted: "bg-surface-secondary",
  brand: "bg-brand-600",
};

export default function Section({
  children,
  className = "",
  id,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}

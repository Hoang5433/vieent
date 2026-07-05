type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "accent";
  className?: string;
};

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-brand-100 text-brand-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  accent: "bg-accent-100 text-accent-700",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

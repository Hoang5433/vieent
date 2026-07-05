import { forwardRef } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  as?: "button" | "a";
  href?: string;
} & React.ComponentPropsWithoutRef<"button">;

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500",
  secondary:
    "bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-400",
  outline:
    "border-2 border-brand-600 text-brand-600 hover:bg-brand-50 focus-visible:ring-brand-500",
  ghost:
    "text-text-secondary hover:bg-gray-100 hover:text-text-primary focus-visible:ring-gray-400",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      as: Tag = "button",
      ...props
    },
    ref,
  ) => {
    const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (Tag === "a") {
      return (
        <a
          href={(props as React.ComponentPropsWithoutRef<"a">).href}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} type="button" {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;

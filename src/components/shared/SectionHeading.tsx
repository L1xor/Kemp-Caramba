import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

/**
 * Znovupoužitelný nadpis sekce s volitelným eyebrow textem a podtitulem.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
            light
              ? "border-white/30 bg-white/10 text-amber-100"
              : "border-forest-200 bg-forest-50 text-forest-700",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-stone-900",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-stone-200" : "text-stone-600",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

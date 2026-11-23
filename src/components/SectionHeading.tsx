import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Reveal from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: Props) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "max-w-2xl",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <p className={cn("eyebrow", centered && "justify-center", light && "text-brand-tint")}>
            {eyebrow}
          </p>
        </Reveal>
      ) : null}

      <Reveal delay={70}>
        <h2
          className={cn(
            "mt-4 font-display text-[1.85rem] font-bold leading-[1.16] sm:text-[2.25rem] lg:text-[2.5rem]",
            light ? "text-white" : "text-brand",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={130}>
          <div
            className={cn(
              "mt-5 text-[1rem] leading-relaxed",
              light ? "text-white/75" : "text-muted",
            )}
          >
            {description}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}

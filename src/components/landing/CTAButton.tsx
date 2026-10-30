import type { ReactNode } from "react";
import { cn, trackWhatsAppConversion } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  withWhatsApp?: boolean;
  className?: string;
  external?: boolean;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  withWhatsApp = false,
  className,
  external = true,
}: Props) {
  const isAnchor = href.startsWith("#");

  const handleClick = () => {
    // Verifica se o link é do WhatsApp antes de rastrear
    if (href.includes("wa.me")) {
      trackWhatsAppConversion();
    }
  };

  return (
    <a
      href={href}
      {...(external && !isAnchor
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--terracotta)_88%,black)] hover:shadow-lift",
        variant === "outline" &&
          "border border-clay text-foreground hover:-translate-y-0.5 hover:border-terracotta hover:bg-sand/60",
        variant === "ghost" && "text-foreground hover:text-terracotta",
        className,
      )}
    >
      {withWhatsApp && <WhatsAppIcon className="h-[1.1em] w-[1.1em]" />}
      {children}
    </a>
  );
}

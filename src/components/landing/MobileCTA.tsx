import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { whatsappLink, whatsappMessages } from "@/config/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Aparece depois de 480px
      const hasScrolled = scrollY > 480;

      // Considera que chegou ao final quando estiver a 100px do fim
      const isNearBottom =
        scrollY + viewportHeight >= documentHeight - 10;

      setVisible(hasScrolled && !isNearBottom);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-clay/40 bg-background/95 p-3 backdrop-blur-md transition-transform duration-500 md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <a
        href={whatsappLink(whatsappMessages.hero)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Agendar minha avaliação
      </a>
    </div>
  );
}
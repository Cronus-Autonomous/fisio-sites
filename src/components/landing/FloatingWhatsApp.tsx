import { whatsappLink, whatsappMessages } from "@/config/business";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { trackWhatsAppConversion } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(whatsappMessages.hero)}
      onClick={trackWhatsAppConversion}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agende seu atendimento pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-primary p-4 text-primary-foreground shadow-lift transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:inline-flex"
    >
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-cocoa px-4 py-2 text-xs text-sand opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        Agende seu atendimento
      </span>
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}

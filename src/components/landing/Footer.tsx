import { Instagram, MapPin } from "lucide-react";
import { business, whatsappLink, whatsappMessages } from "@/config/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-cocoa text-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-xl">Clínica Shoyufisio</p>
          <p className="mt-2 text-sm text-sand/70">{business.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Clínica Shoyufisio"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand/25 transition-colors hover:bg-sand/10"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(whatsappMessages.header)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${business.whatsapp.display}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand/25 transition-colors hover:bg-sand/10"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="text-xs uppercase tracking-[0.22em] text-sand/60">Navegação</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sand/80 transition-colors hover:text-sand">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-sand/60">Contato</p>
          <ul className="mt-4 space-y-2.5 text-sm text-sand/80">
            <li>
              <a
                href={whatsappLink(whatsappMessages.header)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-sand"
              >
                WhatsApp {business.whatsapp.display}
              </a>
            </li>
            <li>Segunda a sexta — 08:00 às 18:00</li>
            <li>Sábado — 08:00 às 12:00</li>
            <li>Domingo — Fechado</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-sand/60">Localização</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-sand/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Rua Senador Souza Naves, 2129 — Jardim Londrilar
              <br />
              Londrina — PR
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-sand/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-sand/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Shoyufisio Fisioterapia Ltda | CNPJ: 47.421.907-0001/98. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#contato" className="transition-colors hover:text-sand">
              Política de Privacidade
            </a>
            <a href="#contato" className="transition-colors hover:text-sand">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

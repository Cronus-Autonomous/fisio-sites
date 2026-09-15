import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { business, whatsappLink, whatsappMessages } from "@/config/business";
import { CTAButton } from "./CTAButton";
import logo from "@/assets/shoyufisio.png";
import { Link } from "@tanstack/react-router";
import { User } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-5000",
        scrolled
          ? "bg-background/40 backdrop-blur-sm"
          : "bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
            <img
              src={logo}
              alt="Logo da clínica de fisioterapia"
              loading="lazy"
              className="h-18 w-18 object-cover transition-transform duration-700"
            />

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-foreground/80 transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:text-terracotta"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <CTAButton
            href={whatsappLink(whatsappMessages.header)}
            withWhatsApp
            className="hidden sm:inline-flex"
          >
            Agendar consulta
          </CTAButton>
          <a
            href="/area-cliente"
            className="flex items-center gap-2 text-sm font-medium text-cocoa hover:text-terracotta transition-colors"
          >
            <User className="h-4 w-4" />
            Área Logada
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-clay/70 text-cocoa transition-colors hover:bg-sand/60 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}

          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Navegação mobile" className="mx-auto max-w-7xl px-5 py-4">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 text-base text-foreground transition-colors hover:text-terracotta"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <CTAButton
            href={whatsappLink(whatsappMessages.header)}
            withWhatsApp
            className="mt-4 w-full"
          >
            Agendar consulta
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}

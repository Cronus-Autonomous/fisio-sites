import {
  Activity,
  Bandage,
  Droplets,
  Flower2,
  HandHelping,
  HeartPulse,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { partnerships, informacoes, whatsappLink, whatsappMessages, type Service } from "@/config/business";
import { Reveal } from "./Reveal";
import {InformationAccordionItem}
 from "@/components/landing/InformationAccordionItem";
 import { Accordion } from "@/components/ui/accordion";

const icons: Record<Service["icon"], typeof Activity> = {
  activity: Activity,
  hand: HandHelping,
  flower: Flower2,
  droplets: Droplets,
  "heart-pulse": HeartPulse,
  bandage: Bandage,
  sparkles: Sparkles,
};

export function PartnershipsSection() {
  return (
    <section id="servicos" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
            Parcerias
          </p>
          <h2 className="mt-4 text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
            Nossas Parcerias
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Conheça algumas das Nossas Parcerias.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5">
          {partnerships.map((partnerships, i) => {
            return (
              <Reveal key={partnerships.id} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-clay/40 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-clay hover:shadow-lift">
                  {/* <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand text-terracotta transition-colors duration-300 group-hover:bg-clay/60">
                  </span> */}
                  <h3 className="mt-5 font-display text-xl leading-snug text-cocoa">
                    {partnerships.titulo}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {partnerships.descricao}
                  </p>
                  {/* <a
                    href={whatsappLink(whatsappMessages.service(partnerships.titulo))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-terracotta transition-colors hover:text-cocoa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Quero saber mais
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a> */}
                </article>
              </Reveal>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}

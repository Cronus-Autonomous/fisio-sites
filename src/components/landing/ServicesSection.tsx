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
import { informacoes, whatsappLink, whatsappMessages, type Service } from "@/config/business";
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

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-cream py-15 lg:py-15">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
            Especialidades
          </p>
          <h2 className="text-3xl leading-tight tracking-tight text-cocoa sm:text-3xl">
            Especialidades pensadas para as necessidades do seu corpo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Conheça as áreas de atuação da Clínica Shoyufisio.
          </p>
        </Reveal>

        <div className="mt-4 grid gap-5">
          <Accordion
          type="single"
          collapsible
          className="
            mt-6
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {informacoes.map((informacao, index) => (
            <Reveal
              key={informacao.id}
              delay={(index % 4) * 0.06}
            >
              <InformationAccordionItem
                informacao={informacao}
              />
            </Reveal>
          ))}
        </Accordion>
        </div>
      </div>
    </section>
  );
}

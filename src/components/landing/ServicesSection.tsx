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
import { services, whatsappLink, whatsappMessages, type Service } from "@/config/business";
import { Reveal } from "./Reveal";

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
    <section id="servicos" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
            Tratamentos
          </p>
          <h2 className="mt-4 text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
            Tratamentos pensados para as necessidades do seu corpo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Conheça algumas das especialidades do Clínica Shoyufisio.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-clay/40 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-clay hover:shadow-lift">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand text-terracotta transition-colors duration-300 group-hover:bg-clay/60">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl leading-snug text-cocoa">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink(whatsappMessages.service(service.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-terracotta transition-colors hover:text-cocoa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Quero saber mais
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

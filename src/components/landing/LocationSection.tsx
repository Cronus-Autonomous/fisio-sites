import { MapPin, Navigation } from "lucide-react";
import { business } from "@/config/business";
import { BusinessHours } from "./BusinessHours";
import { PaymentMethods } from "./PaymentMethods";
import { Reveal } from "./Reveal";

export function LocationSection() {
  const { address } = business;

  return (
    <section id="contato" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
                Onde estamos
              </p>
              <h2 className="mt-4 text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
                Estamos em Londrina
              </h2>
              <address className="mt-6 flex items-start gap-3 not-italic text-base leading-relaxed text-muted-foreground">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-terracotta"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span>
                  {address.street}
                  <br />
                  {address.district}
                  <br />
                  {address.city} - {address.state}
                  <br />
                  {address.postalCode}
                  <br />
                  {address.country}
                </span>
              </address>
              <a
                href={business.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Como chegar
              </a>
            </Reveal>

            <Reveal delay={0.08} className="mt-8">
              <div className="rounded-2xl bg-sand p-7">
                <h3 className="font-display text-xl text-cocoa">
                  Um espaço para você se sentir à vontade.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cocoa/75">
                  A Shoyufisio está em uma localização privilegiada e de fácil acesso em Londrina, com estacionamento próprio, inclusive para PCD e idosos, tudo pensando no seu bem-estar e no seu atendimento.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.06}>
            <div className="h-full overflow-hidden rounded-[2rem] border border-clay/40 shadow-soft">
              <iframe
                title="Mapa com a localização do Clínica Shoyufisio em Londrina"
                src={business.maps.embedUrl}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-80 w-full border-0 lg:h-full lg:min-h-[28rem]"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <BusinessHours />
          </Reveal>
          <Reveal delay={0.08}>
            <PaymentMethods />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

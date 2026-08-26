import retrato from "@/assets/founder.png";
import { whatsappLink, whatsappMessages } from "@/config/business";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-sand shadow-soft">
              <img
                src={retrato}
                alt="Fisioterapia, Hidroterapia, Home Care e Pilates em Londrina"
                loading="lazy"
                className="h-[24rem] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02] sm:h-[32rem]"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-28 w-28 rounded-full bg-sand/70 lg:block"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
            Sobre a clínica
          </p>
          <h2 className="mt-4 text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
            Seu corpo merece ser cuidado por inteiro.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              A Shoyufisio é uma clínica de fisioterapia com quase 40 anos de experiência. Nosso objetivo é oferecer fisioterapia de excelência e qualidade, com foco na recuperação, na prevenção e na promoção da saúde e do bem-estar dos nossos pacientes. Queremos te ajudar a construir um futuro sem dores e sem limitações!
            </p>
            <p>
              Nosso atendimento é humanizado, individualizado e focado em resultados reais.
            </p>
          </div>
          <p className="mt-8 border-l-2 border-clay pl-5 font-display text-xl italic text-cocoa">
            Cuidado que começa entendendo você.
          </p>
          <CTAButton
            href={whatsappLink(whatsappMessages.sobre)}
            withWhatsApp
            className="mt-8"
          >
            Quero conhecer o Espaço
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

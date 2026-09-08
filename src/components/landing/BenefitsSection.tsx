import { Reveal } from "./Reveal";
import retrato from "@/assets/founder.png";
import { whatsappLink, whatsappMessages } from "@/config/business";
import { CTAButton } from "./CTAButton";
import Carrossel from "@/components/landing/Carrossel";

export function BenefitsSection() {
  return (
    <section className="bg-sand py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* 
          1. GRID SUPERIOR: IMAGEM + CONTEÚDO
          - `items-start`: Garante alinhamento topo a topo entre imagem e texto
        */}
        <div className="grid gap-12 items-start lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* IMAGEM */}
          <Reveal className="w-full">
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={retrato}
                alt="Fisioterapia, Hidroterapia, Home Care e Pilates em Londrina"
                loading="lazy"
                width={1200}
                height={912}
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-96 lg:h-[30rem]"
              />
            </div>
          </Reveal>

          {/* CONTEÚDO */}
          <div>
            <Reveal>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
                Sobre a clínica
              </p>

              <h2 className="mt-4 text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
                Seu corpo merece ser cuidado por inteiro.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  A Shoyufisio é uma clínica de fisioterapia com quase 40 anos de
                  experiência. Nosso objetivo é oferecer fisioterapia de
                  excelência e qualidade, com foco na recuperação, na prevenção e
                  na promoção da saúde e do bem-estar dos nossos pacientes.
                  Queremos te ajudar a construir um futuro sem dores e sem
                  limitações!
                </p>

                <p>
                  Nosso atendimento é humanizado, individualizado e focado em
                  resultados reais.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 border-l-2 border-clay pl-5 font-display text-xl italic text-cocoa">
                Cuidado que começa entendendo você.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <CTAButton
                href={whatsappLink(whatsappMessages.sobre)}
                withWhatsApp
                className="mt-8"
              >
                Quero conhecer o Espaço
              </CTAButton>
            </Reveal>
          </div>
        </div>

        {/* 
          2. CARROSSEL DOS PROFISSIONAIS (Fora da Grid, abaixo dos dois blocos)
          - `min-w-0` previne estouro do flexbox/carousel dentro da página
        */}
        <div className="mt-16 sm:mt-20 w-full min-w-0">
          <Reveal delay={0.4}>
            <Carrossel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
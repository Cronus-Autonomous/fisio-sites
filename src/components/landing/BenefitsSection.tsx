import { Compass, Home, Target, UserRound } from "lucide-react";
import { Reveal } from "./Reveal";
import retrato from "@/assets/founder.png";
import { whatsappLink, whatsappMessages } from "@/config/business";
import { CTAButton } from "./CTAButton";
import Carrossel from "@/components/landing/Carrossel";  

export function BenefitsSection() {
  return (
    <section id="sobre" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* LINHA SUPERIOR: IMAGEM (ESQUERDA) E TEXTO (DIREITA) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          
          {/* IMAGEM À ESQUERDA */}
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={retrato}
                alt="Fisioterapia, Hidroterapia, Home Care e Pilates em Londrina"
                loading="lazy"
                width={1200}
                height={912}
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-[1.02] lg:h-[30rem]"
              />
            </div>
          </Reveal>

          {/* CONTEÚDO À DIREITA */}
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

        {/* LINHA INFERIOR: CARROSSEL OCUPANDO TODA A LARGURA */}
        <Reveal delay={0.4} className="mt-16 lg:mt-24">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
                EQUIPE
              </p>

              <h2 className="mt-4 text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
                Conheça nossos fisioterapeutas
              </h2>
          <div className="w-full">
            <Carrossel />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
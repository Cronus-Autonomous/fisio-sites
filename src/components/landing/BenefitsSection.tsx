import { Compass, Home, Target, UserRound } from "lucide-react";
import { Reveal } from "./Reveal";
import retrato from "@/assets/founder.png";
import { whatsappLink, whatsappMessages } from "@/config/business";
import { CTAButton } from "./CTAButton";
import { ProfessionalCarousel } from "@/components/landing/Carrossel";

const benefits = [
  {
    icon: UserRound,
    title: "Atendimento personalizado",
    text: "Cada pessoa possui necessidades diferentes. Seu atendimento é planejado de acordo com o seu momento e objetivo.",
  },
  {
    icon: Compass,
    title: "Abordagem integrada",
    text: "Tratamos o corpo de forma ampla, combinando diferentes técnicas quando necessário.",
  },
  {
    icon: Home,
    title: "Ambiente acolhedor",
    text: "Um espaço pensado para você se sentir confortável, seguro e bem cuidado.",
  },
  {
    icon: Target,
    title: "Foco em resultados",
    text: "O objetivo é oferecer um cuidado que faça diferença na sua rotina e na sua qualidade de vida.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">

        {/* IMAGEM */}
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

  {/* CARROSSEL DOS PROFISSIONAIS */}
  <Reveal delay={0.4}>
    <div className="mt-16">
      <Carrossel />
    </div>
  </Reveal>
</div>
      </div>
    </section>
  );
}

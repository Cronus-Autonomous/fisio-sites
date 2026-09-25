import { Check } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/config/business";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

const points = [
  "Sinto dores ou tensão muscular.",
  "Tenho dificuldade de relaxar.",
  "Quero melhorar minha mobilidade.",
  "Estou passando por um pós-operatório.",
  "Tenho inchaço e quero cuidar melhor do meu corpo.",
  "Quero cuidar do meu corpo e do meu bem-estar.",
  "Procuro um atendimento mais individualizado.",
];

export function PainPointsSection() {
  return (
    <section className="bg-background py-15 lg:py-15">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-3xl leading-tight tracking-tight text-cocoa sm:text-3xl">
            Talvez você esteja procurando exatamente isso:
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-3 text-left sm:grid-cols-2">
          {points.map((point, i) => (
            <Reveal key={point} delay={(i % 2) * 0.06}>
              <li className="flex h-full items-start gap-3 rounded-2xl border border-clay/40 bg-cream p-5 transition-transform duration-300 hover:-translate-y-0.5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand text-terracotta">
                  <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="text-lg leading-relaxed text-foreground/85">{point}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-12 font-display text-2xl italic text-cocoa sm:text-2xl">
            Vamos entender o que seu corpo precisa?
          </p>
          <CTAButton
            href={whatsappLink(whatsappMessages.painPoints)}
            size="md"
            withWhatsApp
            className="mt-7"
          >
            Agendar avaliação
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

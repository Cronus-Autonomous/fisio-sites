import { Compass, Home, Target, UserRound } from "lucide-react";
import atendimento from "@/assets/time.png";
import { Reveal } from "./Reveal";

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
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={atendimento}
              alt="Mãos da fisioterapeuta realizando terapia manual no ombro de uma paciente"
              loading="lazy"
              width={1200}
              height={912}
              className="h-72 w-full object-cover transition-transform duration-700 hover:scale-[1.02] lg:h-[30rem]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
              Cuidado individual. Olhar integrado. Atendimento humanizado.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <article className="h-full rounded-2xl bg-background/80 p-6 transition-transform duration-300 hover:-translate-y-0.5">
                  <b.icon className="h-6 w-6 text-rose" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg text-cocoa">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

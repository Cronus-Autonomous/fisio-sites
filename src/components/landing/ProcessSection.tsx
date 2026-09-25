import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Agende",
    text: "Entre em contato pelo WhatsApp e escolha o melhor horário.",
  },
  {
    number: "02",
    title: "Avaliamos",
    text: "Entendemos suas necessidades, rotina, objetivos e principais desconfortos.",
  },
  {
    number: "03",
    title: "Definimos o cuidado",
    text: "Indicamos o tratamento mais adequado para o seu caso.",
  },
  {
    number: "04",
    title: "Comece sua evolução",
    text: "Você inicia seu acompanhamento com atenção individualizada.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-background py-15 lg:py-15">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
            Como funciona
          </p>
          <h2 className="text-3xl leading-tight tracking-tight text-cocoa sm:text-3xl">
            Começar seu cuidado é simples
          </h2>
        </Reveal>

        <ol className="relative mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-[1.35rem] top-2 h-[calc(100%-1rem)] w-px bg-clay/50 lg:left-0 lg:top-[1.35rem] lg:h-px lg:w-full"
          />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <li className="relative flex gap-5 lg:block">
                <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-clay bg-cream font-display text-sm text-terracotta">
                  {step.number}
                </span>
                <div className="lg:mt-5 lg:pr-6">
                  <h3 className="font-display text-xl text-cocoa">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

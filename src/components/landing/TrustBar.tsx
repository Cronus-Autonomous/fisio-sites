import { HandHeart, Layers, Sparkles, UserRoundCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: UserRoundCheck,
    title: "Atendimento individualizado",
    text: "Cada tratamento é pensado para a sua necessidade.",
  },
  {
    icon: Layers,
    title: "Cuidado integrado",
    text: "Fisioterapia, Hidroterapiae estética em uma abordagem completa.",
  },
  {
    icon: Sparkles,
    title: "Foco em resultados",
    text: "Tratamentos direcionados para melhorar sua qualidade de vida.",
  },
  {
    icon: HandHeart,
    title: "Atendimento humanizado",
    text: "Um espaço acolhedor, seguro e pensado para você.",
  },
];

export function TrustBar() {
  return (
    <section aria-label="Diferenciais rápidos" className="bg-cream pb-16 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="h-full rounded-2xl border border-clay/40 bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-0.5">
              <item.icon className="h-6 w-6 text-terracotta" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-cocoa">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

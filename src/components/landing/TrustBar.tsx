import {
  HandHeart,
  Layers,
  Sparkles,
  UserRoundCheck,
  HeartPulse
} from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: HeartPulse,
    title: "Sempre Disponível Para Você",
    text: <>Nosso horário comercial é de segunda a sexta, das 8h às 18h, e aos sábados, das 8h ao meio-dia, mas sabemos que a rotina nem sempre se encaixa nesses horários. <strong>Por isso, também atendemos antes das 8h, depois das 18h, aos sábados em outros horários e até aos domingos.</strong>E se for uma urgência, mesmo em datas como Natal e Ano Novo, pode contar com a gente: saúde não tira férias</>,
    destac: true
  },
  {
    icon: UserRoundCheck,
    title: "Salas com Banheiro Privativo",
    text: "Duas das nossas salas de atendimento têm banheiro próprio, garantindo mais privacidade e comodidade, especialmente importante em tratamentos como a fisioterapia pélvica.",
  },
  {
    icon: Layers,
    title: "Estrutura Acessível para PCD e Idosos",
    text: "Contamos com cadeira de rodas disponível para uso na clínica e banheiro adaptado, para que pessoas com mobilidade reduzida e idosos se sintam confortáveis e bem atendidos.",
  },
  {
    icon: Sparkles,
    title: "Macas Elétricas",
    text: "Nossas macas são elétricas e ajustam a altura automaticamente, facilitando a subida de quem tem mais dificuldade de se movimentar.",
  },
  {
    icon: HandHeart,
    title: "Equipamentos de Ponta e Sempre Calibrados",
    text: "Trabalhamos com aparelhos de laser, ultrassom e outros equipamentos das melhores marcas do mercado, sempre calibrados, garantindo tratamentos seguros e eficazes.",
  },
  {
    icon: HandHeart,
    title: "Aparelhos de Pilates de Qualidade",
    text: "Nossos aparelhos de Pilates são de marca renomada e passam por revisões periódicas, garantindo segurança e bom funcionamento em todas as aulas.",
  },
  {
    icon: Layers,
    title: "Salas Climatizadas",
    text: "Todas as salas de atendimento contam com ar-condicionado quente e frio, garantindo mais conforto durante as sessões.",
  },
  {
    icon: Sparkles,
    title: "Ambiente Limpo e Seguro",
    text: "Cuidamos da higiene e da limpeza em toda a clínica, da recepção às salas de atendimento, para que você se sinta seguro e bem cuidado em cada visita.",
  },
  {
    icon: HandHeart,
    title: "Equipe em Constante Atualização",
    text: "Investimos na capacitação dos nossos fisioterapeutas, com cursos e especializações, para garantir o que há de mais atual em técnicas e tratamentos.",
  },
  {
    icon: UserRoundCheck,
    title: "Atendimento individualizado",
    text: "Cada paciente recebe atenção exclusiva do fisioterapeuta durante a sessão, com o cuidado e o tempo que o seu tratamento precisa.",
  },
];

export function TrustBar() {
  return (
    <section
      aria-label="Diferenciais rápidos"
      className="bg-cream pb-16 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* CABEÇALHO */}
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
              DIFERENCIAIS
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-cocoa sm:text-5xl">
              Estrutura pensada para o seu conforto e segurança
            </h2>

          </div>
        </Reveal>

        {/* CARDS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className={`h-full rounded-2xl border border-clay/40 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-0.5 ${item.destac ? 'bg-emergency' : 'bg-card'}`}>

                <item.icon
                  className="h-6 w-6 text-terracotta"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <h3 className="mt-4 font-display text-lg text-cocoa">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
// import { partnerships } from "@/config/business";
// import { Reveal } from "./Reveal";

// export function PartnershipsSection() {
//   // Seus dois vídeos atuais
//   const videos = [
//     "https://drive.google.com/file/d/1zGWAKLdKk4xKeMBenT7kxS4qintrz_ht/preview",
//     "https://drive.google.com/file/d/1KP_DJ8SAeoKwMTOI3sKjHT4XMrxE9Qbs/preview",
//   ];

//   // Dados dos 2 primeiros cards + novo card
//   const cards = [
//     {
//       id: partnerships[0]?.id ?? "parceria-1",
//       titulo: partnerships[0]?.titulo ?? "",
//       descricao: partnerships[0]?.descricao ?? "",
//       video: videos[0],
//     },
//     {
//       id: partnerships[1]?.id ?? "parceria-2",
//       titulo: partnerships[1]?.titulo ?? "",
//       descricao: partnerships[1]?.descricao ?? "",
//       video: videos[1],
//     },
//     {
//       id: "programa-reforce",
//       titulo:
//         "Programa Reforce: mais força, equilíbrio e segurança depois dos 60",
//       descricao:
//         "O Programa Reforce é pensado especialmente para quem tem 60 anos ou mais e sente insegurança para caminhar, medo de cair ou dificuldade para se movimentar no dia a dia. Com exercícios voltados para fortalecimento, equilíbrio e mobilidade, o objetivo é ajudar você a ganhar mais força, mais confiança e mais autonomia para fazer suas atividades sem medo.",
//       descricaoExtra:
//         "As aulas acontecem em turmas bem pequenas, com no máximo 3 pessoas, em horários fixos durante a semana, com acompanhamento de perto dos nossos fisioterapeutas Júnior e Luciana.",
//       video:
//         "https://drive.google.com/file/d/1iaXJRkNDe8AiTaUp0QLD1GmqBUX8BFNe/preview",
//     },
//   ];

//   return (
//     <section id="servicos" className="bg-cream py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-5 lg:px-8">

//         {/* CABEÇALHO */}
//         <Reveal className="max-w-2xl">
//           <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
//             Parcerias
//           </p>

//           <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
//             Nossas Parcerias
//           </h2>

//           <p className="mt-4 text-base leading-relaxed text-muted-foreground">
//             Conheça algumas das nossas parcerias.
//           </p>
//         </Reveal>

//         {/* CARDS */}
//         <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

//           {cards.map((card, i) => (
//             <Reveal
//               key={card.id}
//               delay={i * 0.08}
//               className="h-full"
//             >
//               <article
//                 className="
//                   group
//                   flex
//                   h-full
//                   flex-col
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-clay/40
//                   bg-card
//                   p-5
//                   shadow-soft
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-clay
//                   hover:shadow-lift
//                   lg:p-6
//                 "
//               >

//                 {/* VÍDEO */}
//                 <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">

//                   <iframe
//                     src={card.video}
//                     title={card.titulo}
//                     className="
//                       absolute
//                       inset-0
//                       h-full
//                       w-full
//                       border-0
//                     "
//                     allow="autoplay; encrypted-media; picture-in-picture"
//                     allowFullScreen
//                   />

//                 </div>

//                 {/* CONTEÚDO */}
//                 <div className="flex flex-1 flex-col pt-6">

//                   {/* TÍTULO */}
//                   <h3
//                     className="
//                       font-display
//                       text-xl
//                       leading-snug
//                       text-cocoa
//                     "
//                   >
//                     {card.titulo}
//                   </h3>

//                   {/* DESCRIÇÃO */}
//                   <div className="mt-4 flex-1">

//                     <p className="text-sm leading-relaxed text-muted-foreground">
//                       {card.descricao}
//                     </p>

//                     {/* Segunda parte da descrição do Reforce */}
//                     {"descricaoExtra" in card && card.descricaoExtra && (
//                       <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
//                         {card.descricaoExtra}
//                       </p>
//                     )}

//                   </div>

//                 </div>

//               </article>
//             </Reveal>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }
import { partnerships } from "@/config/business";
import { Reveal } from "./Reveal";

export function PartnershipsSection() {
  const videos = [
    "https://drive.google.com/file/d/1zGWAKLdKk4xKeMBenT7kxS4qintrz_ht/preview",
    "https://drive.google.com/file/d/1KP_DJ8SAeoKwMTOI3sKjHT4XMrxE9Qbs/preview",
  ];

  const cards = [
    {
      id: partnerships[0]?.id ?? "parceria-1",
      titulo: partnerships[0]?.titulo ?? "",
      descricao: partnerships[0]?.descricao ?? "",
      video: videos[0],
    },
    {
      id: partnerships[1]?.id ?? "parceria-2",
      titulo: partnerships[1]?.titulo ?? "",
      descricao: partnerships[1]?.descricao ?? "",
      video: videos[1],
    },
    {
      id: "programa-reforce",
      titulo:
        "Programa Reforce: mais força, equilíbrio e segurança depois dos 60",
      descricao:
        "O Programa Reforce é pensado especialmente para quem tem 60 anos ou mais e sente insegurança para caminhar, medo de cair ou dificuldade para se movimentar no dia a dia. Com exercícios voltados para fortalecimento, equilíbrio e mobilidade, o objetivo é ajudar você a ganhar mais força, mais confiança e mais autonomia para fazer suas atividades sem medo.",
      descricaoExtra:
        "As aulas acontecem em turmas bem pequenas, com no máximo 3 pessoas, em horários fixos durante a semana, com acompanhamento de perto dos nossos fisioterapeutas Júnior e Luciana.",
      video:
        "https://drive.google.com/file/d/1iaXJRkNDe8AiTaUp0QLD1GmqBUX8BFNe/preview",
    },
  ];

  return (
    <section id="servicos" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* CABEÇALHO */}
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
            Parcerias
          </p>

          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
            Nossas Parcerias
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Conheça algumas das nossas parcerias.
          </p>
        </Reveal>

        {/* 3 CARDS LADO A LADO */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {cards.map((card, i) => (
            <Reveal
              key={card.id}
              delay={i * 0.08}
              className="h-full"
            >
              <article
                className="
                  group
                  grid
                  h-full
                  grid-cols-[45%_55%]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-clay/40
                  bg-card
                  shadow-soft
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-clay
                  hover:shadow-lift
                "
              >

                {/* VÍDEO - ESQUERDA */}
                <div className="relative min-h-[300px] overflow-hidden bg-black">
                  <iframe
                    src={card.video}
                    title={card.titulo}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* TÍTULO + DESCRIÇÃO - DIREITA */}
                <div className="flex min-w-0 flex-col justify-center p-5">

                  <h3 className="font-display text-lg leading-snug text-cocoa">
                    {card.titulo}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {card.descricao}
                  </p>

                  {"descricaoExtra" in card && card.descricaoExtra && (
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {card.descricaoExtra}
                    </p>
                  )}

                </div>

              </article>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}
import { partnerships } from "@/config/business";
import { Reveal } from "./Reveal";

export function PartnershipsSection() {
  // Arquivos locais na pasta /public/videos/
  const videos = [
    "https://res.cloudinary.com/xiupvhfs/video/upload/v1790188141/recovery.mov",
    "https://res.cloudinary.com/xiupvhfs/video/upload/v1790188085/empresas.mp4",
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
  ];

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* CABEÇALHO */}
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
            OUTROS SERVIÇOS
          </p>

          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
            Conheça outros serviços que também fazem parte do nosso trabalho
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Conheça algumas das nossas parcerias.
          </p>
        </Reveal>

        {/* 2 CARDS LADO A LADO */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal
              key={card.id}
              delay={i * 0.08}
              className="h-full"
            >
              <article
                className="
                  group
                  flex
                  h-full
                  flex-col
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
                {/* VÍDEO VERTICAL (9:16) NO TOPO */}
                {/* VÍDEO VERTICAL (9:16) */}
                <div className="mx-auto w-full max-w-[380px] overflow-hidden bg-black">
                  <div className="relative aspect-[3/4] w-full">
                    <video
                      src={card.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    >
                      Seu navegador não suporta a exibição deste vídeo.
                    </video>
                  </div>
                </div>

                {/* TÍTULO + DESCRIÇÃO ABAIXO */}
                <div className="flex flex-1 flex-col justify-start p-6">
                  <h3 className="font-display text-lg leading-snug text-cocoa">
                    {card.titulo}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {card.descricao}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
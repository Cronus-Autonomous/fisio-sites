import { partnerships } from "@/config/business";
import { Reveal } from "./Reveal";
import { LazyVideo } from "./LazyVideo";

export function PartnershipsSection() {
  const videos = [
    "https://res.cloudinary.com/xiupvhfs/video/upload/f_auto,q_auto/recovery.mov",
    "https://res.cloudinary.com/xiupvhfs/video/upload/f_auto,q_auto/empresas.mp4",
  ];

  const posters = [
    "https://res.cloudinary.com/xiupvhfs/video/upload/so_0,f_auto,q_auto/recovery.jpg",
    "https://res.cloudinary.com/xiupvhfs/video/upload/so_0,f_auto,q_auto/empresas.jpg",
  ];

  const cards = [
    {
      id: partnerships[0]?.id ?? "parceria-1",
      titulo: partnerships[0]?.titulo ?? "",
      descricao: partnerships[0]?.descricao ?? "",
      video: videos[0],
      poster: posters[0],
    },
    {
      id: partnerships[1]?.id ?? "parceria-2",
      titulo: partnerships[1]?.titulo ?? "",
      descricao: partnerships[1]?.descricao ?? "",
      video: videos[1],
      poster: posters[1],
    },
  ];

  return (
    <section className="bg-cream py-15 lg:py-15">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* CABEÇALHO */}
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
            OUTROS SERVIÇOS
          </p>

          <h2 className="text-3xl leading-tight tracking-tight text-cocoa sm:text-3xl">
            Conheça outros serviços que também fazem parte do nosso trabalho
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Conheça algumas das nossas parcerias.
          </p>
        </Reveal>

        {/* CARDS */}
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
                {/* VÍDEO */}
                <div className="mx-auto w-full max-w-[380px] overflow-hidden bg-black">
                  <div className="relative aspect-[3/4] w-full">
                    <LazyVideo
                      src={card.video}
                      poster={card.poster}
                    />
                  </div>
                </div>

                {/* TÍTULO + DESCRIÇÃO */}
                <div className="flex flex-1 flex-col justify-start p-6">
                  <h3 className="font-display text-lg leading-snug text-cocoa">
                    {card.titulo}
                  </h3>

                  <p className="mt-3 text-md leading-relaxed text-muted-foreground">
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
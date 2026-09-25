import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { profissionais } from "@/config/business";
import TeamCard from "@/components/landing/Cards";

export default function Carrossel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      updateCarouselState();
    };

    update();

    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", update);

    return () => {
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi, updateCarouselState]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section
      aria-label="Equipe de fisioterapeutas"
      className="mt-5 w-full"
    >
      {/* CARROSSEL */}
      <div
        ref={emblaRef}
        className="overflow-hidden px-1 py-4"
      >
        <div className="-ml-4 flex">
          {profissionais.map((membro) => (
            <div
              key={membro.id}
              className="w-[85%] min-w-0 shrink-0 pl-4 sm:w-[48%] lg:w-[31%] xl:w-[23%]"
            >
              <TeamCard
                membro={membro}
                whatsappMessage={`Olá, gostaria de agendar um atendimento com o fisioterapeuta ${membro.titulo}.`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLES */}
      {scrollSnaps.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-6">
          {/* ANTERIOR */}
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Ver profissionais anteriores"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/10 bg-white text-cocoa shadow-sm transition-colors duration-200 hover:border-terracotta hover:bg-terracotta hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>

          {/* INDICADORES */}
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Navegação dos profissionais"
          >
            {scrollSnaps.map((_, index) => {
              const isActive = index === selectedIndex;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Ir para o grupo ${index + 1}`}
                  className={`h-2.5 rounded-full transition-[width,background-color] duration-200 ${
                    isActive
                      ? "w-8 bg-terracotta"
                      : "w-2.5 bg-cocoa/20 hover:bg-cocoa/40"
                  }`}
                />
              );
            })}
          </div>

          {/* PRÓXIMO */}
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Ver próximos profissionais"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/10 bg-white text-cocoa shadow-sm transition-colors duration-200 hover:border-terracotta hover:bg-terracotta hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </section>
  );
}
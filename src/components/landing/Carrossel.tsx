import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { profissionais } from "@/config/business";
import TeamCard from "@/components/landing/Cards";

export default function Carrossel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="mt-10 w-full select-none">
      {/* VIEWPORT DO CARROSSEL */}
      <div
        ref={emblaRef}
        className="cursor-grab overflow-hidden px-1 py-4 active:cursor-grabbing"
      >
        <div className="-ml-4 flex">
          {profissionais.map((membro, index) => {
            const isActive = index === selectedIndex;

            return (
              <div
                key={membro.id}
                className="w-[85%] shrink-0 min-w-0 pl-4 transition-all duration-300 ease-out sm:w-[48%] lg:w-[31%] xl:w-[23%]"
              >
                <div
                  className={`h-full transform transition-all duration-500 ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-[0.98] opacity-90 hover:opacity-100"
                  }`}
                >
                  <TeamCard
                    membro={membro}
                    whatsappMessage={`Olá, gostaria de agendar um atendimento com o fisioterapeuta ${membro.titulo}.`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONTROLES */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/10 bg-white text-cocoa shadow-sm transition-all duration-200 hover:border-terracotta hover:bg-terracotta hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Ir para o slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${
                index === selectedIndex
                  ? "w-8 scale-100 bg-terracotta shadow-sm"
                  : "w-2.5 scale-90 bg-cocoa/20 hover:bg-cocoa/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Próximo"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/10 bg-white text-cocoa shadow-sm transition-all duration-200 hover:border-terracotta hover:bg-terracotta hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
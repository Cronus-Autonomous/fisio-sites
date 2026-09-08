import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { profissionais, type TeamMember } from "@/config/business";
import TeamCard from "@/components/landing/Cards";

export default function Carrossel() {
  // Inicialização do Embla Carousel com snap estrito e alinhamento à esquerda
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

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

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
  }, [emblaApi, onSelect]);

  return (
    <div className="mt-10 w-full select-none">
      {/* 
        VIEWPORT / CONTAINER DO CARROSSEL
        `overflow-hidden` ou `overflow-visible` no container pai para efeito 'peek'.
        Aqui usamos px-5/px-8 nas bordas para criar espaço onde o card "cortado" é visto.
      */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing px-1 py-4" ref={emblaRef}>
        <div className="flex -ml-4">
          {profissionais.map((membro, index) => {
            const isActive = index === selectedIndex;

            return (
              <div
                key={membro.id}
                /* 
                  LARGURAS CUSTOMIZADAS (Efeito 1/3 do card visível):
                  - Mobile: 85% do viewport (exibe 1 card inteiro + ~15/20% do próximo)
                  - Tablet (sm): 48% do viewport (exibe 2 cards e pedaço do 3º)
                  - Desktop (lg): 31% do viewport (exibe 3 cards e 1/3 do 4º)
                  - XL: 23% do viewport (exibe 4 cards e pedaço do 5º)
                */
                className="pl-4 shrink-0 min-w-0 w-[85%] sm:w-[48%] lg:w-[31%] xl:w-[23%] transition-all duration-300 ease-out"
              >
                {/* Animação sutil de escala e opacidade no card ativo/inativo */}
                <div
                  className={`h-full transition-all duration-500 transform ${
                    isActive ? "scale-100 opacity-100" : "scale-[0.98] opacity-90 hover:opacity-100"
                  }`}
                >
                  <TeamCard membro={membro} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONTROLES E NAVEGAÇÃO (SETAS E BULLETS CENTRALIZADOS) */}
      <div className="mt-8 flex items-center justify-center gap-6">
        {/* BOTAO ANTERIOR */}
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/10 bg-white text-cocoa shadow-sm transition-all duration-200 hover:bg-terracotta hover:text-white hover:border-terracotta active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* BULLETS COM ANIMAÇÃO SUTIL DE EXPANSÃO */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Ir para o slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${
                index === selectedIndex
                  ? "w-8 bg-terracotta shadow-sm scale-100"
                  : "w-2.5 bg-cocoa/20 hover:bg-cocoa/40 scale-90"
              }`}
            />
          ))}
        </div>

        {/* BOTAO PRÓXIMO */}
        <button
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Próximo"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/10 bg-white text-cocoa shadow-sm transition-all duration-200 hover:bg-terracotta hover:text-white hover:border-terracotta active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
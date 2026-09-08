import React from "react";
import type { TeamMember } from "@/config/business";

interface TeamCardProps {
  membro: TeamMember;
}

export default function TeamCard({ membro }: TeamCardProps) {
  // Resolução dinâmica para imagens em src/assets/
  const imagePath = new URL(`../../assets/${membro.imagem}`, import.meta.url).href;

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-md border border-neutral-100 flex flex-row md:flex-col h-full">
      {/* 
        CONTAINER DA IMAGEM
        - Mobile (Exemplo 2): 35% de largura, lado esquerdo
        - Desktop (Exemplo 1): 100% de largura, topo do card com altura fixa (aspect-ratio/h-52)
      */}
      <div className="relative w-1/3 min-w-[120px] md:w-full md:h-56 overflow-hidden flex-shrink-0">
        <img
          src={imagePath}
          alt={`Foto de ${membro.titulo}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* 
        CONTEÚDO DO CARD
        - Mobile: Alinhado à direita da imagem
        - Desktop: Abaixo da imagem
      */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 md:p-6">
        <div>
          <h3 className="text-lg font-bold text-cocoa md:text-xl line-clamp-1">
            {membro.titulo}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm line-clamp-3 md:line-clamp-4">
            {membro.descricao}
          </p>
        </div>
      </div>
    </article>
  );
}
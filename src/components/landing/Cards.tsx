import React from "react";
import type { TeamMember } from "@/config/business";

interface TeamCardProps {
  membro: TeamMember;
}

export default function TeamCard({ membro }: TeamCardProps) {
  const imagePath = new URL(
    `../../assets/${membro.imagem}`,
    import.meta.url
  ).href;

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-md border border-neutral-100 flex flex-row md:flex-col h-full">

      {/* IMAGEM */}
      <div className="relative w-1/3 min-w-[120px] md:w-full md:h-56 overflow-hidden flex-shrink-0">
        <img
          src={imagePath}
          alt={`Foto de ${membro.titulo}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">

        <h3 className="text-lg font-bold text-cocoa md:text-xl">
          {membro.titulo}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {membro.descricao}
        </p>

      </div>
    </article>
  );
}
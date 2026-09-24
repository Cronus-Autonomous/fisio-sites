import React from "react";
import type { TeamMember } from "@/config/business";
import { whatsappLink } from "@/config/business";

interface TeamCardProps {
  membro: TeamMember;
  whatsappMessage: string;
}

export default function TeamCard({
  membro,
  whatsappMessage,
}: TeamCardProps) {
  const imagePath = new URL(`${membro.imagem}`, import.meta.url).href;

  return (
    <article className="group flex h-full flex-row overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md md:flex-col">

      {/* IMAGEM */}
      <div className="relative w-1/3 min-w-[120px] flex-shrink-0 overflow-hidden md:h-56 md:w-full">
        <img
          src={imagePath}
          alt={`Foto de ${membro.titulo}`}
          className="h-full w-full object-cover object-top transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">

        {/* INFORMAÇÕES */}
        <div>
          <h3 className="text-lg font-bold text-cocoa md:text-xl">
            {membro.titulo}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {membro.descricao}
          </p>
        </div>

        {/* BOTÃO SEMPRE NO FINAL */}
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-terracotta px-3 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cocoa hover:shadow-lg active:scale-[0.98]"
        >
          Agendar com {membro.titulo}
        </a>

      </div>
    </article>
  );
}
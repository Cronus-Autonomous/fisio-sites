import { memo } from "react";
import type { TeamMember } from "@/config/business";
import { optimizeCloudinaryImage, whatsappLink } from "@/config/business";

interface TeamCardProps {
  membro: TeamMember;
  whatsappMessage: string;
}

function TeamCard({
  membro,
  whatsappMessage,
}: TeamCardProps) {
  const imagePath = optimizeCloudinaryImage(membro.imagem, 600);

  return (
    <article className="flex h-full flex-row overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md md:flex-col">

      {/* IMAGEM */}
      <div className="relative w-1/3 min-w-[120px] flex-shrink-0 overflow-hidden md:h-56 md:w-full">
        <img
          src={imagePath}
          alt={`Foto de ${membro.titulo}`}
          width={600}
          height={800}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">

        <div>
          <h3 className="text-lg font-bold text-cocoa md:text-xl">
            {membro.titulo}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm no-select">
            {membro.descricao}
          </p>
        </div>

        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-terracotta px-3 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-cocoa hover:shadow-lg active:scale-[0.98]"
        >
          Agendar com {membro.titulo.split(" ")[0]}
        </a>

      </div>
    </article>
  );
}

export default memo(TeamCard);
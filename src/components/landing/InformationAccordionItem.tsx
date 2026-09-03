import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { Informacao } from "@/config/business";

type InformationAccordionItemProps = {
  informacao: Informacao;
};

export function InformationAccordionItem({
  informacao,
}: InformationAccordionItemProps) {
  return (
    <AccordionItem
      value={informacao.id}
      className="rounded-2xl border border-clay/40 bg-card px-5 shadow-soft transition-all duration-300 hover:border-clay data-[state=open]:border-clay data-[state=open]:shadow-lift sm:px-6"
    >
      <AccordionTrigger
        className="
          py-5
          text-base
          font-medium
          text-cocoa
          hover:no-underline
          [&>svg]:h-5
          [&>svg]:w-5
          [&>svg]:text-terracotta
          [&[data-state=open]]:text-terracotta
        "
      >
        <span className="pr-4">{informacao.titulo}</span>
      </AccordionTrigger>

      <AccordionContent
        className="
          pb-5
          text-sm
          leading-relaxed
          text-muted-foreground
        "
      >
        {informacao.descricao}
      </AccordionContent>
    </AccordionItem>
  );
}
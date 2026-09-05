import { Clock, HeartPulse, CalendarDays } from "lucide-react";

const icons = [Clock, HeartPulse, CalendarDays];

export function EmergencyCare() {
  return (
    <div className="rounded-2xl border border-clay/40 bg-cream p-6">
      <div className="flex items-center gap-2">
        {icons.map((Icon, i) => (
          <Icon
            key={i}
            className="h-4 w-4 text-rose"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        ))}

        <h3 className="font-display text-lg text-cocoa">
          Sempre Disponível Para Você
        </h3>
      </div>

      <p className="pr-6 mt-4 text-sm leading-6 text-muted-foreground">
        Nosso horário comercial é de segunda a sexta, das 8h às 18h, e aos
        sábados, das 8h ao meio-dia, mas sabemos que a rotina nem sempre se
        encaixa nesses horários. Por isso, também atendemos antes das 8h,
        depois das 18h, aos sábados em outros horários e até aos domingos.
      </p>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        E se for uma urgência, mesmo em datas como Natal e Ano Novo, pode
        contar com a gente: <strong className="text-cocoa">saúde não tira férias.</strong>
      </p>
    </div>
  );
}

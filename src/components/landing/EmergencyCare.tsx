import { Clock, HeartPulse, CalendarDays } from "lucide-react";

const icons = [ HeartPulse ];

export function EmergencyCare() {
  return (
    <div className="rounded-2xl border border-clay/40 bg-sand mt-2 p-6">
      <div className="flex items-center gap-2">
        {/* {icons.map((Icon, i) => (
          <Icon
            key={i}
            className="h-4 w-4 text-care"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        ))} */}

        <h3 className="font-display text-lg text-cocoa">
          Convênio e reembolso
        </h3>
      </div>

      <p className="pr-6 mt-4 text-sm leading-6 text-muted-foreground">
        Para garantir um atendimento individualizado e focado no seu resultado,
        na Shoyufisio trabalhamos apenas com atendimentos particulares.
        Por isso, não aceitamos convênios (planos de saúde) nem planos de
        academia (como Wellhub). Mas você pode solicitar reembolso:
        fornecemos a nota fiscal completa para você pedir o valor de volta com o seu convênio
      </p>

      {/* <p className="mt-3 text-sm leading-6 text-muted-foreground">
        E se for uma urgência, mesmo em datas como Natal e Ano Novo, pode
        contar com a gente: <strong className="text-cocoa">saúde não tira férias.</strong>
      </p> */}
    </div>
  );
}

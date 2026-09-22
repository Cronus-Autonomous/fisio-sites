import { CreditCard, Nfc, WalletCards } from "lucide-react";
import { business } from "@/config/business";

const icons = [CreditCard, WalletCards, Nfc];

export function PaymentMethods() {
  return (
    <div className="rounded-2xl border border-clay/40 bg-cream p-6">
      <div className="flex items-center gap-2">
        {icons.map((Icon, i) => (
          <Icon key={i} className="h-4 w-4 text-rose" strokeWidth={1.5} aria-hidden="true" />
        ))}
        <h3 className="font-display text-lg text-cocoa">Formas de Pagamento</h3>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {business.paymentMethods.map((method) => (
          <li
            key={method}
            className="rounded-full border border-clay/60 bg-background px-3 py-1.5 text-xs text-muted-foreground"
          >
            {method}
          </li>
        ))}
      </ul>
    </div>
  );
}

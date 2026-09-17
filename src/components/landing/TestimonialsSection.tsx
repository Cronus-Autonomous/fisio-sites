import { useEffect, useState } from "react";
import { supabase, type Review } from "@/lib/supabase";

export function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function loadReviews() {
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) setReviews(data);
    }
    loadReviews();
  }, []);

  return (
    <section id="depoimentos" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="text-3xl font-bold text-cocoa text-center">O que dizem nossos pacientes</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item) => (
            <div key={item.id} className="rounded-2xl bg-white p-6 shadow-sm border border-cocoa/10">
              <span className="text-xs uppercase font-semibold text-terracotta">{item.procedimento}</span>
              <p className="mt-2 text-sm text-muted-foreground">"{item.comentario}"</p>
              <div className="mt-4 pt-4 border-t border-cocoa/10 flex justify-between items-center text-xs text-cocoa/70">
                <span className="font-semibold">{item.nome_cliente}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
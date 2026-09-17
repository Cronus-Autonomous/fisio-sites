import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { supabase, type Review } from "@/lib/supabase";

function calcularIdade(dataNascimentoStr: string): number | null {
  if (!dataNascimentoStr) return null;

  const hoje = new Date();
  const nascimento = new Date(dataNascimentoStr);

  if (isNaN(nascimento.getTime())) return null;

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  if (
    mes < 0 ||
    (mes === 0 && hoje.getDate() < nascimento.getDate())
  ) {
    idade--;
  }

  return idade;
}

export function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function loadReviews() {
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) {
        setReviews(data);
      }
    }

    loadReviews();
  }, []);

  // Função para rolar o carrossel
  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("testimonials-carousel");

    if (container) {
      const scrollAmount = direction === "left" ? -350 : 350;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="depoimentos"
      className="bg-cream py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* CABEÇALHO */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-cocoa text-center sm:text-left">
            O que dizem nossos pacientes
          </h2>

          {/* BOTÕES DE NAVEGAÇÃO */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="rounded-full border border-cocoa/20 p-2 text-cocoa hover:bg-cocoa/10 transition cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Próximo"
              className="rounded-full border border-cocoa/20 p-2 text-cocoa hover:bg-cocoa/10 transition cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CARROSSEL */}
        <div
          id="testimonials-carousel"
          className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none scroll-smooth"
        >
          {reviews.map((item) => (
            <TestimonialCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Review }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const comentarioRef = useRef<HTMLParagraphElement>(null);

  const idade = item.data_nascimento
    ? calcularIdade(item.data_nascimento)
    : null;

  useEffect(() => {
    const verificarOverflow = () => {
      const elemento = comentarioRef.current;

      if (!elemento) return;

      // Verifica se o texto ultrapassa o limite de 6 linhas
      setIsOverflowing(
        elemento.scrollHeight > elemento.clientHeight
      );
    };

    verificarOverflow();

    window.addEventListener("resize", verificarOverflow);

    return () => {
      window.removeEventListener("resize", verificarOverflow);
    };
  }, [item.comentario]);

  return (
    <div
      className={`
        flex
        w-[300px]
        sm:w-[360px]
        shrink-0
        snap-start
        flex-col
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        border
        border-cocoa/10
        transition-all
        duration-300
        ${
          isExpanded
            ? "min-h-[350px]"
            : "h-[350px]"
        }
      `}
    >

      {/* CONTEÚDO */}
      <div className="min-w-0">

        {/* PROCEDIMENTO */}
        <span className="inline-block max-w-full truncate text-xs uppercase font-semibold text-terracotta">
          {item.procedimento}
        </span>

        {/* COMENTÁRIO */}
        <p
          ref={comentarioRef}
          className={`
            mt-3
            text-sm
            text-muted-foreground
            whitespace-pre-wrap
            break-words
            ${
              !isExpanded
                ? "line-clamp-6"
                : ""
            }
          `}
        >
          "{item.comentario}"
        </p>

        {/* BOTÃO VER MAIS */}
        {isOverflowing && (
          <button
            type="button"
            onClick={() =>
              setIsExpanded(!isExpanded)
            }
            className="mt-2 flex items-center gap-1 text-xs font-semibold text-terracotta hover:underline cursor-pointer"
          >
            {isExpanded ? (
              <>
                Ver menos
                <ChevronUp className="h-3 w-3" />
              </>
            ) : (
              <>
                Ver mais
                <ChevronDown className="h-3 w-3" />
              </>
            )}
          </button>
        )}
      </div>

      {/* CLIENTE */}
      <div
        className={`
          ${
            isExpanded
              ? "mt-6"
              : "mt-auto"
          }
          pt-4
          border-t
          border-cocoa/10
          flex
          justify-between
          items-center
          text-xs
          text-cocoa/70
          min-w-0
        `}
      >
        <span className="font-semibold truncate">
          {item.nome_cliente}

          {idade !== null && (
            <span className="font-normal text-cocoa/60 font-sans">
              , {idade} anos
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
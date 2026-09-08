import { useState } from "react";
import { aboutCards } from "@/components/landing/Cards";
import { CardSim } from "lucide-react";

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === aboutCards.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? aboutCards.length - 1 : prev - 1
    );
  };

  return (
    <div className="mt-10 w-full">
      {/* CARDS */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {aboutCards.map((card) => (
            <div
              key={card.id}
              className="w-full shrink-0 px-1"
            >
              <Cards
                id={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* NAVEGAÇÃO */}
      <div className="mt-6 flex items-center justify-center gap-4">
        {/* ANTERIOR */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Card anterior"
          className="flex h-8 w-8 items-center justify-center rounded-full text-cocoa transition hover:bg-clay/10"
        >
          ←
        </button>

        {/* BULLETS */}
        <div className="flex items-center gap-2">
          {aboutCards.map((card, index) => (
            <button
              key={card.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para ${card.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-7 bg-terracotta"
                  : "w-2 bg-clay/40 hover:bg-clay/70"
              }`}
            />
          ))}
        </div>

        {/* PRÓXIMO */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Próximo card"
          className="flex h-8 w-8 items-center justify-center rounded-full text-cocoa transition hover:bg-clay/10"
        >
          →
        </button>
      </div>
    </div>
  );
}
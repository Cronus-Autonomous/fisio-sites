import { Reveal } from "./Reveal";
import retrato from "@/assets/founder.png";

export function ReforceProgram() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* LINHA SUPERIOR: IMAGEM (ESQUERDA) E TEXTO (DIREITA) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          
          {/* IMAGEM À ESQUERDA */}
          <Reveal>
            <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[2rem] shadow-soft">
              <div className="relative aspect-[9/16] w-50% overflow-hidden bg-black">
                <video
                  src='https://res.cloudinary.com/xiupvhfs/video/upload/v1790186991/copy_C8691DC7-4C1D-42A8-A97C-77C089B29F4D.mov'
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  Seu navegador não suporta a exibição deste vídeo.
                </video>
              </div>
            </div>
          </Reveal>

          {/* CONTEÚDO À DIREITA */}
          <div>
            <Reveal>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
                Programa Reforce
              </p>

              <h2 className="mt-4 text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
                Mais força, equilíbrio e segurança depois dos 60
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  O Programa Reforce é pensado especialmente para quem tem 60 anos ou mais e sente insegurança para caminhar, medo de cair ou dificuldade para se movimentar no dia a dia. Com exercícios voltados para fortalecimento, equilíbrio e mobilidade, o objetivo é ajudar você a ganhar mais força, mais confiança e mais autonomia para fazer suas atividades sem medo.
As aulas acontecem em turmas bem pequenas, com no máximo 3 pessoas, em horários fixos durante a semana, com acompanhamento de perto dos nossos fisioterapeutas Júnior e Luciana.

                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
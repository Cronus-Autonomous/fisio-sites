import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImage from "@/assets/fachada2.png";
import { whatsappLink, whatsappMessages } from "@/config/business";
import { CTAButton } from "./CTAButton";
import Accordion from "@/components/ui/accordion"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "6%"]);

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden bg-cream pt-28 lg:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 h-[36rem] w-[36rem] rounded-full bg-sand/70 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-24">
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta sm:text-xs"
          >
            Fisioterapia • Hidroterapia• Home Care e Pilates
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[2.1rem] leading-[1.12] tracking-tight text-cocoa sm:text-5xl lg:text-[3.4rem]"
          >
            Cuidado personalizado para aliviar{" "}
            <span className="italic text-terracotta">dores</span>, recuperar seu{" "}
            <span className="italic text-terracotta">movimento</span> e cuidar do seu{" "}
            <span className="italic text-terracotta">bem-estar</span>.
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Tratamentos individualizados para cuidar do corpo de forma integrada, com atenção às
            suas necessidades e aos resultados que você busca.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton href={whatsappLink(whatsappMessages.hero)} size="lg" withWhatsApp>
              Agendar minha avaliação
            </CTAButton>
            <CTAButton href="#servicos" variant="outline" size="lg" external={false}>
              Conhecer os tratamentos
            </CTAButton>
          </motion.div>
        </div>

        <motion.div style={{ y }} className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroImage}
              alt="Sala de atendimento do Clínica Shoyufisio, com maca preparada, toalhas e iluminação suave"
              width={1200}
              height={1408}
              fetchPriority="high"
              className="h-[22rem] w-full object-cover sm:h-[30rem] lg:h-[34rem]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full border border-clay/70 lg:block"
          />
        </motion.div>
      </div>
    </section>
  );
}

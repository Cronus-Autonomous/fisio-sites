import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const stats = [
  { value: 40, suffix: "", suffix2: " anos", label: "de experiência" },
  { value: 12, suffix: "+", suffix2: " mil", label: "pacientes atendidos" },
  { value: 14, suffix: "+", suffix2: "", label: "fisioterapeutas especializados" },
];

const Counter: React.FC<{
  value: number;
  suffix: string;
  suffix2: string;
  reduce: boolean;
}> = ({ value, suffix2, suffix, reduce }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      setN(value);
      return;
    }

    let raf: number;
    const start = performance.now();
    const duration = 1200;

    const tick = (time: number) => {
      const progress = Math.min(1, (time - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setN(Math.round(value * eased));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {suffix}
      {n.toLocaleString("pt-BR")}
      {suffix2}
    </span>
  );
};

export const SocialProof: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="mt-10 w-full"
    >
      <div className="flex items-stretch divide-x divide-cocoa/15">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-1 flex-col px-4 first:pl-0 last:pr-0 sm:px-6"
          >
            <p className="font-serif text-2xl font-medium leading-none text-cocoa sm:text-3xl">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                suffix2={stat.suffix2}
                reduce={reduce ?? false}
              />
            </p>

            <p className="mt-2 text-[10px] font-medium uppercase leading-tight tracking-[0.12em] text-cocoa/60 sm:text-[11px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialProof;
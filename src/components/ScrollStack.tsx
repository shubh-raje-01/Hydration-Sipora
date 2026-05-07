import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    tag: "Zero Compromise",
    headline: "0g Sugar.\n0 Calories.\n100% Flavor.",
    body: "Your hydration shouldn't cost you your health. Sipora pods contain no sugar, no sweeteners, and zero calories. Just naturally-derived aroma — your brain does the rest.",
    bg: "bg-[#0F282F]",
    textColor: "text-[#F3F6F6]",
    accent: "bg-[#FFA8C5]",
    accentText: "text-[#0F282F]",
    number: "01",
  },
  {
    tag: "The Science",
    headline: "80% of Flavor\nIs Smell.",
    body: "Retronasal olfaction is the mechanism behind every delicious sip. Scented air from the Sipora pod travels through your mouth to your olfactory epithelium. Your brain decodes it as taste.",
    bg: "bg-[#A3E4FA]",
    textColor: "text-[#0F282F]",
    accent: "bg-[#0F282F]",
    accentText: "text-[#A3E4FA]",
    number: "02",
  },
  {
    tag: "Pure Origin",
    headline: "Made From\nReal Plants.",
    body: "Every Sipora pod is crafted from natural fruit extracts, herbs, and botanicals. No artificial flavouring. No synthetic compounds. The pods are food-grade, recyclable, and sourced responsibly.",
    bg: "bg-[#FFBCD9]",
    textColor: "text-[#0F282F]",
    accent: "bg-[#0F282F]",
    accentText: "text-[#FFBCD9]",
    number: "03",
  },
  {
    tag: "Designed for India",
    headline: "Built for a\nCountry That\nRuns on Chai.",
    body: "India deserved its own answer to flavored hydration. We built Sipora here — for the heat, the hustle, and the unapologetic love of bold taste. Drink more water. Enjoy every sip.",
    bg: "bg-[#FFA8C5]",
    textColor: "text-[#0F282F]",
    accent: "bg-[#0F282F]",
    accentText: "text-[#FFA8C5]",
    number: "04",
  },
];

function StackCard({
  card,
  index,
  total,
  scrollYProgress,
}: {
  card: (typeof cards)[0];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(scrollYProgress, [start, end], [1, 0.88 - index * 0.02]);
  const opacity = useTransform(scrollYProgress, [start, end], [1, 0.6]);
  const y = useTransform(scrollYProgress, [start, end], ["0%", "-8%"]);

  return (
    <motion.div
      style={{ scale, opacity, y, zIndex: index + 1 }}
      className={`sticky top-28 rounded-[2.5rem] border-4 border-[#0F282F] overflow-hidden ${card.bg} ${card.textColor} shadow-[0px_12px_48px_rgba(15,40,47,0.18)]`}
    >
      <div className="min-h-[70vh] p-10 md:p-16 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className={`inline-block px-4 py-2 rounded-full ${card.accent} ${card.accentText} font-display font-bold uppercase tracking-widest text-xs border-2 border-current`}>
            {card.tag}
          </span>
          <span className="font-display font-black text-[6rem] md:text-[8rem] leading-none opacity-10 select-none">
            {card.number}
          </span>
        </div>

        <div className="mt-auto">
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tighter uppercase whitespace-pre-line mb-8">
            {card.headline}
          </h2>
          <p className="font-sans text-xl md:text-2xl max-w-2xl opacity-80 leading-relaxed">
            {card.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative" style={{ height: `${cards.length * 100}vh`, position: "relative" }}>
      <div className="sticky top-0 px-4 md:px-10 py-8 space-y-0">
        {cards.map((card, i) => (
          <StackCard
            key={card.number}
            card={card}
            index={i}
            total={cards.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Zap, FlaskConical, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Fill with water",
    subtitle: "Pure. Plain. Perfect.",
    icon: Droplets,
    color: "#90D6F9",
    bg: "bg-[#90D6F9]",
    ring: "ring-[#90D6F9]",
    body: "Use any clean water — tap, filtered, sparkling. Sipora works with any temperature. The bottle holds 650ml, perfectly sized for a full morning of hydration. No preparation, no mixing.",
    stat: { value: "650ml", label: "Capacity" },
  },
  {
    number: "02",
    title: "Attach a pod",
    subtitle: "Click. Lock. Done.",
    icon: Zap,
    color: "#FFA8C5",
    bg: "bg-[#FFA8C5]",
    ring: "ring-[#FFA8C5]",
    body: "Press the flavor pod into the mouthpiece opening until it clicks. Each pod delivers 400–500 sips of full-intensity flavor. Swap pods anytime — mid-bottle, mid-sip, no spillage.",
    stat: { value: "500", label: "Sips per pod" },
  },
  {
    number: "03",
    title: "Sip & taste",
    subtitle: "Brain = tricked. Body = hydrated.",
    icon: FlaskConical,
    color: "#A3E4FA",
    bg: "bg-[#A3E4FA]",
    ring: "ring-[#A3E4FA]",
    body: "As water passes through the mouthpiece, the pod releases natural aroma. It travels retronasal — up through your mouth to your olfactory receptors — your brain decodes it as intense flavor. Zero sugar. Pure science.",
    stat: { value: "0g", label: "Sugar added" },
  },
];

export default function StepsMagic() {
  const [active, setActive] = useState(0);

  const current = steps[active];
  const Icon = current.icon;

  return (
    <section id="how-it-works" className="py-24 bg-[#0F282F] text-[#F3F6F6] overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tight mb-4">
            3 Steps to <span className="text-[#90D6F9]">Magic</span>
          </h2>
          <p className="font-sans text-[#F3F6F6]/60 text-lg">Tap a step to explore it.</p>
        </div>

        {/* Stepper row */}
        <div className="flex items-center justify-center gap-0 mb-14 select-none">
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            const isActive = i === active;
            const isDone = i < active;

            return (
              <div key={step.number} className="flex items-center">
                {/* Step circle */}
                <button
                  onClick={() => setActive(i)}
                  data-testid={`step-btn-${i + 1}`}
                  className={`relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-4 transition-all duration-300 focus:outline-none
                    ${isActive
                      ? `${step.bg} border-[#F3F6F6] shadow-[0_0_0_4px_${step.color}55] scale-110`
                      : isDone
                      ? "bg-[#F3F6F6]/15 border-[#F3F6F6]/40"
                      : "bg-[#F3F6F6]/8 border-[#F3F6F6]/20 hover:border-[#F3F6F6]/50"
                    }`}
                >
                  <StepIcon
                    className={`w-7 h-7 md:w-8 md:h-8 transition-colors duration-300 ${isActive ? "text-[#0F282F]" : isDone ? "text-[#F3F6F6]/70" : "text-[#F3F6F6]/40"}`}
                  />
                  {/* Step number badge */}
                  <span
                    className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-display font-black flex items-center justify-center border-2
                      ${isActive ? "bg-[#0F282F] text-[#F3F6F6] border-[#F3F6F6]" : "bg-[#F3F6F6]/10 text-[#F3F6F6]/50 border-[#F3F6F6]/20"}`}
                  >
                    {i + 1}
                  </span>
                </button>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="relative w-16 md:w-28 h-[3px] mx-1 rounded-full bg-[#F3F6F6]/15 overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ backgroundColor: steps[i].color }}
                      initial={{ width: "0%" }}
                      animate={{ width: i < active ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className={`rounded-[2.5rem] border-4 border-[#F3F6F6]/10 overflow-hidden`} style={{ background: `${current.color}18` }}>
              <div className="p-10 md:p-14 flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center">

                {/* Left: icon + stat */}
                <div className="flex-shrink-0 flex flex-col items-center gap-6">
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl ${current.bg} flex items-center justify-center border-4 border-[#F3F6F6]/20 shadow-[0_0_48px_0px] shadow-current`}>
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-[#0F282F]" />
                  </div>
                  <div className="text-center">
                    <div className="font-display font-black text-4xl md:text-5xl" style={{ color: current.color }}>
                      {current.stat.value}
                    </div>
                    <div className="font-sans text-sm uppercase tracking-widest text-[#F3F6F6]/50 mt-1">
                      {current.stat.label}
                    </div>
                  </div>
                </div>

                {/* Right: text */}
                <div className="flex-1">
                  <div className="font-display font-black text-[5rem] md:text-[7rem] leading-none opacity-[0.07] select-none mb-2" style={{ color: current.color }}>
                    {current.number}
                  </div>
                  <h3 className="font-display font-extrabold text-4xl md:text-5xl uppercase tracking-tight leading-none mb-2 text-[#F3F6F6]">
                    {current.title}
                  </h3>
                  <p className="font-sans font-semibold text-base uppercase tracking-widest mb-5" style={{ color: current.color }}>
                    {current.subtitle}
                  </p>
                  <p className="font-sans text-xl text-[#F3F6F6]/70 leading-relaxed">
                    {current.body}
                  </p>
                </div>
              </div>

              {/* Next step button */}
              {active < steps.length - 1 && (
                <div className="px-10 md:px-14 pb-10">
                  <button
                    onClick={() => setActive((a) => Math.min(a + 1, steps.length - 1))}
                    data-testid="step-next"
                    className="flex items-center gap-2 font-display font-bold uppercase tracking-widest text-sm px-6 py-3 rounded-full border-2 transition-all hover:gap-3"
                    style={{
                      color: current.color,
                      borderColor: `${current.color}60`,
                    }}
                  >
                    Next: {steps[active + 1].title}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
              {active === steps.length - 1 && (
                <div className="px-10 md:px-14 pb-10">
                  <button
                    onClick={() => setActive(0)}
                    data-testid="step-restart"
                    className="flex items-center gap-2 font-display font-bold uppercase tracking-widest text-sm px-6 py-3 rounded-full border-2 border-[#F3F6F6]/20 text-[#F3F6F6]/50 hover:text-[#F3F6F6]/80 transition-all"
                  >
                    Start over
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              data-testid={`step-dot-${i + 1}`}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none"
              style={{
                backgroundColor: i === active ? step.color : `${step.color}30`,
                transform: i === active ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

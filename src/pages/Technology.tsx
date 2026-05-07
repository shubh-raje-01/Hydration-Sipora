import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Droplets, FlaskConical, Brain, Wind, Leaf, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepsMagic from "@/components/StepsMagic";

// ─── Data ─────────────────────────────────────────────────────────────
const stats = [
  { value: "80%", label: "of what you taste is actually smell", color: "#FFA8C5" },
  { value: "0g", label: "sugar in every sip", color: "#90D6F9" },
  { value: "500×", label: "sips per flavor pod", color: "#A3E4FA" },
  { value: "100%", label: "natural plant extracts", color: "#FFBCD9" },
];

const scienceCards = [
  {
    icon: Brain,
    title: "Retronasal Olfaction",
    body: "Unlike regular smell (orthonasal), retronasal olfaction happens inside your mouth. Aroma molecules travel from your throat upward to your olfactory epithelium while you swallow — your brain registers this as flavor.",
    accent: "#FFA8C5",
    bg: "bg-[#FFF0F5]",
  },
  {
    icon: Wind,
    title: "Scent-Flavor Illusion",
    body: "Your olfactory system connects directly to the limbic brain — the seat of memory, emotion, and pleasure. When Sipora's aroma hits that pathway, your brain synthesizes it with water and declares: \"This tastes incredible.\"",
    accent: "#90D6F9",
    bg: "bg-[#EEF9FF]",
  },
  {
    icon: Leaf,
    title: "Natural Pods",
    body: "Every pod is made from cold-pressed fruit extracts, botanical oils, and natural terpenes. No PG, no VG, no synthetics. The aromas are food-grade, FSSAI-compliant, and sourced responsibly from Indian farms.",
    accent: "#A3E4FA",
    bg: "bg-[#F0FAFF]",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    body: "As water flows through the mouthpiece at natural sipping speed, it passes the aroma membrane and carries volatile scent compounds into the mouth cavity. No heat needed. No mixing. No waiting.",
    accent: "#FFBCD9",
    bg: "bg-[#FFF5F9]",
  },
];

const timeline = [
  { year: "2022", event: "Research begins", detail: "Team of food scientists and olfaction researchers start studying retronasal flavor delivery." },
  { year: "2023", event: "First prototype", detail: "Pod-and-mouthpiece system achieves consistent scent release across 400+ sips in lab testing." },
  { year: "2023", event: "Taste trials", detail: "500 testers across 6 cities. 94% say flavored water feels more satisfying than plain water." },
  { year: "2024", event: "First launch", detail: "Sipora launches with 4 flavors. Sells out first batch in 72 hours." },
  { year: "2025", event: "6 flavors live", detail: "Expanded lineup. FSSAI certified. Stocked across 12 states." },
];

// ─── Page ──────────────────────────────────────────────────────────────
export default function Technology() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-[#F3F6F6] overflow-x-hidden selection:bg-[#90D6F9] selection:text-[#0F282F]">
      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} className="pt-28 pb-24 bg-[#0F282F] relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#90D6F9]/5 blur-3xl" />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#FFA8C5]/8 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block bg-[#90D6F9] text-[#0F282F] font-bold px-4 py-2 rounded-full uppercase tracking-wider text-sm mb-6 border-2 border-[#F3F6F6]/20">
              The Science Behind the Sip
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.85] font-display font-extrabold uppercase tracking-tighter text-[#F3F6F6] mb-8">
              Your Brain<br />
              <span className="text-[#90D6F9]">Is the Engine.</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans font-medium text-[#F3F6F6]/70 max-w-2xl mb-12">
              Sipora doesn't add anything to your water. Instead, it harnesses retronasal olfaction — the sensory pathway that converts scent into perceived flavor — to make plain water taste extraordinary.
            </p>
            <Link href="/shop">
              <Button className="h-16 px-10 text-lg font-display font-bold uppercase tracking-wide rounded-full shadow-[6px_6px_0px_0px_#FFA8C5] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_#FFA8C5] transition-all border-2 border-[#F3F6F6] bg-[#F3F6F6] text-[#0F282F]">
                Shop Now →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <div className="bg-[#90D6F9] border-y-4 border-[#0F282F]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-2 divide-[#0F282F]/20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="py-8 px-6 text-center"
              >
                <div className="font-display font-black text-4xl md:text-5xl text-[#0F282F] mb-1">{stat.value}</div>
                <div className="font-medium text-xs md:text-sm text-[#0F282F]/60 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CORE SCIENCE SECTION ── */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-[#0F282F] shadow-[16px_16px_0px_0px_#0F282F]">
                <img
                  src="/science.png"
                  alt="Retronasal olfaction visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#FFA8C5] border-2 border-[#0F282F] p-6 rounded-2xl shadow-[8px_8px_0px_0px_#0F282F] rotate-6 max-w-[200px]">
                <span className="font-display font-bold text-5xl block">80%</span>
                <span className="font-bold text-sm uppercase">of what you taste is actually smell</span>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-display font-extrabold uppercase leading-[0.9] tracking-tight mb-8">
                Hacking<br />Your Brain.
              </h2>
              <p className="text-xl md:text-2xl font-sans font-medium mb-10 text-[#0F282F]/80">
                When you sip plain water through a Sipora mouthpiece, the pod releases natural aromas that travel up your throat to your olfactory center. Your brain translates that scent into full, intense flavor — no sugar required.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#90D6F9]/30 p-6 rounded-3xl border-2 border-[#0F282F]">
                  <Droplets className="h-10 w-10 text-[#0F282F] mb-4" />
                  <h3 className="font-display font-bold text-xl uppercase mb-2">100% Water</h3>
                  <p className="font-medium text-sm text-[#0F282F]/70">No sugar, no sweeteners, no calories. Just pure hydration.</p>
                </div>
                <div className="bg-[#FFA8C5]/30 p-6 rounded-3xl border-2 border-[#0F282F]">
                  <FlaskConical className="h-10 w-10 text-[#0F282F] mb-4" />
                  <h3 className="font-display font-bold text-xl uppercase mb-2">Real Flavor</h3>
                  <p className="font-medium text-sm text-[#0F282F]/70">Pods from natural fruits, plants, and spices. Nothing artificial.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Science deep-dive cards */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mb-12 text-center"
          >
            How It Actually <span className="text-[#90D6F9]" style={{ WebkitTextStroke: "2px #0F282F" }}>Works.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scienceCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className={`${card.bg} border-2 border-[#0F282F] rounded-[2rem] p-8 shadow-[6px_6px_0px_0px_#0F282F] hover:shadow-[10px_10px_0px_0px_#0F282F] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all`}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border-2 border-[#0F282F]"
                    style={{ backgroundColor: card.accent }}
                  >
                    <Icon className="w-7 h-7 text-[#0F282F]" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight mb-3">{card.title}</h3>
                  <p className="font-sans text-[#0F282F]/70 text-base leading-relaxed">{card.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS STEPPER ── */}
      <StepsMagic />

      {/* ── TIMELINE ── */}
      <section className="py-28 bg-[#0F282F]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-[#F3F6F6] mb-3">
              Built Over <span className="text-[#90D6F9]">Years.</span>
            </h2>
            <p className="text-[#F3F6F6]/50 font-medium text-lg">Not overnight. Not accidental.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* vertical line */}
            <div className="absolute left-[88px] md:left-[100px] top-0 bottom-0 w-[2px] bg-[#F3F6F6]/10" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-8 relative"
                >
                  <div className="flex-shrink-0 w-[88px] md:w-[100px] text-right">
                    <span className="font-display font-black text-2xl text-[#90D6F9]">{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#90D6F9] border-2 border-[#0F282F] mt-1.5 relative z-10" />
                  <div className="flex-1">
                    <div className="font-display font-bold text-xl uppercase tracking-wide text-[#F3F6F6] mb-1">{item.event}</div>
                    <div className="font-medium text-[#F3F6F6]/50">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-[#90D6F9] border-y-4 border-[#0F282F]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase leading-[0.85] tracking-tighter text-[#0F282F] mb-4 max-w-3xl mx-auto">
              Science You Can Sip.
            </h2>
            <p className="text-xl font-sans font-medium text-[#0F282F]/60 mb-10 max-w-xl mx-auto">
              Ready to experience retronasal olfaction for yourself? Your brain is waiting.
            </p>
            <Link href="/shop">
              <Button className="h-20 px-12 text-2xl font-display font-bold uppercase tracking-wide rounded-full shadow-[8px_8px_0px_0px_#0F282F] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[4px_4px_0px_0px_#0F282F] transition-all border-4 border-[#0F282F] bg-[#0F282F] text-[#F3F6F6]">
                Get Your Starter Kit
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

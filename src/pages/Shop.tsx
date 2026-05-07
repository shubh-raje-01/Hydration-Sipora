import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, Check, Star, Zap, Package, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagicBento from "@/components/MagicBento";

// ─── Starter kit data ───────────────────────────────────────────────
const kits = [
  {
    id: "starter",
    name: "Starter Kit",
    tag: "Most Popular",
    tagColor: "bg-[#FFA8C5] text-[#0F282F]",
    price: "₹1,999",
    originalPrice: "₹2,499",
    description: "Everything you need to begin your flavored hydration journey.",
    includes: ["1 × Sipora Bottle (650ml)", "3 × Flavor Pods of your choice", "1 × Cleaning brush", "Free shipping"],
    accent: "#FFA8C5",
    bg: "bg-[#FFF0F5]",
    highlight: true,
  },
  {
    id: "explorer",
    name: "Explorer Kit",
    tag: "Best Value",
    tagColor: "bg-[#90D6F9] text-[#0F282F]",
    price: "₹2,799",
    originalPrice: "₹3,799",
    description: "Try all our signature flavors and discover your favorites.",
    includes: ["1 × Sipora Bottle (650ml)", "6 × Flavor Pods (all flavors)", "1 × Carry pouch", "Priority shipping"],
    accent: "#90D6F9",
    bg: "bg-[#EEF9FF]",
    highlight: false,
  },
  {
    id: "pods",
    name: "Pod Refill Pack",
    tag: "Refill",
    tagColor: "bg-[#A3E4FA] text-[#0F282F]",
    price: "₹999",
    originalPrice: "₹1,299",
    description: "Stock up on pods. Mix, match, or stick to your obsession.",
    includes: ["3 × Flavor Pods of your choice", "Recyclable packaging", "Pod storage case"],
    accent: "#A3E4FA",
    bg: "bg-[#F0FAFF]",
    highlight: false,
  },
];

const reviews = [
  { name: "Priya M.", location: "Mumbai", stars: 5, text: "I literally drink 3L a day now. The Wild Berry is unreal — my brain is fully convinced it's juice. Zero guilt." },
  { name: "Arjun K.", location: "Bangalore", stars: 5, text: "Bought the Explorer Kit and tried all flavors in a week. Blood Orange is my everyday now. Game-changer for gym hydration." },
  { name: "Sneha R.", location: "Delhi", stars: 5, text: "My kids love the Tropical Punch. Finally a way to get them off sugary drinks without a fight." },
];

const perks = [
  { icon: Package, label: "Free shipping", sub: "On all orders above ₹999" },
  { icon: RefreshCw, label: "30-day returns", sub: "No questions asked" },
  { icon: Zap, label: "Fast dispatch", sub: "Ships in 24 hours" },
  { icon: Check, label: "100% natural", sub: "Zero artificial anything" },
];

// ─── Kit Card ────────────────────────────────────────────────────────
function KitCard({ kit, index }: { kit: (typeof kits)[0]; index: number }) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col rounded-[2rem] border-2 border-[#0F282F] overflow-hidden ${kit.bg} ${
        kit.highlight ? "shadow-[10px_10px_0px_0px_#0F282F] scale-[1.03]" : "shadow-[6px_6px_0px_0px_#0F282F]"
      }`}
    >
      {/* Tag */}
      <div className={`absolute top-5 right-5 px-3 py-1 rounded-full font-display font-bold text-xs uppercase tracking-wider border border-[#0F282F]/20 ${kit.tagColor}`}>
        {kit.tag}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-display font-extrabold text-3xl uppercase tracking-tight mb-2">{kit.name}</h3>
        <p className="text-[#0F282F]/60 font-medium mb-6">{kit.description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-8">
          <span className="font-display font-black text-5xl">{kit.price}</span>
          <span className="font-medium text-[#0F282F]/40 line-through text-xl">{kit.originalPrice}</span>
        </div>

        {/* Includes */}
        <ul className="space-y-3 mb-8 flex-1">
          {kit.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 font-medium text-sm">
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: kit.accent === "#FFA8C5" ? "#0F282F" : "#0F282F" }} />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          onClick={handleAdd}
          className={`w-full h-14 font-display font-bold uppercase tracking-wide rounded-2xl border-2 border-[#0F282F] text-[#0F282F] transition-all ${
            kit.highlight
              ? "bg-[#FFA8C5] hover:bg-[#FFBCD9] shadow-[4px_4px_0px_0px_#0F282F] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0F282F]"
              : "bg-white hover:bg-[#F3F6F6] shadow-[4px_4px_0px_0px_#0F282F] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0F282F]"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {added ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2"
              >
                <Check className="w-5 h-5" /> Added to Cart
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────
export default function Shop() {
  return (
    <div className="min-h-screen bg-[#F3F6F6] overflow-x-hidden selection:bg-[#FFA8C5] selection:text-[#0F282F]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-28 pb-20 bg-[#0F282F] relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#FFA8C5]/10 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#90D6F9]/10 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block bg-[#FFA8C5] text-[#0F282F] font-bold px-4 py-2 rounded-full uppercase tracking-wider text-sm mb-6 border-2 border-[#F3F6F6]/20">
              Shop All Products
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[8rem] leading-[0.85] font-display font-extrabold uppercase tracking-tighter text-[#F3F6F6] mb-6">
              Your Kit.<br />
              <span className="text-[#FFA8C5]">Your Rules.</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans font-medium text-[#F3F6F6]/70 max-w-xl">
              Pick your starter kit, choose your flavors, and begin drinking water you'll actually crave.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PERKS BAR ── */}
      <div className="bg-[#FFA8C5] border-y-4 border-[#0F282F]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-2 divide-[#0F282F]/20">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className="flex items-center gap-3 py-5 px-6">
                  <Icon className="w-6 h-6 flex-shrink-0 text-[#0F282F]" />
                  <div>
                    <div className="font-display font-bold uppercase text-sm tracking-wide">{perk.label}</div>
                    <div className="font-medium text-xs text-[#0F282F]/60">{perk.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── STARTER KITS ── */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase leading-[0.9] tracking-tight mb-4">
              Choose Your <span className="text-[#FFA8C5]" style={{ WebkitTextStroke: "2px #0F282F" }}>Kit.</span>
            </h2>
            <p className="text-xl font-sans font-medium text-[#0F282F]/60 max-w-lg">
              Every kit ships with a satisfaction guarantee. Not vibing? Full refund, no drama.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {kits.map((kit, i) => (
              <KitCard key={kit.id} kit={kit} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL FLAVOR PODS ── */}
      <section className="py-28 bg-white border-y-4 border-[#0F282F]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase leading-[0.9] tracking-tight mb-4">
                Pick Your <span className="text-[#FFA8C5]">Poison.</span>
              </h2>
              <p className="text-xl font-sans font-medium text-[#0F282F]/60">Hover each pod to explore. Add your favorites.</p>
            </div>
            <div className="flex items-center gap-3 bg-[#F3F6F6] border-2 border-[#0F282F] px-5 py-3 rounded-2xl shadow-[4px_4px_0px_0px_#0F282F]">
              <span className="font-display font-black text-3xl text-[#FFA8C5]">6</span>
              <span className="font-display font-bold text-sm uppercase tracking-wider">Flavors Available</span>
            </div>
          </motion.div>

          <MagicBento />
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-28 bg-[#0F282F]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-[#F3F6F6] mb-3">
              12,400+ Happy <span className="text-[#FFA8C5]">Hydrators.</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="w-6 h-6 fill-[#FFA8C5] text-[#FFA8C5]" />
              ))}
              <span className="font-display font-bold text-[#F3F6F6]/70 ml-2 text-lg">4.8 / 5</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F3F6F6]/5 border-2 border-[#F3F6F6]/10 rounded-[2rem] p-8 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <Star key={s} className="w-5 h-5 fill-[#FFA8C5] text-[#FFA8C5]" />
                  ))}
                </div>
                <p className="font-sans text-[#F3F6F6]/80 text-lg leading-relaxed italic flex-1">"{r.text}"</p>
                <div>
                  <div className="font-display font-bold text-[#F3F6F6] uppercase">{r.name}</div>
                  <div className="font-medium text-sm text-[#F3F6F6]/40">{r.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 bg-[#FFA8C5] border-y-4 border-[#0F282F]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-8xl font-display font-extrabold uppercase leading-[0.85] tracking-tighter mb-10 text-[#0F282F] max-w-4xl mx-auto">
              Start Drinking More Water Today.
            </h2>
            <Button className="h-20 px-12 text-xl font-display font-bold uppercase tracking-wide rounded-full shadow-[8px_8px_0px_0px_#0F282F] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[4px_4px_0px_0px_#0F282F] transition-all border-4 border-[#0F282F] bg-[#0F282F] text-[#F3F6F6]">
              Get Starter Kit <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const pods = [
  {
    name: "Blood Orange",
    image: "/pod-blood-orange.png",
    price: "₹999",
    tag: "Best Seller",
    tagColor: "bg-[#FF5A00] text-white",
    spotColor: "rgba(255,90,0,0.18)",
    size: "lg",
  },
  {
    name: "Wild Berry",
    image: "/pod-wild-berry.png",
    price: "₹999",
    tag: "Popular",
    tagColor: "bg-[#8B008B] text-white",
    spotColor: "rgba(139,0,139,0.15)",
    size: "sm",
  },
  {
    name: "Mint Lime",
    image: "/pod-mint-lime.png",
    price: "₹999",
    tag: "New",
    tagColor: "bg-[#00BB5E] text-white",
    spotColor: "rgba(0,255,127,0.14)",
    size: "sm",
  },
  {
    name: "Tropical Punch",
    image: "/pod-tropical-punch.png",
    price: "₹999",
    tag: "Fan Fave",
    tagColor: "bg-[#DAA520] text-white",
    spotColor: "rgba(255,215,0,0.16)",
    size: "sm",
  },
  {
    name: "Guava Rush",
    image: "/pod-guava-rush.png",
    price: "₹999",
    tag: "Limited",
    tagColor: "bg-[#FF1493] text-white",
    spotColor: "rgba(255,105,180,0.18)",
    size: "sm",
  },
  {
    name: "Lychee Bloom",
    image: "/pod-lychee-bloom.png",
    price: "₹999",
    tag: "New",
    tagColor: "bg-[#FF69B4] text-white",
    spotColor: "rgba(255,182,193,0.2)",
    size: "lg",
  },
];

function BentoCard({ pod, className }: { pod: (typeof pods)[0]; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 22 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const spotX = useTransform(mouseX, [-0.5, 0.5], ["20%", "80%"]);
  const spotY = useTransform(mouseY, [-0.5, 0.5], ["20%", "80%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
    const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xNorm);
    mouseY.set(yNorm);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-[2rem] overflow-hidden border-2 border-[#0F282F] bg-[#F3F6F6] cursor-pointer group ${className}`}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
        boxShadow: hovered
          ? "10px 14px 0px 0px #0F282F"
          : "6px 6px 0px 0px #0F282F",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ z: 24 }}
      data-testid={`bento-card-${pod.name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 rounded-[2rem]"
        style={{
          background: hovered
            ? `radial-gradient(circle at ${spotX.get()} ${spotY.get()}, ${pod.spotColor} 0%, transparent 65%)`
            : "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: hovered
            ? `radial-gradient(ellipse at ${spotX.get()} ${spotY.get()}, ${pod.spotColor} 0%, transparent 70%)`
            : "",
        }}
      />

      {/* Image */}
      <div className="w-full h-full relative">
        <img
          src={pod.image}
          alt={pod.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
        />

        {/* Tag */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full font-display font-bold text-xs uppercase tracking-wider border border-white/30 ${pod.tagColor}`}
          style={{ transform: "translateZ(40px)" }}
        >
          {pod.tag}
        </div>

        {/* Bottom info — slides up on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0F282F] to-transparent text-[#F3F6F6]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 16 }}
          transition={{ duration: 0.25 }}
          style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
        >
          <div className="font-display font-black text-2xl uppercase tracking-tight leading-none mb-1">
            {pod.name}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-sans font-bold text-sm opacity-80">3-Pod Pack</span>
            <span className="font-display font-black text-xl">{pod.price}</span>
          </div>
          <button className="mt-3 w-full py-2 rounded-xl bg-[#FFA8C5] text-[#0F282F] font-display font-bold uppercase tracking-widest text-sm border-2 border-[#0F282F] hover:bg-[#FFBCD9] transition-colors">
            Add to Cart
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function MagicBento() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[240px] lg:auto-rows-[280px] gap-5">
      {/* Blood Orange — tall (2 rows) */}
      <BentoCard pod={pods[0]} className="row-span-2 col-span-1" />

      {/* Wild Berry */}
      <BentoCard pod={pods[1]} className="col-span-1" />

      {/* Mint Lime */}
      <BentoCard pod={pods[2]} className="col-span-1" />

      {/* Tropical Punch — wide (2 cols) */}
      <BentoCard pod={pods[3]} className="col-span-2 lg:col-span-1" />

      {/* Guava Rush */}
      <BentoCard pod={pods[4]} className="col-span-1" />

      {/* Lychee Bloom — tall (2 rows) */}
      <BentoCard pod={pods[5]} className="row-span-2 col-span-1" />

      {/* Filler promo card */}
      <motion.div
        className="col-span-2 lg:col-span-1 rounded-[2rem] border-2 border-[#0F282F] bg-[#0F282F] flex flex-col items-center justify-center text-center p-8 shadow-[6px_6px_0px_0px_#FFA8C5]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-testid="bento-promo-card"
      >
        <span className="font-display font-black text-5xl text-[#FFA8C5] leading-none mb-2">20+</span>
        <span className="font-display font-bold text-lg uppercase tracking-wider text-[#F3F6F6]">
          Natural Flavors
        </span>
        <span className="font-sans text-sm text-[#A3E4FA] mt-2 opacity-80">Always expanding. Never artificial.</span>
      </motion.div>
    </div>
  );
}

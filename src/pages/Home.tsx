import { useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "wouter";
import ScrollStack from "@/components/ScrollStack";
import LiquidEther from "@/components/LiquidEther";
import Navbar from "@/components/Navbar";

const BottleViewer = lazy(() => import("@/components/BottleViewer"));

function Section3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.3"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <div ref={ref} style={{ perspective: "1200px" }} className={className}>
      <motion.div style={{ rotateX, opacity, scale, transformOrigin: "bottom center" }}>
        {children}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "18%"]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "10%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <div
      className="min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-primary-foreground"
      style={{ perspective: "1px", perspectiveOrigin: "50% 0" }}
    >
      {/* Sticky Nav */}
      <Navbar />

      {/* ── HERO GRID ── */}
      <section ref={heroRef} className="pt-20 min-h-[100dvh] flex flex-col relative overflow-hidden">
        {/* Liquid ether blobs background */}
        <LiquidEther className="z-0" />

        {/* 3D Bottle — behind the content */}
        <Suspense fallback={null}>
          <BottleViewer />
        </Suspense>

        <div className="container mx-auto px-6 py-12 flex-1 flex flex-col justify-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-stretch">

            {/* Text */}
            <motion.div
              style={{ y: heroTextY, opacity: heroOpacity }}
              className="col-span-1 lg:col-span-7 flex flex-col justify-center relative z-10 py-10 lg:py-0"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.85] font-display font-extrabold uppercase tracking-tighter"
              >
                Drink Water.<br />
                <span className="text-primary block mt-2">Taste Magic.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-xl md:text-2xl max-w-xl font-sans font-medium"
              >
                Zero sugar. Zero calories. 100% natural flavor via retronasal olfaction. The future of hydration is a mind trick.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 flex flex-col sm:flex-row gap-4"
              >
                <Link href="/shop">
                  <Button
                    data-testid="hero-cta-primary"
                    size="lg"
                    className="h-16 px-8 text-lg font-display font-bold uppercase tracking-wide rounded-full shadow-[6px_6px_0px_0px_#0F282F] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_#0F282F] transition-all border-2 border-foreground"
                  >
                    Shop Starter Kit <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/technology">
                  <Button
                    data-testid="hero-cta-secondary"
                    size="lg"
                    variant="outline"
                    className="h-16 px-8 text-lg font-display font-bold uppercase tracking-wide rounded-full bg-accent text-foreground border-2 border-foreground shadow-[6px_6px_0px_0px_#0F282F] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_#0F282F] transition-all"
                  >
                    The Science
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Images — parallax */}
            <motion.div
              style={{ y: heroImageY }}
              className="col-span-1 lg:col-span-5 grid grid-rows-3 gap-6 h-[60vh] lg:h-[80vh]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="row-span-2 rounded-[2rem] overflow-hidden border-2 border-foreground shadow-[8px_8px_0px_0px_#0F282F] relative group"
              >
                <img
                  src="/hero-1.png"
                  alt="Sipora morning light"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <div className="row-span-1 grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[2rem] overflow-hidden border-2 border-foreground shadow-[4px_4px_0px_0px_#0F282F] group"
                >
                  <img src="/hero-2.png" alt="Sipora desk setup" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[2rem] overflow-hidden border-2 border-foreground shadow-[4px_4px_0px_0px_#0F282F] group"
                >
                  <img src="/hero-3.png" alt="Sipora gym bag" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SCROLL STACK ── */}
      <ScrollStack />

      {/* ── MARQUEE TICKER ── */}
      <div className="w-full bg-foreground text-background py-4 overflow-hidden border-y-4 border-primary transform -rotate-1 scale-105">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
          className="flex whitespace-nowrap font-display font-bold uppercase text-2xl md:text-3xl tracking-wider items-center"
        >
          <span className="mx-4 text-primary">✦</span> NO SUGAR
          <span className="mx-4 text-primary">✦</span> NO CALORIES
          <span className="mx-4 text-primary">✦</span> PURE SCENT
          <span className="mx-4 text-accent">✦</span> 100% NATURAL
          <span className="mx-4 text-accent">✦</span> BRAIN-TRICKED BLISS
          <span className="mx-4 text-secondary">✦</span> THE FUTURE OF HYDRATION
          <span className="mx-4 text-secondary">✦</span> INDIA'S FIRST SCENT BOTTLE
          <span className="mx-4 text-primary">✦</span> NO SUGAR
          <span className="mx-4 text-primary">✦</span> NO CALORIES
          <span className="mx-4 text-primary">✦</span> PURE SCENT
          <span className="mx-4 text-accent">✦</span> 100% NATURAL
          <span className="mx-4 text-accent">✦</span> BRAIN-TRICKED BLISS
          <span className="mx-4 text-secondary">✦</span> THE FUTURE OF HYDRATION
          <span className="mx-4 text-secondary">✦</span> INDIA'S FIRST SCENT BOTTLE
        </motion.div>
      </div>

      {/* ── SOCIAL PROOF ── */}
      <Section3D>
        <section className="py-16 bg-accent border-y-4 border-foreground overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-8 h-8 text-foreground fill-foreground" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="font-display font-bold">
                  <div className="text-3xl">4.8 / 5</div>
                  <div className="text-sm uppercase tracking-wider">12,400+ Happy Hydrators</div>
                </div>
              </div>
              <div className="h-16 w-1 bg-foreground/20 hidden md:block" />
              <div className="flex-1 max-w-xl font-display font-medium text-xl md:text-2xl text-center md:text-left italic">
                "I haven't drank this much water in my life. The Wild Berry literally tricks my brain into thinking I'm drinking juice. It's crazy."
              </div>
            </div>
          </div>
        </section>
      </Section3D>

      {/* ── FINAL CTA ── */}
      <Section3D>
        <section className="py-32 bg-primary border-b-4 border-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-display font-extrabold uppercase leading-[0.85] tracking-tighter mb-10 max-w-5xl mx-auto">
              Ready to Hack Your Hydration?
            </h2>
            <Link href="/shop">
              <Button
                data-testid="final-cta"
                size="lg"
                className="h-20 px-12 text-2xl font-display font-bold uppercase tracking-wide rounded-full shadow-[8px_8px_0px_0px_#0F282F] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[4px_4px_0px_0px_#0F282F] transition-all border-4 border-foreground bg-background text-foreground"
              >
                Get Your Starter Kit Now
              </Button>
            </Link>
          </div>
        </section>
      </Section3D>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <span className="font-display font-bold text-4xl tracking-tighter uppercase mb-6 block text-primary">SIPORA</span>
              <p className="font-medium text-background/70 max-w-xs">
                The future of hydration, designed in India. Zero sugar, full flavor, pure science.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-xl uppercase mb-6">Shop</h4>
              <ul className="space-y-3 font-medium text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Starter Kits</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Flavor Pods</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-xl uppercase mb-6">About</h4>
              <ul className="space-y-3 font-medium text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">The Science</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-xl uppercase mb-6">Stay Hydrated</h4>
              <p className="font-medium text-background/70 mb-4">Join our newsletter for new flavors and drops.</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  data-testid="newsletter-email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-12 rounded-xl focus-visible:ring-primary"
                />
                <Button className="h-12 px-6 rounded-xl bg-primary text-foreground hover:bg-primary/90">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-medium text-background/50 text-sm">
              © {new Date().getFullYear()} Sipora India. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors" data-testid="social-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors" data-testid="social-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors" data-testid="social-youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
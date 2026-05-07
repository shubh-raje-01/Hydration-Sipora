import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Shop", href: "/shop", type: "route" },
  { label: "Technology", href: "/technology", type: "route" },
  { label: "About", href: "/about", type: "route" },
  { label: "Support", href: "/support", type: "route" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-lg shadow-[0_2px_24px_rgba(15,40,47,0.10)] border-b border-border"
            : "bg-background/75 backdrop-blur-md border-b border-border/60"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2" data-testid="nav-logo">
            <span className="font-display font-bold text-2xl tracking-tighter uppercase select-none">
              SIPORA
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1 font-sans font-medium text-sm">
            {navLinks.map((link) => {
              const isActive = location === link.href || location.startsWith(link.href + "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className={`relative px-4 py-2 rounded-full transition-all duration-200 group ${
                    isActive ? "text-foreground font-semibold" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-primary transition-all duration-200 origin-left ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/shop">
              <Button
                data-testid="nav-cta"
                className="font-display font-bold uppercase tracking-wide rounded-full px-5 h-11 shadow-[4px_4px_0px_0px_#0F282F] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_#0F282F] transition-all border-2 border-foreground text-sm"
              >
                Get Yours
              </Button>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden w-11 h-11 rounded-full border-2 border-foreground flex items-center justify-center transition-colors hover:bg-foreground hover:text-background"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-testid="nav-hamburger"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-20 left-0 right-0 z-40 bg-background border-b-4 border-foreground shadow-[0_8px_32px_rgba(15,40,47,0.18)] lg:hidden overflow-hidden"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                      className="flex items-center justify-between px-4 py-4 rounded-2xl font-display font-bold text-2xl uppercase tracking-tight hover:bg-primary/10 transition-colors group"
                    >
                      <span>{link.label}</span>
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xl">→</span>
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 border-t border-border mt-2">
                  <Link href="/shop">
                    <Button
                      className="w-full h-14 text-lg font-display font-bold uppercase tracking-wide rounded-2xl shadow-[4px_4px_0px_0px_#0F282F] border-2 border-foreground"
                      data-testid="mobile-nav-cta"
                    >
                      Get Yours
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

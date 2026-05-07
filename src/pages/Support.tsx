import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Truck, RefreshCw, FlaskConical, Leaf, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    label: "Product",
    icon: FlaskConical,
    color: "bg-[#90D6F9]",
    questions: [
      {
        q: "How does the Sipora bottle work?",
        a: "The Sipora bottle works through retronasal olfaction — the same mechanism your brain uses to perceive most of what you call 'taste'. When you sip water, a scented aroma pod releases natural fragrance molecules. These travel retronasal — backwards through your mouth to your olfactory epithelium. Your brain decodes this signal as taste, creating a full flavor experience from plain water. Zero additives.",
      },
      {
        q: "Is there anything actually added to my water?",
        a: "No. Your water stays 100% pure. The scent pod sits in the mouthpiece and never touches your water. All flavor is delivered through the air pathway, not through the liquid. What you drink is exactly what you put in — clean water.",
      },
      {
        q: "How many sips does one pod last?",
        a: "Each Sipora pod lasts approximately 400–500 sips, which equates to about 3–4 full 650ml bottles. Flavor intensity is consistent from sip one to sip five hundred. No fading, no weak finish.",
      },
      {
        q: "Can I switch pods mid-bottle?",
        a: "Yes. Pods click in and out in under two seconds. You can swap flavors mid-bottle without any spillage or mess. The pod mechanism is sealed — removing it doesn't affect the water.",
      },
      {
        q: "Are the pods safe for kids?",
        a: "Sipora pods are made from natural plant-based aroma compounds with no allergens, no synthetic chemicals, and no sugar. They are generally safe for children above 4 years. However, we recommend consulting a pediatrician if your child has known sensitivities to specific plants or botanicals.",
      },
    ],
  },
  {
    label: "Orders",
    icon: Truck,
    color: "bg-[#FFBCD9]",
    questions: [
      {
        q: "How long does delivery take?",
        a: "Standard delivery across India takes 3–5 business days. Express shipping (1–2 days) is available in Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, and Pune. International shipping is currently available to UAE, UK, and Singapore with a 7–12 day window.",
      },
      {
        q: "What is your return policy?",
        a: "We offer a 30-day satisfaction guarantee on all starter kits. If you're not completely impressed, we'll give you a full refund — no questions asked. Opened pod packs are not eligible for return for hygiene reasons, but if you received a faulty pod, we'll replace it immediately.",
      },
      {
        q: "Can I modify or cancel my order?",
        a: "Orders can be modified or cancelled within 2 hours of placement. After that, they enter our fulfillment pipeline and cannot be interrupted. Contact support@sipora.in immediately if you need to make changes.",
      },
    ],
  },
  {
    label: "Sustainability",
    icon: Leaf,
    color: "bg-[#A3E4FA]",
    questions: [
      {
        q: "Are Sipora pods recyclable?",
        a: "Yes. Sipora pods are made from food-grade recyclable polypropylene (PP5). They can be rinsed and placed in your standard recycling bin. We also run a pod return program — send back 10 used pods in any order and receive a ₹100 credit toward your next purchase.",
      },
      {
        q: "What is Sipora's environmental impact vs. flavored drinks?",
        a: "A single Sipora pod replacing one bottle of flavored water saves approximately 35g of plastic packaging, 28g of sugar, and 0.4 liters of industrial water used in beverage production. At scale, we estimate Sipora users collectively save over 800 tonnes of plastic annually.",
      },
    ],
  },
  {
    label: "Safety",
    icon: Shield,
    color: "bg-[#FFA8C5]",
    questions: [
      {
        q: "Are Sipora pods FSSAI approved?",
        a: "Yes. All Sipora pod formulations are FSSAI certified and comply with Indian food safety standards for food-grade contact materials. Our manufacturing facility in Pune is ISO 22000 certified.",
      },
      {
        q: "Can I use Sipora if I have food allergies?",
        a: "Our pods list every ingredient transparently on the packaging and on our website. Most pods are free from the 14 major allergens. However, some botanical extracts (e.g., citrus, tree nuts) are present in specific flavors. Always check the ingredient list for your chosen flavor before use.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-[#0F282F]/10 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        data-testid={`faq-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="font-display font-bold text-xl text-[#0F282F] leading-snug group-hover:text-[#FFA8C5] transition-colors pr-4">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#0F282F] flex items-center justify-center mt-1"
        >
          <ChevronDown className="w-4 h-4 text-[#0F282F]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 font-sans text-lg text-[#0F282F]/70 leading-relaxed pr-12">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Support() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const current = faqCategories[activeCategory];

  return (
    <div className="min-h-screen bg-[#F3F6F6] selection:bg-[#FFA8C5] selection:text-[#0F282F]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-20 bg-[#90D6F9] border-b-4 border-[#0F282F]">
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block bg-[#0F282F] text-[#F3F6F6] font-display font-bold px-4 py-2 rounded-full uppercase tracking-widest text-xs mb-8 border-2 border-[#0F282F]">
              Support
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.88] mb-6 text-[#0F282F]">
              We're Here.<br />
              <span className="text-[#FFA8C5]">Ask Anything.</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans font-medium text-[#0F282F]/70 max-w-2xl">
              Most questions are answered in our FAQ below. Can't find what you need? Drop us a message — we reply within 4 hours on business days.
            </p>
          </motion.div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-xl">
            {[
              { value: "&lt; 4h", label: "Response time" },
              { value: "97%", label: "Satisfaction rate" },
              { value: "7 days", label: "Support hours" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0F282F] rounded-2xl border-2 border-[#0F282F] p-5 text-center shadow-[4px_4px_0px_0px_#FFA8C5]">
                <div
                  className="font-display font-black text-3xl text-[#FFA8C5]"
                  dangerouslySetInnerHTML={{ __html: stat.value }}
                />
                <div className="font-sans text-xs uppercase tracking-widest text-[#F3F6F6]/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-[#0F282F] mb-16"
            >
              Frequently Asked
            </motion.h2>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-3 mb-12">
              {faqCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(i)}
                    data-testid={`faq-cat-${cat.label.toLowerCase()}`}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full font-display font-bold uppercase tracking-wider text-sm border-2 transition-all duration-200
                      ${i === activeCategory
                        ? `${cat.color} border-[#0F282F] shadow-[4px_4px_0px_0px_#0F282F] text-[#0F282F]`
                        : "bg-[#F3F6F6] border-[#0F282F]/20 text-[#0F282F]/50 hover:border-[#0F282F]/50 hover:text-[#0F282F]"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* FAQ items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className={`rounded-[2rem] border-4 border-[#0F282F] ${current.color} shadow-[8px_8px_0px_0px_#0F282F] overflow-hidden`}
              >
                <div className="px-8 py-4 border-b-2 border-[#0F282F]/20 flex items-center gap-3">
                  {(() => { const Icon = current.icon; return <Icon className="w-5 h-5 text-[#0F282F]" />; })()}
                  <span className="font-display font-bold uppercase tracking-widest text-sm text-[#0F282F]">
                    {current.label}
                  </span>
                </div>
                <div className="px-8 bg-[#F3F6F6]">
                  {current.questions.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="py-24 bg-[#0F282F]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <MessageCircle className="w-14 h-14 text-[#90D6F9] mx-auto mb-6" />
              <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-[#F3F6F6] mb-4">
                Still Need <span className="text-[#FFA8C5]">Help?</span>
              </h2>
              <p className="font-sans text-lg text-[#F3F6F6]/60">
                Send us a message and we'll get back to you within 4 hours during business hours (Mon–Sat, 9am–7pm IST).
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[2rem] bg-[#90D6F9] border-4 border-[#F3F6F6]/20 p-14 text-center shadow-[8px_8px_0px_0px_#FFA8C5]"
                  data-testid="form-success"
                >
                  <div className="text-6xl mb-6">✓</div>
                  <h3 className="font-display font-black text-4xl uppercase text-[#0F282F] mb-3">Message sent.</h3>
                  <p className="font-sans text-lg text-[#0F282F]/70">
                    We'll reply to <strong>{formState.email}</strong> within 4 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-8 font-display font-bold uppercase tracking-widest text-sm text-[#0F282F]/60 hover:text-[#0F282F] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-testid="contact-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-display font-bold uppercase tracking-wider text-xs text-[#F3F6F6]/60 block mb-2">Name</label>
                      <Input
                        required
                        placeholder="Arjun Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        data-testid="contact-name"
                        className="h-14 rounded-2xl bg-[#F3F6F6]/8 border-[#F3F6F6]/20 text-[#F3F6F6] placeholder:text-[#F3F6F6]/30 focus-visible:ring-[#FFA8C5] text-base"
                      />
                    </div>
                    <div>
                      <label className="font-display font-bold uppercase tracking-wider text-xs text-[#F3F6F6]/60 block mb-2">Email</label>
                      <Input
                        required
                        type="email"
                        placeholder="you@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        data-testid="contact-email"
                        className="h-14 rounded-2xl bg-[#F3F6F6]/8 border-[#F3F6F6]/20 text-[#F3F6F6] placeholder:text-[#F3F6F6]/30 focus-visible:ring-[#FFA8C5] text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-display font-bold uppercase tracking-wider text-xs text-[#F3F6F6]/60 block mb-2">Subject</label>
                    <Input
                      required
                      placeholder="What's this about?"
                      value={formState.subject}
                      onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                      data-testid="contact-subject"
                      className="h-14 rounded-2xl bg-[#F3F6F6]/8 border-[#F3F6F6]/20 text-[#F3F6F6] placeholder:text-[#F3F6F6]/30 focus-visible:ring-[#FFA8C5] text-base"
                    />
                  </div>

                  <div>
                    <label className="font-display font-bold uppercase tracking-wider text-xs text-[#F3F6F6]/60 block mb-2">Message</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Describe your question or issue in detail..."
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      data-testid="contact-message"
                      className="w-full rounded-2xl bg-[#F3F6F6]/8 border-2 border-[#F3F6F6]/20 text-[#F3F6F6] placeholder:text-[#F3F6F6]/30 focus:outline-none focus:ring-2 focus:ring-[#FFA8C5] focus:border-transparent p-4 text-base resize-none font-sans"
                    />
                  </div>

                  <Button
                    type="submit"
                    data-testid="contact-submit"
                    className="w-full h-16 text-xl font-display font-bold uppercase tracking-wide rounded-2xl bg-[#FFA8C5] text-[#0F282F] hover:bg-[#FFBCD9] border-4 border-[#FFA8C5] shadow-[6px_6px_0px_0px_#F3F6F620] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#F3F6F620] transition-all"
                  >
                    Send Message
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";
import { Droplets, FlaskConical, Leaf, Heart, Zap, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const team = [
  {
    name: "Aryan Mehta",
    role: "Co-Founder & CEO",
    bio: "Former biotech researcher at IISc Bangalore. Obsessed with the intersection of human biology and consumer experience.",
    initials: "AM",
    color: "bg-[#90D6F9]",
  },
  {
    name: "Priya Nair",
    role: "Co-Founder & CPO",
    bio: "Product designer with 8 years at consumer startups. Believes great design is invisible — the product just works.",
    initials: "PN",
    color: "bg-[#FFBCD9]",
  },
  {
    name: "Rishi Kapoor",
    role: "Head of Flavour Science",
    bio: "PhD in Olfactory Chemistry from NUS Singapore. Has catalogued over 3,000 natural aroma compounds.",
    initials: "RK",
    color: "bg-[#FFA8C5]",
  },
  {
    name: "Divya Shetty",
    role: "Head of Sustainability",
    bio: "Environmental engineer turned consumer advocate. Every pod is designed with end-of-life in mind from day one.",
    initials: "DS",
    color: "bg-[#A3E4FA]",
  },
];

const values = [
  {
    icon: FlaskConical,
    title: "Science First",
    body: "Every decision we make is grounded in peer-reviewed research. Retronasal olfaction isn't a gimmick — it's how your brain actually works.",
    color: "bg-[#A3E4FA]",
  },
  {
    icon: Leaf,
    title: "Truly Natural",
    body: "No synthetic flavouring. No lab-made aromas. Every pod is derived from real plants, fruits, and herbs — nothing more.",
    color: "bg-[#FFBCD9]",
  },
  {
    icon: Heart,
    title: "Made for India",
    body: "We didn't port a Western product here. Sipora was conceived in Bengaluru, tested in Chennai, and launched for every corner of India.",
    color: "bg-[#90D6F9]",
  },
  {
    icon: Globe,
    title: "Radically Transparent",
    body: "Every ingredient in every pod is listed publicly. If we wouldn't drink it ourselves, it doesn't go in a Sipora pod.",
    color: "bg-[#FFA8C5]",
  },
];

const milestones = [
  { year: "2021", event: "Research begins. Aryan and Priya meet at a biohacking conference in Bangalore." },
  { year: "2022", event: "First prototype — a repurposed water bottle with a hand-built aroma chamber. 60% of testers couldn't believe they were drinking plain water." },
  { year: "2023", event: "Seed funding secured. Rishi joins as Flavour Science lead. First 6 pods developed." },
  { year: "2024", event: "Sipora.in launches. 12,000 bottles sold in the first 90 days." },
  { year: "2025", event: "20+ flavours. Partnerships with 3 national wellness chains. Series A closed." },
  { year: "Now", event: "Building the future of hydration — for the most health-conscious generation India has ever seen." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F3F6F6] selection:bg-[#FFA8C5] selection:text-[#0F282F]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-20 bg-[#0F282F] text-[#F3F6F6] relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#90D6F9] opacity-[0.07] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#FFA8C5] opacity-[0.08] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 py-24 relative z-10">
          <FadeUp>
            <span className="inline-block bg-[#FFA8C5] text-[#0F282F] font-display font-bold px-4 py-2 rounded-full uppercase tracking-widest text-xs mb-8 border-2 border-[#FFA8C5]/40">
              Our Story
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black uppercase tracking-tighter leading-[0.88] mb-8 max-w-5xl">
              Built in India.<br />
              <span className="text-[#90D6F9]">Born from Curiosity.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xl md:text-2xl font-sans font-medium text-[#F3F6F6]/75 max-w-2xl leading-relaxed">
              Two researchers. One boring glass of water. A question that changed everything — what if your brain could taste what doesn't exist?
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-6 text-xl font-sans leading-relaxed text-[#0F282F]/80">
                <p>
                  In 2021, Aryan Mehta was three years deep into olfactory neuroscience research at IISc when he noticed something odd — volunteers in his flavour perception study consistently rated plain water as "weakly flavoured" when exposed to aroma. Not placebo. Not suggestion. Actual perceived taste, from scent alone.
                </p>
                <p>
                  He called Priya. She came over with a whiteboard and a bag of fruit extracts. By midnight they had a hypothesis. By morning they had a terrible-looking prototype. By the end of the week, six out of ten testers couldn't tell the difference between the Sipora bottle and a glass of juice.
                </p>
                <p>
                  That experiment — scribbled on a napkin in a Bengaluru lab — became Sipora.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] bg-[#0F282F] flex items-center justify-center border-4 border-[#0F282F] shadow-[16px_16px_0px_0px_#FFA8C5] overflow-hidden">
                  <div className="text-center p-12">
                    <Droplets className="w-20 h-20 text-[#90D6F9] mx-auto mb-6" />
                    <span className="font-display font-black text-8xl text-[#FFA8C5] block leading-none">60%</span>
                    <span className="font-display font-bold text-xl text-[#F3F6F6]/80 mt-4 block uppercase tracking-wide">of first testers couldn't believe<br />it was plain water</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#90D6F9] border-2 border-[#0F282F] rounded-2xl p-5 shadow-[6px_6px_0px_0px_#0F282F] rotate-[-4deg]">
                  <span className="font-display font-black text-3xl text-[#0F282F] block">2021</span>
                  <span className="font-sans font-bold text-sm text-[#0F282F]/70 uppercase tracking-wider">Where it began</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 bg-[#0F282F] text-[#F3F6F6]">
        <div className="container mx-auto px-6">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight mb-20 text-center">
              How We Got <span className="text-[#90D6F9]">Here.</span>
            </h2>
          </FadeUp>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-[#F3F6F6]/10 rounded-full" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <FadeUp key={m.year} delay={i * 0.07}>
                  <div className="flex gap-8 items-start pl-2">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FFA8C5] border-4 border-[#0F282F] flex items-center justify-center shadow-[0_0_0_4px_#F3F6F620] relative z-10">
                      <span className="font-display font-black text-[#0F282F] text-[10px] leading-none text-center">
                        {m.year}
                      </span>
                    </div>
                    <div className="flex-1 pt-3 pb-6 border-b border-[#F3F6F6]/10">
                      <p className="font-sans text-lg text-[#F3F6F6]/80 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight mb-4">
                What We <span className="text-[#FFA8C5]">Stand For.</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeUp key={v.title} delay={i * 0.08}>
                  <div className={`${v.color} rounded-[2rem] border-4 border-[#0F282F] p-10 shadow-[8px_8px_0px_0px_#0F282F] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#0F282F] transition-all duration-300`}>
                    <Icon className="w-12 h-12 text-[#0F282F] mb-6" />
                    <h3 className="font-display font-black text-3xl uppercase tracking-tight text-[#0F282F] mb-4">{v.title}</h3>
                    <p className="font-sans text-lg text-[#0F282F]/75 leading-relaxed">{v.body}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 bg-[#F3F6F6] border-t-4 border-[#0F282F]">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight mb-4">
                The <span className="text-[#90D6F9]">Team.</span>
              </h2>
              <p className="text-xl font-sans font-medium text-[#0F282F]/60 max-w-xl mx-auto">
                Scientists, designers, and obsessives. United by one belief: water shouldn't be boring.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.08}>
                <div className="group" data-testid={`team-member-${i}`}>
                  <div className={`aspect-square rounded-[2rem] ${member.color} border-4 border-[#0F282F] shadow-[6px_6px_0px_0px_#0F282F] flex items-center justify-center mb-6 group-hover:translate-y-[-4px] group-hover:shadow-[10px_10px_0px_0px_#0F282F] transition-all duration-300`}>
                    <span className="font-display font-black text-5xl text-[#0F282F] opacity-70">{member.initials}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#0F282F]">{member.name}</h3>
                  <p className="font-sans font-semibold text-sm uppercase tracking-widest text-[#FFA8C5] mb-3">{member.role}</p>
                  <p className="font-sans text-base text-[#0F282F]/65 leading-relaxed">{member.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission CTA ── */}
      <section className="py-32 bg-[#FFA8C5] border-y-4 border-[#0F282F]">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <Zap className="w-16 h-16 text-[#0F282F] mx-auto mb-8" />
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.88] mb-10 max-w-4xl mx-auto text-[#0F282F]">
              Our mission: the most hydrated generation India has ever seen.
            </h2>
            <a
              href="/#flavors"
              className="inline-flex items-center gap-3 h-20 px-12 text-2xl font-display font-bold uppercase tracking-wide rounded-full shadow-[8px_8px_0px_0px_#0F282F] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[4px_4px_0px_0px_#0F282F] transition-all border-4 border-[#0F282F] bg-[#0F282F] text-[#F3F6F6]"
              data-testid="about-shop-cta"
            >
              Shop Sipora
            </a>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}

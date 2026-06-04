import Hero from "@/components/Hero";
import PipelineTracker from "@/components/PipelineTracker";
import { Beaker, Microscope, ShieldCheck, ArrowRight, Zap, Globe, Target } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust Banner */}
      <section className="py-12 border-y border-white/5 bg-carbon-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Logo Placeholders */}
            <div className="text-xl font-black tracking-tighter">NIH<span className="text-accent-teal">RESEARCH</span></div>
            <div className="text-xl font-black tracking-tighter">FDA<span className="text-accent-teal">COMPLIANT</span></div>
            <div className="text-xl font-black tracking-tighter">WHO<span className="text-accent-teal">PARTNER</span></div>
            <div className="text-xl font-black tracking-tighter">GLOBAL<span className="text-accent-teal">HEALTH</span></div>
            <div className="text-xl font-black tracking-tighter">BIO<span className="text-accent-teal">TECH</span></div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-4">Core Competencies</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Scientific Foundations of Innovation</h3>
            <p className="text-carbon-400 max-w-2xl mx-auto text-lg">
              We integrate multi-disciplinary expertise to push the boundaries of what's possible in drug discovery and development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Beaker className="w-8 h-8" />,
                title: "Small Molecule Discovery",
                desc: "Utilizing AI-driven screening to identify novel chemical entities with superior binding affinity and selectivity.",
                accent: "text-accent-teal",
                bg: "bg-accent-teal/10"
              },
              {
                icon: <Microscope className="w-8 h-8" />,
                title: "Advanced Drug Delivery",
                desc: "Proprietary nano-encapsulation technologies designed for targeted intracellular release and reduced systemic toxicity.",
                accent: "text-accent-emerald",
                bg: "bg-accent-emerald/10"
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Patient-Centric Formulations",
                desc: "Optimizing bioavailability and ease of administration to improve adherence and long-term therapeutic outcomes.",
                accent: "text-blue-500",
                bg: "bg-blue-500/10"
              }
            ].map((pillar, i) => (
              <div key={i} className="group p-8 glass-morphism rounded-3xl border-white/5 hover:border-accent-teal/30 transition-all duration-500 hover:-translate-y-2">
                <div className={`${pillar.bg} ${pillar.accent} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{pillar.title}</h4>
                <p className="text-carbon-400 text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-accent-teal transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Preview Section */}
      <section className="py-24 bg-carbon-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-4">Scientific Pipeline</h2>
              <h3 className="text-4xl font-bold text-white mb-6">Advancing a Robust Portfolio</h3>
              <p className="text-carbon-400">
                Our pipeline spans multiple therapeutic areas with a focus on high-unmet-need indications in oncology, neurology, and immunology.
              </p>
            </div>
            <Link href="/pipeline" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              View Full Pipeline
            </Link>
          </div>

          <PipelineTracker />
        </div>
      </section>

      {/* Stats / Global Reach */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-teal/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white leading-tight">
                Global Network. <br />
                <span className="text-accent-teal">Clinical Precision.</span>
              </h2>
              <p className="text-carbon-400 text-lg leading-relaxed">
                Mayogex operates at the intersection of global scale and clinical agility. With research hubs in Cambridge, Basel, and Singapore, we maintain a 24/7 innovation cycle.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Globe className="w-5 h-5" />, label: "Global Presence", value: "8 Countries, 3 Research Hubs" },
                  { icon: <Target className="w-5 h-5" />, label: "Target Accuracy", value: "99.2% Precision via GexAI" },
                  { icon: <Zap className="w-5 h-5" />, label: "Development Speed", value: "40% Faster than Industry Avg" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 glass-morphism rounded-2xl border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xs text-carbon-500 uppercase font-bold tracking-wider">{stat.label}</div>
                      <div className="text-white font-bold">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square glass-morphism rounded-3xl border-white/10 p-1">
                <div className="w-full h-full rounded-[22px] bg-[url('https://images.unsplash.com/photo-1579154273821-0a6723b810d6?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-50 group-hover:opacity-100 transition-all" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-morphism p-6 rounded-2xl border-white/20 animate-bounce duration-[3000ms]">
                <div className="text-3xl font-bold text-accent-emerald">20+</div>
                <div className="text-xs text-carbon-400 font-bold uppercase tracking-widest">Patents Pending</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative glass-morphism rounded-[40px] border-white/10 p-12 md:p-20 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal via-accent-emerald to-accent-teal" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Collaborate for a <br />
              <span className="text-accent-teal">Healthier Tomorrow</span>
            </h2>
            <p className="text-carbon-400 text-lg mb-12 max-w-2xl mx-auto">
              Whether you are an investor, research partner, or prospective talent, we invite you to join us in redefining therapeutic excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-5 bg-accent-teal text-white font-bold rounded-full hover:bg-accent-teal/90 transition-all hover:scale-105">
                Get in Touch
              </Link>
              <Link href="/partnerships" className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                Partnership Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

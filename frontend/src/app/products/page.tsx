import { Microscope, Brain, Shield, HeartPulse, Activity, Zap, Info } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const areas = [
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Oncology",
      desc: "Focusing on highly selective targeted therapies and next-generation immuno-oncology agents to overcome tumor resistance mechanisms.",
      stats: "5 Active Programs",
      color: "text-accent-teal",
      bg: "bg-accent-teal/10"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Neurology",
      desc: "Engineering blood-brain-barrier (BBB) crossing molecules to treat neurodegenerative disorders with high precision and minimal systemic impact.",
      stats: "3 Active Programs",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Immunology",
      desc: "Developing specific cytokine modulators and regulatory T-cell enhancers for the treatment of autoimmune and inflammatory conditions.",
      stats: "4 Active Programs",
      color: "text-accent-emerald",
      bg: "bg-accent-emerald/10"
    },
    {
      icon: <HeartPulse className="w-10 h-10" />,
      title: "Cardiovascular",
      desc: "Innovative small molecules targeting lipid metabolism and cardiac regenerative pathways for chronic heart failure management.",
      stats: "2 Active Programs",
      color: "text-red-500",
      bg: "bg-red-500/10"
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <h2 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-4">Focus Areas</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Targeted Therapeutic <br />Verticals</h1>
          <p className="text-xl text-carbon-400 leading-relaxed">
            Our research efforts are concentrated on therapeutic categories where our unique molecular engineering approach can provide disproportionate clinical value.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, i) => (
            <div key={i} className="group p-10 glass-morphism rounded-[40px] border-white/5 hover:border-accent-teal/30 transition-all duration-500 flex flex-col items-start">
              <div className={`${area.bg} ${area.color} p-6 rounded-3xl mb-8 group-hover:scale-110 transition-transform`}>
                {area.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-white">{area.title}</h3>
                  <span className="px-3 py-1 bg-carbon-800 text-carbon-400 text-[10px] font-bold uppercase tracking-widest rounded-full">{area.stats}</span>
                </div>
                <p className="text-carbon-400 text-lg leading-relaxed mb-8">
                  {area.desc}
                </p>
              </div>
              <Link href="/pipeline" className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs hover:text-accent-teal transition-colors">
                Explore Pipeline <Zap className="w-4 h-4 fill-current" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing */}
      <section className="bg-carbon-900/50 py-24 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-accent-teal/10 blur-[100px]" />
              <div className="aspect-video glass-morphism rounded-3xl border-white/10 p-1 relative z-10 overflow-hidden">
                 <div className="w-full h-full bg-carbon-800 flex items-center justify-center">
                    <Microscope className="w-20 h-20 text-carbon-700 animate-pulse" />
                 </div>
              </div>
           </div>
           <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white leading-tight">Advanced GMP <br />Manufacturing</h2>
              <p className="text-carbon-400 text-lg leading-relaxed">
                Our facilities are designed to handle complex drug substance and drug product manufacturing, from clinical batches to commercial scale. We leverage modular cleanroom technology and end-to-end digital monitoring for total quality assurance.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-carbon-500 uppercase font-bold tracking-widest">Digital Batch Tracking</div>
                 </div>
                 <div>
                    <div className="text-2xl font-bold text-white">ISO 5</div>
                    <div className="text-xs text-carbon-500 uppercase font-bold tracking-widest">Aseptic Environments</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <div className="bg-carbon-900 border border-white/5 p-8 rounded-3xl inline-block max-w-4xl">
           <div className="flex items-center justify-center gap-2 mb-4 text-carbon-500">
              <Info className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Medical Disclaimer</span>
           </div>
           <p className="text-xs text-carbon-500 leading-relaxed italic">
             The information on this page relates to investigational therapeutic areas and drug candidates currently in various stages of research and development. None of the molecules listed have been approved for commercial sale by the FDA, EMA, or other regulatory authorities. This information is intended for the scientific community, healthcare professionals, and prospective partners. It is not intended for the general public and does not constitute medical advice or promotion.
           </p>
        </div>
      </section>
    </div>
  );
}

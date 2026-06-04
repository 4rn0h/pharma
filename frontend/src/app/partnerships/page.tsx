import { Handshake, Zap, BarChart3, Globe, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PartnershipsPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <h2 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-4">Collaborative Growth</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Strategic Licensing <br />& Partnerships</h1>
          <p className="text-xl text-carbon-400 leading-relaxed">
            Innovation doesn't happen in a vacuum. We actively seek collaborations with academic institutions, biotech ventures, and global pharmaceutical leaders to accelerate therapeutic impact.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-carbon-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Why Partner with Mayogex?</h2>
            <p className="text-carbon-400 max-w-2xl mx-auto">
              Our unique combination of computational prowess and manufacturing agility makes us an ideal partner for co-development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-8 h-8 text-accent-teal" />, title: "Rapid Validation", desc: "Our GexAI™ platform can validate external targets in weeks, not months." },
              { icon: <Handshake className="w-8 h-8 text-accent-emerald" />, title: "Flexible Deal Structures", desc: "From equity-based joint ventures to milestone-driven licensing agreements." },
              { icon: <BarChart3 className="w-8 h-8 text-blue-500" />, title: "Commercial Readiness", desc: "Pre-integrated commercialization pathways for key global markets." }
            ].map((prop, i) => (
              <div key={i} className="p-10 glass-morphism rounded-3xl border-white/5 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{prop.title}</h3>
                <p className="text-carbon-400 text-sm leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
             <h2 className="text-4xl font-bold text-white leading-tight">Join the Scientific <br />Frontier</h2>
             <p className="text-carbon-400 text-lg leading-relaxed">
               We are looking for bold thinkers who aren't afraid to challenge conventional wisdom. If you are passionate about molecular engineering and computational biology, we want to hear from you.
             </p>
             <div className="space-y-4">
                {[
                  { icon: <GraduationCap className="w-5 h-5" />, label: "Post-Doc Fellowships", sub: "Cutting-edge oncology research" },
                  { icon: <Briefcase className="w-5 h-5" />, label: "Global Careers", sub: "Operational & commercial roles" }
                ].map((job, i) => (
                  <div key={i} className="flex items-center justify-between p-6 glass-morphism rounded-2xl border-white/5 hover:border-accent-teal/30 transition-all cursor-pointer group">
                    <div className="flex items-center gap-4">
                       <div className="text-accent-teal">{job.icon}</div>
                       <div>
                          <div className="text-white font-bold">{job.label}</div>
                          <div className="text-xs text-carbon-500">{job.sub}</div>
                       </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-carbon-600 group-hover:text-accent-teal group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
             </div>
             <button className="px-8 py-4 bg-accent-teal text-white font-bold rounded-full hover:bg-accent-teal/90 transition-all">
                Explore All Openings
             </button>
          </div>
          <div className="relative">
             <div className="aspect-square bg-carbon-800 rounded-3xl overflow-hidden relative border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 to-transparent z-10" />
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute bottom-10 left-10 z-20">
                   <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white font-bold text-sm">
                      Work with Purpose
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Global Reach Map Placeholder */}
      <section className="py-24 bg-carbon-900/30 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-12">Our Global Strategic Footprint</h2>
            <div className="aspect-[21/9] glass-morphism rounded-[40px] border-white/5 relative overflow-hidden flex items-center justify-center">
                <Globe className="w-32 h-32 text-carbon-800 animate-spin duration-[20s]" />
                <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/80 via-transparent to-carbon-950/80" />
                {/* City Markers */}
                <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                   <div className="w-2 h-2 bg-accent-teal rounded-full animate-ping" />
                   <div className="text-[10px] font-bold text-white mt-2 uppercase tracking-widest">Cambridge, MA</div>
                </div>
                <div className="absolute top-1/3 left-[55%] flex flex-col items-center">
                   <div className="w-2 h-2 bg-accent-emerald rounded-full animate-ping" />
                   <div className="text-[10px] font-bold text-white mt-2 uppercase tracking-widest">Basel, CH</div>
                </div>
                <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
                   <div className="w-2 h-2 bg-accent-teal rounded-full animate-ping" />
                   <div className="text-[10px] font-bold text-white mt-2 uppercase tracking-widest">Singapore</div>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
}

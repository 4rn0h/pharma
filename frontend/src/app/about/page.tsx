import { ShieldCheck, Target, Users, Award, Microscope, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Pioneering Precision. <br />Driven by Purpose.</h1>
        <p className="text-xl text-carbon-400 max-w-3xl leading-relaxed">
          Founded in 2018, Mayogex Pharmaceuticals was born from a singular vision: to bridge the gap between breakthrough molecular science and patient access. We combine deep technical expertise with an unwavering commitment to quality.
        </p>
      </section>

      {/* Vision/Mission/Values */}
      <section className="bg-carbon-900/50 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="w-8 h-8 text-accent-teal" />, title: "Our Vision", desc: "To become the global leader in precision molecular design, setting new standards for therapeutic efficacy and safety." },
              { icon: <Heart className="w-8 h-8 text-accent-emerald" />, title: "Our Mission", desc: "To accelerate the delivery of life-changing medicines by leveraging state-of-the-art computational biology." },
              { icon: <ShieldCheck className="w-8 h-8 text-blue-500" />, title: "Core Values", desc: "Integrity, innovation, and inclusivity drive every decision we make, from lab bench to patient bedside." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-carbon-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-4">Leadership</h2>
          <h3 className="text-4xl font-bold text-white">The Minds Behind Mayogex</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Dr. Elena Vance", role: "Chief Executive Officer", bio: "Former Head of R&D at Novartis with 20+ years in oncology." },
            { name: "Marcus Chen", role: "Chief Scientific Officer", bio: "Pioneer in computational protein folding and molecular docking." },
            { name: "Dr. Sarah Miller", role: "Head of Clinical Ops", bio: "Led 50+ successful Phase I-III global clinical trials." },
            { name: "David Sterling", role: "Chief Strategy Officer", bio: "Specialist in biotech licensing and strategic global partnerships." }
          ].map((leader, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl glass-morphism border-white/5 hover:border-accent-teal/30 transition-all">
              <div className="aspect-[4/5] bg-carbon-800 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent opacity-60" />
                 {/* Placeholder for actual image */}
                 <div className="absolute inset-0 flex items-center justify-center text-carbon-700">
                   <Users className="w-20 h-20" />
                 </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-1">{leader.name}</h4>
                <div className="text-accent-teal text-xs font-bold uppercase tracking-widest mb-4">{leader.role}</div>
                <p className="text-carbon-500 text-sm italic line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance & Quality */}
      <section className="py-24 bg-accent-teal/5 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-bold rounded-full mb-8">
             <Award className="w-4 h-4" /> Global Standards
          </div>
          <h2 className="text-4xl font-bold text-white mb-12">Uncompromising Quality & Compliance</h2>
          
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { label: "GMP Certified", sub: "Manufacturing Excellence" },
              { icon: <ShieldCheck />, label: "FDA Compliant", sub: "Regulatory Rigor" },
              { label: "ISO 9001:2015", sub: "Quality Management" },
              { label: "GDPR Ready", sub: "Data Privacy" }
            ].map((badge, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-white/20 mb-2 uppercase tracking-tighter">{badge.label}</div>
                <div className="text-[10px] text-accent-teal font-bold uppercase tracking-widest">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Handshake, BarChart3, ShieldCheck, Zap, ArrowRight, CheckCircle2, Globe, Building2, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PARTNERSHIP_TRACKS = [
  {
    title: "Venture & Institutional",
    icon: BarChart3,
    description: "Strategic investment opportunities in our clinical-stage pipeline and synthetic manufacturing infrastructure.",
    benefits: ["Equity participation in MGX-series", "Quarterly R&D alpha reports", "Priority liquidation rights"],
  },
  {
    title: "Licensing & IP",
    icon: ShieldCheck,
    description: "Global licensing agreements for our proprietary molecular inhibitors and synthetic manufacturing protocols.",
    benefits: ["Exclusive regional rights", "Full IP documentation access", "Tech-transfer support"],
  },
  {
    title: "Contract Manufacturing",
    icon: Building2,
    description: "High-precision CMO services utilizing our state-of-the-art sterile synthetic manufacturing facilities.",
    benefits: ["ISO-certified production", "Scalable batch manufacturing", "End-to-end cold chain"],
  }
];

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-500 text-xs font-bold uppercase tracking-widest mb-8">
            <Handshake className="w-4 h-4" />
            Global Strategic Alliance
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight max-w-4xl mx-auto">
            Scale Your Clinical <span className="text-emerald-500">Impact</span>.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Join Mayogex Pharmaceuticals in a collaborative ecosystem designed to accelerate therapeutic innovation and optimize global healthcare distribution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-teal-900/20">
              Request Partnership Deck
            </button>
            <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-bold transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-24 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PARTNERSHIP_TRACKS.map((track, index) => (
              <div key={index} className="glass-panel p-8 rounded-3xl relative group">
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl w-fit mb-8 group-hover:border-teal-500/50 transition-colors">
                  <track.icon className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{track.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {track.description}
                </p>
                <div className="space-y-4 mb-10">
                  {track.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button className="w-full flex items-center justify-between px-6 py-4 bg-slate-950 border border-slate-800 rounded-xl text-white font-bold group-hover:bg-teal-600 group-hover:border-teal-500 transition-all">
                  Explore Track
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  A Foundation of <span className="text-teal-500 text-glow-teal">Trust & Data</span>.
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  Our partnership model is built on absolute transparency. Every transaction and clinical milestone is logged in an immutable audit trail, ensuring full compliance with FDA, EMA, and global regulatory standards.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">140+</div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Global Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">$2.4B</div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Capital Managed</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Compliance-First Architecture", desc: "Rigorous adherence to global GxP standards.", icon: ShieldCheck },
                  { title: "Accelerated Tech-Transfer", desc: "Proprietary protocols for rapid scale-up.", icon: Zap },
                  { title: "Global Market Access", desc: "Direct distribution channels in 40+ countries.", icon: Globe }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 group hover:border-teal-500/30 transition-all">
                    <div className="p-3 bg-slate-950 rounded-xl h-fit">
                      <item.icon className="w-6 h-6 text-teal-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

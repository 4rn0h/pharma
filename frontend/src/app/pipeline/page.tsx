import PipelineTracker from "@/components/PipelineTracker";
import { Info, Download, ArrowUpRight, Microscope, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PipelinePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <Microscope className="w-4 h-4" />
                Clinical Development Pipeline
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Advancing <span className="text-emerald-500">Breakthroughs</span>.
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Explore the Mayogex R&D portfolio. We are currently advancing multiple clinical-stage assets across Oncology, Neurology, and Immunology, utilizing our proprietary synthetic manufacturing platform.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-4 bg-slate-900 border border-slate-700 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all group">
                <Download className="w-4 h-4 group-hover:text-teal-500" /> 
                Download Pipeline PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pipeline Tracker */}
      <section className="pb-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <PipelineTracker />
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white leading-tight">
                Accelerated <span className="text-teal-500">Tech-Transfer</span> & Manufacturing
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Our R&D success is powered by an integrated manufacturing ecosystem that allows for rapid translation from bench to bedside.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Modular Synthesis", desc: "Proprietary protocols for rapid molecule prototyping.", icon: Zap },
                  { title: "Clinical Integrity", desc: "Full GxP compliance across all development phases.", icon: ShieldCheck },
                  { title: "Global Access", desc: "Strategically located hubs for clinical trial logistics.", icon: ArrowUpRight }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="p-2 bg-slate-900 rounded-lg h-fit border border-slate-800">
                      <item.icon className="w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Active Molecules", val: "42" },
                { label: "Patents Pending", val: "156" },
                { label: "Clinical Sites", val: "84" },
                { label: "Success Rate", val: "94%" }
              ].map((stat, i) => (
                <div key={i} className="p-10 glass-panel rounded-[2rem] text-center group hover:border-teal-500/30 transition-all">
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-teal-400 transition-colors">{stat.val}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-500/5 border border-amber-500/10 rounded-full text-amber-500/60 text-[10px] font-bold uppercase tracking-widest">
          <Info className="w-3 h-3" />
          Development Notice
        </div>
        <p className="text-sm text-slate-500 leading-relaxed italic max-w-3xl mx-auto">
          The pipeline data provided above reflects our current stage of drug development as of Q2 2026. Forward-looking statements involve risks and uncertainties that could cause actual results to differ materially from those projected.
        </p>
      </section>

      <Footer />
    </main>
  );
}

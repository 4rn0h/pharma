import PipelineTracker from "@/components/PipelineTracker";
import { Info, Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PipelinePage() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-3xl">
            <h2 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-4">Scientific Core</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Clinical Pipeline</h1>
            <p className="text-xl text-carbon-400 leading-relaxed">
              Explore our diverse portfolio of investigative therapeutics. Our pipeline represents our commitment to solving complex biological challenges in areas with significant unmet medical need.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-carbon-900 border border-white/10 text-white text-sm font-bold rounded-full hover:bg-carbon-800 transition-all">
              <Download className="w-4 h-4" /> Pipeline Factsheet
            </button>
          </div>
        </div>
      </section>

      {/* Main Pipeline Tracker */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <PipelineTracker />
      </section>

      {/* R&D Approach */}
      <section className="py-24 bg-carbon-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white leading-tight">Our Precision Discovery <br /><span className="text-accent-teal">Engine: GexAI™</span></h2>
              <p className="text-carbon-400 leading-relaxed">
                At the heart of our pipeline is GexAI™, a proprietary computational platform that integrates structural biology, machine learning, and high-throughput screening. This enables us to:
              </p>
              <ul className="space-y-4">
                {[
                  "Predict binding affinities with sub-nanomolar accuracy",
                  "Identify off-target interactions in silico before lead optimization",
                  "Optimize pharmacokinetics (PK) profiles through generative chemistry",
                  "Select patient populations most likely to respond to therapy"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-carbon-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-teal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-accent-teal font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all">
                Learn about our Science <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Target Validation", val: "100%" },
                { label: "Hit-to-Lead Ratio", val: "1:15" },
                { label: "Optimization Cycle", val: "12w" },
                { label: "Clinical Success", val: "2.4x" }
              ].map((stat, i) => (
                <div key={i} className="p-8 glass-morphism rounded-3xl border-white/5 text-center">
                  <div className="text-4xl font-black text-white mb-2">{stat.val}</div>
                  <div className="text-[10px] text-accent-teal font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 max-w-5xl mx-auto px-6">
        <div className="flex gap-4 p-6 bg-carbon-900/30 rounded-2xl border border-white/5 italic">
          <Info className="w-6 h-6 text-carbon-500 shrink-0" />
          <p className="text-sm text-carbon-500 leading-relaxed">
            Note: Pipeline information provided is for general information and should not be used as a basis for investment decisions. Many of our research assets are in early stages of development and are subject to substantial risks and uncertainties inherent in the pharmaceutical industry. Clinical trial results may vary and are not guaranteed to support regulatory approval.
          </p>
        </div>
      </section>
    </div>
  );
}

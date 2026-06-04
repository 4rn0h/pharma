import React from 'react';
import { Beaker, Microscope, Pill, Activity, FlaskConical, Dna, ArrowUpRight, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PRODUCT_CATEGORIES = [
  {
    title: "Small Molecule Inhibitors",
    code: "SMI-01",
    description: "Highly targeted molecular therapies designed to inhibit specific enzymes and proteins involved in oncology and autoimmune pathologies.",
    icon: Beaker,
    stats: { molecules: 24, inPipeline: 8, efficiency: "99.8%" },
    tags: ["Oncology", "Targeted Therapy", "Enzyme Inhibition"]
  },
  {
    title: "Biosimilar Synthetics",
    code: "BSS-04",
    description: "Structurally complex biologic equivalents engineered for high-affinity binding and optimized pharmacokinetic profiles at scale.",
    icon: Dna,
    stats: { molecules: 12, inPipeline: 5, efficiency: "98.5%" },
    tags: ["Biologics", "High-Affinity", "Manufacturing"]
  },
  {
    title: "Immuno-Oncology Agents",
    code: "IOA-09",
    description: "Advanced checkpoint inhibitors and monoclonal antibodies that stimulate the patient's own immune system to neutralize malignant cells.",
    icon: Activity,
    stats: { molecules: 15, inPipeline: 4, efficiency: "99.2%" },
    tags: ["Immunotherapy", "mAbs", "Cell Therapy"]
  },
  {
    title: "Neurological Modulators",
    code: "NOM-12",
    description: "Next-generation neuro-active compounds crossing the blood-brain barrier to treat degenerative and cognitive impairments.",
    icon: Pill,
    stats: { molecules: 9, inPipeline: 3, efficiency: "97.9%" },
    tags: ["CNS", "Neurodegeneration", "BBB Crossing"]
  },
  {
    title: "Synthetic Peptides",
    code: "SPP-03",
    description: "Precision-sequenced amino acid chains for localized therapeutic delivery and specific cellular signaling modulation.",
    icon: Microscope,
    stats: { molecules: 18, inPipeline: 6, efficiency: "99.5%" },
    tags: ["Peptides", "Signaling", "Drug Delivery"]
  },
  {
    title: "Metabolic Regulators",
    code: "MTR-07",
    description: "Small molecules designed to restore homeostatic balance in complex endocrinological and metabolic disorders.",
    icon: FlaskConical,
    stats: { molecules: 21, inPipeline: 7, efficiency: "98.1%" },
    tags: ["Endocrine", "Metabolism", "Homeostasis"]
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Therapeutic <span className="text-teal-500">Catalog</span>.
              </h1>
              <p className="text-lg text-slate-400">
                Explore our portfolio of high-precision molecular assets and redistributed therapeutics, engineered for clinical excellence.
              </p>
            </div>
            <div className="w-full md:w-96 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search by molecule code or category..." 
                className="w-full bg-slate-900/50 border border-slate-700 focus:border-teal-500 rounded-xl py-4 pl-12 pr-4 text-white outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((cat, index) => (
              <div key={index} className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <cat.icon className="w-32 h-32" />
                </div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-teal-500/10 rounded-2xl group-hover:bg-teal-500 transition-all duration-500">
                    <cat.icon className="w-6 h-6 text-teal-500 group-hover:text-white" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full uppercase tracking-widest">
                    {cat.code}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                  {cat.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {cat.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                    <div className="text-teal-500 font-bold text-sm">{cat.stats.molecules}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Assets</div>
                  </div>
                  <div className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                    <div className="text-emerald-500 font-bold text-sm">{cat.stats.inPipeline}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">In R&D</div>
                  </div>
                  <div className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                    <div className="text-blue-500 font-bold text-sm">{cat.stats.efficiency}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Purity</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded-md uppercase font-bold tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 group-hover:bg-teal-600 border border-slate-800 group-hover:border-teal-500 text-white rounded-xl font-bold transition-all group-hover:shadow-[0_0_20px_rgba(13,148,136,0.2)]">
                  View Data Sheet
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, FlaskConical, Activity, Microscope, CheckCircle2 } from 'lucide-react';

type Stage = 'Discovery' | 'Pre-clinical' | 'Phase I' | 'Phase II' | 'Approved';
type Category = 'Oncology' | 'Neurology' | 'Immunology';

interface PipelineItem {
  id: string;
  molecule: string;
  indication: string;
  category: Category;
  stage: Stage;
  progress: number; // 1 to 5
}

const PIPELINE_DATA: PipelineItem[] = [
  { id: '1', molecule: 'MGX-2941', indication: 'Advanced Solid Tumors', category: 'Oncology', stage: 'Phase II', progress: 4 },
  { id: '2', molecule: 'MGX-1102', indication: 'Alzheimer\'s Early Intervention', category: 'Neurology', stage: 'Phase I', progress: 3 },
  { id: '3', molecule: 'MGX-5589', indication: 'Rheumatoid Arthritis', category: 'Immunology', stage: 'Approved', progress: 5 },
  { id: '4', molecule: 'MGX-3304', indication: 'Non-Small Cell Lung Cancer', category: 'Oncology', stage: 'Pre-clinical', progress: 2 },
  { id: '5', molecule: 'MGX-8821', indication: 'Multiple Sclerosis', category: 'Neurology', stage: 'Discovery', progress: 1 },
  { id: '6', molecule: 'MGX-4410', indication: 'Psoriatic Arthritis', category: 'Immunology', stage: 'Phase II', progress: 4 },
  { id: '7', molecule: 'MGX-2290', indication: 'Glioblastoma Multiforme', category: 'Oncology', stage: 'Phase I', progress: 3 },
];

const STAGES: Stage[] = ['Discovery', 'Pre-clinical', 'Phase I', 'Phase II', 'Approved'];

export default function PipelineTracker() {
  const [filter, setFilter] = useState<'All' | Category>('All');

  const filteredData = filter === 'All' 
    ? PIPELINE_DATA 
    : PIPELINE_DATA.filter(item => item.category === filter);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">R&D Pipeline</h2>
          <p className="text-slate-400">Advancing the next generation of therapeutic breakthroughs.</p>
        </div>
        
        <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-700/50 backdrop-blur-sm">
          {['All', 'Oncology', 'Neurology', 'Immunology'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === cat 
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/20' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              layout
              className="glass-panel glass-panel-hover p-6 rounded-2xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Molecule Info */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 bg-teal-500/10 rounded-lg">
                      <FlaskConical className="w-5 h-5 text-teal-500" />
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {item.molecule}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 font-medium ml-11">{item.indication}</p>
                </div>

                {/* Visual Tracker */}
                <div className="lg:col-span-9">
                  <div className="relative pt-2">
                    <div className="flex justify-between mb-4">
                      {STAGES.map((stage, idx) => (
                        <div key={stage} className="flex flex-col items-center flex-1 relative">
                          {/* Connection Line */}
                          {idx < STAGES.length - 1 && (
                            <div className="absolute top-4 left-1/2 w-full h-[2px] bg-slate-800">
                              <motion.div 
                                className="h-full bg-emerald-500"
                                initial={{ width: 0 }}
                                animate={{ width: item.progress > idx + 1 ? '100%' : item.progress === idx + 1 ? '50%' : '0%' }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                              />
                            </div>
                          )}
                          
                          {/* Stage Node */}
                          <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                            item.progress > idx 
                              ? 'bg-emerald-500 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                              : 'bg-slate-900 border-slate-700 text-slate-500'
                          }`}>
                            {item.progress > idx ? (
                              <CheckCircle2 className="w-5 h-5" />
                            ) : (
                              <span className="text-xs font-bold">{idx + 1}</span>
                            )}
                          </div>
                          
                          {/* Label */}
                          <span className={`mt-2 text-[10px] font-bold uppercase tracking-wider ${
                            item.progress > idx ? 'text-emerald-400' : 'text-slate-600'
                          }`}>
                            {stage}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

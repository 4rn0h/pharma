"use client";

import React, { useState } from "react";
import { Search, Filter, ChevronRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const therapeuticAreas = ["All", "Oncology", "Neurology", "Immunology", "Cardiology"];
const phases = ["Discovery", "Pre-clinical", "Phase I", "Phase II", "Phase III", "Approved"];

const pipelineData = [
  { id: "MX-101", name: "Gex-Onco Alpha", area: "Oncology", indication: "Advanced Melanoma", phase: 3, status: "Active" },
  { id: "MX-205", name: "NeuroShield-7", area: "Neurology", indication: "Alzheimer's Disease", phase: 2, status: "Active" },
  { id: "MX-312", name: "ImmunoFlow", area: "Immunology", indication: "Rheumatoid Arthritis", phase: 1, status: "Enrollment" },
  { id: "MX-104", name: "Gex-Onco Beta", area: "Oncology", indication: "Small Cell Lung Cancer", phase: 2, status: "Active" },
  { id: "MX-402", name: "CardioVast", area: "Cardiology", indication: "Hypertrophic Cardiomyopathy", phase: 0, status: "Pre-clinical" },
  { id: "MX-208", name: "NeuroGuard", area: "Neurology", indication: "Multiple Sclerosis", phase: 1, status: "Active" },
];

export default function PipelineTracker() {
  const [filter, setFilter] = useState("All");

  const filteredData = filter === "All" 
    ? pipelineData 
    : pipelineData.filter(item => item.area === filter);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {therapeuticAreas.map((area) => (
            <button
              key={area}
              onClick={() => setFilter(area)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                filter === area 
                  ? "bg-accent-teal text-white" 
                  : "bg-carbon-900 text-carbon-400 hover:bg-carbon-800"
              )}
            >
              {area}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-carbon-500" />
          <input 
            type="text" 
            placeholder="Search molecules..."
            className="w-full bg-carbon-900 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent-teal/50"
          />
        </div>
      </div>

      {/* Pipeline Table */}
      <div className="glass-morphism rounded-3xl overflow-hidden border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-carbon-400">Molecule / Indication</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-carbon-400">Area</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-carbon-400">Phase Progress</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-carbon-400">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-6">
                    <div className="font-bold text-white">{item.name}</div>
                    <div className="text-sm text-carbon-400 italic">{item.indication}</div>
                    <div className="text-[10px] text-accent-teal font-mono mt-1 uppercase tracking-tighter">{item.id}</div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="px-2 py-1 rounded bg-carbon-800 text-carbon-300 text-[10px] font-bold uppercase tracking-wider">
                      {item.area}
                    </span>
                  </td>
                  <td className="px-6 py-6 min-w-[300px]">
                    <div className="flex items-center justify-between mb-2">
                      {phases.map((phase, idx) => (
                        <div 
                          key={phase} 
                          className={cn(
                            "text-[8px] uppercase tracking-tighter font-bold",
                            idx <= item.phase ? "text-accent-teal" : "text-carbon-600"
                          )}
                        >
                          {phase}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4, 5].map((idx) => (
                        <div 
                          key={idx}
                          className={cn(
                            "h-1.5 flex-1 rounded-full",
                            idx <= item.phase 
                              ? "bg-gradient-to-r from-accent-teal to-accent-emerald" 
                              : "bg-carbon-800"
                          )}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                      <span className="text-xs text-white font-medium">{item.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <button className="p-2 hover:bg-accent-teal/10 rounded-full text-accent-teal opacity-0 group-hover:opacity-100 transition-all">
                      <Info className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-4 text-xs text-carbon-500 italic">
        <Info className="w-4 h-4" />
        Data reflected as of Q3 2026. Certain pipeline assets are subject to confidential licensing agreements.
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { ArrowRight, ChevronRight, Activity, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-height-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-carbon-950 via-carbon-950/90 to-carbon-900" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-teal/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-emerald/10 rounded-full blur-[120px]" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', size: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
            </span>
            Accelerating Therapeutic Innovation
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-emerald">Future of Medicine</span>
          </h1>

          <p className="text-xl text-carbon-400 leading-relaxed max-w-xl">
            Mayogex Pharmaceuticals leverages advanced computational biology and precision molecular design to address the world&apos;s most challenging therapeutic frontiers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/pipeline" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-carbon-950 font-bold rounded-full hover:bg-accent-teal hover:text-white transition-all group"
            >
              Explore Pipeline
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/partnerships" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-full border border-white/20 hover:bg-white/5 transition-all"
            >
              Partner With Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/5">
            <div>
              <div className="text-2xl font-bold text-white">14+</div>
              <div className="text-xs text-carbon-500 uppercase tracking-wider font-semibold">Active Molecules</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-xs text-carbon-500 uppercase tracking-wider font-semibold">Phase II Studies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-xs text-carbon-500 uppercase tracking-wider font-semibold">Scientists</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-morphism p-8 rounded-3xl border-white/10 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal to-accent-emerald" />
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-teal/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-accent-teal" />
                </div>
                <div>
                  <div className="text-white font-bold">Real-time Analysis</div>
                  <div className="text-xs text-carbon-500 italic">Molecular Docking Simulation</div>
                </div>
              </div>
              <div className="text-accent-emerald text-sm font-mono">98.4% Accuracy</div>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-carbon-400">
                    <span>Protein Interaction {i}</span>
                    <span className="text-white">{85 + i * 4}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-carbon-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${85 + i * 4}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                      className="h-full bg-gradient-to-r from-accent-teal to-accent-emerald"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-6">
              <div className="flex items-center gap-2 text-carbon-400 text-sm">
                <Zap className="w-4 h-4 text-accent-teal" />
                Next-Gen AI
              </div>
              <div className="flex items-center gap-2 text-carbon-400 text-sm">
                <ShieldCheck className="w-4 h-4 text-accent-emerald" />
                FDA Compliant
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-teal/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-emerald/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

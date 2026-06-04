import React from 'react';
import Image from 'next/image';
import { Target, Zap, ShieldCheck, Users, Globe2, Award, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CORE_VALUES = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "We apply rigorous clinical standards to every facet of our redistribution and manufacturing processes.",
    color: "text-teal-500",
    bg: "bg-teal-500/10"
  },
  {
    icon: ShieldCheck,
    title: "Unwavering Integrity",
    description: "Operating with absolute transparency and compliance in the global pharmaceutical ecosystem.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Zap,
    title: "Bio-Electric Innovation",
    description: "Leveraging cutting-edge molecular synthetics to drive the next generation of patient care.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  }
];

const LEADERSHIP = [
  {
    name: "Dr. Elena Vance",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Former Head of Oncology at Global Pharma, Dr. Vance brings 20 years of clinical research experience."
  },
  {
    name: "Marcus Thorne",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in cold-chain logistics and pharmaceutical supply chain optimization."
  },
  {
    name: "Dr. Sarah Chen",
    role: "Chief Scientific Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Pioneer in biosimilar synthetic development with 15+ patents in molecular biology."
  },
  {
    name: "Julian Ross",
    role: "Head of Compliance",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    bio: "Specialist in international regulatory law and pharmaceutical quality assurance."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Future of Life Sciences</span>.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              Mayogex Pharmaceuticals is a clinical-stage biotech powerhouse dedicated to redefining the global redistribution of critical therapeutics through precision engineering and ethical innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((value, index) => (
              <div key={index} className="glass-panel p-8 rounded-3xl relative group overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 ${value.bg} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                <value.icon className={`w-12 h-12 ${value.color} mb-6`} />
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-500/20 blur-2xl rounded-full" />
              <div className="relative glass-panel p-4 rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1579154234431-da6781bd7ad3?auto=format&fit=crop&q=80&w=800" 
                  alt="Laboratory" 
                  className="rounded-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Bridging the Gap in Global Healthcare</h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                <p>
                  Founded in 2018, Mayogex began with a simple mission: to ensure that life-saving medications reach the patients who need them most, regardless of geographical barriers or supply chain inefficiencies.
                </p>
                <p>
                  Today, we operate at the intersection of biotechnology and logistics, utilizing proprietary AI-driven predictive modeling to optimize the movement of surplus oncology and neurology therapeutics across six continents.
                </p>
                <p>
                  Our state-of-the-art synthetic manufacturing facilities allow us to complement our redistribution efforts with high-quality biosimilars, driving down costs without ever compromising on clinical efficacy.
                </p>
              </div>
              <button className="mt-10 flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-teal-900/20 group">
                Download Impact Report
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section id="leadership" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Visionary Leadership</h2>
            <p className="text-slate-400">The minds behind the medical revolution.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((leader, index) => (
              <div key={index} className="glass-panel group rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{leader.name}</h3>
                  <p className="text-teal-500 text-xs font-bold uppercase tracking-widest mb-4">{leader.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

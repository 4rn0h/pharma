import React from 'react';
import { Mail, Phone, MapPin, Globe, ShieldCheck, Send, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OFFICES = [
  {
    city: "Zurich",
    type: "Global Headquarters",
    address: "Prime Tower, Hardstrasse 201, 8005 Zürich, Switzerland",
    phone: "+41 44 213 3000",
    email: "hq@mayogex.ch"
  },
  {
    city: "Boston",
    type: "R&D Innovation Hub",
    address: "675 West Kendall St, Cambridge, MA 02142, USA",
    phone: "+1 (617) 555-0198",
    email: "boston.lab@mayogex.com"
  },
  {
    city: "Singapore",
    type: "APAC Logistics Center",
    address: "10 Marina Blvd, Tower 2, Singapore 018983",
    phone: "+65 6808 5000",
    email: "apac.ops@mayogex.sg"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left Column: Info & Offices */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Get in <span className="text-teal-500">Touch</span>.
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-12">
                Whether you're looking for a strategic partnership, clinical data, or distribution inquiries, our global teams are ready to assist.
              </p>

              <div className="space-y-8 mb-16">
                {OFFICES.map((office, i) => (
                  <div key={i} className="glass-panel p-6 rounded-2xl border-slate-800 hover:border-teal-500/30 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{office.city}</h3>
                        <p className="text-teal-500 text-xs font-bold uppercase tracking-widest">{office.type}</p>
                      </div>
                      <MapPin className="w-5 h-5 text-slate-500 group-hover:text-teal-500 transition-colors" />
                    </div>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{office.address}</p>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Phone className="w-4 h-4 text-teal-500" />
                        {office.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Mail className="w-4 h-4 text-teal-500" />
                        {office.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">GDPR Compliant</span>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-blue-500" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">24/7 Global Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-500/10 blur-3xl rounded-full" />
              <div className="relative glass-panel p-8 md:p-12 rounded-[2.5rem] border-slate-700/50 shadow-2xl">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-2">Partnership Inquiry</h2>
                  <p className="text-slate-400 text-sm">Fill out the form below and a representative will contact you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-900/50 border border-slate-700 focus:border-teal-500 text-white rounded-xl px-4 py-3 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full bg-slate-900/50 border border-slate-700 focus:border-teal-500 text-white rounded-xl px-4 py-3 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Organization</label>
                    <input 
                      type="text" 
                      placeholder="Organization Name"
                      className="w-full bg-slate-900/50 border border-slate-700 focus:border-teal-500 text-white rounded-xl px-4 py-3 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Inquiry Type</label>
                    <select className="w-full bg-slate-900/50 border border-slate-700 focus:border-teal-500 text-white rounded-xl px-4 py-3 outline-none transition-all appearance-none cursor-pointer">
                      <option>Venture Partnership</option>
                      <option>Licensing Opportunity</option>
                      <option>Manufacturing Inquiry</option>
                      <option>Distribution Request</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full bg-slate-900/50 border border-slate-700 focus:border-teal-500 text-white rounded-xl px-4 py-3 outline-none transition-all resize-none"
                    />
                  </div>

                  <button className="w-full flex items-center justify-center gap-3 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-teal-900/20 group">
                    Submit Inquiry
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                    By submitting this form, you agree to our <span className="text-slate-400 underline cursor-pointer">Privacy Policy</span> and consent to Mayogex Pharmaceuticals storing your data for the purpose of this inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

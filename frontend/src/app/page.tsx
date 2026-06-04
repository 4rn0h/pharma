import Hero from "@/components/Hero";
import PipelineTracker from "@/components/PipelineTracker";
import { ShieldCheck, ArrowRight, Zap, Globe, Target, Activity } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust Banner */}
      <section className="py-12 border-y border-white/5 bg-carbon-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Logo Placeholders - Relevant to Kenya */}
            <div className="text-xl font-black tracking-tighter">PPB<span className="text-accent-teal">KENYA</span></div>
            <div className="text-xl font-black tracking-tighter">KEMSA<span className="text-accent-teal">CERTIFIED</span></div>
            <div className="text-xl font-black tracking-tighter">WHO<span className="text-accent-teal">GSDP</span></div>
            <div className="text-xl font-black tracking-tighter">MINISTRY<span className="text-accent-teal">OFHEALTH</span></div>
            <div className="text-xl font-black tracking-tighter">KMPDU<span className="text-accent-teal">PARTNER</span></div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-4">Our Operations</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Reliable Supply, Healthier Communities</h3>
            <p className="text-carbon-400 max-w-2xl mx-auto text-lg">
              We bridge the gap between pharmaceutical manufacturers and healthcare providers across Kenya with unmatched logistical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Nationwide Logistics",
                desc: "Strategic distribution networks covering all 47 counties, ensuring timely delivery to remote clinics and urban hospitals alike.",
                accent: "text-accent-teal",
                bg: "bg-accent-teal/10"
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Cold Chain Integrity",
                desc: "Precision temperature monitoring for vaccines and sensitive biologics, maintaining efficacy from warehouse to patient.",
                accent: "text-accent-emerald",
                bg: "bg-accent-emerald/10"
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Quality Assurance",
                desc: "Fully licensed by the Pharmacy and Poisons Board (PPB) Kenya, adhering to the highest international safety and quality standards.",
                accent: "text-blue-500",
                bg: "bg-blue-500/10"
              }
            ].map((pillar, i) => (
              <div key={i} className="group p-8 glass-morphism rounded-3xl border-white/5 hover:border-accent-teal/30 transition-all duration-500 hover:-translate-y-2">
                <div className={`${pillar.bg} ${pillar.accent} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{pillar.title}</h4>
                <p className="text-carbon-400 text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-accent-teal transition-colors">
                  Our Approach <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory / Supply Section */}
      <section className="py-24 bg-carbon-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-4">Stock Management</h2>
              <h3 className="text-4xl font-bold text-white mb-6">Real-Time Inventory Access</h3>
              <p className="text-carbon-400">
                Hospitals and clinics can monitor real-time stock levels of essential medicines, ensuring they never run out of life-saving supplies.
              </p>
            </div>
            <Link href="/products" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Access Supply Portal
            </Link>
          </div>

          <PipelineTracker />
        </div>
      </section>

      {/* Stats / Global Reach */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-teal/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white leading-tight">
                Deep Roots in Kenya. <br />
                <span className="text-accent-teal">Global Standards.</span>
              </h2>
              <p className="text-carbon-400 text-lg leading-relaxed">
                Mayogex Pharma operates at the intersection of local expertise and global logistical standards. With hubs in Nairobi, Mombasa, and Kisumu, we ensure a seamless flow of healthcare essentials to where they are needed most.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Globe className="w-5 h-5" />, label: "Coverage", value: "47 Counties, 12 Distribution Hubs" },
                  { icon: <Target className="w-5 h-5" />, label: "Reliability", value: "99.8% On-Time Delivery" },
                  { icon: <Zap className="w-5 h-5" />, label: "Speed", value: "Same-Day Delivery in Major Towns" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 glass-morphism rounded-2xl border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xs text-carbon-500 uppercase font-bold tracking-wider">{stat.label}</div>
                      <div className="text-white font-bold">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square glass-morphism rounded-3xl border-white/10 p-1">
                <div className="w-full h-full rounded-[22px] bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-70 group-hover:opacity-100 transition-all" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-morphism p-6 rounded-2xl border-white/20 animate-bounce duration-[3000ms]">
                <div className="text-3xl font-bold text-accent-emerald">15K+</div>
                <div className="text-xs text-carbon-400 font-bold uppercase tracking-widest">Deliveries Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative glass-morphism rounded-[40px] border-white/10 p-12 md:p-20 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal via-accent-emerald to-accent-teal" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Partner with Us for <br />
              <span className="text-accent-teal">Healthcare Excellence</span>
            </h2>
            <p className="text-carbon-400 text-lg mb-12 max-w-2xl mx-auto">
              Whether you are a hospital looking for a reliable supplier or a pharmaceutical manufacturer seeking distribution in East Africa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-5 bg-accent-teal text-white font-bold rounded-full hover:bg-accent-teal/90 transition-all hover:scale-105">
                Become a Partner
              </Link>
              <Link href="/products" className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

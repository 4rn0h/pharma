import { MapPin, Phone, Mail, Send, Globe, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <h2 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Let's Define the <br />Future Together.</h1>
          <p className="text-xl text-carbon-400 leading-relaxed">
            Have a question about our pipeline, or interested in a strategic collaboration? Our team is ready to connect with you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="space-y-8">
               <h3 className="text-2xl font-bold text-white">Global Headquarters</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                        <div className="text-white font-bold mb-1">Cambridge Office</div>
                        <p className="text-carbon-400 leading-relaxed">One Innovation Way, Suite 500<br />Cambridge, MA 02142, USA</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div>
                        <div className="text-white font-bold mb-1">Phone Support</div>
                        <p className="text-carbon-400">+1 (617) 555-0123</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0">
                        <Mail className="w-6 h-6" />
                     </div>
                     <div>
                        <div className="text-white font-bold mb-1">Email Inquiries</div>
                        <p className="text-carbon-400">contact@mayogex.com</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="pt-12 border-t border-white/5 space-y-8">
               <h3 className="text-2xl font-bold text-white">Regional Hubs</h3>
               <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                     <div className="text-white font-bold mb-2">Basel, Switzerland</div>
                     <p className="text-sm text-carbon-500">Pharma-Campus West<br />4056 Basel</p>
                  </div>
                  <div>
                     <div className="text-white font-bold mb-2">Singapore</div>
                     <p className="text-sm text-carbon-500">10 Biopolis Road<br />Chromos #03-01</p>
                  </div>
               </div>
            </div>

            <div className="pt-12 border-t border-white/5 space-y-6">
               <h3 className="text-lg font-bold text-white">Connect with us</h3>
               <div className="flex gap-4">
                  <button className="p-4 glass-morphism rounded-2xl border-white/5 hover:text-accent-teal transition-all">
                     <Linkedin className="w-6 h-6" />
                  </button>
                  <button className="p-4 glass-morphism rounded-2xl border-white/5 hover:text-accent-teal transition-all">
                     <Twitter className="w-6 h-6" />
                  </button>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
             <div className="glass-morphism rounded-[40px] border-white/10 p-8 md:p-12 relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8">Partnership Inquiry</h3>
                <form className="space-y-6">
                   <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-carbon-500 ml-1">Full Name</label>
                         <input 
                            type="text" 
                            className="w-full bg-carbon-900 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all"
                            placeholder="John Doe"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-carbon-500 ml-1">Company</label>
                         <input 
                            type="text" 
                            className="w-full bg-carbon-900 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all"
                            placeholder="Organization Inc."
                         />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-carbon-500 ml-1">Email Address</label>
                      <input 
                         type="email" 
                         className="w-full bg-carbon-900 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all"
                         placeholder="john@company.com"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-carbon-500 ml-1">Inquiry Type</label>
                      <select className="w-full bg-carbon-900 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all appearance-none">
                         <option>Strategic Partnership</option>
                         <option>Licensing Inquiry</option>
                         <option>Investor Relations</option>
                         <option>Career Opportunity</option>
                         <option>Media & Press</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-carbon-500 ml-1">Message</label>
                      <textarea 
                         rows={4}
                         className="w-full bg-carbon-900 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all resize-none"
                         placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                   </div>
                   <button className="w-full py-5 bg-accent-teal text-white font-bold rounded-2xl hover:bg-accent-teal/90 transition-all flex items-center justify-center gap-2 group">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                   <p className="text-[10px] text-carbon-500 text-center mt-6">
                      By submitting this form, you agree to our <Link href="#" className="underline">Privacy Policy</Link> and data handling practices.
                   </p>
                </form>
             </div>
             {/* Decorative */}
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-teal/20 rounded-full blur-[100px] -z-0" />
          </div>
        </div>
      </section>
    </div>
  );
}

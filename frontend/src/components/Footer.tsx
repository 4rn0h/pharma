import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Globe, Linkedin, Twitter, ExternalLink, Beaker } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Science: [
      { label: 'R&D Pipeline', href: '/pipeline' },
      { label: 'Clinical Trials', href: '#' },
      { label: 'Biotechnology', href: '#' },
      { label: 'Manufacturing', href: '#' },
    ],
    Products: [
      { label: 'Small Molecules', href: '/products' },
      { label: 'Biosimilars', href: '/products' },
      { label: 'Synthetics', href: '/products' },
      { label: 'Distribution', href: '#' },
    ],
    Company: [
      { label: 'About Mayogex', href: '/about' },
      { label: 'Leadership', href: '/about#leadership' },
      { label: 'Careers', href: '#' },
      { label: 'Investors', href: '#' },
    ],
    Compliance: [
      { label: 'Regulatory Affairs', href: '/partnerships' },
      { label: 'Quality Control', href: '#' },
      { label: 'Ethics & Integrity', href: '#' },
      { label: 'Global Access', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Beaker className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                MAYOGEX<span className="text-teal-500">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering healthcare through clinical precision and innovative pharmaceutical redistribution.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-teal-500 hover:border-teal-500/30 transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-teal-500 hover:border-teal-500/30 transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-teal-500 hover:border-teal-500/30 transition-all">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-slate-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal/Medical Disclaimer Banner */}
        <div className="glass-panel p-6 rounded-2xl mb-12 border-slate-800/50">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="p-2 bg-amber-500/10 rounded-full">
              <Shield className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider font-medium">
              <span className="text-slate-300 font-bold">REGULATORY DISCLAIMER:</span> ALL DATA PROVIDED ON THIS PLATFORM IS FOR INFORMATIONAL AND INVESTOR PURPOSES ONLY. MAYOGEX PHARMACEUTICALS OPERATES UNDER GLOBAL PHARMACEUTICAL REGULATORY PRACTICES. NOTHING ON THIS SITE SHOULD BE CONSTRUED AS MEDICAL ADVICE OR A RECOMMENDATION FOR ANY SPECIFIC TREATMENT. CONSULT WITH QUALIFIED HEALTHCARE PROFESSIONALS FOR CLINICAL GUIDANCE.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} Mayogex Pharmaceuticals AG. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

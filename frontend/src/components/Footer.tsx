import React from "react";
import Link from "next/link";
import { Beaker, Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-carbon-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Beaker className="w-8 h-8 text-accent-teal" />
              <span className="text-xl font-bold tracking-tight text-white">
                MAYOGEX<span className="text-accent-teal">PHARMA</span>
              </span>
            </Link>
            <p className="text-carbon-400 text-sm leading-relaxed">
              Pioneering the next generation of precision therapeutics through innovative molecular engineering and patient-centric formulation science.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-carbon-900 rounded-lg hover:text-accent-teal transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-carbon-900 rounded-lg hover:text-accent-teal transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Pipeline</h4>
            <ul className="space-y-4 text-sm text-carbon-400">
              <li><Link href="/pipeline" className="hover:text-accent-teal transition-colors">Oncology Research</Link></li>
              <li><Link href="/pipeline" className="hover:text-accent-teal transition-colors">Neuroscience Hub</Link></li>
              <li><Link href="/pipeline" className="hover:text-accent-teal transition-colors">Immunology Studies</Link></li>
              <li><Link href="/pipeline" className="hover:text-accent-teal transition-colors">Clinical Trials Overview</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Corporate</h4>
            <ul className="space-y-4 text-sm text-carbon-400">
              <li><Link href="/about" className="hover:text-accent-teal transition-colors">Leadership Team</Link></li>
              <li><Link href="/partnerships" className="hover:text-accent-teal transition-colors">Strategic Licensing</Link></li>
              <li><Link href="/about" className="hover:text-accent-teal transition-colors">Compliance & Quality</Link></li>
              <li><Link href="/contact" className="hover:text-accent-teal transition-colors">Global Offices</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-carbon-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-teal shrink-0" />
                <span>One Innovation Way, Suite 500<br />Cambridge, MA 02142, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-teal shrink-0" />
                <span>+1 (617) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-teal shrink-0" />
                <span>contact@mayogex.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-widest text-carbon-500 font-medium">
            <div className="flex flex-wrap gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
              <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
            <p>© 2026 MAYOGEX PHARMACEUTICALS INC. ALL RIGHTS RESERVED.</p>
          </div>

          <div className="bg-carbon-900/50 p-4 rounded-lg border border-white/5">
            <p className="text-[11px] text-carbon-500 leading-relaxed italic">
              MEDICAL DISCLAIMER: This website is for informational purposes only and does not provide medical advice, diagnosis, or treatment. The information provided here is not intended to be a substitute for professional medical advice from a qualified healthcare provider. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

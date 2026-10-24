import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MapPin, Globe, ShieldCheck, Navigation } from 'lucide-react'
import Logo from '../ui/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-empire-navy text-white border-t border-empire-borderDark/60">
      {/* Top CTA Banner */}
      <div className="border-b border-empire-borderDark/40 py-12 px-4 sm:px-6 lg:px-8 bg-empire-navyDark/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="badge-gold mb-2 text-xs">EmpireX Business Academy</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Ready to Grow Your Marketplace Operations?
            </h3>
            <p className="text-empire-textPale text-sm mt-1 max-w-xl">
              Schedule a strategic consultation to review your Amazon, eBay, or Etsy catalog and unlock practical growth opportunities.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link to="/contact" className="btn-primary text-sm font-bold uppercase tracking-wider px-6 py-3.5">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Location Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-empire-gold font-bold text-sm tracking-wider uppercase">
              Learn. Trade. Grow.
            </p>
            <p className="text-empire-textPale text-sm leading-relaxed max-w-sm">
              EmpireX Business Academy provides professional marketplace management, operational workflows, product analysis, and e-commerce trading intelligence for modern entrepreneurs and brands worldwide.
            </p>
            <div className="pt-2 text-xs text-empire-textPale/80 space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-empire-gold flex-shrink-0" />
                <span className="font-semibold text-white">Headquarters: Bahawalpur, Punjab, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-empire-gold flex-shrink-0" />
                <span>Serving Sellers in USA, UK, Canada &amp; International Markets</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-empire-gold flex-shrink-0" />
                <a href="mailto:empirexbusinessacademy577@gmail.com" className="hover:text-white transition-colors">
                  empirexbusinessacademy577@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 2 — Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-empire-gold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-empire-textPale">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About EmpireX
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-empire-gold mb-4">
              Marketplaces
            </h4>
            <ul className="space-y-2.5 text-sm text-empire-textPale">
              <li>
                <Link to="/services/amazon-management" className="hover:text-white transition-colors">
                  Amazon Management
                </Link>
              </li>
              <li>
                <Link to="/services/ebay-management" className="hover:text-white transition-colors">
                  eBay Store Management
                </Link>
              </li>
              <li>
                <Link to="/services/etsy-management" className="hover:text-white transition-colors">
                  Etsy Shop Management
                </Link>
              </li>
              <li>
                <Link to="/services/product-research" className="hover:text-white transition-colors">
                  Product Research
                </Link>
              </li>
              <li>
                <Link to="/services/marketplace-seo" className="hover:text-white transition-colors">
                  Marketplace SEO
                </Link>
              </li>
              <li>
                <Link to="/services/inventory-management" className="hover:text-white transition-colors">
                  Inventory &amp; Operations
                </Link>
              </li>
              <li>
                <Link to="/services/analytics" className="hover:text-white transition-colors">
                  Analytics &amp; KPIs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Resources & Trade */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-empire-gold mb-4">
              Trade &amp; Intelligence
            </h4>
            <ul className="space-y-2.5 text-sm text-empire-textPale">
              <li>
                <Link to="/trade" className="hover:text-white transition-colors font-medium text-white flex items-center gap-1.5">
                  <span>Trade Intelligence</span>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-empire-gold text-empire-navy font-bold">
                    Demo
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/trade#calculator" className="hover:text-white transition-colors">
                  Profit Calculator
                </Link>
              </li>
              <li>
                <Link to="/trade#principles" className="hover:text-white transition-colors">
                  8 Trading Principles
                </Link>
              </li>
              <li>
                <Link to="/trade#glossary" className="hover:text-white transition-colors">
                  Business Glossary
                </Link>
              </li>
              <li>
                <Link to="/trade#faq" className="hover:text-white transition-colors">
                  Trade FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Dedicated Academy Location & Interactive Map Section */}
        <div className="mt-14 pt-10 border-t border-empire-borderDark/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-empire-goldLight text-[#875500] text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-empire-gold" /> Academy Headquarters
              </span>
              <h4 className="text-xl font-bold text-white">
                Bahawalpur, Punjab, Pakistan
              </h4>
              <p className="text-xs text-empire-textPale leading-relaxed">
                EmpireX Business Academy operates its primary marketplace operations command and e-commerce training labs in Bahawalpur. From here, our trained managers oversee multi-channel catalog synchronization, listing optimization, and order fulfillment workflows for clients across the United States, United Kingdom, Canada, Australia, and the Middle East.
              </p>
              <div className="pt-1 text-xs text-empire-textPale/80 flex items-center gap-4">
                <span><strong>Coordination:</strong> Global Timezone Alignment</span>
                <span>&bull;</span>
                <span><strong>Visits:</strong> By Appointment</span>
              </div>
            </div>

            {/* Embedded Responsive Interactive Map */}
            <div className="lg:col-span-7">
              <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-empire-borderDark shadow-card-dark relative bg-empire-navyDark">
                <iframe
                  title="EmpireX Business Academy Location - Bahawalpur, Pakistan"
                  src="https://maps.google.com/maps?q=Bahawalpur,+Punjab,+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter saturate-150 contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-2 left-2 bg-empire-navy/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-empire-borderDark text-[11px] text-white flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-empire-gold" />
                  <span>Bahawalpur, Punjab, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="mt-12 pt-8 border-t border-empire-borderDark/60 text-xs text-empire-textPale/70 leading-relaxed">
          <p className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-empire-gold flex-shrink-0 mt-0.5" />
            <span>
              <strong>Independent Advisory Notice:</strong> EmpireX Business Academy is an independent marketplace consulting and operations management provider. Amazon, eBay, and Etsy are registered trademarks of their respective owners. We do not claim official partnership or endorsement by these platforms, nor do we guarantee sales revenue, account approvals, or search rank positions.
            </span>
          </p>
        </div>

        {/* Copyright & Legal Links */}
        <div className="mt-6 pt-6 border-t border-empire-borderDark/40 flex flex-col sm:flex-row items-center justify-between text-xs text-empire-textPale/80 gap-4">
          <p>
            &copy; {currentYear} EmpireX Business Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

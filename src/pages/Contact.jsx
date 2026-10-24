import { motion } from 'framer-motion'
import {
  Mail, MapPin, Clock, Globe, ShieldCheck,
  Phone, MessageSquare, ArrowRight, CheckCircle2
} from 'lucide-react'
import SEO from '../components/ui/SEO'
import ConsultationForm from '../components/forms/ConsultationForm'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact EmpireX Business Academy | Book a Marketplace Consultation"
        description="Connect with EmpireX Business Academy to discuss your Amazon, eBay, or Etsy store management, product research, or catalog optimization requirements."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-4">Direct Communication</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Let's Talk About Your <span className="text-empire-gold">Marketplace Business.</span>
          </h1>
          <p className="text-empire-textPale text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your products, marketplace, and business goals. Our team will review your inquiry and discuss the most suitable next steps.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Information Grid */}
      <section className="section bg-empire-lightGrey" aria-label="Contact Details and Inquiry Form">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 Columns: Direct Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-empire-border p-6 sm:p-8 shadow-card-light">
                <span className="text-xs font-bold uppercase tracking-wider text-empire-gold block mb-2">
                  Contact Information
                </span>
                <h2 className="text-2xl font-extrabold text-empire-navy mb-4">
                  How We Can Connect
                </h2>
                <p className="text-xs text-empire-textMuted leading-relaxed mb-6">
                  We work with brands and marketplace sellers globally. Fill in the form or reach out directly via our official channels.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-empire-goldLight text-[#875500] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-empire-gold" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-empire-textMuted block">Official Email</span>
                      <a href="mailto:empirexbusinessacademy577@gmail.com" className="text-sm font-semibold text-empire-navy hover:text-empire-gold transition-colors">
                        empirexbusinessacademy577@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-empire-navy/5 text-empire-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-empire-navy" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-empire-textMuted block">Response Time</span>
                      <p className="text-sm font-semibold text-empire-navy">Within 1–2 Business Days</p>
                      <p className="text-[11px] text-empire-textMuted">Mon – Fri: 9:00 AM – 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-empire-navy/5 text-empire-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Globe className="w-4 h-4 text-empire-navy" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-empire-textMuted block">Service Jurisdictions</span>
                      <p className="text-sm font-semibold text-empire-navy">United States, UK, Canada, Australia</p>
                      <p className="text-[11px] text-empire-textMuted">Remote marketplace management operations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-empire-navy text-white rounded-2xl p-6 sm:p-8 shadow-card-dark border border-empire-borderDark">
                <span className="text-xs font-bold uppercase tracking-wider text-empire-gold block mb-2">
                  Clear Engagement Process
                </span>
                <h3 className="text-lg font-bold text-white mb-4">What Happens After You Inquire?</h3>
                <ol className="space-y-3 text-xs text-empire-textPale">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-empire-gold text-empire-navy font-bold flex items-center justify-center flex-shrink-0 text-[11px] mt-0.5">1</span>
                    <span><strong>Catalog Review:</strong> Our team reviews your marketplace, category guidelines, and store details.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-empire-gold text-empire-navy font-bold flex items-center justify-center flex-shrink-0 text-[11px] mt-0.5">2</span>
                    <span><strong>Discovery Call:</strong> We discuss your current bottlenecks, target markets, and goals via video consultation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-empire-gold text-empire-navy font-bold flex items-center justify-center flex-shrink-0 text-[11px] mt-0.5">3</span>
                    <span><strong>Tailored Scope:</strong> You receive a transparent milestone roadmap with deliverables and clear terms.</span>
                  </li>
                </ol>
              </div>

              {/* Security & Confidentiality */}
              <div className="p-4 rounded-xl bg-white border border-empire-border text-xs text-empire-textMuted flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>Strict Confidentiality:</strong> Your store metrics and product information are kept confidential. Form submissions do not store data in an online web database.
                </span>
              </div>
            </div>

            {/* Right 7 Columns: Complete Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-empire-border p-6 sm:p-10 shadow-card-light">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-empire-gold">
                    Inquiry Form
                  </span>
                  <h2 className="text-2xl font-extrabold text-empire-navy mt-1">
                    Send Us a Message
                  </h2>
                  <p className="text-xs text-empire-textMuted mt-1">
                    Fill in your details and we will respond promptly.
                  </p>
                </div>

                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingBag, CheckCircle2, ArrowRight, ShieldAlert,
  BarChart3, Layers, HelpCircle, AlertCircle
} from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

export default function AmazonManagement() {
  return (
    <>
      <SEO
        title="Amazon Marketplace Management Services | Seller Central Operations"
        description="Professional Amazon Seller Central management, listing creation, catalog optimization, A+ content, FBA inventory coordination, and performance monitoring."
        canonical="/services/amazon-management"
      />

      {/* Hero */}
      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-4">Core Marketplace Service</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Amazon Marketplace <span className="text-empire-gold">Management</span>
          </h1>
          <p className="text-empire-textPale text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Professional Seller Central operations support, listing creation, catalog maintenance, and structured workflows to help your brand compete effectively on Amazon.
          </p>
        </div>
      </section>

      {/* Problem Statement & Service Overview */}
      <section className="section bg-white" aria-label="Problem and Overview">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-gold mb-3">Marketplace Reality</span>
              <h2 className="text-3xl font-extrabold text-empire-navy mb-4">
                The Challenge of Selling on Amazon
              </h2>
              <p className="text-xs sm:text-sm text-empire-textDark leading-relaxed mb-4">
                Amazon is the world's most competitive marketplace. Complex fee structures, stringent account health metrics, algorithmic search shifts (A9/A10), and aggressive competition mean that unmanaged listings quickly lose visibility and Buy Box share.
              </p>
              <p className="text-xs sm:text-sm text-empire-textDark leading-relaxed">
                EmpireX Business Academy acts as your operational partner, organizing your product catalog, optimizing backend search terms, monitoring customer service issues, and guiding your fulfillment workflows.
              </p>
            </div>

            <div className="card-light p-6 sm:p-8 border-l-4 border-l-empire-navy">
              <h3 className="text-lg font-bold text-empire-navy mb-3">What We Cover</h3>
              <ul className="space-y-2.5 text-xs text-empire-textDark">
                {[
                  'Seller Central account operations support & health audits',
                  'Keyword-focused product titles, bullet points & backend search terms',
                  'FBA inbound shipment coordination and stock replenishment alerts',
                  'Parent-child variation structuring for enhanced customer reviews',
                  'A+ Content (Enhanced Brand Content) layout and graphic guidance',
                  'Sponsored Products & Brand campaign monitoring where agreed',
                  'Order and return metrics review to prevent account policy defects',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-empire-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Client Access */}
      <section className="section bg-empire-lightGrey border-y border-empire-border" aria-label="Deliverables">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-gold mb-3">Deliverables</span>
            <h2 className="text-3xl font-extrabold text-empire-navy">
              How the Service Operates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">1. Delegated User Access</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                We utilize Amazon Seller Central secondary permissions (User Permissions). We never ask for your primary master credentials or bank details.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">2. Scheduled Reviews</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Weekly listing updates, stock health checks, and a comprehensive monthly performance review analyzing conversion and Buy Box status.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">3. Policy Compliance</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Strict adherence to Amazon Product Detail Page Rules, Anti-Counterfeiting Policies, and Review Guidelines to protect account standing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white" aria-label="Amazon FAQs">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-empire-navy text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Do you guarantee Amazon sales or ranking #1?', a: 'No. We do not guarantee specific sales or #1 search rankings. Amazon algorithms consider competitive pricing, fulfillment speed, stock levels, and customer review velocity, which cannot be artificially manipulated.' },
              { q: 'Are Amazon FBA and ad spend fees included in your service fee?', a: 'No. All Amazon platform fees—including Professional Selling subscriptions, FBA fulfillment charges, and PPC advertising spend—are billed directly by Amazon to your account.' },
              { q: 'Can you assist with Brand Registry setup?', a: 'Yes. We guide clients through the documentation and trademark requirements needed to enroll in Amazon Brand Registry.' },
            ].map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-empire-lightGrey border border-empire-border">
                <h3 className="text-sm font-bold text-empire-navy mb-1.5 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-empire-gold flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-xs text-empire-textMuted pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="section bg-empire-navy text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Get an Amazon Management Proposal</h2>
            <p className="text-xs text-empire-textPale">Tell us about your brand, ASIN count, and current selling status.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-empire-textDark shadow-2xl">
            <ConsultationForm defaultMarketplace="Amazon" defaultService="Amazon Marketplace Management" />
          </div>
        </div>
      </section>
    </>
  )
}

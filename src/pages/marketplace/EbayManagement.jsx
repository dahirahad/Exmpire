import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingBag, Search, CheckCircle2, AlertTriangle, ArrowRight,
  TrendingUp, BarChart3, HelpCircle, FileText, Package, Users, ShieldAlert
} from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

const servicesList = [
  { title: 'Seller Eligibility & Store Assessment', desc: 'Review of account readiness, seller requirements, and marketplace policy considerations before scaling.' },
  { title: 'Store Setup & Configuration Guidance', desc: 'Structured guidance on eBay Store subscription levels, categories, store banners, and settings.' },
  { title: 'Product & Niche Research', desc: 'Data-driven analysis of demand, competition, and pricing dynamics in target categories.' },
  { title: 'Competitor & Market Analysis', desc: 'In-depth examination of top-performing competitor listings, pricing structures, and shipping policies.' },
  { title: 'Title & Description Optimization', desc: 'Keyword-focused 80-character title optimization aligned with Cassini search algorithm best practices.' },
  { title: 'Category & Item Specifics Recommendations', desc: 'Thorough completion of required and recommended item specifics to maximize search filter visibility.' },
  { title: 'Listing Image & Graphic Preparation', desc: 'Preparation of clean, compliant product images and informational graphics adhering to eBay image standards.' },
  { title: 'Pricing & Fee Research', desc: 'Analysis of market clearing prices, competitive shipping thresholds, and margin impacts from eBay final value fees.' },
  { title: 'Inventory Workflow Consulting', desc: 'Advisory on maintaining accurate stock counts, variation handling, and supplier reordering rhythms.' },
  { title: 'Order Workflow Support', desc: 'Assistance in designing reliable dispatch workflows to protect seller standards and handling time metrics.' },
  { title: 'Customer Communication Process Improvement', desc: 'Creation of professional response templates for buyer inquiries, returns, and delivery tracking questions.' },
  { title: 'Promoted Listings Support (where applicable)', desc: 'Strategic recommendations on Standard and Advanced Promoted Listings ad rates to support visibility.' },
  { title: 'Store Performance Analysis', desc: 'Ongoing monitoring of impressions, click-through rates, conversion rates, and defect rates.' },
  { title: 'Monthly Progress Reporting', desc: 'Structured monthly reporting summarizing completed tasks, listing performance trends, and action items.' },
]

const faqs = [
  {
    q: 'Do you guarantee sales, profits, or specific search rankings?',
    a: 'No. We never guarantee sales, profits, or search rankings. Marketplace performance depends on numerous factors outside our direct control, including product demand, market competition, buyer preferences, seasonality, pricing, and platform algorithm changes. We focus on executing proven, high-standard practices.'
  },
  {
    q: 'Are you an official partner of eBay?',
    a: 'No. NEFFTO IT Solution is an independent agency offering third-party management, consulting, and design services. We are not affiliated with, endorsed by, or certified by eBay Inc.'
  },
  {
    q: 'Will you need access to my eBay seller account?',
    a: 'Whenever possible, we prefer utilizing eBay Multi-User Account Access (MUAA), which allows sellers to grant specific, delegated permissions to third parties without sharing master passwords. We never request your primary login password.'
  },
  {
    q: 'Are eBay platform fees included in your service packages?',
    a: 'No. All platform-related fees—including eBay Store subscriptions, insertion fees, final value fees, and Promoted Listings ad spend—are paid directly by the client to eBay.'
  },
  {
    q: 'What types of products and business models do you support?',
    a: 'We work with legitimate brand owners, manufacturers, authorized distributors, and established retailers with verifiable supply chains. We do not support prohibited selling practices, unverified dropshipping, or counterfeit goods.'
  },
  {
    q: 'How does the engagement process begin?',
    a: 'We begin with a discovery consultation to evaluate your business stage, catalog size, and current challenges. From there, we formulate a tailored scope of work and project agreement.'
  },
]

export default function EbayManagement() {
  return (
    <>
      <SEO
        title="Professional eBay Store Management Services"
        description="Build a stronger eBay presence with structured product research, optimized listings, organized store operations, and performance-focused support."
        canonical="/services/ebay-management"
      />

      {/* Hero */}
      <section className="section bg-mesh text-center" aria-label="eBay Management Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-teal mb-4">Marketplace Management Department</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Professional eBay Store{' '}
              <span className="text-gradient-accent">Management Services</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Build a stronger eBay presence with structured product research, optimized listings, organized
              store operations, and performance-focused support for eligible international businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Get an eBay Management Proposal <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services-list" className="btn-secondary">
                View All Deliverables
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Notice */}
      <div className="bg-navy-950 border-y border-blue-muted/10 py-4 px-4 text-center">
        <p className="text-xs text-blue-pale/80 max-w-3xl mx-auto flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-accent flex-shrink-0" />
          <span>
            <strong>Disclaimer:</strong> NEFFTO is an independent digital agency. We do not claim official eBay
            partnership or certification, nor do we promise guaranteed revenue or account approval.
          </span>
        </p>
      </div>

      {/* Services List */}
      <section className="section bg-navy-900" id="services-list" aria-label="Comprehensive eBay Services">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-blue mb-3">Service Deliverables</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our eBay Management Covers
            </h2>
            <p className="text-blue-pale max-w-2xl mx-auto">
              Our team assists across consulting, implementation, and ongoing management tasks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.04)} className="card p-6 flex flex-col justify-start">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-pale text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-navy-950" aria-label="Our eBay Process">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-blue mb-3">Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How We Work with eBay Sellers</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Assessment', desc: 'Evaluating catalog viability, store settings, and existing metrics.' },
              { step: '02', title: 'Research', desc: 'In-depth competitor analysis, keyword harvesting, and pricing models.' },
              { step: '03', title: 'Optimization', desc: 'Rewriting titles, filling item specifics, and updating graphics.' },
              { step: '04', title: 'Execution', desc: 'Implementing changes carefully without disrupting live operations.' },
              { step: '05', title: 'Reporting', desc: 'Reviewing impressions, CTR, conversion rates, and refining strategy.' },
            ].map((p, i) => (
              <motion.div key={p.step} {...fadeUp(i * 0.08)} className="card text-center p-6">
                <div className="w-10 h-10 rounded-xl bg-accent text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-blue-pale text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="section bg-navy-900" aria-label="Package Comparison">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-teal mb-3">Engagement Tiers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">eBay Service Packages</h2>
            <p className="text-blue-pale text-sm">Pricing depends on catalog size and operational complexity.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Starter Review</h3>
                <p className="text-blue-pale text-sm mb-6">Best for sellers needing an audit and initial listing tune-up.</p>
                <div className="text-2xl font-bold text-white mb-6">Request a Quote</div>
                <ul className="space-y-3 mb-6 text-sm text-blue-pale">
                  <li>• Store & policy audit</li>
                  <li>• Up to 15 listings optimized</li>
                  <li>• Competitor analysis summary</li>
                  <li>• Recommended action roadmap</li>
                </ul>
              </div>
              <a href="#consultation" className="btn-secondary w-full justify-center">Get a Quote</a>
            </div>

            <div className="card p-8 border-accent ring-1 ring-accent/50 shadow-glow flex flex-col justify-between">
              <div>
                <div className="badge-blue mb-3">Recommended</div>
                <h3 className="text-xl font-bold text-white mb-2">Growth Management</h3>
                <p className="text-blue-pale text-sm mb-6">Structured monthly operations and ongoing optimization.</p>
                <div className="text-2xl font-bold text-white mb-6">Request a Quote</div>
                <ul className="space-y-3 mb-6 text-sm text-blue-pale">
                  <li>• Everything in Starter</li>
                  <li>• Up to 40 listings optimized</li>
                  <li>• Promoted Listings recommendations</li>
                  <li>• Monthly performance review</li>
                  <li>• Dedicated support channel</li>
                </ul>
              </div>
              <a href="#consultation" className="btn-primary w-full justify-center">Get a Quote</a>
            </div>

            <div className="card p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Enterprise</h3>
                <p className="text-blue-pale text-sm mb-6">For large inventories, complex multi-warehouse setups.</p>
                <div className="text-2xl font-bold text-white mb-6">Custom Scope</div>
                <ul className="space-y-3 mb-6 text-sm text-blue-pale">
                  <li>• Large catalog handling (50+ items)</li>
                  <li>• Custom inventory workflows</li>
                  <li>• Multi-variation setups</li>
                  <li>• Tailored weekly reporting</li>
                </ul>
              </div>
              <a href="#consultation" className="btn-secondary w-full justify-center">Request Proposal</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-navy-950" aria-label="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-blue mb-3">Transparency</span>
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} {...fadeUp(i * 0.05)} className="card p-6">
                <h3 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-blue-pale text-sm leading-relaxed pl-6">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="section bg-navy-900" id="consultation" aria-label="Consultation Form">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <span className="badge-teal mb-3">Next Steps</span>
            <h2 className="text-3xl font-bold text-white mb-4">Get an eBay Management Proposal</h2>
            <p className="text-blue-pale max-w-xl mx-auto">
              Tell us about your inventory, current challenges, and goals. We will reply within 1–2 business days.
            </p>
          </motion.div>

          <div className="card p-8">
            <ConsultationForm defaultService="eBay Store Management" />
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Store, Search, CheckCircle2, AlertTriangle, ArrowRight,
  TrendingUp, BarChart3, HelpCircle, FileText, Package, Users, ShieldAlert, Sparkles
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
  { title: 'Shop Readiness & Eligibility Assessment', desc: 'Evaluating your handmade, vintage, or craft supply items against Etsy strict seller policies.' },
  { title: 'Shop Branding & Visual Identity', desc: 'Designing cohesive shop banners, icon logos, and order confirmation message layouts.' },
  { title: 'Product & Niche Research', desc: 'Analyzing Etsy search trends, tag popularity, and competitor positioning within your craft category.' },
  { title: 'Competitor Research', desc: 'Evaluating pricing, delivery policies, and customer review patterns across established Etsy shops.' },
  { title: 'Listing Title & Description Optimization', desc: 'Crafting readable, keyword-rich titles and engaging descriptions that tell your craft story.' },
  { title: 'Relevant Tags & Keyword Research', desc: 'Utilizing all 13 Etsy listing tags with targeted long-tail search phrases.' },
  { title: 'Category & Attribute Recommendations', desc: 'Configuring precise subcategories, occasion tags, and style attributes to ensure search filter visibility.' },
  { title: 'Product Graphics & Image Preparation', desc: 'Enhancing authentic product photography to meet Etsy aesthetic expectations.' },
  { title: 'Shop Organization & Sectioning', desc: 'Structuring shop sections and featured item carousels to improve shop browsing experience.' },
  { title: 'Etsy Search (SEO) Optimization', desc: 'Aligning your entire shop with Etsy relevancy, listing quality score, and customer experience factors.' },
  { title: 'Advertising Support (where appropriate)', desc: 'Advisory on setting controlled Etsy Ads daily budgets and analyzing ad return on spend.' },
  { title: 'Customer Communication Workflows', desc: 'Creating friendly message templates for custom orders, processing updates, and delivery inquiries.' },
  { title: 'Shop Performance Review', desc: 'Analyzing shop visits, conversion rates, listing views, and search terms report.' },
  { title: 'Reporting & Ongoing Optimization', desc: 'Monthly updates detailing completed optimizations and recommended seasonal adjustments.' },
]

export default function EtsyManagement() {
  return (
    <>
      <SEO
        title="Professional Etsy Shop Management & Optimization Services"
        description="Help your eligible Etsy shop present its products more effectively through thoughtful branding, listing optimization, relevant keyword research, and organized shop management."
        canonical="/services/etsy-management"
      />

      {/* Hero */}
      <section className="section bg-mesh text-center" aria-label="Etsy Management Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-teal mb-4">Marketplace Management Department</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Professional Etsy Shop Management &amp;{' '}
              <span className="text-gradient-accent">Optimization</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Help your eligible Etsy shop present its products more effectively through thoughtful branding,
              listing optimization, relevant keyword research, and organized shop management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Get an Etsy Shop Consultation <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#compliance" className="btn-secondary">
                Seller Eligibility Rules
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
            <strong>Independent Agency Notice:</strong> NEFFTO is an independent digital agency. We are not
            affiliated with or endorsed by Etsy, Inc. We do not support prohibited reselling or dropshipping.
          </span>
        </p>
      </div>

      {/* Compliance / Rules Section */}
      <section className="section bg-navy-900" id="compliance" aria-label="Etsy Seller Eligibility">
        <div className="max-w-4xl mx-auto">
          <div className="card border-accent/40 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-white">Etsy Seller Eligibility &amp; Product Rules</h2>
            </div>
            <p className="text-blue-pale text-sm leading-relaxed mb-6">
              Etsy is a unique marketplace designed specifically for handmade items, vintage goods (20+ years old), and craft supplies. To protect our clients and maintain long-term store viability, NEFFTO strictly adheres to Etsy seller guidelines:
            </p>
            <div className="space-y-4">
              {[
                { title: 'Authentic Authorship & Production Partners', desc: 'All handmade listings must accurately disclose who designed the item and who made it. If production partners are used, they must be transparently declared in accordance with Etsy policy.' },
                { title: 'Strict Prohibition on Generic Reselling', desc: 'We do not assist with unbranded mass-produced retail dropshipping or unauthorized reselling of commercial products, which violates Etsy terms of use.' },
                { title: 'Intellectual Property Respect', desc: 'We do not support listings that infringe on trademarks, copyrights, or brand likenesses without explicit written licensing agreements.' },
                { title: 'Authentic Listing Photography', desc: 'Listing imagery must clearly represent the finished product buyers will receive, respecting Etsy requirements regarding mockup representations.' },
              ].map((rule) => (
                <div key={rule.title} className="p-4 rounded-xl bg-navy-950 border border-blue-muted/10">
                  <h3 className="text-white font-semibold text-sm mb-1">{rule.title}</h3>
                  <p className="text-blue-pale text-xs leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-navy-950" aria-label="Etsy Services Deliverables">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-blue mb-3">Service Scope</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Etsy Shop Management
            </h2>
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

      {/* Packages */}
      <section className="section bg-navy-900" aria-label="Etsy Packages">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-teal mb-3">Service Tiers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Etsy Service Packages</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Shop Starter</h3>
                <p className="text-blue-pale text-sm mb-6">For new shops needing initial branding, tags, and structure.</p>
                <div className="text-2xl font-bold text-white mb-6">Request a Quote</div>
                <ul className="space-y-3 mb-6 text-sm text-blue-pale">
                  <li>• Eligibility & shop audit</li>
                  <li>• Branding design (banner & logo)</li>
                  <li>• Up to 10 listings optimized</li>
                  <li>• 13-tag keyword research</li>
                </ul>
              </div>
              <a href="#consultation" className="btn-secondary w-full justify-center">Get a Quote</a>
            </div>

            <div className="card p-8 border-accent ring-1 ring-accent/50 shadow-glow flex flex-col justify-between">
              <div>
                <div className="badge-blue mb-3">Recommended</div>
                <h3 className="text-xl font-bold text-white mb-2">Growth &amp; SEO</h3>
                <p className="text-blue-pale text-sm mb-6">For shops seeking ongoing search optimization and management.</p>
                <div className="text-2xl font-bold text-white mb-6">Request a Quote</div>
                <ul className="space-y-3 mb-6 text-sm text-blue-pale">
                  <li>• Everything in Starter</li>
                  <li>• Up to 25 listings optimized</li>
                  <li>• Shop sections reorganization</li>
                  <li>• Monthly SEO tag refresh</li>
                  <li>• Bi-weekly progress review</li>
                </ul>
              </div>
              <a href="#consultation" className="btn-primary w-full justify-center">Get a Quote</a>
            </div>

            <div className="card p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Artisan Catalog</h3>
                <p className="text-blue-pale text-sm mb-6">For high-volume makers with extensive product lines.</p>
                <div className="text-2xl font-bold text-white mb-6">Custom Scope</div>
                <ul className="space-y-3 mb-6 text-sm text-blue-pale">
                  <li>• Extensive listing optimization</li>
                  <li>• Seasonal collection rollouts</li>
                  <li>• Production partner disclosures</li>
                  <li>• Dedicated support coordinator</li>
                </ul>
              </div>
              <a href="#consultation" className="btn-secondary w-full justify-center">Request Proposal</a>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="section bg-navy-950" id="consultation" aria-label="Etsy Consultation Form">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <span className="badge-teal mb-3">Get Started</span>
            <h2 className="text-3xl font-bold text-white mb-4">Get an Etsy Shop Consultation</h2>
            <p className="text-blue-pale max-w-xl mx-auto">
              Tell us about your handmade creations, materials, and shop goals. We will reply within 1–2 business days.
            </p>
          </motion.div>

          <div className="card p-8">
            <ConsultationForm defaultService="Etsy Shop Management" />
          </div>
        </div>
      </section>
    </>
  )
}

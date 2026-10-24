import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, FileText, Image as ImageIcon } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function ListingOptimization() {
  return (
    <>
      <SEO
        title="Listing Optimization Services for eBay & Etsy"
        description="Professional listing optimization for eBay and Etsy stores. Improve search visibility with keyword-focused titles, comprehensive item specifics, and clear descriptions."
        canonical="/services/listing-optimization"
      />

      <section className="section bg-mesh text-center" aria-label="Listing Optimization Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-teal mb-4">Marketplace Management Department</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Listing Optimization for{' '}
              <span className="text-gradient-accent">eBay &amp; Etsy</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Upgrade existing product listings with structured search-aligned titles, complete item specifics, high-impact product graphics, and compelling descriptions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Optimize My Listings <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#elements" className="btn-secondary">
                Optimization Elements
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-navy-900" id="elements" aria-label="Optimization Elements">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-blue mb-3">Key Elements</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What We Optimize on Every Listing</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'Search Titles', desc: 'Utilizing character allowances with high-intent keywords, product identifiers, and core specifications.' },
              { icon: Sparkles, title: 'Item Specifics & Tags', desc: 'Exhaustive entry of required and recommended attributes to capture filtered buyer searches.' },
              { icon: ImageIcon, title: 'Visual Standards', desc: 'Preparing clean, compliant images showing product angles, dimensions, and specifications.' },
              { icon: CheckCircle2, title: 'Clear Descriptions', desc: 'Structuring readable bullet points, condition notes, and sizing details that reduce returns.' },
            ].map((card, i) => (
              <motion.div key={card.title} {...fadeUp(i * 0.05)} className="card p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-blue-pale text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-950" id="consultation" aria-label="Consultation Form">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <span className="badge-teal mb-3">Take Action</span>
            <h2 className="text-3xl font-bold text-white mb-4">Request a Listing Audit</h2>
            <p className="text-blue-pale max-w-xl mx-auto">
              Share your store link and sample listings. We will examine opportunities for optimization.
            </p>
          </motion.div>
          <div className="card p-8">
            <ConsultationForm defaultService="eBay Listing Optimization" />
          </div>
        </div>
      </section>
    </>
  )
}

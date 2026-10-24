import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, TrendingUp, BarChart3, CheckCircle2, ArrowRight, ShieldAlert, Target, Layers } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function ProductResearch() {
  return (
    <>
      <SEO
        title="Product Research Services for eBay & Etsy Sellers"
        description="Data-informed product research and niche analysis for eBay and Etsy sellers. Evaluate demand, analyze competitors, and identify viable marketplace opportunities."
        canonical="/services/product-research"
      />

      <section className="section bg-mesh text-center" aria-label="Product Research Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-teal mb-4">Marketplace Management Department</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Product &amp; Niche Research for{' '}
              <span className="text-gradient-accent">Marketplace Sellers</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Before committing capital and inventory, evaluate market demand, competitor saturation, and pricing dynamics with structured marketplace research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Request Research Proposal <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#methodology" className="btn-secondary">
                Our Methodology
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-navy-900" id="methodology" aria-label="Research Methodology">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-blue mb-3">Structured Approach</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Research Evaluates</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Demand & Search Volume', desc: 'Analyzing search query frequencies and seasonal interest patterns on eBay and Etsy.' },
              { title: 'Competitor Saturation', desc: 'Evaluating the number of active competing sellers, listing quality, and market share distribution.' },
              { title: 'Pricing & Margin Viability', desc: 'Reviewing average sold prices, platform fees, and potential gross margins across product variations.' },
              { title: 'Keyword Gap Analysis', desc: 'Identifying underserved long-tail keyword searches with reasonable demand and lower listing competition.' },
              { title: 'Review & Feedback Mining', desc: 'Studying competitor reviews to identify recurring buyer pain points and product differentiation opportunities.' },
              { title: 'Listing Presentation Benchmarks', desc: 'Analyzing top-performing photography, specifications, and bundle structures in target niches.' },
            ].map((card, i) => (
              <motion.div key={card.title} {...fadeUp(i * 0.05)} className="card p-6">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-blue-pale text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-950" id="consultation" aria-label="Consultation Form">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <span className="badge-teal mb-3">Start Research</span>
            <h2 className="text-3xl font-bold text-white mb-4">Request a Product Research Report</h2>
            <p className="text-blue-pale max-w-xl mx-auto">
              Tell us your target category or product ideas. We will outline research parameters and deliverables.
            </p>
          </motion.div>
          <div className="card p-8">
            <ConsultationForm defaultService="Product Research" />
          </div>
        </div>
      </section>
    </>
  )
}

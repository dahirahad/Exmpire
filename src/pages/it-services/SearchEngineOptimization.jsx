import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, Globe, HelpCircle } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function SearchEngineOptimization() {
  return (
    <>
      <SEO
        title="SEO Services | Technical SEO, Content Strategy & Local Search"
        description="Comprehensive search engine optimization services by NEFFTO. Technical audits, on-page keyword optimization, structured data, and sustainable search visibility."
        canonical="/services/seo"
      />

      <section className="section bg-mesh text-center" aria-label="SEO Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-blue mb-4">Digital Solutions</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Search Engine{' '}
              <span className="text-gradient-accent">Optimization (SEO)</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Build sustainable organic search visibility with thorough technical SEO audits, semantic content optimization, structured data schemas, and high-quality on-page architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Get an SEO Audit <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/marketplace-services" className="btn-secondary">
                View Marketplace SEO
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-navy-900" aria-label="Pillars of SEO">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: 'Technical SEO Hygiene', desc: 'Core Web Vitals remediation, crawlability fixes, XML sitemaps, robots.txt directives, and canonical tag enforcement.' },
              { icon: Search, title: 'Keyword & Content Strategy', desc: 'Identifying buyer-intent search queries, addressing topic clusters, and optimizing headings and meta tags.' },
              { icon: Globe, title: 'Local & Regional Search', desc: 'Google Business Profile optimization, local citation cleanup, and targeted geographical service landing pages.' },
            ].map((col, i) => (
              <motion.div key={col.title} {...fadeUp(i * 0.08)} className="card p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <col.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{col.title}</h3>
                <p className="text-blue-pale text-sm leading-relaxed">{col.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-950" id="consultation" aria-label="Consultation Form">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <ConsultationForm defaultService="SEO" />
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Megaphone, BarChart3, Target, CheckCircle2, ArrowRight } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function DigitalMarketing() {
  return (
    <>
      <SEO
        title="Performance Digital Marketing Services | PPC, Social & Content"
        description="Data-driven digital marketing campaigns by NEFFTO. Paid search advertising, social media marketing, content strategy, and conversion optimization."
        canonical="/services/digital-marketing"
      />

      <section className="section bg-mesh text-center" aria-label="Digital Marketing Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-blue mb-4">Digital Solutions</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Data-Driven{' '}
              <span className="text-gradient-accent">Digital Marketing</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Reach your target audience through structured paid search, social media advertising, content strategy, and conversion rate optimization campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Discuss Your Campaign <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-navy-900" aria-label="Marketing Channels">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Paid Search (Google Ads)', desc: 'Search and Shopping campaigns structured around high-intent keywords with tight budget controls and conversion tracking.' },
              { icon: Megaphone, title: 'Paid Social Campaigns', desc: 'Targeted visual ad campaigns on Meta (Facebook, Instagram) and LinkedIn designed to generate qualified leads and brand awareness.' },
              { icon: BarChart3, title: 'Analytics & CRO', desc: 'Implementing GA4 tracking, event monitoring, heatmaps, and landing page testing to improve visitor-to-lead conversion rates.' },
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
            <ConsultationForm defaultService="Digital Marketing" />
          </div>
        </div>
      </section>
    </>
  )
}

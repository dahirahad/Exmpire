import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Package, TrendingUp, CheckCircle2, ArrowRight, ShieldAlert, BarChart3, Clock, Users } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function StoreManagement() {
  return (
    <>
      <SEO
        title="Marketplace Store Operations & Ongoing Management"
        description="Ongoing store management, inventory workflow advisory, order fulfillment support, and monthly performance reviews for eBay and Etsy stores."
        canonical="/services/store-management"
      />

      <section className="section bg-mesh text-center" aria-label="Store Management Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-teal mb-4">Marketplace Management Department</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Marketplace Store Operations &amp;{' '}
              <span className="text-gradient-accent">Management</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Maintain consistent marketplace operations with structured recurring workflows, inventory process advisory, customer communication support, and monthly performance reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Explore Store Management <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-navy-900" aria-label="Operational Pillars">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-blue mb-3">Core Responsibilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ongoing Operational Support</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: 'Workflow Consulting', desc: 'Developing standardized procedures for inventory restocking, order handling time adherence, and multi-location tracking.' },
              { icon: Users, title: 'Customer Communications', desc: 'Crafting responsive buyer message templates to address tracking questions, return inquiries, and feedback remediation.' },
              { icon: BarChart3, title: 'Performance Reviews', desc: 'Tracking conversion rates, seller metrics, impression health, and preparing monthly action items for growth.' },
            ].map((col, i) => (
              <motion.div key={col.title} {...fadeUp(i * 0.08)} className="card p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
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
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <span className="badge-teal mb-3">Schedule Review</span>
            <h2 className="text-3xl font-bold text-white mb-4">Get Ongoing Store Support</h2>
            <p className="text-blue-pale max-w-xl mx-auto">
              Tell us about your daily store operations and recurring tasks. We will prepare an ongoing management plan.
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

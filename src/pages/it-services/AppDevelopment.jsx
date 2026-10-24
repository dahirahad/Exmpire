import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Smartphone, CheckCircle2, ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function AppDevelopment() {
  return (
    <>
      <SEO
        title="Mobile App Development Services | iOS, Android, Flutter, React Native"
        description="NEFFTO builds custom iOS and Android mobile applications using modern frameworks like Flutter and React Native. Scalable, user-friendly mobile solutions."
        canonical="/services/app-development"
      />

      <section className="section bg-mesh text-center" aria-label="App Development Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-blue mb-4">Digital Solutions</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Mobile App Development for{' '}
              <span className="text-gradient-accent">iOS &amp; Android</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We design and develop high-performance mobile applications that deliver smooth user experiences, robust offline capabilities, and seamless API integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Discuss Your Mobile App <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-navy-900" aria-label="Capabilities">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-blue mb-3">Platforms</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Cross-Platform &amp; Native Solutions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Cross-Platform Apps', desc: 'Single codebase solutions built with React Native or Flutter, reducing time-to-market across both Apple App Store and Google Play.' },
              { title: 'Mobile E-Commerce', desc: 'Custom shopping apps integrated with Shopify, WooCommerce, or custom backends with secure native payment gateways.' },
              { title: 'API & Backend Integration', desc: 'Secure cloud backends, user authentication systems, push notifications, and real-time syncing.' },
            ].map((col, i) => (
              <motion.div key={col.title} {...fadeUp(i * 0.08)} className="card p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-accent" />
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
            <ConsultationForm defaultService="App Development" />
          </div>
        </div>
      </section>
    </>
  )
}

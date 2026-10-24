import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Globe, Code2, Server, CheckCircle2, ArrowRight, Layers, Sparkles, HelpCircle } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

const techStack = [
  { name: 'React & Next.js', desc: 'Modern high-performance web applications and landing pages with excellent Core Web Vitals.' },
  { name: 'Node.js & Core PHP', desc: 'Reliable backend services, secure REST APIs, and database-free server solutions.' },
  { name: 'Tailwind CSS', desc: 'Pixel-perfect, responsive custom user interfaces with clean responsive styling.' },
  { name: 'WordPress & WooCommerce', desc: 'Custom CMS themes, bespoke plugins, and maintainable corporate sites.' },
  { name: 'Shopify Development', desc: 'Custom e-commerce storefronts, checkout adjustments, and app integrations.' },
  { name: 'Web Performance & CWV', desc: 'Fast loading times, code splitting, optimized assets, and technical SEO hygiene.' },
]

export default function WebDevelopment() {
  return (
    <>
      <SEO
        title="Custom Web Development Services | React, Next.js, Core PHP"
        description="NEFFTO builds fast, conversion-focused websites, e-commerce stores, and custom web applications for businesses in the USA, UK, Pakistan, and worldwide."
        canonical="/services/web-development"
      />

      <section className="section bg-mesh text-center" aria-label="Web Development Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-blue mb-4">Digital Solutions</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Custom Web Development for{' '}
              <span className="text-gradient-accent">Growing Businesses</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              From fast corporate websites to full-stack web applications and custom e-commerce stores, NEFFTO delivers clean, scalable web code tailored to your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Start Your Web Project <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/marketplace-services" className="btn-secondary">
                Explore Marketplace Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-navy-900" aria-label="Web Technologies">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-blue mb-3">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technologies &amp; Frameworks We Use</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} {...fadeUp(i * 0.05)} className="card p-6">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Code2 className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{tech.name}</h3>
                <p className="text-blue-pale text-sm leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-950" id="consultation" aria-label="Consultation Form">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <span className="badge-teal mb-3">Discuss Requirements</span>
            <h2 className="text-3xl font-bold text-white mb-4">Get a Web Development Quote</h2>
            <p className="text-blue-pale max-w-xl mx-auto">
              Tell us about your website vision, target launch date, and features. We'll reply within 1–2 business days.
            </p>
          </motion.div>
          <div className="card p-8">
            <ConsultationForm defaultService="Web Development" />
          </div>
        </div>
      </section>
    </>
  )
}

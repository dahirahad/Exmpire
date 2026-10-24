import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Palette, Image as ImageIcon, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function GraphicDesigning() {
  return (
    <>
      <SEO
        title="Professional Graphic Design Services | Branding & Product Visuals"
        description="Creative visual design services by NEFFTO. Logo design, complete brand identity systems, social media creative, packaging, and marketplace product imagery."
        canonical="/services/graphic-designing"
      />

      <section className="section bg-mesh text-center" aria-label="Design Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-blue mb-4">Digital Solutions</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Brand Identity &amp; Creative{' '}
              <span className="text-gradient-accent">Graphic Design</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Stand out with cohesive brand identities, modern UI design, engaging marketing assets, and professional marketplace product graphics designed for conversion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Request Design Work <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-navy-900" aria-label="Design Services">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Brand Identity Systems', desc: 'Distinctive logo design, typography scales, color palettes, and comprehensive brand guidelines for consistent application.' },
              { title: 'Marketplace Product Graphics', desc: 'Compliant, high-converting infographic slides, dimension charts, and feature callouts for eBay and Etsy listings.' },
              { title: 'Marketing & Social Media Visuals', desc: 'Banners, ad creatives, promotional campaign templates, and print-ready collateral.' },
            ].map((col, i) => (
              <motion.div key={col.title} {...fadeUp(i * 0.08)} className="card p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-accent" />
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
            <ConsultationForm defaultService="Graphic Designing" />
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Cpu, Sparkles, CheckCircle2, ArrowRight, Bot, Database } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function AIMachineLearning() {
  return (
    <>
      <SEO
        title="AI & Machine Learning Solutions | NEFFTO IT Solution"
        description="Integrate artificial intelligence, machine learning models, chatbots, and automated workflows into your business operations with NEFFTO."
        canonical="/services/ai-machine-learning"
      />

      <section className="section bg-mesh text-center" aria-label="AI Hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-blue mb-4">Digital Solutions</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              AI &amp; Machine Learning{' '}
              <span className="text-gradient-accent">Solutions</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Empower your business with practical AI integration, automated operational workflows, natural language processing tools, and custom predictive models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Explore AI Solutions <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-navy-900" aria-label="AI Areas">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Bot, title: 'AI Chatbots & Virtual Assistants', desc: 'Intelligent conversational agents trained on your business documentation for customer support and lead qualification.' },
              { icon: Cpu, title: 'Workflow Automation', desc: 'Automating repetitive data entry, content categorization, and notification pipelines using modern LLM APIs.' },
              { icon: Database, title: 'Data Processing & Analytics', desc: 'Structuring messy unstructured data into actionable insights, summary reports, and trend predictions.' },
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
            <ConsultationForm defaultService="AI & Machine Learning" />
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingBag, Store, Search, BarChart3, Package, TrendingUp,
  ShieldAlert, CheckCircle2, ArrowRight, HelpCircle, ChevronRight,
  Layers, Users, Award, Clock
} from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

const services = [
  {
    icon: ShoppingBag,
    title: 'eBay Store Management',
    desc: 'End-to-end management for established and new eBay stores. Product research, listing optimization, order and inventory workflows, and performance reporting.',
    href: '/services/ebay-management',
    highlights: ['Seller eligibility review', 'Cassini search optimization', 'Item specifics completion', 'Promoted Listings support'],
  },
  {
    icon: Store,
    title: 'Etsy Shop Management',
    desc: 'Help your eligible handmade, vintage, or craft supply Etsy shop stand out with thoughtful branding, tag optimization, and structured shop organization.',
    href: '/services/etsy-management',
    highlights: ['Etsy seller rules compliance', 'Relevant tags & keywords', 'Shop visual identity', 'Attribute recommendations'],
  },
  {
    icon: Search,
    title: 'Product & Niche Research',
    desc: 'Data-informed market analysis to identify potential product opportunities, analyze competitors, evaluate pricing, and understand seasonal demand.',
    href: '/services/product-research',
    highlights: ['Competitor listing analysis', 'Demand & pricing trends', 'Niche viability assessment', 'Structured research reports'],
  },
  {
    icon: TrendingUp,
    title: 'Listing Optimization',
    desc: 'Upgrade existing listings to improve search visibility, buyer clarity, and conversion potential across eBay and Etsy platforms.',
    href: '/services/listing-optimization',
    highlights: ['Search-focused titles', 'Compelling descriptions', 'High-impact product graphics', 'Category & tag alignment'],
  },
  {
    icon: Package,
    title: 'Store Operations & Workflow',
    desc: 'Practical operational consulting for order fulfillment workflows, inventory tracking, customer communication templates, and recurring store maintenance.',
    href: '/services/store-management',
    highlights: ['Inventory workflow design', 'Customer messaging templates', 'Performance KPI tracking', 'Monthly review sessions'],
  },
  {
    icon: BarChart3,
    title: 'Marketplace SEO & Analytics',
    desc: 'Algorithm-aligned SEO strategies tailored specifically for eBay Cassini and Etsy search systems, backed by regular performance reviews.',
    href: '/marketplace-services',
    highlights: ['Keyword gap identification', 'Search filter alignment', 'Performance trend analysis', 'Actionable recommendation plans'],
  },
]

const packages = [
  {
    name: 'Starter',
    badge: 'New Sellers',
    desc: 'For new or small marketplace businesses needing foundational setup, review, and a clear action plan.',
    scope: [
      'Initial discovery & store readiness review',
      'Basic product & niche opportunity research',
      'Optimization of up to 10 key listings',
      'Store organization & basic branding review',
      'Step-by-step action plan for next steps',
      '1 follow-up review session',
    ],
    pricing: 'Request a Quote',
    ctaText: 'Get Starter Quote',
  },
  {
    name: 'Growth',
    badge: 'Popular',
    desc: 'For established sellers wanting structured improvements, recurring management tasks, and periodic reporting.',
    scope: [
      'Everything in Starter, plus:',
      'Extensive competitor & keyword research',
      'Optimization of up to 30 product listings',
      'Category & item-specific overhaul',
      'Agreed recurring management tasks',
      'Bi-weekly performance review & monthly report',
      'Priority email & WhatsApp support',
    ],
    pricing: 'Request a Quote',
    ctaText: 'Get Growth Quote',
    highlighted: true,
  },
  {
    name: 'Custom / Enterprise',
    badge: 'Large Catalogs',
    desc: 'For clients with larger product catalogs, multi-platform requirements, or complex operational workflows.',
    scope: [
      'Fully customized service scope',
      'Large or expanding product catalogs (50+ items)',
      'Multi-marketplace coordination (eBay + Etsy)',
      'Custom inventory & fulfillment workflow design',
      'Promoted listings & ads strategy support',
      'Weekly check-ins and tailored reporting',
      'Dedicated account coordinator',
    ],
    pricing: 'Custom Proposal',
    ctaText: 'Request Custom Plan',
  },
]

const markets = [
  { country: 'United States', flag: '🇺🇸', note: 'Largest marketplace volume' },
  { country: 'United Kingdom', flag: '🇬🇧', note: 'Strong eBay & Etsy demand' },
  { country: 'Canada', flag: '🇨🇦', note: 'Cross-border growth' },
  { country: 'Australia', flag: '🇦🇺', note: 'High purchasing power' },
]

export default function MarketplaceServices() {
  return (
    <>
      <SEO
        title="Marketplace Management Services | eBay & Etsy Agency"
        description="NEFFTO helps eligible eBay and Etsy sellers build, optimize, and manage their stores with product research, listing optimization, and performance support."
        canonical="/marketplace-services"
      />

      {/* Hero */}
      <section className="section bg-mesh text-center" aria-label="Marketplace hero">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-teal mb-4">Marketplace Management Department</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Professional eBay &amp; Etsy{' '}
              <span className="text-gradient-accent">Store Management</span>
            </h1>
            <p className="text-blue-pale text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We help eligible e-commerce businesses establish, optimize, and manage their eBay and Etsy
              stores with structured product research, search-focused listing improvements, and reliable
              operational support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#consultation" className="btn-primary">
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#packages" className="btn-secondary">
                View Service Packages
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer banner */}
      <div className="bg-navy-950 border-y border-blue-muted/10 py-4 px-4 text-center">
        <p className="text-xs text-blue-pale/80 max-w-3xl mx-auto flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-accent flex-shrink-0" />
          <span>
            <strong>Independent Service Notice:</strong> NEFFTO IT Solution is an independent agency. We are not
            affiliated with, endorsed by, or partnered with eBay Inc. or Etsy Inc. We do not guarantee sales, profits, or
            search rankings.
          </span>
        </p>
      </div>

      {/* Services Grid */}
      <section className="section bg-navy-900" aria-label="Marketplace services list">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-blue mb-3">Our Core Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Marketplace Solutions
            </h2>
            <p className="text-blue-pale max-w-2xl mx-auto">
              Every card below represents a real, dedicated service. Click through to learn about deliverables, processes,
              and scope.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div key={svc.title} {...fadeUp(i * 0.06)}>
                <Link to={svc.href} className="card-hover group block h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <svc.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-accent transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-blue-pale text-sm leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {svc.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-blue-pale/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-1.5 text-accent text-sm font-semibold pt-4 border-t border-blue-muted/10">
                    Explore service <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="section bg-navy-950" aria-label="Target markets served">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="badge-blue mb-3">International Focus</span>
            <h2 className="text-3xl font-bold text-white mb-4">Serving Eligible Sellers Worldwide</h2>
            <p className="text-blue-pale max-w-xl mx-auto">
              We work remotely with businesses operating in major international marketplace jurisdictions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((m, i) => (
              <motion.div key={m.country} {...fadeUp(i * 0.08)} className="card text-center p-6">
                <div className="text-4xl mb-3">{m.flag}</div>
                <h3 className="text-white font-semibold text-lg mb-1">{m.country}</h3>
                <p className="text-blue-pale/70 text-xs">{m.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section bg-navy-900" id="packages" aria-label="Marketplace service packages">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="badge-teal mb-3">Service Packages</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Flexible Engagement Options
            </h2>
            <p className="text-blue-pale max-w-2xl mx-auto mb-2">
              Every business is unique. We provide clear, structured scopes and tailored proposals rather than generic one-size-fits-all bundles.
            </p>
            <p className="text-xs text-blue-pale/60">
              Note: Platform fees (eBay/Etsy listing fees, subscriptions, and ad spend) are paid directly to platforms and are separate from service fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                {...fadeUp(i * 0.1)}
                className={`card flex flex-col justify-between p-8 relative ${
                  pkg.highlighted ? 'border-accent ring-1 ring-accent/50 shadow-glow' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {pkg.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-blue-pale text-sm mb-6 leading-relaxed">{pkg.desc}</p>
                  <div className="text-2xl font-extrabold text-white mb-6 pb-6 border-b border-blue-muted/10">
                    {pkg.pricing}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-blue-pale">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#consultation"
                  className={pkg.highlighted ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
                >
                  {pkg.ctaText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="section bg-navy-950" id="consultation" aria-label="Consultation request">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="badge-blue mb-3">Free Assessment</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Request Your Marketplace Proposal
            </h2>
            <p className="text-blue-pale max-w-xl mx-auto">
              Share your current store status and goals. We'll evaluate your requirements and provide an honest assessment with recommended next steps.
            </p>
          </motion.div>

          <div className="card p-8 sm:p-10">
            <ConsultationForm defaultService="eBay Store Management" />
          </div>
        </div>
      </section>
    </>
  )
}

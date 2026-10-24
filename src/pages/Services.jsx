import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingBag, Store, Sparkles, Search, TrendingUp,
  Package, BarChart3, ArrowRight, CheckCircle2, ShieldCheck
} from 'lucide-react'
import SEO from '../components/ui/SEO'

const allServices = [
  {
    icon: ShoppingBag,
    name: 'Amazon Marketplace Management',
    tagline: 'End-to-end Seller Central operations, A+ content, catalog health & Sponsored Ads.',
    href: '/services/amazon-management',
    features: [
      'Seller Central operations & compliance review',
      'High-converting product listing creation',
      'Backend search terms & keyword indexing',
      'Inventory coordination & FBA restock guidance',
      'Sponsored Products campaign setup support',
    ],
    badge: 'Core Platform',
  },
  {
    icon: Store,
    name: 'eBay Store Management',
    tagline: 'Store architecture, Cassini search relevancy, item specifics & Promoted Listings.',
    href: '/services/ebay-management',
    features: [
      'eBay Store branding & category structure',
      '80-character title optimization',
      'Exhaustive item specifics completion',
      'Promoted Listings Standard & Advanced support',
      'Defect rate & seller performance protection',
    ],
    badge: 'Core Platform',
  },
  {
    icon: Sparkles,
    name: 'Etsy Shop Management',
    tagline: 'Craft branding, 13-tag keyword research & policy-compliant shop presentation.',
    href: '/services/etsy-management',
    features: [
      'Shop visual identity (banners, icons, policies)',
      '13 search tags & title SEO alignment',
      'Handmade & production partner compliance',
      'Shop sections organization & feature carousels',
      'Listing photography presentation guidance',
    ],
    badge: 'Core Platform',
  },
  {
    icon: Search,
    name: 'Product Research & Market Analysis',
    tagline: 'Data-driven competitor analysis, demand volume evaluation & unit profit economics.',
    href: '/services/product-research',
    features: [
      'Search volume & seasonal demand tracking',
      'Competitor listing quality & price point mining',
      'Gross & net margin viability calculations',
      'Long-tail keyword gap identification',
      'Platform product eligibility reviews',
    ],
  },
  {
    icon: TrendingUp,
    name: 'Listing Optimization & Marketplace SEO',
    tagline: 'High-impact titles, structured attributes, clear copywriting & infographic standards.',
    href: '/services/marketplace-seo',
    features: [
      'Search-intent optimized titles for A9, Cassini & Etsy',
      'Bullet point feature-benefit structuring',
      'Informational product graphic requirements',
      'Conversion-rate focused product descriptions',
      'Listing audit & gap reports',
    ],
  },
  {
    icon: Package,
    name: 'Inventory, Orders & Operations',
    tagline: 'Structured restocking procedures, order fulfillment workflows & operational SOPs.',
    href: '/services/inventory-management',
    features: [
      'Inventory replenishment buffer rhythms',
      'Order dispatch checklist formulation',
      'Customer service response templates',
      'Returns & dispute workflow documentation',
      'Stockout prevention monitoring',
    ],
  },
  {
    icon: BarChart3,
    name: 'Performance Analytics & Reporting',
    tagline: 'Transparent monthly KPI reviews, conversion trend monitoring & actionable next steps.',
    href: '/services/analytics',
    features: [
      'Unit session percentage (conversion) tracking',
      'Average order value (AOV) monitoring',
      'Advertising cost of sales (ACoS/TACoS) reviews',
      'Channel revenue comparison breakdowns',
      'Monthly strategic action plans',
    ],
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Marketplace Management Services | Amazon, eBay & Etsy Solutions"
        description="Explore the complete suite of marketplace management, catalog optimization, product research, and operations advisory services by EmpireX Business Academy."
        canonical="/services"
      />

      {/* Hero */}
      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-4">Dedicated Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Comprehensive Marketplace <span className="text-empire-gold">Management Services</span>
          </h1>
          <p className="text-empire-textPale text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From single-channel store turnarounds to coordinated multi-marketplace operations on Amazon, eBay, and Etsy — we deliver disciplined, measurable execution.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-empire-lightGrey" aria-label="Services List">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-empire-gold">
              Seven Specialized Offerings
            </span>
            <h2 className="text-3xl font-extrabold text-empire-navy mt-1">
              What EmpireX Delivers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((svc) => (
              <div
                key={svc.name}
                className="card-light flex flex-col justify-between hover:border-empire-gold/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-empire-navy text-white flex items-center justify-center">
                      <svc.icon className="w-6 h-6 text-empire-gold" />
                    </div>
                    {svc.badge && (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-empire-goldLight text-[#875500]">
                        {svc.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-empire-navy mb-2">
                    {svc.name}
                  </h3>
                  <p className="text-xs text-empire-textMuted leading-relaxed mb-6">
                    {svc.tagline}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-empire-textDark">
                        <CheckCircle2 className="w-3.5 h-3.5 text-empire-gold flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-empire-border">
                  <Link
                    to={svc.href}
                    className="text-xs font-bold uppercase tracking-wider text-empire-navy hover:text-empire-gold flex items-center gap-1.5 transition-colors"
                  >
                    Explore Service Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t border-empire-border text-center">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-3 text-xs text-empire-textMuted">
          <ShieldCheck className="w-5 h-5 text-empire-gold flex-shrink-0" />
          <p>
            <strong>Service Integrity Standard:</strong> EmpireX does not promise guaranteed search rankings, sales quotas, or automated wealth. All engagements follow platform policies and client approval checkpoints.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section className="section bg-empire-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Need a Custom Marketplace Plan?
          </h2>
          <p className="text-empire-textPale text-sm max-w-xl mx-auto mb-8">
            Tell us about your current store challenges and we'll assemble an operations plan tailored to your product catalog.
          </p>
          <Link to="/contact" className="btn-primary text-xs font-bold uppercase tracking-wider py-3.5 px-8">
            Request a Proposal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

import { TrendingUp, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

export default function MarketplaceSEO() {
  return (
    <>
      <SEO
        title="Listing Optimization & Marketplace SEO | Amazon, eBay & Etsy"
        description="Search-intent optimized titles, complete item specifics, backend keywords, conversion-focused bullet points, and graphic standards."
        canonical="/services/marketplace-seo"
      />

      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-4">Search &amp; Visibility</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Listing Optimization &amp; <span className="text-empire-gold">Marketplace SEO</span>
          </h1>
          <p className="text-empire-textPale text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Aligning product listings with platform search algorithms (Amazon A9, eBay Cassini, and Etsy search) to improve organic visibility and conversion rates.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Search Titles</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Utilizing platform character allowances with high-intent keywords, product identifiers, and core specifications without spamming.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Item Specifics &amp; Tags</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Exhaustive attribute completion ensuring your listings surface when shoppers apply sidebar filter options.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Feature Bullets</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Writing benefit-driven bullet points that answer buyer objections, describe materials, and reduce product returns.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Visual Standards</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Guiding clean hero photography, dimension callout infographics, and packaging views meeting marketplace guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-empire-navy text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Request a Listing Audit</h2>
            <p className="text-xs text-empire-textPale">Share your store link and sample listings for review.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-empire-textDark shadow-2xl">
            <ConsultationForm defaultService="Listing Optimization & Marketplace SEO" />
          </div>
        </div>
      </section>
    </>
  )
}

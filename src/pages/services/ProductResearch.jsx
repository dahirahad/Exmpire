import { Search, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

export default function ProductResearch() {
  return (
    <>
      <SEO
        title="Product Research & Market Analysis | E-Commerce Niche Validation"
        description="Data-informed product research for Amazon, eBay, and Etsy. Competitor reviews, search volume analysis, margin validation, and opportunity scoring."
        canonical="/services/product-research"
      />

      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-4">Strategic Intelligence</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Product Research &amp; <span className="text-empire-gold">Market Analysis</span>
          </h1>
          <p className="text-empire-textPale text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Data-driven demand evaluation, competitor saturation reviews, price elasticity analysis, and unit margin validation before committing capital.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Demand &amp; Volume Trends</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Analyzing historical search queries, category velocity, and seasonal peaks across target geographic territories.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Competitor Saturation</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Evaluating review counts, pricing distribution, listing completeness, and identifying underserved long-tail niches.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Unit Margin Viability</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Calculating landed unit costs, platform referral fees, fulfillment expenses, and advertising allowances to confirm real net profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-empire-navy text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Request a Product Research Report</h2>
            <p className="text-xs text-empire-textPale">Submit your target niche or product concept for evaluation.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-empire-textDark shadow-2xl">
            <ConsultationForm defaultService="Product Research & Market Analysis" />
          </div>
        </div>
      </section>
    </>
  )
}

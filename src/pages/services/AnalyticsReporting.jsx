import { BarChart3, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

export default function AnalyticsReporting() {
  return (
    <>
      <SEO
        title="Analytics & Performance Reporting | E-Commerce KPI Tracking"
        description="Structured performance tracking, revenue trends, unit session conversion analysis, and actionable monthly recommendations by EmpireX."
        canonical="/services/analytics"
      />

      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-4">Data &amp; Insights</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Analytics &amp; <span className="text-empire-gold">Performance Reporting</span>
          </h1>
          <p className="text-empire-textPale text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Clear tracking of revenue trends, order velocity, unit session conversion percentages, advertising efficiency (ACoS/TACoS), and monthly action items.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Conversion &amp; Traffic KPIs</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Evaluating listing impressions, click-through rates, and buy box percentages to identify drop-off points in your sales funnel.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Advertising Performance</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Auditing Sponsored Products, Promoted Listings, and Etsy Ads spend against gross margin to ensure paid campaigns contribute to real profit.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Monthly Strategy Reports</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Delivering executive summaries with clear priority checklists, catalog adjustments, and seasonal opportunities for the upcoming month.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-empire-navy text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Start Receiving Structured Reports</h2>
            <p className="text-xs text-empire-textPale">Tell us about your multi-channel reporting requirements.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-empire-textDark shadow-2xl">
            <ConsultationForm defaultService="Performance Analytics & Reporting" />
          </div>
        </div>
      </section>
    </>
  )
}

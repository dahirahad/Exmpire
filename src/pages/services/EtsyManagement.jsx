import { Link } from 'react-router-dom'
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle, Heart } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

export default function EtsyManagement() {
  return (
    <>
      <SEO
        title="Etsy Shop Management Services | 13-Tag SEO & Policy Compliance"
        description="Professional Etsy shop optimization, 13-tag keyword research, handmade policy compliance, shop branding, and order workflow management."
        canonical="/services/etsy-management"
      />

      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-4">Core Marketplace Service</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Etsy Shop <span className="text-empire-gold">Management</span>
          </h1>
          <p className="text-empire-textPale text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Shop visual identity, 13-tag SEO research, category attribute mapping, and strict policy-compliant store operations for authentic creators.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-gold mb-3">Etsy Seller Standards</span>
              <h2 className="text-3xl font-extrabold text-empire-navy mb-4">
                Respecting the Artisan Marketplace
              </h2>
              <p className="text-xs sm:text-sm text-empire-textDark leading-relaxed mb-4">
                Etsy has strict policies governing handmade authorship, vintage items (20+ years old), and craft supplies. Unauthorized reselling or dropshipping mass-produced items violates Etsy terms and leads to permanent suspension.
              </p>
              <p className="text-xs sm:text-sm text-empire-textDark leading-relaxed">
                EmpireX helps authentic brands present their craft professionally with accurate production partner disclosures, beautiful shop layouts, and strategic tag research.
              </p>
            </div>

            <div className="card-light p-6 sm:p-8 border-l-4 border-l-empire-deepBlue">
              <h3 className="text-lg font-bold text-empire-navy mb-3">Our Etsy Deliverables</h3>
              <ul className="space-y-2.5 text-xs text-empire-textDark">
                {[
                  'Exhaustive 13-tag keyword harvesting using high-intent search phrases',
                  'Shop branding assets: professional banners, logo icons & about story',
                  'Handmade policy compliance & production partner disclosures',
                  'Shop sections structure and featured item arrangements',
                  'Etsy Ads budget allocation advisory and ROAS tracking',
                  'Customer message response templates for custom orders',
                  'Periodic review of Listing Quality Scores and search impression trends',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-empire-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-empire-navy text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Request an Etsy Shop Consultation</h2>
            <p className="text-xs text-empire-textPale">Tell us about your creations and current shop setup.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-empire-textDark shadow-2xl">
            <ConsultationForm defaultMarketplace="Etsy" defaultService="Etsy Shop Management" />
          </div>
        </div>
      </section>
    </>
  )
}

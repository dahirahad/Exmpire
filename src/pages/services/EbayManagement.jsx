import { Link } from 'react-router-dom'
import { Store, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

export default function EbayManagement() {
  return (
    <>
      <SEO
        title="eBay Store Management Services | Cassini SEO & Listing Optimization"
        description="Professional eBay Store management, Cassini algorithm optimization, exhaustive item specifics, Promoted Listings, and seller defect rate protection."
        canonical="/services/ebay-management"
      />

      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-4">Core Marketplace Service</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            eBay Store <span className="text-empire-gold">Management</span>
          </h1>
          <p className="text-empire-textPale text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Store setup assistance, Cassini search optimization, item specifics completion, competitor monitoring, and order workflow support for serious eBay sellers.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-gold mb-3">Cassini Search Engine</span>
              <h2 className="text-3xl font-extrabold text-empire-navy mb-4">
                Mastering eBay's Search Architecture
              </h2>
              <p className="text-xs sm:text-sm text-empire-textDark leading-relaxed mb-4">
                eBay's search algorithm evaluates listing completeness, item specifics, seller handling times, return policies, and defect rates. Missing just two key item specifics can prevent your product from appearing in filtered category results.
              </p>
              <p className="text-xs sm:text-sm text-empire-textDark leading-relaxed">
                EmpireX systematically audits and enriches your catalog, maximizing organic search impressions and advising on efficient Promoted Listings ad rates.
              </p>
            </div>

            <div className="card-light p-6 sm:p-8 border-l-4 border-l-empire-gold">
              <h3 className="text-lg font-bold text-empire-navy mb-3">Key Capabilities</h3>
              <ul className="space-y-2.5 text-xs text-empire-textDark">
                {[
                  'Complete store setup, custom category organization & brand graphics',
                  'Exhaustive item specifics completion (Brand, MPN, Size, Material, Condition)',
                  '80-character title optimization aligned with Cassini search intent',
                  'Promoted Listings Standard and Advanced campaign rate advisory',
                  'Competitor price monitoring and market clearing rate calculations',
                  'Inventory synchronization workflows and multi-variation listings',
                  'Seller standards defense: tracking uploaded on time & late shipment tracking',
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

      <section className="section bg-empire-lightGrey border-y border-empire-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-empire-navy text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'How do you access my eBay store?', a: 'We utilize eBay Multi-User Account Access (MUAA), allowing delegated access to listing and marketing functions without sharing master login credentials.' },
              { q: 'Do you guarantee Top Rated Seller status?', a: 'No. Top Rated status requires fulfilling strict shipment tracking, defect rate, and sales volume criteria over 3 months, which depends on physical fulfillment execution.' },
            ].map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-white border border-empire-border">
                <h3 className="text-sm font-bold text-empire-navy mb-1.5 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-empire-gold flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-xs text-empire-textMuted pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-empire-navy text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Request an eBay Store Evaluation</h2>
            <p className="text-xs text-empire-textPale">Tell us about your inventory catalog and target goals.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-empire-textDark shadow-2xl">
            <ConsultationForm defaultMarketplace="eBay" defaultService="eBay Store Management" />
          </div>
        </div>
      </section>
    </>
  )
}

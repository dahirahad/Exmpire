import { Link } from 'react-router-dom'
import SEO from '../../components/ui/SEO'

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms of Service | EmpireX Business Academy"
        description="Terms and conditions governing the use of EmpireX Business Academy website and advisory service engagements."
        canonical="/terms"
      />

      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <span className="badge-gold mb-3">Legal Agreement</span>
            <h1 className="text-4xl font-extrabold text-empire-navy mb-2">Terms of Service</h1>
            <p className="text-empire-textMuted text-xs">Last Updated: January 2025</p>
          </div>

          <div className="card-light p-8 sm:p-12 space-y-6 text-xs sm:text-sm text-empire-textDark leading-relaxed">
            <h2 className="text-lg font-bold text-empire-navy">1. Scope of Services</h2>
            <p>
              EmpireX Business Academy ("EmpireX") provides e-commerce marketplace consulting, catalog management, listing optimization, product research, and operational advisory services for Amazon, eBay, and Etsy sellers.
            </p>

            <h2 className="text-lg font-bold text-empire-navy">2. Independent Provider Status</h2>
            <p>
              EmpireX Business Academy is an independent third-party service provider. We are not officially affiliated with, certified by, sponsored by, or endorsed by Amazon.com, Inc., eBay Inc., or Etsy, Inc. All respective trademarks and trade names remain the property of their respective corporations.
            </p>

            <h2 className="text-lg font-bold text-empire-navy">3. No Guarantees of Financial Returns or Search Rankings</h2>
            <p>
              <strong>We do not guarantee specific sales revenue, profit margins, conversion volumes, or search ranking positions.</strong> E-commerce performance depends on consumer demand, seasonality, competitor pricing, supplier execution, and platform algorithmic updates outside our control.
            </p>

            <h2 className="text-lg font-bold text-empire-navy">4. Client Responsibilities &amp; Platform Fees</h2>
            <p>
              Clients are responsible for ensuring all listed products comply with platform seller codes and intellectual property laws. All platform subscriptions, insertion fees, transaction fees, and advertising ad spend are billed directly by the respective marketplaces to the client.
            </p>

            <h2 className="text-lg font-bold text-empire-navy">5. Contact Information</h2>
            <p>
              For legal inquiries regarding these Terms, contact:<br />
              <strong>EmpireX Business Academy</strong><br />
              Email: empirexbusinessacademy577@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

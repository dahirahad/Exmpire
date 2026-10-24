import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../../components/ui/SEO'

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer | NEFFTO IT Solution"
        description="Important disclaimers regarding marketplace independence, absence of sales guarantees, and informational website content."
        canonical="/disclaimer"
      />

      <section className="section bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <span className="badge-blue mb-3">Notice</span>
            <h1 className="text-4xl font-extrabold text-white mb-2">Website &amp; Services Disclaimer</h1>
            <p className="text-blue-pale/70 text-sm">Last Updated: January 2025</p>
          </div>

          <div className="card p-8 sm:p-12 prose-dark">
            <h2>1. General Information Only</h2>
            <p>
              The information provided on <strong>https://www.nefftosolution.com/</strong> is for general informational and educational purposes only. While we endeavor to keep content current and accurate, we make no representations or warranties of any kind regarding completeness or accuracy.
            </p>

            <h2>2. No Earnings or Ranking Guarantees</h2>
            <p>
              NEFFTO IT Solution explicitly disclaims any representations or guarantees of commercial results, including but not limited to:
            </p>
            <ul>
              <li>Specific sales volumes or financial returns from eBay or Etsy store management.</li>
              <li>First-page or guaranteed keyword rankings on Google, eBay Cassini, or Etsy search.</li>
              <li>Seller account approval or reinstatement guarantees on any third-party platform.</li>
            </ul>
            <p>
              E-commerce success depends on variable external factors including product appeal, competitive dynamics, pricing, fulfillment speed, customer service, and platform algorithm changes.
            </p>

            <h2>3. Non-Affiliation with eBay and Etsy</h2>
            <p>
              "eBay" and "Etsy" are registered trademarks of eBay Inc. and Etsy, Inc. respectively. NEFFTO IT Solution is an independent digital agency providing professional third-party services. We are not sponsored by, endorsed by, certified by, or affiliated with either corporation.
            </p>

            <h2>4. Third-Party Links</h2>
            <p>
              Our website may contain links to external third-party websites. We have no control over the content, privacy policies, or practices of any third-party sites and assume no responsibility for them.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

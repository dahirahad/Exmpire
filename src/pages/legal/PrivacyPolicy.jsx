import { Link } from 'react-router-dom'
import SEO from '../../components/ui/SEO'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | EmpireX Business Academy"
        description="Learn how EmpireX Business Academy collects, uses, and safeguards personal and store information submitted through our website and consultation forms."
        canonical="/privacy-policy"
      />

      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <span className="badge-gold mb-3">Legal Documentation</span>
            <h1 className="text-4xl font-extrabold text-empire-navy mb-2">Privacy Policy</h1>
            <p className="text-empire-textMuted text-xs">Last Updated: January 2025</p>
          </div>

          <div className="card-light p-8 sm:p-12 space-y-6 text-xs sm:text-sm text-empire-textDark leading-relaxed">
            <p>
              EmpireX Business Academy ("EmpireX", "we", "us", or "our") is committed to protecting the privacy and confidentiality of individuals and business entities visiting our website.
            </p>

            <h2 className="text-lg font-bold text-empire-navy">1. Information We Collect</h2>
            <p>We only collect personal and business information that you voluntarily provide to us when submitting inquiries or consultation forms. This includes:</p>
            <ul className="list-disc pl-5 space-y-1 text-empire-textMuted">
              <li>Full name, business email address, and phone/WhatsApp number.</li>
              <li>Company name, store name, preferred marketplace (Amazon, eBay, Etsy), catalog size, and store URLs.</li>
              <li>Inquiry details, project goals, and estimated budget ranges.</li>
              <li>Technical data including IP address, browser type, and aggregate analytics via Google Analytics.</li>
            </ul>

            <h2 className="text-lg font-bold text-empire-navy">2. How We Use Your Information</h2>
            <p>Collected details are used exclusively for legitimate business communication:</p>
            <ul className="list-disc pl-5 space-y-1 text-empire-textMuted">
              <li>Evaluating and responding to your consultation inquiries.</li>
              <li>Formulating customized project proposals and milestone roadmaps.</li>
              <li>Communicating regarding service delivery, milestones, and questions.</li>
            </ul>

            <h2 className="text-lg font-bold text-empire-navy">3. No Sale of Information &amp; Database-Free Architecture</h2>
            <p>
              <strong>We do not sell, rent, or trade your personal information or store metrics to third parties.</strong> Our website forms process inquiries directly via server-side email dispatch without maintaining an online web database of submitted leads.
            </p>

            <h2 className="text-lg font-bold text-empire-navy">4. Contact Us</h2>
            <p>
              For privacy inquiries or data removal requests, please contact:<br />
              <strong>EmpireX Business Academy</strong><br />
              Email: empirexbusinessacademy577@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

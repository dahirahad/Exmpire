import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../../components/ui/SEO'

export default function CookiesPolicy() {
  return (
    <>
      <SEO
        title="Cookies Policy | NEFFTO IT Solution"
        description="Learn how NEFFTO IT Solution uses cookies and similar technologies to improve website performance."
        canonical="/cookies-policy"
      />

      <section className="section bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <span className="badge-blue mb-3">Policy</span>
            <h1 className="text-4xl font-extrabold text-white mb-2">Cookies Policy</h1>
            <p className="text-blue-pale/70 text-sm">Last Updated: January 2025</p>
          </div>

          <div className="card p-8 sm:p-12 prose-dark">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your computer or mobile device when you visit websites. They help websites recognize your browser, remember preferences, and analyze site performance.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>We use minimal cookies on our website:</p>
            <ul>
              <li><strong>Essential Session Cookies:</strong> To manage basic form submission session state and prevent automated spam submissions.</li>
              <li><strong>Analytics Cookies (Google Analytics):</strong> To understand aggregate visitor trends, popular pages, and performance bottlenecks without identifying individuals.</li>
            </ul>

            <h2>3. Managing Your Cookie Preferences</h2>
            <p>
              Most web browsers allow you to control cookies through their browser settings. You can configure your browser to reject all cookies or alert you when a cookie is being placed. Please note that disabling essential cookies may impact certain form functionalities.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

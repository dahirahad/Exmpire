import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../../components/ui/SEO'

export default function RefundPolicy() {
  return (
    <>
      <SEO
        title="Refund & Cancellation Policy | NEFFTO IT Solution"
        description="Review NEFFTO IT Solution's policy regarding project cancellations, service milestone billing, and refunds."
        canonical="/refund-and-cancellation-policy"
      />

      <section className="section bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <span className="badge-blue mb-3">Billing Terms</span>
            <h1 className="text-4xl font-extrabold text-white mb-2">Refund &amp; Cancellation Policy</h1>
            <p className="text-blue-pale/70 text-sm">Last Updated: January 2025</p>
          </div>

          <div className="card p-8 sm:p-12 prose-dark">
            <h2>1. Service-Based Model</h2>
            <p>
              NEFFTO IT Solution provides professional knowledge, research, design, development, and operational consulting services. Because our work involves custom labor and time investment allocated specifically to your project, our refund principles reflect this reality.
            </p>

            <h2>2. Completed Work</h2>
            <p>
              Fees paid for completed project deliverables, research reports, approved designs, executed optimizations, or passed monthly service periods are non-refundable once delivered.
            </p>

            <h2>3. Project Cancellation &amp; Work in Progress</h2>
            <p>
              If a client requests project cancellation prior to the completion of an agreed milestone:
            </p>
            <ul>
              <li>Work completed up to the date of written cancellation notice will be billed pro-rata based on agreed project terms.</li>
              <li>Any unearned portion of a prepaid milestone deposit may be refunded at NEFFTO's sole discretion, minus incurred non-recoverable third-party expenses.</li>
            </ul>

            <h2>4. Monthly Recurring Retainers</h2>
            <p>
              Monthly store management retainers may be canceled at any time with a written 14-day notice prior to the start of the subsequent monthly billing cycle.
            </p>

            <h2>5. Contact for Inquiries</h2>
            <p>
              If you have any questions regarding your invoice or billing terms, please reach out to: <a href="mailto:info@nefftosolution.com">info@nefftosolution.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

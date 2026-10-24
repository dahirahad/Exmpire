import { Package, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'
import SEO from '../../components/ui/SEO'
import ConsultationForm from '../../components/forms/ConsultationForm'

export default function InventoryManagement() {
  return (
    <>
      <SEO
        title="Inventory & Order Operations | Marketplace Fulfillment Workflows"
        description="Structured inventory replenishment planning, order fulfillment checklists, and customer communication procedures for e-commerce sellers."
        canonical="/services/inventory-management"
      />

      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-4">Operations &amp; Fulfillment</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Inventory, Orders &amp; <span className="text-empire-gold">Operations</span>
          </h1>
          <p className="text-empire-textPale text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Reliable replenishment workflows, order dispatch routines, and dispute handling SOPs to maintain pristine seller account health.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Restock Forecasting</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Establishing reorder points based on lead times, factory buffers, and seasonal sales velocity to prevent search rank drops from stockouts.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Order Dispatch SOPs</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Checklists for tracking number uploads, carrier integration, and handling time adherence to protect On-Time Delivery metrics.
              </p>
            </div>
            <div className="card-light p-6">
              <h3 className="text-base font-bold text-empire-navy mb-2">Customer Communication</h3>
              <p className="text-xs text-empire-textMuted leading-relaxed">
                Professional message templates addressing tracking inquiries, delivery delays, and return authorizations with high buyer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-empire-navy text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Optimize Your Store Operations</h2>
            <p className="text-xs text-empire-textPale">Discuss your fulfillment model and current order volumes.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-empire-textDark shadow-2xl">
            <ConsultationForm defaultService="Inventory & Order Operations" />
          </div>
        </div>
      </section>
    </>
  )
}

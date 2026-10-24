import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import SEO from '../components/ui/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." noIndex />
      <section className="min-h-[70vh] flex items-center justify-center section bg-empire-lightGrey">
        <div className="text-center max-w-lg mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-empire-border shadow-card-light">
          <div className="text-7xl font-black text-empire-gold mb-3">404</div>
          <h1 className="text-2xl font-bold text-empire-navy mb-3">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-empire-textMuted mb-8">
            The page you are looking for doesn't exist or may have been relocated.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary text-xs font-bold uppercase tracking-wider py-3 px-6">
              <Home className="w-4 h-4" /> Go to Homepage
            </Link>
            <Link to="/services" className="btn-secondary text-xs font-bold uppercase tracking-wider py-3 px-6">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

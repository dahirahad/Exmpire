import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import PageLoader from './components/ui/PageLoader'

// Eager load Home for maximum LCP performance
import Home from './pages/Home'

// Lazy-loaded routes
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Trade = lazy(() => import('./pages/Trade'))
const Team = lazy(() => import('./pages/Team'))
const Contact = lazy(() => import('./pages/Contact'))

// Detailed Marketplace Service Pages
const AmazonManagement = lazy(() => import('./pages/services/AmazonManagement'))
const EbayManagement = lazy(() => import('./pages/services/EbayManagement'))
const EtsyManagement = lazy(() => import('./pages/services/EtsyManagement'))
const ProductResearch = lazy(() => import('./pages/services/ProductResearch'))
const MarketplaceSEO = lazy(() => import('./pages/services/MarketplaceSEO'))
const InventoryManagement = lazy(() => import('./pages/services/InventoryManagement'))
const AnalyticsReporting = lazy(() => import('./pages/services/AnalyticsReporting'))

// Legal & System Pages
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/legal/TermsAndConditions'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service Detail Pages */}
            <Route path="/services/amazon-management" element={<AmazonManagement />} />
            <Route path="/services/ebay-management" element={<EbayManagement />} />
            <Route path="/services/etsy-management" element={<EtsyManagement />} />
            <Route path="/services/product-research" element={<ProductResearch />} />
            <Route path="/services/marketplace-seo" element={<MarketplaceSEO />} />
            <Route path="/services/inventory-management" element={<InventoryManagement />} />
            <Route path="/services/analytics" element={<AnalyticsReporting />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown, Menu, X, ArrowRight, ShoppingBag, Store,
  Search, TrendingUp, Package, BarChart3, Globe, Sparkles
} from 'lucide-react'
import Logo from '../ui/Logo'

const servicesMenu = [
  {
    icon: ShoppingBag,
    name: 'Amazon Marketplace Management',
    desc: 'Account operations, listing creation, catalog & advertising.',
    href: '/services/amazon-management',
    badge: 'Core',
  },
  {
    icon: Store,
    name: 'eBay Store Management',
    desc: 'Store setup, Cassini SEO, Promoted Listings & order workflows.',
    href: '/services/ebay-management',
  },
  {
    icon: Sparkles,
    name: 'Etsy Shop Management',
    desc: 'Authentic craft branding, 13-tag research & shop SEO.',
    href: '/services/etsy-management',
  },
  {
    icon: Search,
    name: 'Product Research & Market Analysis',
    desc: 'Data-driven competitor, demand & profit margin evaluation.',
    href: '/services/product-research',
  },
  {
    icon: TrendingUp,
    name: 'Listing Optimization & Marketplace SEO',
    desc: 'Search-aligned titles, item specifics & high-impact graphics.',
    href: '/services/marketplace-seo',
  },
  {
    icon: Package,
    name: 'Inventory & Order Operations',
    desc: 'Restocking workflows, order handling & fulfillment checklists.',
    href: '/services/inventory-management',
  },
  {
    icon: BarChart3,
    name: 'Performance Analytics & Reporting',
    desc: 'Trend monitoring, KPIs, conversion data & monthly reviews.',
    href: '/services/analytics',
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  // Track scroll for sticky shadow
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        scrolled
          ? 'shadow-[0_4px_20px_-4px_rgba(6,26,51,0.08)] border-b border-empire-border'
          : 'border-b border-empire-border/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on Left */}
          <div className="flex-shrink-0">
            <Logo variant="dark" />
          </div>

          {/* Desktop Navigation in Middle */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/')
                  ? 'text-empire-navy bg-empire-lightGrey'
                  : 'text-empire-textDark hover:text-empire-navy hover:bg-empire-lightGrey/70'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/about')
                  ? 'text-empire-navy bg-empire-lightGrey'
                  : 'text-empire-textDark hover:text-empire-navy hover:bg-empire-lightGrey/70'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname.startsWith('/services')
                    ? 'text-empire-navy bg-empire-lightGrey'
                    : 'text-empire-textDark hover:text-empire-navy hover:bg-empire-lightGrey/70'
                }`}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-empire-gold' : 'text-empire-textMuted'
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-[420px] bg-white rounded-2xl border border-empire-border shadow-xl p-3 z-50"
                  >
                    <div className="px-3 py-2 border-b border-empire-border/60 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-empire-textMuted">
                        Marketplace Solutions
                      </span>
                      <Link
                        to="/services"
                        className="text-xs font-semibold text-empire-navy hover:text-empire-gold flex items-center gap-1"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="py-2 space-y-1 max-h-[380px] overflow-y-auto">
                      {servicesMenu.map((svc) => (
                        <Link
                          key={svc.href}
                          to={svc.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-empire-lightGrey group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-empire-navy/5 text-empire-navy flex items-center justify-center flex-shrink-0 group-hover:bg-empire-gold/15 group-hover:text-empire-gold transition-colors">
                            <svc.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-empire-navy group-hover:text-empire-gold transition-colors">
                                {svc.name}
                              </span>
                              {svc.badge && (
                                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-empire-goldLight text-[#A56800]">
                                  {svc.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-empire-textMuted line-clamp-1 mt-0.5">
                              {svc.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/trade"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/trade')
                  ? 'text-empire-navy bg-empire-lightGrey font-bold'
                  : 'text-empire-textDark hover:text-empire-navy hover:bg-empire-lightGrey/70'
              }`}
            >
              Trade
              <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-empire-gold text-empire-navy leading-none">
                Intelligence
              </span>
            </Link>

            <Link
              to="/team"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/team')
                  ? 'text-empire-navy bg-empire-lightGrey'
                  : 'text-empire-textDark hover:text-empire-navy hover:bg-empire-lightGrey/70'
              }`}
            >
              Team
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/contact')
                  ? 'text-empire-navy bg-empire-lightGrey'
                  : 'text-empire-textDark hover:text-empire-navy hover:bg-empire-lightGrey/70'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Prominent Gold CTA on Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-xs tracking-wide uppercase font-bold py-3 px-5">
              Book a Free Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-lg text-empire-navy hover:bg-empire-lightGrey focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-empire-border bg-white px-4 pt-3 pb-6 space-y-3"
          >
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-empire-textDark hover:bg-empire-lightGrey"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-empire-textDark hover:bg-empire-lightGrey"
              >
                About
              </Link>
              <Link
                to="/services"
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-empire-textDark hover:bg-empire-lightGrey"
              >
                Services Overview
              </Link>
              <div className="pl-4 border-l-2 border-empire-gold/40 my-1 space-y-1">
                {servicesMenu.map((svc) => (
                  <Link
                    key={svc.href}
                    to={svc.href}
                    className="block py-1.5 text-sm text-empire-textMuted hover:text-empire-navy"
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/trade"
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-empire-navy flex items-center justify-between hover:bg-empire-lightGrey"
              >
                <span>Trade Intelligence</span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-empire-gold text-empire-navy">
                  Analytics
                </span>
              </Link>
              <Link
                to="/team"
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-empire-textDark hover:bg-empire-lightGrey"
              >
                Team
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-empire-textDark hover:bg-empire-lightGrey"
              >
                Contact
              </Link>
            </nav>

            <div className="pt-2">
              <Link to="/contact" className="btn-primary w-full justify-center py-3.5 text-sm">
                Book a Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

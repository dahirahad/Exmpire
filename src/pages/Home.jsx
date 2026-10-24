import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingBag, Store, Sparkles, TrendingUp, Search,
  Package, BarChart3, CheckCircle2, ArrowRight, ShieldCheck,
  Globe, Award, Zap, Users, Clock, Compass, Layers, Info
} from 'lucide-react'
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip
} from 'recharts'
import SEO from '../components/ui/SEO'


// ── Demo Hero Chart Dataset ──────────────────────────────────────────────────
const heroDemoData = [
  { day: 'M', revenue: 4200 },
  { day: 'T', revenue: 5100 },
  { day: 'W', revenue: 6400 },
  { day: 'T', revenue: 5900 },
  { day: 'F', revenue: 7800 },
  { day: 'S', revenue: 9200 },
  { day: 'S', revenue: 8600 },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('30d')

  return (
    <>
      <SEO
        title="EmpireX Business Academy | Global E-Commerce & Marketplace Management"
        description="Build your global business with EmpireX Business Academy. Professional management, catalog optimization, and data-driven growth for Amazon, eBay, and Etsy sellers."
        canonical="/"
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-empire-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Editorial Authority */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-empire-navy bg-empire-lightGrey px-3 py-1.5 rounded-md border border-empire-border inline-block mb-4">
                Global E-Commerce &amp; Marketplace Growth
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-empire-navy leading-[1.1] mb-6">
                Build Your Global Business with{' '}
                <span className="text-empire-gold">EmpireX.</span>
              </h1>

              <p className="text-empire-textDark text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                EmpireX Business Academy helps businesses and entrepreneurs manage, optimize, and grow their online marketplace operations on <strong>Amazon, eBay, and Etsy</strong> through smarter workflows, stronger listings, and data-driven business decisions.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <Link to="/contact" className="btn-primary text-xs font-bold uppercase tracking-wider py-4 px-8 text-center">
                  Book a Free Consultation
                </Link>
                <Link to="/services" className="btn-secondary text-xs font-bold uppercase tracking-wider py-4 px-8 text-center">
                  Explore Our Services
                </Link>
              </div>

              {/* Supporting Trust Statement */}
              <div className="pt-6 border-t border-empire-border flex items-center gap-3 text-xs font-semibold text-empire-textMuted">
                <ShieldCheck className="w-4 h-4 text-empire-gold flex-shrink-0" />
                <span>Clear strategy. Smarter operations. Sustainable growth.</span>
              </div>
            </div>

            {/* Right Side: Polished Marketplace Analytics Dashboard Illustration */}
            <div className="lg:col-span-5">
              <div className="bg-empire-navy text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-empire-borderDark relative">
                {/* Header with Demo Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-empire-borderDark/60 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                    <span className="text-xs font-bold text-empire-textPale pl-1">Store Intelligence Hub</span>
                  </div>
                  <span className="badge-demo">Demo Data</span>
                </div>

                {/* Dashboard Metrics Row */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-empire-cardDark border border-empire-borderDark/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-empire-textPale block">Gross Sales</span>
                    <div className="text-xl font-black text-white mt-1">$47,200</div>
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                      <TrendingUp className="w-3 h-3" /> +16.4% this month
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-empire-cardDark border border-empire-borderDark/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-empire-textPale block">Orders</span>
                    <div className="text-xl font-black text-white mt-1">1,180</div>
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                      <TrendingUp className="w-3 h-3" /> 98.4% On-time dispatch
                    </span>
                  </div>
                </div>

                {/* Mini Trend Chart */}
                <div className="p-3.5 rounded-xl bg-empire-cardDark border border-empire-borderDark/80 mb-5">
                  <div className="flex items-center justify-between text-xs text-empire-textPale mb-2">
                    <span className="font-semibold">Revenue Trend (7-Day Curve)</span>
                    <span className="text-empire-gold font-bold">$8.6k Today</span>
                  </div>
                  <div className="h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={heroDemoData}>
                        <defs>
                          <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F5A000" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#F5A000" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="revenue" stroke="#F5A000" strokeWidth={2.5} fill="url(#goldGradient)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Marketplace Comparison Cards for Amazon, eBay, Etsy */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-empire-textPale block mb-1">
                    Multi-Marketplace Sync
                  </span>
                  {[
                    { name: 'Amazon', share: '$24,800', rank: 'Buy Box 92%', color: 'border-l-4 border-l-empire-gold' },
                    { name: 'eBay', share: '$14,600', rank: 'Top Rated Status', color: 'border-l-4 border-l-blue-400' },
                    { name: 'Etsy', share: '$7,800', rank: 'Star Seller Badge', color: 'border-l-4 border-l-amber-500' },
                  ].map((row) => (
                    <div key={row.name} className={`p-2.5 rounded-lg bg-empire-navyDark flex items-center justify-between text-xs ${row.color}`}>
                      <span className="font-bold text-white">{row.name}</span>
                      <span className="text-empire-textPale font-medium">{row.rank}</span>
                      <span className="font-extrabold text-empire-gold">{row.share}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ONE PARTNER. THREE MAJOR MARKETPLACES ── */}
     
<section
  className="relative overflow-hidden bg-empire-lightGrey border-b border-empire-border py-20 sm:py-24"
  aria-label="Marketplace management services"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8">

    {/* Section Heading */}
    <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
      <span className="inline-flex items-center gap-2 rounded-full border border-empire-gold/30 bg-empire-goldLight px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#875500]">
        <span className="h-1.5 w-1.5 rounded-full bg-empire-gold" />
        Multi-Channel Expertise
      </span>

      <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-empire-navy leading-tight">
        Three Marketplaces.
        <span className="block mt-2 text-empire-gold">
          One Growth Partner.
        </span>
      </h2>

      <p className="mt-5 text-sm sm:text-base leading-7 text-empire-textMuted max-w-2xl mx-auto">
        From product listings to store optimization, we help businesses
        manage their marketplace operations with clarity, precision, and
        a strategy built for sustainable growth.
      </p>
    </div>

    {/* Marketplace Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

      {/* Amazon */}
      <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-empire-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-empire-navy/30 hover:shadow-xl">

        <div className="h-1.5 w-full bg-empire-navy" />

        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-empire-navy text-empire-gold transition-transform duration-300 group-hover:scale-110">
              <ShoppingBag className="h-7 w-7" />
            </div>

            <span className="rounded-full border border-gray-200 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Marketplace 01
            </span>
          </div>

          <h3 className="mt-7 text-2xl font-extrabold tracking-tight text-empire-navy">
            Amazon Management
          </h3>

          <p className="mt-3 text-sm leading-7 text-empire-textMuted">
            Optimize your Amazon presence with structured catalog
            management, listing improvements, advertising support,
            and inventory coordination.
          </p>

          <div className="my-6 h-px bg-empire-border" />

          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-empire-navy">
            What We Offer
          </h4>

          <ul className="space-y-4 mb-8">
            {[
              "Keyword research & listing optimization",
              "FBA inventory planning & coordination",
              "Sponsored Products campaign support",
            ].map((cap) => (
              <li key={cap} className="flex items-start gap-3 text-sm text-empire-textDark">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-empire-gold" />
                <span className="leading-6">{cap}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-2">
            <Link
              to="/services/amazon-management"
              className="inline-flex w-full items-center justify-between rounded-xl border border-empire-border px-5 py-4 text-xs font-bold uppercase tracking-wider text-empire-navy transition-all duration-300 hover:border-empire-navy hover:bg-empire-navy hover:text-white"
            >
              Explore Amazon Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>

      {/* eBay */}
      <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-empire-gold/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="h-1.5 w-full bg-empire-gold" />

        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-empire-goldLight text-[#875500] transition-transform duration-300 group-hover:scale-110">
              <Store className="h-7 w-7" />
            </div>

            <span className="rounded-full border border-empire-gold/40 bg-empire-goldLight px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#875500]">
              Marketplace 02
            </span>
          </div>

          <h3 className="mt-7 text-2xl font-extrabold tracking-tight text-empire-navy">
            eBay Management
          </h3>

          <p className="mt-3 text-sm leading-7 text-empire-textMuted">
            Build a stronger eBay store with optimized listings,
            product research, organized store categories, and
            performance-focused operational support.
          </p>

          <div className="my-6 h-px bg-empire-border" />

          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-empire-navy">
            What We Offer
          </h4>

          <ul className="space-y-4 mb-8">
            {[
              "Search optimization & item specifics",
              "Promoted Listings campaign guidance",
              "Store structure & category organization",
            ].map((cap) => (
              <li key={cap} className="flex items-start gap-3 text-sm text-empire-textDark">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-empire-gold" />
                <span className="leading-6">{cap}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-2">
            <Link
              to="/services/ebay-management"
              className="inline-flex w-full items-center justify-between rounded-xl bg-empire-navy px-5 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-empire-gold hover:text-empire-navy"
            >
              Explore eBay Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>

      {/* Etsy */}
      <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-empire-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-empire-deepBlue/30 hover:shadow-xl">

        <div className="h-1.5 w-full bg-empire-deepBlue" />

        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-empire-deepBlue/10 text-empire-deepBlue transition-transform duration-300 group-hover:scale-110">
              <Sparkles className="h-7 w-7" />
            </div>

            <span className="rounded-full border border-empire-deepBlue/20 bg-empire-deepBlue/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-empire-deepBlue">
              Marketplace 03
            </span>
          </div>

          <h3 className="mt-7 text-2xl font-extrabold tracking-tight text-empire-navy">
            Etsy Management
          </h3>

          <p className="mt-3 text-sm leading-7 text-empire-textMuted">
            Strengthen your Etsy shop with thoughtful product
            presentation, keyword research, listing SEO, and
            consistent brand identity.
          </p>

          <div className="my-6 h-px bg-empire-border" />

          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-empire-navy">
            What We Offer
          </h4>

          <ul className="space-y-4 mb-8">
            {[
              "Keyword research & listing tag optimization",
              "Shop policy & production partner guidance",
              "Shop branding & visual asset coordination",
            ].map((cap) => (
              <li key={cap} className="flex items-start gap-3 text-sm text-empire-textDark">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-empire-gold" />
                <span className="leading-6">{cap}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-2">
            <Link
              to="/services/etsy-management"
              className="inline-flex w-full items-center justify-between rounded-xl border border-empire-border px-5 py-4 text-xs font-bold uppercase tracking-wider text-empire-navy transition-all duration-300 hover:border-empire-deepBlue hover:bg-empire-deepBlue hover:text-white"
            >
              Explore Etsy Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>

    </div>

    {/* Closing Statement */}
    <div className="mt-12 text-center">
      <p className="text-xs sm:text-sm leading-6 text-empire-textMuted">
        One dedicated partner for marketplace operations, listing
        optimization, and long-term business growth.
      </p>
    </div>

  </div>
</section>


      {/* ── SECTION 3: WHAT WE HELP YOU ACHIEVE ── */}
     
<section
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
  aria-label="Marketplace growth outcomes"
>
  {/* Decorative Background */}
  <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-empire-gold/5 blur-3xl" />
  <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-empire-deepBlue/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

    {/* Section Header */}
    <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
      <span className="inline-flex items-center gap-2 rounded-full border border-empire-gold/30 bg-empire-goldLight px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#875500]">
        <span className="h-1.5 w-1.5 rounded-full bg-empire-gold" />
        The Growth Blueprint
      </span>

      <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-empire-navy sm:text-4xl lg:text-5xl">
        What We Help You
        <span className="mt-1 block text-empire-gold">
          Achieve
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-empire-textMuted sm:text-base">
        Successful marketplace businesses are built on more than listings.
        We bring structure to your operations, clarity to your decisions,
        and strategy to your next stage of growth.
      </p>
    </div>

    {/* Growth Cards */}
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

      {[
        {
          number: "01",
          icon: Search,
          title: "Better Product Visibility",
          desc: "Strengthen listing structure, keyword targeting, and product discoverability to help shoppers find your products.",
          label: "DISCOVER",
          color: "navy",
          accent: "bg-empire-navy",
          iconBg: "bg-empire-navy text-empire-gold",
          border: "hover:border-empire-navy/40",
          glow: "bg-empire-navy/10",
          line: "bg-empire-navy",
        },
        {
          number: "02",
          icon: Package,
          title: "Smarter Operations",
          desc: "Organize product catalogs, inventory workflows, order processing, and routine operational tasks.",
          label: "ORGANIZE",
          color: "gold",
          accent: "bg-empire-gold",
          iconBg: "bg-empire-goldLight text-[#875500]",
          border: "hover:border-empire-gold/60",
          glow: "bg-empire-gold/10",
          line: "bg-empire-gold",
        },
        {
          number: "03",
          icon: BarChart3,
          title: "Informed Decisions",
          desc: "Use available sales data, competitor insights, and margin analysis to make more informed business decisions.",
          label: "ANALYZE",
          color: "teal",
          accent: "bg-teal-600",
          iconBg: "bg-teal-50 text-teal-700",
          border: "hover:border-teal-600/40",
          glow: "bg-teal-500/10",
          line: "bg-teal-600",
        },
        {
          number: "04",
          icon: TrendingUp,
          title: "Sustainable Growth",
          desc: "Build repeatable improvement plans, monitor marketplace performance, and work toward long-term business goals.",
          label: "GROW",
          color: "indigo",
          accent: "bg-indigo-900",
          iconBg: "bg-indigo-50 text-indigo-900",
          border: "hover:border-indigo-900/40",
          glow: "bg-indigo-500/10",
          line: "bg-indigo-900",
        },
      ].map((card) => (
        <article
          key={card.number}
          className={`group relative isolate flex min-h-[390px] flex-col overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${card.border}`}
        >
          {/* Accent Panel */}
          <div
            className={`pointer-events-none absolute -right-10 -top-10 -z-10 h-36 w-36 rounded-bl-[5rem] rounded-tl-[4rem] opacity-[0.07] transition-transform duration-500 group-hover:scale-125 ${card.accent}`}
          />

          {/* Decorative Glow */}
          <div
            className={`pointer-events-none absolute -bottom-16 -right-12 -z-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${card.glow}`}
          />

          {/* Number & Label */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold tracking-[0.2em] text-empire-textMuted">
              STEP {card.number}
            </span>

            <span
              className={`h-1.5 w-8 rounded-full transition-all duration-300 group-hover:w-12 ${card.accent}`}
            />
          </div>

          {/* Icon */}
          <div className="mt-8 flex items-center justify-between">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${card.iconBg}`}
            >
              <card.icon className="h-6 w-6" strokeWidth={1.8} />
            </div>

            <span className="text-4xl font-black tracking-tighter text-gray-100 transition-colors duration-300 group-hover:text-gray-200">
              {card.number}
            </span>
          </div>

          {/* Content */}
          <h3 className="mt-7 text-xl font-extrabold leading-snug tracking-tight text-empire-navy">
            {card.title}
          </h3>

          <div className={`mt-4 h-0.5 w-10 rounded-full ${card.line}`} />

          <p className="mt-5 text-sm leading-7 text-empire-textMuted">
            {card.desc}
          </p>

          {/* Bottom Label */}
          <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-empire-textMuted">
              {card.label}
            </span>

            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-300 group-hover:translate-x-1 ${card.accent}`}
              aria-hidden="true"
            >
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* Bottom Growth Banner */}
    <div className="relative mt-12 overflow-hidden rounded-3xl bg-empire-navy px-6 py-8 shadow-xl sm:mt-16 sm:px-10 sm:py-10 lg:px-12">
      {/* Banner Decoration */}
      <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-6 -top-14 h-44 w-44 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-px w-40 bg-empire-gold/50" />

      <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-empire-gold/30 bg-white/5 text-empire-gold">
          <TrendingUp className="h-8 w-8" strokeWidth={1.7} />
        </div>

        <div className="flex-1">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-empire-gold">
            Your Next Stage Starts Here
          </span>

          <h3 className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            Optimized Operations. Stronger Performance.
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
            Because marketplace success is not just about listing products.
            It is about building a smarter, more organized business.
          </p>
        </div>

        <div className="hidden h-16 w-px bg-white/15 sm:block" />

        <div className="flex flex-shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-empire-gold">
          Built on Strategy
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>

  </div>
</section>


      {/* ── SECTION 4: SERVICES PREVIEW ── */}
      <section className="section bg-empire-lightGrey border-y border-empire-border" aria-label="Services Preview">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="badge-gold mb-2">Our Capabilities</span>
              <h2 className="text-3xl font-extrabold text-empire-navy">Specialized Services</h2>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-wider text-empire-navy hover:text-empire-gold flex items-center gap-1">
              View All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShoppingBag, title: 'Amazon Management', desc: 'Account health, catalog maintenance, listing creation & ad support.', href: '/services/amazon-management' },
              { icon: Store, title: 'eBay Store Management', desc: 'Cassini SEO, store categories, Promoted Listings & order procedures.', href: '/services/ebay-management' },
              { icon: Sparkles, title: 'Etsy Shop Management', desc: 'Shop branding, 13-tag keyword research & policy compliance.', href: '/services/etsy-management' },
              { icon: Search, title: 'Product & Niche Research', desc: 'Data-driven competitor analysis, demand volume & margin assessment.', href: '/services/product-research' },
              { icon: TrendingUp, title: 'Marketplace SEO & Titles', desc: 'Search-aligned titles, comprehensive item specifics & graphics.', href: '/services/marketplace-seo' },
              { icon: Package, title: 'Inventory & Operations', desc: 'Restocking workflows, order handling time adherence & checklist SOPs.', href: '/services/inventory-management' },
            ].map((svc) => (
              <div key={svc.title} className="card-light p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-empire-navy text-white flex items-center justify-center mb-4">
                    <svc.icon className="w-5 h-5 text-empire-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-empire-navy mb-2">{svc.title}</h3>
                  <p className="text-xs text-empire-textMuted leading-relaxed mb-4">{svc.desc}</p>
                </div>
                <Link to={svc.href} className="text-xs font-bold uppercase tracking-wider text-empire-navy hover:text-empire-gold flex items-center gap-1 pt-3 border-t border-empire-border">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW EMPIREX WORKS ── */}
      <section className="section bg-white" aria-label="Process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-gold mb-3">Structured Workflow</span>
            <h2 className="text-3xl font-extrabold text-empire-navy">How EmpireX Works</h2>
            <p className="text-empire-textMuted text-sm mt-2">
              A four-step connected process designed to build predictable operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', name: 'Discover', desc: 'Understand your business, active products, target objectives, budget, and operational challenges.' },
              { step: '02', name: 'Analyze', desc: 'Review existing listings, competitor saturation, category guidelines, and available sales metrics.' },
              { step: '03', name: 'Optimize', desc: 'Implement agreed improvements across titles, item specifics, photography standards, and inventory sync.' },
              { step: '04', name: 'Improve', desc: 'Regularly review results, monitor conversion rates, and recommend ongoing improvements.' },
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-empire-lightGrey border border-empire-border relative">
                <div className="w-9 h-9 rounded-lg bg-empire-navy text-white font-black flex items-center justify-center text-xs mb-4">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-empire-navy mb-2">{s.name}</h3>
                <p className="text-xs text-empire-textMuted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ANALYTICS PREVIEW ── */}
      <section className="section bg-empire-navy text-white" aria-label="Analytics Preview">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge-gold">Interactive Preview</span>
                <span className="badge-demo">Demo Data</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">Marketplace Trade Dashboard</h2>
              <p className="text-empire-textPale text-xs mt-1">Illustrative cross-channel performance analytics</p>
            </div>
            <Link to="/trade" className="btn-primary text-xs font-bold uppercase tracking-wider py-3 px-6">
              Open Full Trade Intelligence <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-empire-cardDark rounded-2xl p-6 border border-empire-borderDark">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-empire-navy border border-empire-borderDark">
                <span className="text-[10px] font-bold uppercase text-empire-textPale">Sample Amazon Volume</span>
                <div className="text-xl font-bold text-white mt-1">$29,800</div>
              </div>
              <div className="p-4 rounded-xl bg-empire-navy border border-empire-borderDark">
                <span className="text-[10px] font-bold uppercase text-empire-textPale">Sample eBay Volume</span>
                <div className="text-xl font-bold text-empire-gold mt-1">$17,200</div>
              </div>
              <div className="p-4 rounded-xl bg-empire-navy border border-empire-borderDark">
                <span className="text-[10px] font-bold uppercase text-empire-textPale">Sample Etsy Volume</span>
                <div className="text-xl font-bold text-white mt-1">$10,400</div>
              </div>
            </div>
            <p className="text-[11px] text-empire-textPale/60 text-center">
              Explore interactive line charts, comparison tables, and our functional unit profit calculator on the Trade page.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHY CHOOSE EMPIREX? ── */}
      <section className="section bg-white" aria-label="Why Choose Us">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-gold mb-3">Partner Standard</span>
            <h2 className="text-3xl font-extrabold text-empire-navy">Why Choose EmpireX?</h2>
            <p className="text-empire-textMuted text-sm mt-2">
              We focus on building reliable operational foundations for online sellers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Marketplace Focus', desc: 'Specialized exclusively in Amazon, eBay, and Etsy rather than trying to be a generic marketing agency.' },
              { title: 'Clear Reporting', desc: 'Transparent communication, consistent review schedules, and honest updates on store performance.' },
              { title: 'Structured Workflows', desc: 'Step-by-step checklists for inventory replenishment, listing cleanup, and customer message handling.' },
              { title: 'Tailored Plans', desc: 'Services scoped to your specific catalog size, platform eligibility, and business requirements.' },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-empire-lightGrey border border-empire-border">
                <h3 className="text-base font-bold text-empire-navy mb-2">{f.title}</h3>
                <p className="text-xs text-empire-textMuted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FINAL CTA ── */}
      <section className="section bg-empire-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="badge-gold mb-4">Start Today</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Grow Your Marketplace Business?
          </h2>
          <p className="text-empire-textPale text-sm sm:text-base max-w-xl mx-auto mb-8">
            Let's discuss your products, current challenges, and practical opportunities for growing your online business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-xs font-bold uppercase tracking-wider py-4 px-8">
              Start Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ResponsiveContainer, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend
} from 'recharts'
import {
  TrendingUp, BarChart3, Calculator, BookOpen, HelpCircle,
  ArrowRight, DollarSign, Package, ShoppingCart, RefreshCw,
  ShieldAlert, CheckCircle2, AlertTriangle, Layers, Info
} from 'lucide-react'
import SEO from '../components/ui/SEO'
import ConsultationForm from '../components/forms/ConsultationForm'

// ── Demo Analytics Datasets ──────────────────────────────────────────────────
const data7Days = [
  { date: 'Mon', amazon: 2400, ebay: 1400, etsy: 800, total: 4600 },
  { date: 'Tue', amazon: 2900, ebay: 1650, etsy: 950, total: 5500 },
  { date: 'Wed', amazon: 3400, ebay: 1800, etsy: 1100, total: 6300 },
  { date: 'Thu', amazon: 3100, ebay: 1950, etsy: 1050, total: 6100 },
  { date: 'Fri', amazon: 4200, ebay: 2400, etsy: 1350, total: 7950 },
  { date: 'Sat', amazon: 4900, ebay: 2800, etsy: 1600, total: 9300 },
  { date: 'Sun', amazon: 4600, ebay: 2600, etsy: 1500, total: 8700 },
]

const data30Days = [
  { date: 'Week 1', amazon: 18500, ebay: 11200, etsy: 6400, total: 36100 },
  { date: 'Week 2', amazon: 22100, ebay: 13400, etsy: 7800, total: 43300 },
  { date: 'Week 3', amazon: 26400, ebay: 15600, etsy: 9100, total: 51100 },
  { date: 'Week 4', amazon: 29800, ebay: 17200, etsy: 10400, total: 57400 },
]

const data90Days = [
  { date: 'Month 1', amazon: 82000, ebay: 48000, etsy: 28000, total: 158000 },
  { date: 'Month 2', amazon: 96000, ebay: 56000, etsy: 33000, total: 185000 },
  { date: 'Month 3', amazon: 114000, ebay: 67000, etsy: 41000, total: 222000 },
]

const marketplaceComparisonData = [
  { name: 'Amazon', revenue: 114000, orders: 2850, margin: 28 },
  { name: 'eBay', revenue: 67000, orders: 1910, margin: 34 },
  { name: 'Etsy', revenue: 41000, orders: 1180, margin: 42 },
]

const currencies = {
  USD: { symbol: '$', rate: 1, label: 'USD ($)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  PKR: { symbol: '₨', rate: 278, label: 'PKR (₨)' },
}

export default function Trade() {
  const [currency, setCurrency] = useState('USD')
  const [timeRange, setTimeRange] = useState('30d')

  // Calculator State
  const [calcInputs, setCalcInputs] = useState({
    price: 45,
    cogs: 14,
    shipping: 5.5,
    feesPct: 15,
    adCost: 6,
    packaging: 1.5,
  })

  const curr = currencies[currency]

  // Chart data selector
  const chartData = useMemo(() => {
    let source = data30Days
    if (timeRange === '7d') source = data7Days
    if (timeRange === '90d') source = data90Days

    return source.map((item) => ({
      ...item,
      amazon: Math.round(item.amazon * curr.rate),
      ebay: Math.round(item.ebay * curr.rate),
      etsy: Math.round(item.etsy * curr.rate),
      total: Math.round(item.total * curr.rate),
    }))
  }, [timeRange, curr.rate])

  // Calculator logic
  const calcResults = useMemo(() => {
    const p = parseFloat(calcInputs.price) || 0
    const cogs = parseFloat(calcInputs.cogs) || 0
    const ship = parseFloat(calcInputs.shipping) || 0
    const fee = (p * (parseFloat(calcInputs.feesPct) || 0)) / 100
    const ad = parseFloat(calcInputs.adCost) || 0
    const pack = parseFloat(calcInputs.packaging) || 0

    const totalCost = cogs + ship + fee + ad + pack
    const profit = p - totalCost
    const margin = p > 0 ? (profit / p) * 100 : 0

    return {
      fee,
      totalCost,
      profit,
      margin,
    }
  }, [calcInputs])

  return (
    <>
      <SEO
        title="Marketplace Trade Intelligence | E-Commerce Business Analytics"
        description="Explore e-commerce marketplace analytics, interactive sales charts, profit margin calculations, and practical trading principles for Amazon, eBay, and Etsy sellers."
        canonical="/trade"
      />

      {/* Hero */}
      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-gold">Trade Intelligence</span>
                <span className="badge-demo">Demonstration Data</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Marketplace Trade <span className="text-empire-gold">Intelligence</span>
              </h1>
              <p className="text-empire-textPale text-lg mt-4 leading-relaxed max-w-2xl">
                Understand your products, sales trends, operating costs, and marketplace performance through clearer data and smarter business analysis.
              </p>
            </div>

            {/* Currency Selector Bar */}
            <div className="bg-empire-cardDark border border-empire-borderDark p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-empire-textPale flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-empire-gold" /> Display Currency:
              </span>
              <div className="flex rounded-lg bg-empire-navy p-1 border border-empire-borderDark">
                {Object.keys(currencies).map((k) => (
                  <button
                    key={k}
                    onClick={() => setCurrency(k)}
                    className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                      currency === k
                        ? 'bg-empire-gold text-empire-navy'
                        : 'text-empire-textPale hover:text-white'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Notice Banner */}
      <div className="bg-empire-goldLight border-b border-empire-gold/30 py-3 px-4 text-center">
        <p className="text-xs font-semibold text-[#875500] max-w-4xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-empire-gold flex-shrink-0" />
          <span>
            <strong>Educational Notice:</strong> EmpireX Business Academy provides e-commerce marketplace analysis, product margin research, and store operations advisory. We are not a cryptocurrency platform, forex broker, or stock trading firm.
          </span>
        </p>
      </div>

      {/* Section 1: Trade Dashboard Metrics */}
      <section className="section bg-white" aria-label="Trade KPI Dashboard">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-empire-gold">
                Illustrative Store Performance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-empire-navy">
                Multi-Channel Marketplace Overview
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-empire-textMuted">Sample Period:</span>
              <div className="flex rounded-lg bg-empire-lightGrey p-1 border border-empire-border">
                {['7d', '30d', '90d'].map((r) => (
                  <button
                    key={r}
                    onClick={() => setTimeRange(r)}
                    className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                      timeRange === r
                        ? 'bg-empire-navy text-white shadow-sm'
                        : 'text-empire-textMuted hover:text-empire-navy'
                    }`}
                  >
                    {r.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-10">
            {[
              { label: 'Gross Sales', val: `${curr.symbol}${(57400 * curr.rate).toLocaleString()}`, change: '+14.2%', note: 'Across 3 marketplaces' },
              { label: 'Total Orders', val: '1,420', change: '+9.8%', note: 'Units dispatched' },
              { label: 'Avg Order Value', val: `${curr.symbol}${(40.42 * curr.rate).toFixed(2)}`, change: '+3.1%', note: 'Per transaction' },
              { label: 'Est. COGS', val: `${curr.symbol}${(18360 * curr.rate).toLocaleString()}`, change: '32% of Rev', note: 'Product sourcing cost' },
              { label: 'Est. Gross Profit', val: `${curr.symbol}${(22840 * curr.rate).toLocaleString()}`, change: '39.8% Margin', note: 'After platform fees', highlight: true },
              { label: 'Active SKUs', val: '148', change: '96% In Stock', note: 'Catalog health' },
            ].map((m) => (
              <div
                key={m.label}
                className={`p-5 rounded-2xl border transition-all ${
                  m.highlighted
                    ? 'bg-empire-goldLight border-empire-gold/40 shadow-sm'
                    : 'bg-white border-empire-border shadow-card-light'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-empire-textMuted mb-2">
                  <span className="font-semibold uppercase tracking-wider">{m.label}</span>
                </div>
                <div className="text-2xl font-extrabold text-empire-navy mb-1">{m.val}</div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {m.change}
                  </span>
                  <span className="text-empire-textMuted text-[11px] truncate">{m.note}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Section 2: Interactive Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sales Trend Line/Area Chart */}
            <div className="lg:col-span-2 card-light p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-empire-navy">Revenue Trend by Marketplace</h3>
                  <p className="text-xs text-empire-textMuted">Comparative channel contribution ({timeRange})</p>
                </div>
                <span className="badge-demo">Demo</span>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAmazon" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#061A33" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#061A33" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorEbay" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F5A000" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#F5A000" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorEtsy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#17243A" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#17243A" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E7EF" />
                    <XAxis dataKey="date" stroke="#687386" fontSize={11} />
                    <YAxis stroke="#687386" fontSize={11} tickFormatter={(v) => `${curr.symbol}${v}`} />
                    <Tooltip
                      formatter={(value, name) => [`${curr.symbol}${value.toLocaleString()}`, name.toUpperCase()]}
                      contentStyle={{ backgroundColor: '#061A33', color: '#fff', borderRadius: '8px', border: 'none' }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="amazon" name="Amazon" stroke="#061A33" fillOpacity={1} fill="url(#colorAmazon)" strokeWidth={2} />
                    <Area type="monotone" dataKey="ebay" name="eBay" stroke="#F5A000" fillOpacity={1} fill="url(#colorEbay)" strokeWidth={2} />
                    <Area type="monotone" dataKey="etsy" name="Etsy" stroke="#17243A" fillOpacity={1} fill="url(#colorEtsy)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Marketplace Comparison Bar Chart */}
            <div className="card-light p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-empire-navy">Channel Volume</h3>
                  <p className="text-xs text-empire-textMuted">Revenue distribution</p>
                </div>
                <span className="badge-demo">Demo</span>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marketplaceComparisonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E7EF" />
                    <XAxis dataKey="name" stroke="#687386" fontSize={11} />
                    <YAxis stroke="#687386" fontSize={11} tickFormatter={(v) => `${curr.symbol}${Math.round(v * curr.rate / 1000)}k`} />
                    <Tooltip
                      formatter={(val) => [`${curr.symbol}${Math.round(val * curr.rate).toLocaleString()}`, 'Revenue']}
                      contentStyle={{ backgroundColor: '#061A33', color: '#fff', borderRadius: '8px', border: 'none' }}
                    />
                    <Bar dataKey="revenue" name="Revenue" fill="#F5A000" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Marketplace Comparison Table */}
      <section className="section bg-empire-lightGrey border-y border-empire-border" aria-label="Marketplace Comparison Table">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-gold mb-3">Multi-Channel Evaluation</span>
            <h2 className="text-3xl font-extrabold text-empire-navy">
              Marketplace Characteristic Comparison
            </h2>
            <p className="text-empire-textMuted text-sm mt-2">
              Every marketplace possesses distinct customer demographics, operational expectations, and fee structures. Note: Actual platform fees vary by category, country, and seller tier.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-empire-border shadow-sm">
            <table className="w-full text-left text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-empire-navy text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Marketplace</th>
                  <th className="py-4 px-6 font-bold">Ideal Categories</th>
                  <th className="py-4 px-6 font-bold">Listing Considerations</th>
                  <th className="py-4 px-6 font-bold">Fulfillment Demands</th>
                  <th className="py-4 px-6 font-bold">Fee Profiles</th>
                  <th className="py-4 px-6 font-bold">Key Growth Metrics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-empire-border text-empire-textDark">
                <tr className="hover:bg-empire-lightGrey/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-empire-navy flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-empire-navy"></span>
                    Amazon
                  </td>
                  <td className="py-4 px-6 text-xs text-empire-textMuted">Consumer electronics, home goods, branded consumables</td>
                  <td className="py-4 px-6 text-xs">Strict A9 algorithm, A+ content, bullet optimization</td>
                  <td className="py-4 px-6 text-xs">FBA (Prime) standard or ultra-fast FBM dispatch</td>
                  <td className="py-4 px-6 text-xs">8%–15% referral fee + FBA fulfillment costs</td>
                  <td className="py-4 px-6 text-xs font-semibold text-empire-navy">Buy Box % &amp; TACoS</td>
                </tr>
                <tr className="hover:bg-empire-lightGrey/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-empire-navy flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-empire-gold"></span>
                    eBay
                  </td>
                  <td className="py-4 px-6 text-xs text-empire-textMuted">Collectibles, refurbished goods, automotive, parts</td>
                  <td className="py-4 px-6 text-xs">80-char titles, exhaustive item specifics, Cassini SEO</td>
                  <td className="py-4 px-6 text-xs">Seller-managed dispatch with tracking verification</td>
                  <td className="py-4 px-6 text-xs">Store subscription + 10%–13% final value fee</td>
                  <td className="py-4 px-6 text-xs font-semibold text-empire-navy">Impression Rank &amp; Defect Rate</td>
                </tr>
                <tr className="hover:bg-empire-lightGrey/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-empire-navy flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-empire-deepBlue"></span>
                    Etsy
                  </td>
                  <td className="py-4 px-6 text-xs text-empire-textMuted">Handmade goods, vintage items (20+ yrs), craft supplies</td>
                  <td className="py-4 px-6 text-xs">13 search tags, craft storytelling, authentic photography</td>
                  <td className="py-4 px-6 text-xs">Clear handling time for customized/made-to-order items</td>
                  <td className="py-4 px-6 text-xs">$0.20 listing fee + 6.5% transaction + processing</td>
                  <td className="py-4 px-6 text-xs font-semibold text-empire-navy">Listing Quality Score &amp; Reviews</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Eight Marketplace Trading Principles */}
      <section className="section bg-white" id="principles" aria-label="8 Marketplace Trading Principles">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="badge-gold mb-3">Core Knowledge</span>
            <h2 className="text-3xl font-extrabold text-empire-navy">
              Eight Core Marketplace Trading Principles
            </h2>
            <p className="text-empire-textMuted text-sm mt-2">
              Sustainable e-commerce operations rely on disciplined analysis, structured workflows, and proactive cost control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Product Research',
                desc: 'Evaluate customer search volume, competitor concentration, sourcing feasibility, and platform product eligibility before investing in inventory.',
              },
              {
                num: '02',
                title: 'Cost & Profit Discipline',
                desc: 'Net Profit = Revenue − Total Operating Costs. Profit Margin (%) = (Net Profit ÷ Revenue) × 100. Never evaluate product viability on gross margin alone.',
              },
              {
                num: '03',
                title: 'Pricing Strategy',
                desc: 'Balance competitor price points with margin protection. Avoid destructive price wars that compromise product quality or capital reserves.',
              },
              {
                num: '04',
                title: 'Listing Quality',
                desc: 'Complete all required item specifics, utilize full character limits with high-intent keywords, and provide clear product specifications that prevent returns.',
              },
              {
                num: '05',
                title: 'Inventory Forecasting',
                desc: 'Maintain reorder buffer times, avoid costly stockouts that hurt algorithm ranking, and systematically liquidate dead stock to free working capital.',
              },
              {
                num: '06',
                title: 'Customer Experience',
                desc: 'Accurate product photography, responsive buyer communications, and transparent delivery expectations reduce defect rates and account risks.',
              },
              {
                num: '07',
                title: 'Data-Driven Reviews',
                desc: 'Monitor impressions, click-through rate (CTR), unit session percentage (conversion), and ad spend efficiency rather than relying on guesswork.',
              },
              {
                num: '08',
                title: 'Policy & Risk Management',
                desc: 'Respect intellectual property laws, adhere to platform seller codes of conduct, and conduct regular account health checkups to protect your business assets.',
              },
            ].map((p) => (
              <div key={p.num} className="card-light p-6 relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-empire-gold/40 mb-2 block">{p.num}</span>
                  <h3 className="text-lg font-bold text-empire-navy mb-2">{p.title}</h3>
                  <p className="text-xs text-empire-textMuted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Functional Product Profit Calculator */}
      <section className="section bg-empire-navy text-white" id="calculator" aria-label="Product Profit Calculator">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-gold mb-3">Interactive Tool</span>
            <h2 className="text-3xl font-extrabold text-white">
              Product Profitability Calculator
            </h2>
            <p className="text-empire-textPale text-sm mt-2">
              Test your unit economics. Total Cost = Product Cost + Shipping + Marketplace Fees + Advertising + Packaging.
            </p>
          </div>

          <div className="bg-empire-cardDark border border-empire-borderDark rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Inputs Column */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-empire-borderDark">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-empire-gold">Input Unit Economics</h3>
                  <button
                    onClick={() => setCalcInputs({ price: 45, cogs: 14, shipping: 5.5, feesPct: 15, adCost: 6, packaging: 1.5 })}
                    className="text-xs text-empire-textPale hover:text-white flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" /> Reset Defaults
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-empire-textPale font-medium block mb-1">Selling Price ({curr.symbol})</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={calcInputs.price}
                      onChange={(e) => setCalcInputs({ ...calcInputs, price: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-empire-navy border border-empire-borderDark text-white font-bold text-sm focus:outline-none focus:border-empire-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-empire-textPale font-medium block mb-1">Product Sourcing Cost ({curr.symbol})</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={calcInputs.cogs}
                      onChange={(e) => setCalcInputs({ ...calcInputs, cogs: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-empire-navy border border-empire-borderDark text-white text-sm focus:outline-none focus:border-empire-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-empire-textPale font-medium block mb-1">Shipping &amp; Delivery ({curr.symbol})</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={calcInputs.shipping}
                      onChange={(e) => setCalcInputs({ ...calcInputs, shipping: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-empire-navy border border-empire-borderDark text-white text-sm focus:outline-none focus:border-empire-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-empire-textPale font-medium block mb-1">Platform Fee Est. (%)</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="100"
                      value={calcInputs.feesPct}
                      onChange={(e) => setCalcInputs({ ...calcInputs, feesPct: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-empire-navy border border-empire-borderDark text-white text-sm focus:outline-none focus:border-empire-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-empire-textPale font-medium block mb-1">Target Ad Cost per Sale ({curr.symbol})</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={calcInputs.adCost}
                      onChange={(e) => setCalcInputs({ ...calcInputs, adCost: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-empire-navy border border-empire-borderDark text-white text-sm focus:outline-none focus:border-empire-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-empire-textPale font-medium block mb-1">Packaging &amp; Misc ({curr.symbol})</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={calcInputs.packaging}
                      onChange={(e) => setCalcInputs({ ...calcInputs, packaging: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-empire-navy border border-empire-borderDark text-white text-sm focus:outline-none focus:border-empire-gold"
                    />
                  </div>
                </div>

                <p className="text-[11px] text-empire-textPale/60 italic pt-2">
                  *Estimates do not account for variable tax rates, credit processing surcharges, or customer return rates.
                </p>
              </div>

              {/* Live Output Card */}
              <div className="bg-empire-navy rounded-2xl border border-empire-borderDark p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-empire-textPale">Estimated Unit Outcome</span>
                  <div className="mt-4 pb-4 border-b border-empire-borderDark/60 flex items-baseline justify-between">
                    <span className="text-xs text-empire-textPale">Est. Total Cost per Unit:</span>
                    <span className="text-lg font-bold text-white">{curr.symbol}{calcResults.totalCost.toFixed(2)}</span>
                  </div>

                  <div className="py-4 border-b border-empire-borderDark/60 flex items-baseline justify-between">
                    <span className="text-xs text-empire-textPale">Est. Net Profit per Unit:</span>
                    <span className={`text-2xl font-black ${calcResults.profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {curr.symbol}{calcResults.profit.toFixed(2)}
                    </span>
                  </div>

                  <div className="py-4 flex items-baseline justify-between">
                    <span className="text-xs text-empire-textPale">Estimated Net Profit Margin:</span>
                    <span className={`text-2xl font-black ${calcResults.margin >= 15 ? 'text-empire-gold' : calcResults.margin >= 0 ? 'text-amber-300' : 'text-red-400'}`}>
                      {calcResults.margin.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {calcResults.profit < 0 ? (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>Warning: Total unit expenses exceed selling price. Revise ad budget or sourcing cost.</span>
                  </div>
                ) : (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Viable unit margin. Ready for catalog scaling and volume tests.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Business Glossary */}
      <section className="section bg-white" id="glossary" aria-label="E-Commerce Glossary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="badge-gold mb-3">Terminology</span>
            <h2 className="text-3xl font-extrabold text-empire-navy">
              Marketplace Trading Glossary
            </h2>
            <p className="text-empire-textMuted text-sm mt-2">
              Essential business and financial definitions explained clearly for online sellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { term: 'Gross Revenue', def: 'The total dollar amount of product sales generated over a designated period before deducting costs, fees, or returns.', ex: 'Selling 100 units at $50 = $5,000 Gross Revenue.' },
              { term: 'Net Profit', def: 'The residual earnings remaining after all product sourcing, shipping, marketplace fees, ad spend, and operating overhead are subtracted from revenue.', ex: '$5,000 revenue minus $3,200 total expenses = $1,800 Net Profit.' },
              { term: 'Gross Profit', def: 'Revenue minus direct Cost of Goods Sold (COGS), before accounting for advertising or administrative overhead.', ex: '$50 selling price minus $15 factory sourcing = $35 Gross Profit.' },
              { term: 'Profit Margin (%)', def: 'The percentage of revenue that turns into profit: (Net Profit ÷ Gross Revenue) × 100.', ex: '$1,800 net profit on $5,000 revenue yields a 36% Net Profit Margin.' },
              { term: 'Conversion Rate (Unit Session %)', def: 'The percentage of unique shopper visits to your listing that culminate in a confirmed purchase.', ex: '1,000 product listing sessions resulting in 30 orders = 3.0% conversion rate.' },
              { term: 'Average Order Value (AOV)', def: 'The average amount of money spent by customers in a single order: Total Revenue ÷ Total Orders.', ex: '$10,000 revenue across 200 orders = $50 AOV.' },
              { term: 'Advertising Cost (ACoS / TACoS)', def: 'Advertising Cost of Sales (Ad Spend ÷ Ad Revenue). TACoS measures total ad spend divided by total gross revenue.', ex: '$300 ad spend generating $1,000 ad sales = 30% ACoS.' },
              { term: 'Return on Ad Spend (ROAS)', def: 'Revenue generated for every dollar spent on paid campaigns: Ad Revenue ÷ Ad Spend.', ex: '$4,000 in sales generated from $1,000 ad spend = 4.0x ROAS.' },
              { term: 'Inventory Turnover', def: 'The number of times inventory is sold and replaced over a given reporting period (COGS ÷ Average Inventory).', ex: 'Higher turnover prevents stale stock and frees working capital.' },
              { term: 'Sell-Through Rate', def: 'The percentage of inventory sold in a month compared to the starting inventory: (Units Sold ÷ Starting Stock) × 100.', ex: 'Selling 80 units out of 100 on hand = 80% sell-through rate.' },
            ].map((item) => (
              <div key={item.term} className="card-light p-6">
                <h3 className="text-base font-bold text-empire-navy mb-2">{item.term}</h3>
                <p className="text-xs text-empire-textDark leading-relaxed mb-3">{item.def}</p>
                <div className="p-2.5 rounded-lg bg-empire-lightGrey text-[11px] text-empire-textMuted border border-empire-border">
                  <span className="font-semibold text-empire-navy">Example: </span>{item.ex}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Trade FAQ */}
      <section className="section bg-empire-lightGrey border-t border-empire-border" id="faq" aria-label="Trade FAQs">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-gold mb-3">Questions &amp; Answers</span>
            <h2 className="text-3xl font-extrabold text-empire-navy">
              Frequently Asked Marketplace Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How should I select which marketplace to start with?',
                a: 'Product characteristics dictate the best platform. Unique handmade, personalized, or vintage goods thrive on Etsy. Branded, high-demand, commoditized consumer products with strong supply chains perform best on Amazon. Overstock, collectibles, auto parts, and niche goods frequently achieve higher margins on eBay.'
              },
              {
                q: 'How can I estimate accurate product profitability?',
                a: 'Calculate your landed unit cost (manufacturing + freight + customs), estimate platform category referral fees, budget for realistic advertising (typically 10%–20% of sales), packaging, and account for a 2%–5% return allowance before placing bulk production orders.'
              },
              {
                q: 'How do marketplace fees affect long-term profit?',
                a: 'Platform fees typically range from 8% to 15% on Amazon and eBay, plus fixed transaction charges and payment processing fees. Sellers must ensure gross margins exceed 40%–50% to absorb fees and retain healthy net profits.'
              },
              {
                q: 'How often should a seller review performance metrics?',
                a: 'Key operational checks (account health, customer messages, inventory stockout warnings) should occur daily. PPC advertising and listing conversion rates should be reviewed weekly. Financial net margins and inventory turnover should be analyzed monthly.'
              },
              {
                q: 'Can EmpireX manage an existing, established marketplace store?',
                a: 'Yes. We work with both newly launched stores and established sellers who require structured catalog optimization, inventory synchronization, listing cleanup, and ongoing operational management.'
              },
              {
                q: 'Does EmpireX Business Academy guarantee sales or profit outcomes?',
                a: 'No. We do not guarantee specific sales, revenue, or profit figures. E-commerce performance depends on consumer demand, seasonality, competitor actions, pricing, and platform algorithm changes. We focus on executing proven, disciplined management workflows.'
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-empire-border p-6 shadow-sm">
                <h3 className="text-base font-bold text-empire-navy mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-empire-gold flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-xs text-empire-textMuted pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Trade Consultation CTA */}
      <section className="section bg-empire-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="badge-gold mb-4">Strategic Action</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Make Better Marketplace Decisions
          </h2>
          <p className="text-empire-textPale text-base mb-8 max-w-xl mx-auto">
            Let EmpireX Business Academy help you evaluate your marketplace operations and identify practical opportunities for improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#trade-form" className="btn-primary text-sm font-bold uppercase tracking-wider py-3.5 px-8">
              Request a Trade Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Embedded Inquiry Form */}
      <section className="section bg-white" id="trade-form">
        <div className="max-w-3xl mx-auto">
          <div className="card-light p-8 sm:p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-empire-navy">Book Your Marketplace Evaluation</h3>
              <p className="text-xs text-empire-textMuted mt-1">Direct communication &bull; Zero database storage &bull; Confidential review</p>
            </div>
            <ConsultationForm defaultService="Performance Analytics & Reporting" />
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Target, Eye, Compass, ShieldCheck, CheckCircle2,
  Users, ArrowRight, MapPin, Globe, Award, BookOpen,
  Building2, Laptop, TrendingUp, Layers, Check, Sparkles
} from 'lucide-react'
import SEO from '../components/ui/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About EmpireX Business Academy | Bahawalpur Headquarters & Global Marketplace Operations"
        description="Learn about EmpireX Business Academy's mission, operational methodology, and Bahawalpur headquarters. We train specialists and manage international stores across Amazon, eBay, and Etsy."
        canonical="/about"
      />

      {/* ── HERO SECTION ── */}
      <section className="bg-empire-navy text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-empire-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-empire-cardDark border border-empire-borderDark mb-6">
            <span className="w-2 h-2 rounded-full bg-empire-gold animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-empire-gold">
              Headquarters: Bahawalpur, Punjab, Pakistan
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Pioneering E-Commerce Excellence from{' '}
            <span className="text-empire-gold">Bahawalpur to the World.</span>
          </h1>

          <p className="text-empire-textPale text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            EmpireX Business Academy is a premier marketplace management academy and international e-commerce growth partner. Headquartered in Bahawalpur, Pakistan, we combine rigorous operational training with dedicated store management for clients competing across Amazon, eBay, and Etsy in the USA, UK, Canada, and Australia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link to="/contact" className="btn-primary text-xs font-bold uppercase tracking-wider py-4 px-8">
              Book a Strategic Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-secondary text-xs font-bold uppercase tracking-wider py-4 px-8 bg-empire-cardDark text-white border-empire-borderDark hover:bg-empire-deepBlue">
              Explore Management Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK METRICS & CREDIBILITY BAR ── */}
      <section className="bg-empire-navyDark py-8 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 border-r border-empire-borderDark/40 last:border-none">
            <span className="text-2xl sm:text-3xl font-black text-white">Bahawalpur</span>
            <p className="text-xs text-empire-gold uppercase font-bold tracking-wider mt-0.5">Central Operations Hub</p>
          </div>
          <div className="p-4 border-r border-empire-borderDark/40 last:border-none">
            <span className="text-2xl sm:text-3xl font-black text-white">3 Platforms</span>
            <p className="text-xs text-empire-gold uppercase font-bold tracking-wider mt-0.5">Amazon &bull; eBay &bull; Etsy</p>
          </div>
          <div className="p-4 border-r border-empire-borderDark/40 last:border-none">
            <span className="text-2xl sm:text-3xl font-black text-white">100% Ethical</span>
            <p className="text-xs text-empire-gold uppercase font-bold tracking-wider mt-0.5">Policy-Compliant Standards</p>
          </div>
          <div className="p-4">
            <span className="text-2xl sm:text-3xl font-black text-white">Global Reach</span>
            <p className="text-xs text-empire-gold uppercase font-bold tracking-wider mt-0.5">USA, UK, CA, AU Clients</p>
          </div>
        </div>
      </section>

      {/* ── THREE IMPORTANT CARDS (MISSION, VISION, APPROACH) ── */}
      <section className="section bg-white" aria-label="Mission, Vision, Approach">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="badge-gold mb-3">Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-empire-navy">
              The Three Core Pillars of EmpireX
            </h2>
            <p className="text-empire-textMuted text-sm mt-2">
              Every decision, training syllabus, and client catalog we touch is anchored in these three commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 — Our Mission */}
            <div className="card-light p-8 sm:p-10 flex flex-col justify-between border-t-4 border-t-empire-gold hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-empire-goldLight flex items-center justify-center mb-6 text-[#875500]">
                  <Target className="w-7 h-7 text-empire-gold" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-empire-gold block mb-1">
                  Pillar 01 &bull; Purpose
                </span>
                <h3 className="text-2xl font-bold text-empire-navy mb-4">Our Mission</h3>
                <blockquote className="text-sm font-bold text-empire-navy leading-snug mb-4 pl-3 border-l-2 border-empire-gold italic">
                  "Help businesses manage their marketplace operations with greater clarity, consistency, and confidence."
                </blockquote>
                <p className="text-xs text-empire-textMuted leading-relaxed">
                  We demystify marketplace algorithms and replace chaotic guesswork with disciplined Standard Operating Procedures (SOPs). From catalog structure to stock forecasting, we help businesses build resilient operational habits that stand the test of time.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-empire-border">
                <span className="text-[11px] font-semibold text-empire-navy flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-empire-gold" /> Reliable Communication &amp; Clear Roadmaps
                </span>
              </div>
            </div>

            {/* Card 2 — Our Vision */}
            <div className="card-light p-8 sm:p-10 flex flex-col justify-between border-t-4 border-t-empire-navy hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-empire-navy/10 flex items-center justify-center mb-6 text-empire-navy">
                  <Eye className="w-7 h-7 text-empire-navy" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-empire-navy block mb-1">
                  Pillar 02 &bull; Future
                </span>
                <h3 className="text-2xl font-bold text-empire-navy mb-4">Our Vision</h3>
                <blockquote className="text-sm font-bold text-empire-navy leading-snug mb-4 pl-3 border-l-2 border-empire-navy italic">
                  "Make professional marketplace knowledge and management more accessible to ambitious businesses."
                </blockquote >
                <p className="text-xs text-empire-textMuted leading-relaxed">
                  We envision a level playing field where international brand owners, authentic artisans, and forward-thinking entrepreneurs can build high-performing stores on Amazon, eBay, and Etsy, supported by elite talent trained right here in Pakistan.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-empire-border">
                <span className="text-[11px] font-semibold text-empire-navy flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-empire-navy" /> Empowering Modern Global Merchants
                </span>
              </div>
            </div>

            {/* Card 3 — Our Approach */}
            <div className="card-light p-8 sm:p-10 flex flex-col justify-between border-t-4 border-t-empire-deepBlue hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-empire-deepBlue/10 flex items-center justify-center mb-6 text-empire-deepBlue">
                  <Compass className="w-7 h-7 text-empire-deepBlue" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-empire-deepBlue block mb-1">
                  Pillar 03 &bull; Methodology
                </span>
                <h3 className="text-2xl font-bold text-empire-navy mb-4">Our Approach</h3>
                <blockquote className="text-sm font-bold text-empire-navy leading-snug mb-4 pl-3 border-l-2 border-empire-deepBlue italic">
                  "Combine marketplace knowledge, organized workflows, and performance analysis to support better business decisions."
                </blockquote>
                <p className="text-xs text-empire-textMuted leading-relaxed">
                  We don't rely on hype or arbitrary tactics. We prioritize understanding client unit economics, validating search intent with real quantitative data, executing meticulous listing enrichments, and tracking key performance indicators weekly.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-empire-border">
                <span className="text-[11px] font-semibold text-empire-navy flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-empire-gold" /> Data-Backed Execution &amp; Continuous Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE BAHAWALPUR HUB & EDITORIAL STORY ── */}
      <section className="section bg-empire-lightGrey border-y border-empire-border" aria-label="Bahawalpur Hub & Our Story">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="badge-gold">Rooted in Knowledge &amp; Heritage</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-empire-navy leading-tight">
                Why Bahawalpur is the Operational Heart of EmpireX
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-empire-textDark leading-relaxed">
                <p>
                  Historically renowned as a royal city of architectural wonder, palatial heritage, and premier educational institutions, <strong>Bahawalpur, Punjab, Pakistan</strong> has rapidly transformed into a vibrant center for digital innovation, technological talent, and global e-commerce expertise.
                </p>
                <p>
                  At EmpireX Business Academy, we chose Bahawalpur deliberately as our institutional headquarters. Here, we have assembled top university graduates, skilled analytical researchers, and native-level English business communicators into a disciplined marketplace operational center.
                </p>
                <p>
                  Our Bahawalpur facility operates two synchronized divisions:
                </p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-empire-gold mt-1.5 flex-shrink-0" />
                    <span><strong>The E-Commerce Training &amp; Trading Lab:</strong> A state-of-the-art simulation facility where aspiring professionals and entrepreneurs learn the intricacies of Amazon Seller Central, eBay Cassini item specifics, and Etsy handmade guidelines.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-empire-gold mt-1.5 flex-shrink-0" />
                    <span><strong>The Global Marketplace Management Command:</strong> A dedicated corporate services department managing active client stores, order workflows, customer service communication, and advertising campaigns for overseas sellers around the clock.</span>
                  </li>
                </ul>
                <p>
                  By cultivating local excellence, we provide international businesses with world-class marketplace talent at exceptional operational efficiency.
                </p>
              </div>
            </div>

            {/* Right: Bahawalpur Command Center Showcase Box */}
            <div className="lg:col-span-5">
              <div className="bg-empire-navy text-white rounded-3xl p-8 border border-empire-borderDark shadow-2xl relative">
                <div className="flex items-center gap-3 pb-4 border-b border-empire-borderDark mb-6">
                  <Building2 className="w-6 h-6 text-empire-gold" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Bahawalpur Facility Overview</h3>
                    <p className="text-xs text-empire-textPale">Punjab, Pakistan &bull; Operational Headquarters</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-empire-cardDark border border-empire-borderDark/80">
                    <span className="text-[10px] font-bold uppercase text-empire-gold block">Timezone Alignment</span>
                    <p className="text-white font-semibold mt-0.5">Global Overlap Desks</p>
                    <p className="text-empire-textPale text-[11px] mt-1">Direct communication coverage spanning US Eastern/Pacific, UK GMT, and Australian AEST hours.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-empire-cardDark border border-empire-borderDark/80">
                    <span className="text-[10px] font-bold uppercase text-empire-gold block">Facility Infrastructure</span>
                    <p className="text-white font-semibold mt-0.5">High-Speed Fiber &amp; Cloud Workstations</p>
                    <p className="text-empire-textPale text-[11px] mt-1">Multi-redundant network infrastructure ensuring uninterrupted store monitoring and rapid customer messaging.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-empire-cardDark border border-empire-borderDark/80">
                    <span className="text-[10px] font-bold uppercase text-empire-gold block">Academy Certification</span>
                    <p className="text-white font-semibold mt-0.5">SOP-Trained Specialist Cohorts</p>
                    <p className="text-empire-textPale text-[11px] mt-1">All account managers undergo strict practical evaluations covering compliance, keyword mining, and defect mitigation.</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-empire-borderDark/80 text-[11px] text-empire-textPale flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-empire-gold" /> Bahawalpur, PK
                  </span>
                  <span className="text-emerald-400 font-bold">&bull; Active Operational Center</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMIC & OPERATIONAL FRAMEWORK ── */}
      <section className="section bg-white" aria-label="Systematic Framework">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="badge-gold mb-3">Our Framework</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-empire-navy">
              The EmpireX 4-Phase System
            </h2>
            <p className="text-empire-textMuted text-sm mt-2">
              How our Bahawalpur team guides marketplace businesses toward sustainable scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Phase 01',
                title: 'Market Validation & Economics',
                desc: 'Quantitative demand analysis, competitor saturation audits, platform fee mapping, and landed unit cost calculations before risking inventory.',
              },
              {
                step: 'Phase 02',
                title: 'Catalog & Algorithm SEO',
                desc: 'Complete keyword indexing, 80-character Cassini title enrichment, 13-tag Etsy research, and A+ brand content layout formulation.',
              },
              {
                step: 'Phase 03',
                title: 'Operations & Fulfillment SOPs',
                desc: 'Establishing restocking buffer alerts, order dispatch checklists, carrier tracking sync, and customer communication workflows to protect seller standards.',
              },
              {
                step: 'Phase 04',
                title: 'Analytics & Multi-Channel Scale',
                desc: 'Weekly conversion rate reviews, TACoS advertising efficiency optimization, and monthly executive performance strategy roadmaps.',
              },
            ].map((phase) => (
              <div key={phase.step} className="card-light p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-empire-gold tracking-wider uppercase block mb-2">
                    {phase.step}
                  </span>
                  <h3 className="text-lg font-bold text-empire-navy mb-2">{phase.title}</h3>
                  <p className="text-xs text-empire-textMuted leading-relaxed">{phase.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-empire-border text-[11px] text-empire-navy font-bold flex items-center gap-1">
                  EmpireX Standard <Check className="w-3.5 h-3.5 text-empire-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES & ETHICS ── */}
      <section className="section bg-empire-lightGrey border-y border-empire-border" aria-label="Core Values">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-gold mb-3">Our Compass</span>
            <h2 className="text-3xl font-extrabold text-empire-navy">
              Guiding Values &amp; Ethical Standards
            </h2>
            <p className="text-empire-textMuted text-sm mt-2">
              We believe long-term e-commerce wealth is built on truth in data and strict adherence to marketplace rules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Transparency in Data',
                desc: 'We present unvarnished metrics. If a product niche has insufficient margin or excessive ad costs, we advise clients frankly before capital is lost.',
              },
              {
                title: 'Strict Policy Adherence',
                desc: 'We zero-tolerance black-hat review schemes, unauthorized dropshipping, or counterfeit goods. We protect your account as our primary asset.',
              },
              {
                title: 'Accountability & Ownership',
                desc: 'Every account manager takes ownership of agreed project milestones, customer service SLAs, and listing completeness.',
              },
              {
                title: 'Continuous Algorithmic Learning',
                desc: 'Marketplace search algorithms evolve monthly. Our academy researchers continually study updates across Amazon A10, Cassini, and Etsy search.',
              },
              {
                title: 'Global Client Partnership',
                desc: 'We operate as an integrated extension of your business, aligning our working hours and reporting to your local timezone.',
              },
              {
                title: 'Craft & Quality Standards',
                desc: 'From character limits and image dimensions to item specifics, precision in detail is non-negotiable across every catalog we manage.',
              },
            ].map((v) => (
              <div key={v.title} className="card-light p-6">
                <h3 className="text-base font-bold text-empire-navy mb-2">{v.title}</h3>
                <p className="text-xs text-empire-textMuted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT CTA SECTION ── */}
      <section className="section bg-empire-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="badge-gold mb-3">Start the Conversation</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Let's Build Your Next Stage of Growth.
          </h2>
          <p className="text-empire-textPale text-sm sm:text-base max-w-xl mx-auto mb-8">
            Connect directly with our marketplace management team at our Bahawalpur headquarters or schedule a virtual discovery call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-xs font-bold uppercase tracking-wider py-4 px-8">
              Talk to Our Team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/trade" className="btn-secondary text-xs font-bold uppercase tracking-wider py-4 px-8 bg-empire-cardDark text-white border-empire-borderDark hover:bg-empire-deepBlue">
              Explore Trade Intelligence
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

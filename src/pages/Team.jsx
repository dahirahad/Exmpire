import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/ui/SEO'

const teamMembers = [
  {
    name: 'Javed Ameen',
    role: 'Chief Executive Officer (CEO)',
    image: '/images/team/javed-ameen.jpg',
    work: 'Oversees global business vision, enterprise marketplace partnerships, and international expansion.',
  },
  {
    name: ' Abdul Ahad',
    role: 'Managing Director & Co-Founder',
    image: '/images/team/ahad.jpeg',
    work: 'Directs multi-channel catalog strategy, account health, and client portfolio growth.',
  },
  {
    name: ' Rafaqat ',
    role: 'Head of Marketplace Operations',
    image: '/images/team/hello.jpeg',
    work: 'Manages daily Amazon, eBay, and Etsy store operations and fulfillment workflows.',
  },
  {
    name: 'Muhammad Asif',
    role: 'Lead Marketplace SEO Specialist',
    image: '/images/team/asif.jpg',
    work: 'Leads keyword indexing, search algorithm optimization, and listing visibility across platforms.',
  },
  {
    name: 'Babar Ali',
    role: 'Analytics & Client Success Lead',
    image: '/images/team/babar-ali.jpg',
    work: 'Monitors store conversion metrics, advertising performance, and monthly KPI growth reporting.',
  },
]

function SimpleTeamCard({ member }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="bg-black text-white rounded-2xl border border-slate-800 overflow-hidden shadow-xl hover:border-empire-gold/70 hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Clean Photo Container */}
      <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-black">
        {!imgError ? (
          <img
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 bg-black">
            <div className="w-16 h-16 rounded-full bg-empire-gold/20 border border-empire-gold flex items-center justify-center text-xl font-bold text-empire-gold mb-2">
              {member.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <span className="text-xs font-semibold text-slate-300">{member.name}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Black Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-black">
        <div>
          <h3 className="text-xl font-bold text-white leading-tight">
            {member.name}
          </h3>
          <p className="text-xs font-bold text-empire-gold uppercase tracking-wider mt-1.5">
            {member.role}
          </p>
          <p className="text-xs text-slate-300 mt-3 leading-relaxed">
            {member.work}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <>
      <SEO
        title="Our Team | Marketplace Operations Leadership"
        description="Meet the core 5-member executive leadership and marketplace operations team at EmpireX Business Academy."
        canonical="/team"
      />

      {/* Hero */}
      <section className="bg-empire-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-empire-borderDark/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-4">Leadership &amp; Team</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Meet the <span className="text-empire-gold">EmpireX</span> Team
          </h1>
          <p className="text-empire-textPale text-base max-w-xl mx-auto leading-relaxed">
            Our core team combines executive vision, hands-on marketplace operations, and data-driven store management.
          </p>
        </div>
      </section>

      {/* Section with Light Background and Black Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100" aria-label="Core Team Members">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-empire-gold">
              Executive &amp; Operations
            </span>
            <h2 className="text-3xl font-extrabold text-empire-navy mt-1">
              Core Leadership &amp; Specialists
            </h2>
            <p className="text-slate-600 text-xs mt-2">
              Dedicated professionals managing your Amazon, eBay, and Etsy growth.
            </p>
          </div>

          {/* Clean 5-Card Responsive Layout: 3 on Top, 2 Centered Below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {teamMembers.slice(0, 3).map((member) => (
              <SimpleTeamCard key={member.name} member={member} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-3xl mx-auto mt-7">
            {teamMembers.slice(3, 5).map((member) => (
              <SimpleTeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-white text-center border-t border-slate-200">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-empire-navy mb-3">
            Ready to Connect with Our Team?
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            Get in touch to discuss your marketplace requirements directly with our specialists.
          </p>
          <Link to="/contact" className="btn-primary text-xs font-bold uppercase tracking-wider px-8 py-3.5">
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

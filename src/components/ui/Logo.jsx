import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ variant = 'dark', className = '', showTagline = false }) {
  // variant='dark' is for light backgrounds (navy text)
  // variant='light' is for dark backgrounds (white text)
  const isLight = variant === 'light'
  const textColor = isLight ? '#FFFFFF' : '#061A33'
  const subTextColor = isLight ? '#F5A000' : '#687386'
  const globeStroke = isLight ? '#B9C7DA' : '#061A33'

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Brand Icon SVG */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform transition-transform group-hover:scale-105 duration-200">
          {/* Outer circle / Globe container */}
          <circle cx="22" cy="22" r="20" fill={isLight ? '#0C2242' : '#F4F6F9'} stroke={isLight ? '#1E3658' : '#E2E7EF'} strokeWidth="1.5" />
          
          {/* Globe latitude & longitude lines */}
          <ellipse cx="22" cy="22" rx="10" ry="17" stroke={globeStroke} strokeWidth="1.2" strokeOpacity="0.4" />
          <line x1="5" y1="22" x2="39" y2="22" stroke={globeStroke} strokeWidth="1.2" strokeOpacity="0.4" />
          <path d="M9 13C13 16 31 16 35 13" stroke={globeStroke} strokeWidth="1" strokeOpacity="0.3" />
          <path d="M9 31C13 28 31 28 35 31" stroke={globeStroke} strokeWidth="1" strokeOpacity="0.3" />

          {/* Golden Growth Bars (Rising performance) */}
          <rect x="13" y="24" width="2.5" height="7" rx="1" fill="#F5A000" />
          <rect x="18" y="20" width="2.5" height="11" rx="1" fill="#F5A000" />
          <rect x="23" y="16" width="2.5" height="15" rx="1" fill="#F5A000" />
          <rect x="28" y="12" width="2.5" height="19" rx="1" fill="#F5A000" />

          {/* Golden Upward Growth Arrow */}
          <path d="M12 25L23 15L28 19L33 11" stroke="#F5A000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 11H33V15" stroke="#F5A000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center">
          <span className="font-extrabold text-xl tracking-tight" style={{ color: textColor }}>
            Empire<span className="text-empire-gold">X</span>
          </span>
        </div>
        <span className="text-[10px] font-bold tracking-[0.16em] uppercase mt-0.5" style={{ color: subTextColor }}>
          Business Academy
        </span>
      </div>
    </Link>
  )
}

import React from 'react';

export default function Logo({ size = 'medium' }) {
  const isLarge = size === 'large';
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}>
      {/* Modern Luxury Temple-Arch & Lotus Crown Logo (No Om symbol) */}
      <svg
        width={isLarge ? "52" : "42"}
        height={isLarge ? "52" : "42"}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Dark Mahogany Circular Base with Gold Border */}
        <circle cx="50" cy="50" r="46" fill="url(#bgWoodGrad)" stroke="url(#goldGrad)" strokeWidth="3.5" />
        
        {/* Inner Golden Ornament Circle */}
        <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

        {/* Architectural Mandir Dome / Royal Arch Path */}
        <path
          d="M50 18 C53 28, 72 34, 76 52 C76 72, 66 78, 50 78 C34 78, 24 72, 24 52 C28 34, 47 28, 50 18 Z"
          fill="url(#goldGrad)"
        />

        {/* Inner Arch Cutout */}
        <path
          d="M50 28 C52 35, 65 40, 68 54 C68 68, 60 72, 50 72 C40 72, 32 68, 32 54 C35 40, 48 35, 50 28 Z"
          fill="#3b190c"
        />

        {/* Crown Lotus Flame Center Motif */}
        <path
          d="M50 36 C53 46, 60 50, 62 58 C62 66, 56 68, 50 68 C44 68, 38 66, 38 58 C40 50, 47 46, 50 36 Z"
          fill="url(#goldGrad)"
        />

        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="75%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <linearGradient id="bgWoodGrad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#4a210f" />
            <stop offset="100%" stopColor="#220d05" />
          </linearGradient>
        </defs>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span
          className="logo-text-main"
          style={{
            fontSize: isLarge ? '1.95rem' : '1.45rem',
            fontWeight: '900',
            fontFamily: "'Noto Serif Devanagari', serif",
            color: '#4a210f',
            letterSpacing: '0.3px',
            whiteSpace: 'nowrap'
          }}
        >
          पूजा <span style={{ color: '#d97706' }}>फर्निचर्स</span>
        </span>
        <span
          className="logo-text-sub"
          style={{
            fontSize: isLarge ? '0.82rem' : '0.68rem',
            fontWeight: '700',
            color: '#78350f',
            fontFamily: "'Noto Serif Devanagari', serif",
            whiteSpace: 'nowrap'
          }}
        >
          सर्व प्रकारची उत्तम मंदिरे व फर्निचर
        </span>
      </div>
    </div>
  );
}

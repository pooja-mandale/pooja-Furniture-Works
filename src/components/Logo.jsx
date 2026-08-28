import React from 'react';

export default function Logo({ size = 'medium' }) {
  const isLarge = size === 'large';
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
      {/* SVG Lotus & Om Motif */}
      <svg
        width={isLarge ? "54" : "44"}
        height={isLarge ? "54" : "44"}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="48" fill="url(#woodGrad)" stroke="#f59e0b" strokeWidth="3" />
        {/* Lotus Petals */}
        <path
          d="M50 15 C55 30, 70 35, 75 25 C65 40, 55 45, 50 50 C45 45, 35 40, 25 25 C30 35, 45 30, 50 15 Z"
          fill="url(#goldGrad)"
        />
        <path
          d="M50 50 C62 42, 82 45, 85 55 C70 60, 60 55, 50 50 C40 55, 30 60, 15 55 C18 45, 38 42, 50 50 Z"
          fill="#f59e0b"
          opacity="0.9"
        />
        {/* Om Symbol in Center */}
        <text
          x="50"
          y="76"
          fontSize="36"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          fontFamily="'Noto Serif Devanagari', serif"
        >
          ॐ
        </text>
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          <linearGradient id="woodGrad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#4a210f" />
            <stop offset="100%" stopColor="#250d05" />
          </linearGradient>
        </defs>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span
          style={{
            fontSize: isLarge ? '2.2rem' : '1.65rem',
            fontWeight: '900',
            fontFamily: "'Noto Serif Devanagari', serif",
            color: '#4a210f',
            letterSpacing: '0.5px'
          }}
        >
          पूजा <span style={{ color: '#d97706' }}>फर्निचर्स</span>
        </span>
        <span
          style={{
            fontSize: isLarge ? '0.85rem' : '0.72rem',
            fontWeight: '700',
            color: '#78350f',
            fontFamily: "'Noto Serif Devanagari', serif",
            letterSpacing: '1px'
          }}
        >
          सर्व प्रकारची उत्तम मंदिरे व फर्निचर
        </span>
      </div>
    </div>
  );
}

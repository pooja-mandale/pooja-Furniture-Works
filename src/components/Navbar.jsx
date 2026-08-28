import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { STORE_DETAILS } from '../data/products';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formattedWpMsg = encodeURIComponent(
    `🛕 *Pooja Furnitures (7030980877)*\n----------------------------------------\nHello! I want to inquire about mandirs and furniture models.`
  );

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <a href={`tel:${STORE_DETAILS.phone1}`} className="top-info-item">
              <Phone size={13} /> <span>{STORE_DETAILS.phone1}</span> / <span>{STORE_DETAILS.phone2}</span>
            </a>
            <a href={`mailto:${STORE_DETAILS.email}`} className="top-info-item">
              <Mail size={13} /> <span>{STORE_DETAILS.email}</span>
            </a>
          </div>
          <div className="top-info" style={{ display: 'flex', alignItems: 'center' }}>
            <span className="top-info-item">
              <MapPin size={13} /> <span>{STORE_DETAILS.addressEn}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="header">
        <div className="container nav-container">
          <div onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
            <Logo />
          </div>

          {/* Desktop Nav Links (Pure English) */}
          <ul className="nav-links">
            <li>
              <button
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif" }}
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'mandir' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif" }}
                onClick={() => handleNavClick('mandir')}
              >
                Mandir Collection
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'furniture' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif" }}
                onClick={() => handleNavClick('furniture')}
              >
                Furniture & Wardrobes
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif" }}
                onClick={() => handleNavClick('about')}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif" }}
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </button>
            </li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${formattedWpMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp desktop-only-wp"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
            >
              <WhatsAppIcon size={18} color="#ffffff" />
              <span>WhatsApp Inquiry</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer (Pure English) */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#ffffff',
              padding: '1.25rem 1.5rem 1.75rem 1.5rem',
              borderTop: '1px solid var(--border-gold)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <button
                  className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontSize: '1.1rem', padding: '0.3rem 0', fontFamily: "'Poppins', sans-serif" }}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={`nav-link ${activeTab === 'mandir' ? 'active' : ''}`}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontSize: '1.1rem', padding: '0.3rem 0', fontFamily: "'Poppins', sans-serif" }}
                  onClick={() => handleNavClick('mandir')}
                >
                  Mandir Collection
                </button>
              </li>
              <li>
                <button
                  className={`nav-link ${activeTab === 'furniture' ? 'active' : ''}`}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontSize: '1.1rem', padding: '0.3rem 0', fontFamily: "'Poppins', sans-serif" }}
                  onClick={() => handleNavClick('furniture')}
                >
                  Furniture & Wardrobes
                </button>
              </li>
              <li>
                <button
                  className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontSize: '1.1rem', padding: '0.3rem 0', fontFamily: "'Poppins', sans-serif" }}
                  onClick={() => handleNavClick('about')}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontSize: '1.1rem', padding: '0.3rem 0', fontFamily: "'Poppins', sans-serif" }}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact Us
                </button>
              </li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
              <a
                href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${formattedWpMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <WhatsAppIcon size={20} color="#ffffff" /> <span>WhatsApp Inquiry</span>
              </a>
              <a
                href={`tel:${STORE_DETAILS.phone1}`}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={18} /> Call Now ({STORE_DETAILS.phone1})
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

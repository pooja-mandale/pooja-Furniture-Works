import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { STORE_DETAILS } from '../data/products';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <a href={`tel:${STORE_DETAILS.phone1}`} className="top-info-item">
              <Phone size={14} /> <span>{STORE_DETAILS.phone1}</span> / <span>{STORE_DETAILS.phone2}</span>
            </a>
            <a href={`mailto:${STORE_DETAILS.email}`} className="top-info-item">
              <Mail size={14} /> <span>{STORE_DETAILS.email}</span>
            </a>
          </div>
          <div className="top-info">
            <span className="top-info-item">
              <MapPin size={14} /> <span>{STORE_DETAILS.addressMr}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="header">
        <div className="container nav-container">
          <div onClick={() => handleNavClick('home')}>
            <Logo />
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li>
              <button
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => handleNavClick('home')}
              >
                मुख्य पृष्ठ (Home)
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'mandir' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => handleNavClick('mandir')}
              >
                सर्व मंदिरे (Mandir Collection)
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'furniture' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => handleNavClick('furniture')}
              >
                कपाट व फर्निचर (Furniture)
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => handleNavClick('about')}
              >
                आमच्याबद्दल (About)
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => handleNavClick('contact')}
              >
                संपर्क करा (Contact)
              </button>
            </li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=नमस्ते!%20मला%20पूजा%20फर्निचरच्या%20मंदिराबद्दल%20चौकशी%20करायची%20आहे.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
            >
              <MessageSquare size={18} />
              <span>व्हॉट्सॲप चौकशी</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div style={{ background: '#ffffff', padding: '1.5rem', borderTop: '1px solid var(--border-gold)' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <button
                  className="nav-link"
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontSize: '1.2rem' }}
                  onClick={() => handleNavClick('home')}
                >
                  मुख्य पृष्ठ (Home)
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontSize: '1.2rem' }}
                  onClick={() => handleNavClick('mandir')}
                >
                  सर्व मंदिरे (Mandir Collection)
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontSize: '1.2rem' }}
                  onClick={() => handleNavClick('furniture')}
                >
                  कपाट व फर्निचर (Furniture)
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontSize: '1.2rem' }}
                  onClick={() => handleNavClick('about')}
                >
                  आमच्याबद्दल (About)
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontSize: '1.2rem' }}
                  onClick={() => handleNavClick('contact')}
                >
                  संपर्क करा (Contact)
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import Logo from './Logo';
import { STORE_DETAILS } from '../data/products';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Store Intro */}
          <div>
            <Logo size="large" />
            <p style={{ marginTop: '1.2rem', color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.7' }}>
              पूजा फर्निचर्स - छत्रपती संभाजीनगरमधील अग्रगण्य मंदिर उत्पादक. सागवानी लाकूड, मार्बल व आधुनिक बॅकलाईट ॐ मंदिरे उत्तम दर्जा आणि विश्वासार्ह सेवेसह बनवून मिळतील.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="footer-title">नेव्हिगेशन (Links)</h3>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="footer-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  मुख्य पृष्ठ (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('mandir'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="footer-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  सागवानी व मार्बल मंदिरे
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('furniture'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="footer-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  टी.व्ही. युनिट व कपाट
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="footer-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  आमच्याबद्दल (About Us)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="footer-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  संपर्क करा (Contact Us)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="footer-title">संपर्क माहिती</h3>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#d1d5db' }}>
                <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{STORE_DETAILS.addressMr}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: '#d1d5db' }}>
                <Phone size={18} color="#f59e0b" />
                <a href={`tel:${STORE_DETAILS.phone1}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {STORE_DETAILS.phone1}
                </a> / 
                <a href={`tel:${STORE_DETAILS.phone2}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {STORE_DETAILS.phone2}
                </a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: '#d1d5db' }}>
                <Mail size={18} color="#f59e0b" />
                <a href={`mailto:${STORE_DETAILS.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {STORE_DETAILS.email}
                </a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: '#d1d5db' }}>
                <Clock size={18} color="#f59e0b" />
                <span>सकाळी 9:00 ते रात्री 9:00 (दररोज)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Direct */}
          <div>
            <h3 className="footer-title">व्हॉट्सॲपवर ऑर्डर द्या</h3>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '1rem' }}>
              तुमच्या पसंतीचे मंदिर किंवा फर्निचर डिझाईन फोटो व्हॉट्सॲपवर पाठवून मोफत दरपत्रक (Quotation) मिळवा.
            </p>
            <a
              href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=नमस्ते%20पूजा%20फर्निचर्स!%20मला%20मंदिराबद्दल%20चौकशी%20करायची%20आहे.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare size={18} /> व्हॉट्सॲपवर मेसेज करा
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} पूजा फर्निचर्स (Pooja Furnitures). सर्व हक्क सुरक्षित.</p>
        </div>
      </div>
    </footer>
  );
}

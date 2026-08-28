import React from 'react';
import { Phone, MapPin, Mail, Sparkles, Home, Tv, ShieldCheck, Armchair } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function BannerHeader({ onExploreClick }) {
  return (
    <div className="reference-banner">
      <div className="banner-inner">
        {/* Left Column: Lotus Emblem, Title, Tagline, 4 Icon Grid, Contact Strip */}
        <div className="banner-left">
          {/* Lotus Flower Motif */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '-0.5rem' }}>
            <span style={{ fontSize: '2rem', color: '#d97706' }}>🪷</span>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, #d97706, transparent)' }}></div>
            <span style={{ fontSize: '2.5rem', color: '#d97706' }}>🪷</span>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, #d97706, transparent)' }}></div>
            <span style={{ fontSize: '2rem', color: '#d97706' }}>🪷</span>
          </div>

          <h1 className="banner-logo-title">पूजा</h1>
          <div className="banner-subtitle">फर्निचर्स</div>

          <div className="tagline-pill">
            {STORE_DETAILS.taglineMr}
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="banner-services-grid">
            <div className="service-card-item">
              <div className="service-icon-circle">
                <Home size={22} />
              </div>
              <span className="service-card-title">सर्व प्रकारची मंदिरे</span>
            </div>

            <div className="service-card-item">
              <div className="service-icon-circle">
                <Tv size={22} />
              </div>
              <span className="service-card-title">टी.व्ही. युनिट तसेच कपाट</span>
            </div>

            <div className="service-card-item">
              <div className="service-icon-circle">
                <Armchair size={22} />
              </div>
              <span className="service-card-title">किचन फर्निचर / ऑफिस फर्निचर</span>
            </div>

            <div className="service-card-item">
              <div className="service-icon-circle">
                <ShieldCheck size={22} />
              </div>
              <span className="service-card-title">उत्तम दर्जा आणि विश्वासार्ह सेवा</span>
            </div>
          </div>

          {/* Contact Strip */}
          <div className="banner-contact-strip">
            <div className="contact-strip-item">
              <div className="contact-strip-icon">
                <Phone size={20} />
              </div>
              <div className="contact-strip-text">
                <div>{STORE_DETAILS.phone1}</div>
                <div>{STORE_DETAILS.phone2}</div>
              </div>
            </div>

            <div className="contact-strip-item">
              <div className="contact-strip-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-strip-text">
                <div>स्वांगी बायपास, पिसादेवी रोड,</div>
                <div>छत्रपती संभाजीनगर</div>
              </div>
            </div>

            <div className="contact-strip-item">
              <div className="contact-strip-icon">
                <Mail size={20} />
              </div>
              <div className="contact-strip-text">
                <div>{STORE_DETAILS.email}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Mandir Showcase Gallery */}
        <div className="banner-right-gallery">
          <div className="gallery-main-img" style={{ position: 'relative' }}>
            <img src="/assets/teakwood_mandir.jpg" alt="शाही सागवानी मंदिर" className="gallery-img-tag" />
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(59, 25, 12, 0.85)', color: '#ffffff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
              शाही सागवानी मंदिर (Teakwood)
            </div>
          </div>

          <div className="gallery-sub-img" style={{ position: 'relative' }}>
            <img src="/assets/white_marble_mandir.jpg" alt="संगमरवरी मंदिर" className="gallery-img-tag" />
            <div style={{ position: 'absolute', bottom: '6px', left: '6px', background: 'rgba(59, 25, 12, 0.85)', color: '#ffffff', padding: '3px 8px', borderRadius: '12px', fontSize: '0.7rem' }}>
              संगमरवरी (Marble)
            </div>
          </div>

          <div className="gallery-sub-img" style={{ position: 'relative' }}>
            <img src="/assets/compact_mandir.jpg" alt="वॉल-माउंटेड मंदिर" className="gallery-img-tag" />
            <div style={{ position: 'absolute', bottom: '6px', left: '6px', background: 'rgba(59, 25, 12, 0.85)', color: '#ffffff', padding: '3px 8px', borderRadius: '12px', fontSize: '0.7rem' }}>
              वॉल माउंटेड (Wall Mount)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

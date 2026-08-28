import React from 'react';
import BannerHeader from '../components/BannerHeader';
import MandirCard from '../components/MandirCard';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { PRODUCTS, STORE_DETAILS } from '../data/products';
import { Sparkles, ShieldCheck, Award, ThumbsUp, ArrowRight } from 'lucide-react';

export default function Home({ setActiveTab, onViewDetails }) {
  const bestsellers = PRODUCTS.filter(p => p.bestseller);

  return (
    <div>
      <div className="container">
        {/* Banner replica matching the provided picture */}
        <BannerHeader onExploreClick={() => setActiveTab('mandir')} />

        {/* Feature Categories Showcase */}
        <div style={{ margin: '3rem 0 2rem 0', textAlign: 'center' }}>
          <span style={{ color: 'var(--warm-gold)', fontWeight: '700', fontSize: '1rem', letterSpacing: '1px' }}>
            विशेष आकर्षण (OUR SPECIALTIES)
          </span>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            आमच्याकडील प्रमुख उत्पादने
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div
              style={{
                background: '#ffffff',
                padding: '1.75rem 1.25rem',
                borderRadius: '20px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
              onClick={() => setActiveTab('mandir')}
            >
              <div style={{ width: '54px', height: '54px', borderRadius: '16px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.6rem' }}>
                🛕
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-wood)', marginBottom: '0.4rem' }}>
                सागवानी व मार्बल मंदिरे
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                सुंदर हस्तकला कोरीव काम, LED बॅकलाईट ॐ प्रतीक, व विविध साईजमध्ये मंदिरे उपलब्ध.
              </p>
              <span style={{ color: 'var(--warm-gold)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                संग्रह पहा <ArrowRight size={16} />
              </span>
            </div>

            <div
              style={{
                background: '#ffffff',
                padding: '1.75rem 1.25rem',
                borderRadius: '20px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
              onClick={() => setActiveTab('furniture')}
            >
              <div style={{ width: '54px', height: '54px', borderRadius: '16px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.6rem' }}>
                📺
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-wood)', marginBottom: '0.4rem' }}>
                टी.व्ही. युनिट व कपाट
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                आधुनिक लिव्हिंग रूमसाठी आकर्षक वूड पॅनलिंग, LED प्रोफाईल लाईट्स व वॉटरप्रूफ कपाट.
              </p>
              <span style={{ color: 'var(--warm-gold)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                डिझाईन्स पहा <ArrowRight size={16} />
              </span>
            </div>

            <div
              style={{
                background: '#ffffff',
                padding: '1.75rem 1.25rem',
                borderRadius: '20px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
              onClick={() => setActiveTab('furniture')}
            >
              <div style={{ width: '54px', height: '54px', borderRadius: '16px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.6rem' }}>
                🍳
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-wood)', marginBottom: '0.4rem' }}>
                किचन व ऑफिस फर्निचर
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                कमी जागेत जास्तीत जास्त उपयोग देणारे मॉड्युलर किचन, कॅबिनेट आणि ऑफिस टेबल्स.
              </p>
              <span style={{ color: 'var(--warm-gold)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                अधिक जाणून घ्या <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>

        {/* Featured Bestseller Mandirs */}
        <div style={{ margin: '3rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ color: 'var(--warm-gold)', fontWeight: '700', fontSize: '0.95rem' }}>ग्राहकांची पहिली पसंती</span>
              <h2 className="section-title">
                लोकप्रिय मंदिर मॉडेल्स (Bestsellers)
              </h2>
            </div>
            <button className="btn-secondary" onClick={() => setActiveTab('mandir')} style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
              सर्व मंदिरे पहा <ArrowRight size={16} />
            </button>
          </div>

          <div className="product-grid">
            {bestsellers.map((product) => (
              <MandirCard key={product.id} product={product} onViewDetails={onViewDetails} />
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="why-us-box">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--bright-gold)', marginBottom: '0.75rem' }}>
              पूजा फर्निचर्स का निवडावे? (Why Choose Us?)
            </h2>
            <p style={{ color: '#e5e7eb', fontSize: '0.98rem' }}>
              आम्ही उत्तम दर्जा आणि विश्वासार्ह सेवेसाठी कटिबद्ध आहोत. तुमच्या घराच्या पवित्रतेसाठी परिपूर्ण मंदिरे तयार करतो.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <ShieldCheck size={32} color="#f59e0b" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.4rem' }}>100% शुद्ध सागवानी लाकूड</h4>
              <p style={{ color: '#d1d5db', fontSize: '0.88rem' }}>उच्च दर्जाच्या सागवान लाकडात बनवलेली मंदिरे जी वर्षानुवर्षे उत्तम राहतात.</p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <Sparkles size={32} color="#f59e0b" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.4rem' }}>आकर्षक LED बॅकलाईट ॐ</h4>
              <p style={{ color: '#d1d5db', fontSize: '0.88rem' }}>दिव्य प्रकाश देणारे सुवर्ण LED बॅकलाईट पॅनेल व पितळी घंट्यांचे सुबक कोरीव काम.</p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <Award size={32} color="#f59e0b" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.4rem' }}>कस्टम साईझ व डिझाईन</h4>
              <p style={{ color: '#d1d5db', fontSize: '0.88rem' }}>तुमच्या जागेनुसार व पसंतीनुसार अचूक मापात मंदिरे व कपाट बनवून दिले जाते.</p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <ThumbsUp size={32} color="#f59e0b" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.4rem' }}>थेट कारखान्यातून विक्री</h4>
              <p style={{ color: '#d1d5db', fontSize: '0.88rem' }}>मध्यस्थांशिवाय रास्त दरात आणि जलद डिलिव्हरी व इन्स्टॉलेशनसह.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent('🛕 *पूजा फर्निचर्स - कस्टम डिझाईन चौकशी (7030980877)*\n----------------------------------------\nनमस्ते! मला माझ्या मापाप्रमाणे कस्टम मंदिर / फर्निचर बनवावयाचे आहे.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.85rem 2rem', width: '100%', maxWidth: '380px', justifyContent: 'center' }}
            >
              <WhatsAppIcon size={20} color="#ffffff" /> <span>कस्टम डिझाईन व्हॉट्सॲपवर पाठवा</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

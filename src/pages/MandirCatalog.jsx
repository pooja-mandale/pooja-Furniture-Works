import React, { useState } from 'react';
import MandirCard from '../components/MandirCard';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { PRODUCTS, STORE_DETAILS } from '../data/products';
import { Search, Filter, Phone } from 'lucide-react';

export default function MandirCatalog({ onViewDetails }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const mandirProducts = PRODUCTS.filter((p) => p.category === 'mandir');

  const filteredProducts = mandirProducts.filter((product) => {
    const matchesCategory =
      selectedSubcategory === 'All' || product.subcategory.includes(selectedSubcategory);
    const matchesSearch =
      product.nameMr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.descriptionMr.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ color: 'var(--warm-gold)', fontWeight: '700', fontSize: '0.95rem' }}>
          पूजा मंदिर संग्रह (MANDIR COLLECTION)
        </span>
        <h1 className="section-title">
          सर्व प्रकारची सुंदर व पवित्र मंदिरे
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '700px', margin: '0.5rem auto 0 auto' }}>
          सागवानी लाकूड, संगमरवरी मार्बल, वॉल माउंटेड कॉम्पॅक्ट व LED ॐ बॅकलाईट मंदिरे थेट स्वांगी बायपास, छत्रपती संभाजीनगर येथून.
        </p>
      </div>

      {/* Filter & Search Controls */}
      <div
        style={{
          background: '#ffffff',
          padding: '1.25rem',
          borderRadius: '18px',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--border-light)',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        {/* Subcategory Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', width: '100%', maxWidth: '600px' }}>
          <button
            onClick={() => setSelectedSubcategory('All')}
            className="btn-secondary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              background: selectedSubcategory === 'All' ? 'var(--gold-gradient)' : 'var(--primary-wood)'
            }}
          >
            सर्व (All)
          </button>
          <button
            onClick={() => setSelectedSubcategory('Teakwood')}
            className="btn-secondary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              background: selectedSubcategory === 'Teakwood' ? 'var(--gold-gradient)' : 'var(--primary-wood)'
            }}
          >
            सागवानी लाकूड (Teakwood)
          </button>
          <button
            onClick={() => setSelectedSubcategory('Marble')}
            className="btn-secondary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              background: selectedSubcategory === 'Marble' ? 'var(--gold-gradient)' : 'var(--primary-wood)'
            }}
          >
            संगमरवरी मार्बल (Marble)
          </button>
          <button
            onClick={() => setSelectedSubcategory('Wall Mount')}
            className="btn-secondary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              background: selectedSubcategory === 'Wall Mount' ? 'var(--gold-gradient)' : 'var(--primary-wood)'
            }}
          >
            वॉल माउंटेड (Wall Mount)
          </button>
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '350px' }}>
          <input
            type="text"
            placeholder="मंदिराचे नाव किंवा प्रकार शोधा..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.5rem', padding: '0.75rem 1rem 0.75rem 2.5rem', fontSize: '0.9rem' }}
          />
          <Search size={16} color="#9ca3af" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <MandirCard key={product.id} product={product} onViewDetails={onViewDetails} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#ffffff', borderRadius: '18px' }}>
          <h3>काहीही सापडले नाही (No Mandirs Found)</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.9rem' }}>कृपया सर्च शब्द बदलून पहा किंवा व्हॉट्सॲपवर संपर्क साधा.</p>
        </div>
      )}

      {/* Custom Mandir Request Banner */}
      <div className="custom-banner-box">
        <div>
          <h2 style={{ color: 'var(--primary-wood)', fontSize: '1.6rem' }}>
            तुमच्या स्वतःच्या डिझाईननुसार मंदिर बनवायचे आहे?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.3rem' }}>
            तुमच्याकडे असलेल्या फोटो किंवा स्केचनुसार आम्ही हुबेहूब मंदिर बनवून देतो.
          </p>
        </div>
        <a
          href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent('🛕 *पूजा फर्निचर्स - कस्टम मंदिर फोटो चौकशी (7030980877)*\n----------------------------------------\nनमस्ते! माझ्याकडे मंदिराचा फोटो/स्केच आहे, त्याप्रमाणे मंदिर बनवण्याचे दर पत्रक हवे आहे.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          style={{ fontSize: '1rem', padding: '0.85rem 1.75rem' }}
        >
          <WhatsAppIcon size={20} color="#ffffff" /> <span>फोटो व्हॉट्सॲपवर पाठवा</span>
        </a>
      </div>
    </div>
  );
}

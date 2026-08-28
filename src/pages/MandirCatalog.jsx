import React, { useState } from 'react';
import MandirCard from '../components/MandirCard';
import { PRODUCTS, STORE_DETAILS } from '../data/products';
import { Search, Filter, MessageSquare, Phone } from 'lucide-react';

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
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ color: 'var(--warm-gold)', fontWeight: '700', fontSize: '1.1rem' }}>
          पूजा मंदिर संग्रह (MANDIR COLLECTION)
        </span>
        <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-wood)', marginTop: '0.4rem' }}>
          सर्व प्रकारची सुंदर व पवित्र मंदिरे
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0.5rem auto 0 auto' }}>
          सागवानी लाकूड, संगमरवरी मार्बल, वॉल माउंटेड कॉम्पॅक्ट व LED ॐ बॅकलाईट मंदिरे थेट स्वांगी बायपास, छत्रपती संभाजीनगर येथून.
        </p>
      </div>

      {/* Filter & Search Controls */}
      <div
        style={{
          background: '#ffffff',
          padding: '1.5rem',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--border-light)',
          marginBottom: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        {/* Subcategory Pills */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setSelectedSubcategory('All')}
            className={`btn-secondary ${selectedSubcategory === 'All' ? 'active' : ''}`}
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.95rem',
              background: selectedSubcategory === 'All' ? 'var(--gold-gradient)' : 'var(--primary-wood)'
            }}
          >
            सर्व मंदिरे (All)
          </button>
          <button
            onClick={() => setSelectedSubcategory('Teakwood')}
            className="btn-secondary"
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.95rem',
              background: selectedSubcategory === 'Teakwood' ? 'var(--gold-gradient)' : 'var(--primary-wood)'
            }}
          >
            सागवानी लाकूड (Teakwood)
          </button>
          <button
            onClick={() => setSelectedSubcategory('Marble')}
            className="btn-secondary"
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.95rem',
              background: selectedSubcategory === 'Marble' ? 'var(--gold-gradient)' : 'var(--primary-wood)'
            }}
          >
            संगमरवरी मार्बल (Marble)
          </button>
          <button
            onClick={() => setSelectedSubcategory('Wall Mount')}
            className="btn-secondary"
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.95rem',
              background: selectedSubcategory === 'Wall Mount' ? 'var(--gold-gradient)' : 'var(--primary-wood)'
            }}
          >
            वॉल माउंटेड (Compact)
          </button>
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', minWidth: '280px', flexGrow: 1, maxWidth: '400px' }}>
          <input
            type="text"
            placeholder="मंदिराचे नाव किंवा प्रकार शोधा..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.8rem' }}
          />
          <Search size={18} color="#9ca3af" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
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
        <div style={{ textAlign: 'center', padding: '4rem', background: '#ffffff', borderRadius: '20px' }}>
          <h3>काहीही सापडले नाही (No Mandirs Found)</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>कृपया सर्च शब्द बदलून पहा किंवा व्हॉट्सॲपवर संपर्क साधा.</p>
        </div>
      )}

      {/* Custom Mandir Request Banner */}
      <div
        style={{
          marginTop: '4rem',
          background: 'radial-gradient(circle at 10% 20%, #fffbf2 0%, #f7ebe0 100%)',
          border: '2px solid var(--warm-gold)',
          borderRadius: '24px',
          padding: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}
      >
        <div>
          <h2 style={{ color: 'var(--primary-wood)', fontSize: '2rem' }}>
            तुमच्या स्वतःच्या डिझाईननुसार मंदिर बनवायचे आहे?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
            तुमच्याकडे असलेल्या फोटो किंवा स्केचनुसार आम्ही हुबेहूब मंदिर बनवून देतो.
          </p>
        </div>
        <a
          href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=नमस्ते!%20माझ्याकडे%20मंदिराची%20डिझाईन/फोटो%20आहे,%20त्यानुसार%20कोटेशन%20हवे%20आहे.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
        >
          <MessageSquare size={20} /> फोटो व्हॉट्सॲपवर पाठवा
        </a>
      </div>
    </div>
  );
}

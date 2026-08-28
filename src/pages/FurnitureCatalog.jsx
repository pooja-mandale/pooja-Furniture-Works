import React from 'react';
import MandirCard from '../components/MandirCard';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { PRODUCTS, STORE_DETAILS } from '../data/products';
import { Tv, Armchair } from 'lucide-react';

export default function FurnitureCatalog({ onViewDetails }) {
  const furnitureProducts = PRODUCTS.filter((p) => p.category === 'furniture');

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ color: 'var(--warm-gold)', fontWeight: '700', fontSize: '0.95rem' }}>
          सर्वोत्कृष्ट होम फर्निचर (HOME & OFFICE FURNITURE)
        </span>
        <h1 className="section-title">
          टी.व्ही. युनिट, कपाट, किचन व ऑफिस फर्निचर
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: '700px', margin: '0.5rem auto 0 auto' }}>
          उच्च दर्जाचे वॉटरप्रूफ प्लायवूड, मॉडर्न LED लाईटिंग फिनिशिंग आणि मजबूत कपाट डिझाईन्स.
        </p>
      </div>

      <div className="product-grid">
        {furnitureProducts.map((product) => (
          <MandirCard key={product.id} product={product} onViewDetails={onViewDetails} />
        ))}
      </div>

      {/* Special Layout Inquiry Section */}
      <div className="why-us-box" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--bright-gold)', marginBottom: '0.8rem' }}>
          तुमच्या घराच्या मापाप्रमाणे कपाट व फर्निचर ऑर्डर करा
        </h2>
        <p style={{ fontSize: '1rem', maxWidth: '800px', margin: '0 auto 2rem auto', color: '#e5e7eb' }}>
          आम्ही थेट तुमच्या घरी येऊन अचूक माप घेतो आणि 3D डिझाईननुसार उत्तम फिनिशिंगचे फर्निचर बनवून देतो.
        </p>
        <a
          href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent('🛕 *पूजा फर्निचर - कपाट व टी.व्ही. युनिट चौकशी (7030980877)*\n----------------------------------------\nनमस्ते! मला कपाट / टी.व्ही. युनिटसाठी साईट व्हिजिट व कोटेशन हवे आहे.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: '1rem', padding: '0.9rem 2.2rem', width: '100%', maxWidth: '400px', justifyContent: 'center' }}
        >
          <WhatsAppIcon size={20} color="#ffffff" /> <span>व्हॉट्सॲपवर साईट व्हिजिट बुक करा</span>
        </a>
      </div>
    </div>
  );
}

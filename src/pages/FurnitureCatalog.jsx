import React from 'react';
import MandirCard from '../components/MandirCard';
import { PRODUCTS, STORE_DETAILS } from '../data/products';
import { Tv, Armchair, MessageSquare } from 'lucide-react';

export default function FurnitureCatalog({ onViewDetails }) {
  const furnitureProducts = PRODUCTS.filter((p) => p.category === 'furniture');

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ color: 'var(--warm-gold)', fontWeight: '700', fontSize: '1.1rem' }}>
          सर्वोत्कृष्ट होम फर्निचर (HOME & OFFICE FURNITURE)
        </span>
        <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-wood)', marginTop: '0.4rem' }}>
          टी.व्ही. युनिट, कपाट, किचन व ऑफिस फर्निचर
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0.5rem auto 0 auto' }}>
          उच्च दर्जाचे वॉटरप्रूफ प्लायवूड, मॉडर्न LED लाईटिंग फिनिशिंग आणि मजबूत कपाट डिझाईन्स.
        </p>
      </div>

      <div className="product-grid">
        {furnitureProducts.map((product) => (
          <MandirCard key={product.id} product={product} onViewDetails={onViewDetails} />
        ))}
      </div>

      {/* Special Layout Inquiry Section */}
      <div
        style={{
          marginTop: '4rem',
          background: 'var(--primary-wood)',
          color: '#ffffff',
          borderRadius: '24px',
          padding: '3rem',
          textAlign: 'center',
          border: '2px solid var(--warm-gold)'
        }}
      >
        <h2 style={{ fontSize: '2.2rem', color: 'var(--bright-gold)', marginBottom: '0.8rem' }}>
          तुमच्या घराच्या मापाप्रमाणे कपाट व फर्निचर ऑर्डर करा
        </h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 2rem auto', color: '#e5e7eb' }}>
          आम्ही थेट तुमच्या घरी येऊन अचूक माप घेतो आणि 3D डिझाईननुसार उत्तम फिनिशिंगचे फर्निचर बनवून देतो.
        </p>
        <a
          href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=नमस्ते%20पूजा%20फर्निचर्स!%20मला%20टी.व्ही.%20युनिट/कपाटासाठी%20साईड%20व्हिजिट%20व%20कोटेशन%20हवे%20आहे.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
        >
          <MessageSquare size={20} /> व्हॉट्सॲपवर साईट व्हिजिट बुक करा
        </a>
      </div>
    </div>
  );
}

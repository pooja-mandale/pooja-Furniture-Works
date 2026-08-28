import React from 'react';
import { X, MessageSquare, Phone, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const whatsappMsg = encodeURIComponent(
    `नमस्ते पूजा फर्निचर्स! मला "${product.nameMr}" (${product.nameEn}) संदर्भात अधिक माहिती व किंमत कोटेशन हवे आहे.`
  );
  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ background: '#f7ebe0', height: '100%', minHeight: '300px' }}>
          <img
            src={product.image}
            alt={product.nameMr}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <span
              style={{
                background: 'var(--light-gold)',
                color: 'var(--warm-gold)',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '700'
              }}
            >
              {product.subcategory}
            </span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-wood)', marginTop: '0.5rem' }}>
              {product.nameMr}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{product.nameEn}</p>
          </div>

          <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.6' }}>
            {product.descriptionMr}
          </p>

          <div style={{ background: '#faf7f2', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
            <h4 style={{ color: 'var(--primary-wood)', marginBottom: '0.5rem', fontSize: '1rem' }}>
              तांत्रिक तपशील (Specifications):
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
              <li><strong>आकारमान (Dimensions):</strong> {product.dimensions}</li>
              <li><strong>मटेरियल (Material):</strong> {product.woodType}</li>
              <li><strong>लाईटिंग (LED Lighting):</strong> {product.lighting}</li>
              <li><strong>वारंटी / गॅरंटी:</strong> दिर्घकाळ टिकणारी टिकाऊ फिनिशिंग</li>
            </ul>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              <MessageSquare size={20} /> व्हॉट्सॲपवर दर विचारा (Inquire Price)
            </a>
            <a
              href={`tel:${STORE_DETAILS.phone1}`}
              className="btn-secondary"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              <Phone size={18} /> थेट कॉल करा ({STORE_DETAILS.phone1})
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

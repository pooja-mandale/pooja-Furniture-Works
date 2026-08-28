import React from 'react';
import { X, Phone, Check, ShieldCheck, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { STORE_DETAILS } from '../data/products';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const formattedMessage = 
    `🛕 *नवीन चौकशी - पूजा फर्निचर्स (7030980877)* 🛕\n` +
    `----------------------------------------\n` +
    `📦 *उत्पादन:* ${product.nameMr} (${product.nameEn})\n` +
    `🌲 *मटेरियल:* ${product.woodType}\n` +
    `💡 *एलईडी लाईट:* ${product.lighting}\n` +
    `📐 *आकारमान:* ${product.dimensions}\n` +
    `----------------------------------------\n` +
    `नमस्ते पूजा फर्निचर्स! मला या मॉडेलबद्दल विस्तृत दरपत्रक (Detailed Quotation) आणि डिलिव्हरी वेळेबद्दल माहिती हवी आहे.`;

  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ background: '#f7ebe0', height: '100%', minHeight: '280px' }}>
          <img
            src={product.image}
            alt={product.nameMr}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <span
              style={{
                background: 'var(--light-gold)',
                color: 'var(--warm-gold)',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: '700'
              }}
            >
              {product.subcategory}
            </span>
            <h2 style={{ fontSize: '1.65rem', color: 'var(--primary-wood)', marginTop: '0.4rem' }}>
              {product.nameMr}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{product.nameEn}</p>
          </div>

          <p style={{ fontSize: '0.92rem', color: '#4b5563', lineHeight: '1.6' }}>
            {product.descriptionMr}
          </p>

          <div style={{ background: '#faf7f2', padding: '0.9rem 1.1rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
            <h4 style={{ color: 'var(--primary-wood)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
              तांत्रिक तपशील (Specifications):
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
              <li><strong>आकारमान (Dimensions):</strong> {product.dimensions}</li>
              <li><strong>मटेरियल (Material):</strong> {product.woodType}</li>
              <li><strong>लाईटिंग (LED Lighting):</strong> {product.lighting}</li>
            </ul>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              <WhatsAppIcon size={20} color="#ffffff" /> व्हॉट्सॲपवर दर विचारा (Inquire Price)
            </a>
            <a
              href={`tel:${STORE_DETAILS.phone1}`}
              className="btn-secondary"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              <Phone size={17} /> थेट कॉल करा ({STORE_DETAILS.phone1})
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

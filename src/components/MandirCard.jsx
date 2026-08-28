import React from 'react';
import { Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { STORE_DETAILS } from '../data/products';

export default function MandirCard({ product, onViewDetails }) {
  const formattedMessage = 
    `🛕 *नवीन चौकशी - पूजा फर्निचर्स* 🛕\n` +
    `----------------------------------------\n` +
    `📦 *उत्पादन:* ${product.nameMr} (${product.nameEn})\n` +
    `🌲 *साहित्य:* ${product.woodType}\n` +
    `💡 *लाईटिंग:* ${product.lighting}\n` +
    `📐 *आकारमान:* ${product.dimensions}\n` +
    `----------------------------------------\n` +
    `नमस्ते! मला याचे दर (Price Quotation) आणि अधिक माहिती हवी आहे. कृपया पाठवा.`;

  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

  return (
    <div className="product-card">
      <span className="product-badge">
        {product.subcategory}
      </span>

      <div className="product-image-container">
        <img src={product.image} alt={product.nameMr} />
      </div>

      <div className="product-details">
        <h3 className="product-title-mr">{product.nameMr}</h3>
        <p className="product-title-en">{product.nameEn}</p>

        <p style={{ fontSize: '0.88rem', color: '#555', marginBottom: '1rem', flexGrow: 1, lineHeight: '1.5' }}>
          {product.descriptionMr}
        </p>

        <div className="product-specs-list">
          <div className="spec-item">
            <CheckCircle2 size={16} color="#d97706" />
            <span><strong>साहित्य:</strong> {product.woodType}</span>
          </div>
          <div className="spec-item">
            <Sparkles size={16} color="#d97706" />
            <span><strong>लाईटिंग:</strong> {product.lighting}</span>
          </div>
        </div>

        <div className="product-card-actions">
          <button className="btn-secondary" onClick={() => onViewDetails(product)}>
            <Eye size={16} /> माहिती
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon size={18} color="#ffffff" /> व्हॉट्सॲप
          </a>
        </div>
      </div>
    </div>
  );
}

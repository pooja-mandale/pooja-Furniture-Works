import React from 'react';
import { MessageSquare, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function MandirCard({ product, onViewDetails }) {
  const whatsappMsg = encodeURIComponent(
    `नमस्ते पूजा फर्निचर्स! मला "${product.nameMr} (${product.nameEn})"- बद्दल चौकशी करायची आहे.`
  );
  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${whatsappMsg}`;

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

        <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem', flexGrow: 1 }}>
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
            <MessageSquare size={16} /> व्हॉट्सॲप
          </a>
        </div>
      </div>
    </div>
  );
}

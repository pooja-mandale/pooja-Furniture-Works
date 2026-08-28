import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { STORE_DETAILS } from '../data/products';

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    `🛕 *पूजा फर्निचर्स (Pooja Furnitures)*\n----------------------------------------\nनमस्ते! मला मंदिराबद्दल व इतर फर्नििचरबद्दल माहिती हवी आहे.`
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      title="व्हॉट्सॲपवर संपर्क साधा (Chat on WhatsApp)"
      aria-label="Contact on WhatsApp"
    >
      <WhatsAppIcon size={32} color="#ffffff" />
    </a>
  );
}

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=नमस्ते%20पूजा%20फर्निचर्स!%20मला%20मंदिराबद्दल%20माहिती%20हवी%20आहे.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      title="व्हॉट्सॲपवर संपर्क साधा"
      aria-label="Contact on WhatsApp"
    >
      <MessageSquare size={32} />
    </a>
  );
}

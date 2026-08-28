import React from 'react';
import { STORE_DETAILS } from '../data/products';
import { Award, ShieldCheck, MapPin, Heart, CheckCircle2, MessageSquare } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ color: 'var(--warm-gold)', fontWeight: '700', fontSize: '1.1rem' }}>
          आमचा प्रवास (ABOUT POOJA FURNITURES)
        </span>
        <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-wood)', marginTop: '0.4rem' }}>
          पूजा फर्निचर्स - परंपरा आणि उत्तम दर्जाचा संगम
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary-wood)', marginBottom: '1rem' }}>
            छत्रपती संभाजीनगरमधील अग्रगण्य पूजा मंदिर उत्पादक
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.2rem' }}>
            स्वांगी बायपास, पिसादेवी रोड, छत्रपती संभाजीनगर येथे आमचा भव्य शोक्रम व कारखाना आहे. आम्ही गेल्या अनेक वर्षांपासून हजारो घरांमध्ये पवित्रता आणि सौंदर्य आणणाऱ्या मंदिरांची निर्मिती करत आहोत.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            सागवानी लाकडाचे पारंपरिक हस्तकला कोरीवकाम असो वा आधुनिक कोरियन संगमरवरी (Marble) LED बॅकलाईट मंदिरे असो, आमचे कारागीर अत्यंत निष्ठेने काम करतात.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600', color: 'var(--primary-wood)' }}>
              <CheckCircle2 color="#d97706" size={20} /> 100% ओरिजनल सागवानी लाकूड वापर
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600', color: 'var(--primary-wood)' }}>
              <CheckCircle2 color="#d97706" size={20} /> सुबक LED ॐ बॅकलाईट लाईटिंग
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600', color: 'var(--primary-wood)' }}>
              <CheckCircle2 color="#d97706" size={20} /> ग्राहकांच्या पसंतीनुसार अचूक कस्टम साईझ
            </div>
          </div>
        </div>

        <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '4px solid #ffffff' }}>
          <img src="/assets/teakwood_mandir.jpg" alt="Pooja Furnitures Workshop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}

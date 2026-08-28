import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'सागवानी मंदिर (Teakwood Mandir)',
    customDimensions: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('कृपया तुमचे नाव आणि मोबाईल नंबर टाका.');
      return;
    }

    const messageText = `*नवीन व्हॉट्सॲप चौकशी (Pooja Furnitures)*\n\n` +
      `👤 *नाव:* ${formData.name}\n` +
      `📞 *मोबाईल:* ${formData.phone}\n` +
      `🛕 *प्रकार:* ${formData.category}\n` +
      (formData.customDimensions ? `📐 *माप (Dimensions):* ${formData.customDimensions}\n` : '') +
      (formData.message ? `💬 *संदेश:* ${formData.message}\n` : '') +
      `\nकृपया मला याचे कोटेशन व डिझाईन पाठवा.`;

    const encodedUrl = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    setSubmitted(true);
    window.open(encodedUrl, '_blank');
  };

  return (
    <div className="container contact-section">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ color: 'var(--warm-gold)', fontWeight: '700', fontSize: '1.1rem' }}>
          संपर्क साधा (GET IN TOUCH)
        </span>
        <h1 style={{ fontSize: '2.8rem', color: 'var(--primary-wood)', marginTop: '0.4rem' }}>
          पूजा फर्निचर्स - व्हॉट्सॲपवर त्वरित चौकशी करा
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0.5rem auto 0 auto' }}>
          खालील फॉर्म भरून एका क्लिकवर थेट व्हॉट्सॲपवर मेसेज पाठवा किंवा दिलेल्या नंबरवर कॉल करा.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Side: Contact Information Cards */}
        <div className="contact-info-card">
          <h2 className="contact-info-title">संपर्क तपशील</h2>
          <p style={{ color: '#e5e7eb', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            आमच्या शोक्रम व कारखान्याला भेट देण्यासाठी किंवा मोफत कोटेशनसाठी आजच संपर्क साधा.
          </p>

          <div className="contact-method-item">
            <div className="contact-icon-box">
              <Phone size={24} />
            </div>
            <div>
              <div className="contact-method-label">कॉल किंवा व्हॉट्सॲप करा</div>
              <a href={`tel:${STORE_DETAILS.phone1}`} className="contact-method-value">
                {STORE_DETAILS.phone1}
              </a>
              <div style={{ margin: '0.2rem 0' }}></div>
              <a href={`tel:${STORE_DETAILS.phone2}`} className="contact-method-value">
                {STORE_DETAILS.phone2}
              </a>
            </div>
          </div>

          <div className="contact-method-item">
            <div className="contact-icon-box">
              <MapPin size={24} />
            </div>
            <div>
              <div className="contact-method-label">शोक्रम व वर्कशॉप पत्ता</div>
              <div className="contact-method-value" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                {STORE_DETAILS.addressMr}
              </div>
              <a
                href={STORE_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--bright-gold)', fontSize: '0.9rem', fontWeight: '600', marginTop: '0.4rem', display: 'inline-block' }}
              >
                गूगल मॅपवर दिशा (Directions) ➔
              </a>
            </div>
          </div>

          <div className="contact-method-item">
            <div className="contact-icon-box">
              <Mail size={24} />
            </div>
            <div>
              <div className="contact-method-label">ईमेल आयडी</div>
              <a href={`mailto:${STORE_DETAILS.email}`} className="contact-method-value" style={{ fontSize: '0.95rem' }}>
                {STORE_DETAILS.email}
              </a>
            </div>
          </div>

          <div className="contact-method-item">
            <div className="contact-icon-box">
              <Clock size={24} />
            </div>
            <div>
              <div className="contact-method-label">वेळ (Working Hours)</div>
              <div className="contact-method-value" style={{ fontSize: '1rem' }}>
                सोमवार ते रविवार: सकाळी 9:00 ते रात्री 9:00
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Direct WhatsApp Form */}
        <div className="contact-form-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageSquare size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-wood)', margin: 0 }}>
                व्हॉट्सॲप चौकशी फॉर्म
              </h2>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                फॉर्म भरून बटण दाबल्यास थेट व्हॉट्सॲप चॅट उघडेल
              </span>
            </div>
          </div>

          {submitted && (
            <div style={{ background: '#dcfce7', border: '1px solid #86efac', color: '#166534', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <CheckCircle2 size={20} />
              <span>तुमची चौकशी व्हॉट्सॲपवर पाठवली जात आहे... धन्यवाद!</span>
            </div>
          )}

          <form onSubmit={handleSubmitWhatsApp}>
            <div className="form-group">
              <label className="form-label">तुमचे नाव (Full Name) *</label>
              <input
                type="text"
                required
                placeholder="उदा. राहुल पाटील"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">मोबाईल नंबर (WhatsApp Number) *</label>
              <input
                type="tel"
                required
                placeholder="उदा. 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">कोणते उत्पादन हवे आहे? (Select Category)</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="form-select"
              >
                <option value="सागवानी मंदिर (Teakwood Mandir)">शाही सागवानी मंदिर (Teakwood)</option>
                <option value="संगमरवरी मार्बल मंदिर (White Marble)">संगमरवरी संगमरवर मंदिर (Marble)</option>
                <option value="वॉल माउंटेड मंदिर (Wall Mount)">वॉल माउंटेड कॉम्पॅक्ट मंदिर</option>
                <option value="टी.व्ही. युनिट व कपाट (TV Unit & Wardrobe)">टी.व्ही. युनिट व कपाट</option>
                <option value="किचन व ऑफिस फर्निचर (Kitchen & Office)">किचन व ऑफिस फर्निचर</option>
                <option value="इतर / कस्टम ऑर्डर (Other Custom Order)">इतर कस्टम ऑर्डर</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">तुमच्या जागेचे माप (Dimensions - Optional)</label>
              <input
                type="text"
                placeholder="उदा. 4ft उंची x 3ft रुंदी"
                value={formData.customDimensions}
                onChange={(e) => setFormData({ ...formData, customDimensions: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">संदेश किंवा प्रश्न (Message / Note)</label>
              <textarea
                rows={3}
                placeholder="उदा. मला ॐ बॅकलाईट लाईटसह सागवानी मंदिर हवे आहे..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="btn-whatsapp" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.1rem' }}>
              <Send size={20} /> व्हॉट्सॲपवर चौकशी पाठवा (Send Inquiry on WP)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

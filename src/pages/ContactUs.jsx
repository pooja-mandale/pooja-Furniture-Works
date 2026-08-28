import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, User } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { STORE_DETAILS } from '../data/products';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
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

    const messageText = 
      `🛕 *पूजा फर्निचर्स - नवीन ग्राहक चौकशी* 🛕\n` +
      `----------------------------------------\n` +
      `👤 *नाव:* ${formData.name}\n` +
      `📞 *मोबाईल नंबर:* ${formData.phone}\n` +
      (formData.city ? `📍 *शहर / परिसर:* ${formData.city}\n` : '') +
      `📦 *निवडलेले उत्पादन:* ${formData.category}\n` +
      (formData.customDimensions ? `📐 *माप / साईझ:* ${formData.customDimensions}\n` : '') +
      `----------------------------------------\n` +
      (formData.message ? `📝 *ग्राहक काय हवे आहे (Description):*\n${formData.message}\n----------------------------------------\n` : '') +
      `कृपया या माहितीनुसार मला फोटो, डिझाईन्स आणि अचूक दरपत्रक पाठवा. धन्यवाद!`;

    const targetNumber = STORE_DETAILS.whatsappNumber; // 917030980877
    const encodedUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(messageText)}`;
    setSubmitted(true);
    window.open(encodedUrl, '_blank');
  };

  return (
    <div className="container contact-section">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ color: 'var(--warm-gold)', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '1px' }}>
          थेट संपर्क (DIRECT WHATSAPP INQUIRY)
        </span>
        <h1 className="section-title">
          पूजा फर्निचर्स - व्हॉट्सॲपवर अचूक चौकशी पाठवा
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '700px', margin: '0.5rem auto 0 auto' }}>
          खालील फॉर्ममध्ये तुमची माहिती भरा आणि एका क्लिकवर व्हॉट्सॲप नंबर <strong>{STORE_DETAILS.phone1}</strong> वर संपूर्ण चौकशी मेसेज पाठवा.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Side: Contact Information Cards */}
        <div className="contact-info-card">
          <h2 className="contact-info-title">संपर्क माहिती</h2>
          <p style={{ color: '#e5e7eb', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
            स्वांगी बायपास, छत्रपती संभाजीनगर येथील आमच्या शोरूमला नक्की भेट द्या किंवा व्हॉट्सॲपवर मोफत दरपत्रक मिळवा.
          </p>

          <div className="contact-method-item">
            <div className="contact-icon-box">
              <Phone size={22} />
            </div>
            <div>
              <div className="contact-method-label">थेट कॉल किंवा व्हॉट्सॲप नंबर</div>
              <a href={`tel:${STORE_DETAILS.phone1}`} className="contact-method-value">
                {STORE_DETAILS.phone1}
              </a>
              <span style={{ color: '#f59e0b', margin: '0 0.4rem' }}>|</span>
              <a href={`tel:${STORE_DETAILS.phone2}`} className="contact-method-value">
                {STORE_DETAILS.phone2}
              </a>
            </div>
          </div>

          <div className="contact-method-item">
            <div className="contact-icon-box">
              <MapPin size={22} />
            </div>
            <div>
              <div className="contact-method-label">कारखाना व शोक्रम पत्ता</div>
              <div className="contact-method-value" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                {STORE_DETAILS.addressMr}
              </div>
              <a
                href={STORE_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--bright-gold)', fontSize: '0.88rem', fontWeight: '600', marginTop: '0.4rem', display: 'inline-block' }}
              >
                गूगल मॅपवर लोकेशन पहा ➔
              </a>
            </div>
          </div>

          <div className="contact-method-item">
            <div className="contact-icon-box">
              <Mail size={22} />
            </div>
            <div>
              <div className="contact-method-label">ईमेल आयडी</div>
              <a href={`mailto:${STORE_DETAILS.email}`} className="contact-method-value" style={{ fontSize: '0.92rem' }}>
                {STORE_DETAILS.email}
              </a>
            </div>
          </div>

          <div className="contact-method-item">
            <div className="contact-icon-box">
              <Clock size={22} />
            </div>
            <div>
              <div className="contact-method-label">वेळ (Open Every Day)</div>
              <div className="contact-method-value" style={{ fontSize: '0.95rem' }}>
                सकाळी 9:00 ते रात्री 9:00 (सोमवार ते रविवार)
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Direct WhatsApp Form */}
        <div className="contact-form-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <WhatsAppIcon size={24} color="#ffffff" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--primary-wood)', margin: 0 }}>
                व्हॉट्सॲप चौकशी फॉर्म
              </h2>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                मेसेज थेट <strong>{STORE_DETAILS.phone1}</strong> वर पाठवला जाईल
              </span>
            </div>
          </div>

          {submitted && (
            <div style={{ background: '#dcfce7', border: '1px solid #86efac', color: '#166534', padding: '0.85rem 1rem', borderRadius: '12px', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
              <CheckCircle2 size={18} />
              <span>तुमची चौकशी व्हॉट्सॲपवर पाठवली जात आहे... धन्यवाद!</span>
            </div>
          )}

          <form onSubmit={handleSubmitWhatsApp}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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
                <label className="form-label">मोबाईल नंबर (WhatsApp No) *</label>
                <input
                  type="tel"
                  required
                  placeholder="उदा. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">तुमचे शहर / परिसर (Location)</label>
                <input
                  type="text"
                  placeholder="उदा. संभाजीनगर / औरंगाबाद"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">उत्पादन प्रकार (Select Category)</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="form-select"
                >
                  <option value="शाही सागवानी मंदिर (Teakwood Mandir)">शाही सागवानी मंदिर (Teakwood)</option>
                  <option value="संगमरवरी मार्बल मंदिर (White Marble Mandir)">संगमरवरी मार्बल मंदिर (Marble)</option>
                  <option value="वॉल माउंटेड कॉम्पॅक्ट मंदिर (Wall Mount)">वॉल माउंटेड कॉम्पॅक्ट मंदिर</option>
                  <option value="टी.व्ही. युनिट व कपाट (TV Unit & Wardrobe)">टी.व्ही. युनिट व कपाट</option>
                  <option value="किचन व ऑफिस फर्निचर (Kitchen & Office)">किचन व ऑफिस फर्निचर</option>
                  <option value="इतर / कस्टम ऑर्डर (Other Custom Order)">इतर कस्टम ऑर्डर</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">जागेचे माप / साईझ (Custom Dimensions - Optional)</label>
              <input
                type="text"
                placeholder="उदा. 4ft उंची x 3.5ft रुंदी x 2ft खोली"
                value={formData.customDimensions}
                onChange={(e) => setFormData({ ...formData, customDimensions: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">तुम्हाला काय हवे आहे? सविस्तर सांगा (Description / Details)</label>
              <textarea
                rows={3}
                placeholder="उदा. मला ॐ बॅकलाईट लाईटसह सागवानी मंदिर हवे आहे, सोबत २ ड्रॉवर्स व घंटा हवी आहे..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="btn-whatsapp" style={{ width: '100%', justifyContent: 'center', padding: '0.95rem', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              <WhatsAppIcon size={22} color="#ffffff" /> <span>व्हॉट्सॲप {STORE_DETAILS.phone1} वर चौकशी पाठवा</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

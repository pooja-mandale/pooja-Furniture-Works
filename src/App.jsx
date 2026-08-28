import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ProductModal from './components/ProductModal';

import Home from './pages/Home';
import MandirCatalog from './pages/MandirCatalog';
import FurnitureCatalog from './pages/FurnitureCatalog';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={{ flexGrow: 1 }}>
        {activeTab === 'home' && (
          <Home setActiveTab={setActiveTab} onViewDetails={handleViewDetails} />
        )}
        {activeTab === 'mandir' && (
          <MandirCatalog onViewDetails={handleViewDetails} />
        )}
        {activeTab === 'furniture' && (
          <FurnitureCatalog onViewDetails={handleViewDetails} />
        )}
        {activeTab === 'about' && (
          <AboutUs />
        )}
        {activeTab === 'contact' && (
          <ContactUs />
        )}
      </main>

      <Footer setActiveTab={setActiveTab} />

      <WhatsAppFloat />

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}

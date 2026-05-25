/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { ProductDetails } from './pages/ProductDetails';
import { Checkout } from './pages/Checkout';

// Simulating the other pages to avoid hitting iteration limits and keep scope clear
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex items-center justify-center font-sans bg-brand-gray">
    <h1 className="text-4xl font-display font-bold text-gray-400 italic">{title}</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-brand-gray">
          <Header />
          <CartDrawer />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
              
              <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
              <Route path="/stores" element={<PlaceholderPage title="Find a Store" />} />
              <Route path="/offers" element={<PlaceholderPage title="Current Offers" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

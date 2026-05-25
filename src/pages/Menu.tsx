import React, { useState } from 'react';
import { CATEGORIES, MOCK_PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProducts = activeCategory === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-brand-gray min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-brand-black mb-8 italic tracking-tighter">Our Menu</h1>
        
        {/* Categories Bar */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-3 scrollbar-hide">
          <button
            onClick={() => setActiveCategory('All')}
            className={`whitespace-nowrap px-6 py-3 rounded-full font-bold transition-colors cursor-pointer ${
              activeCategory === 'All' 
                ? 'bg-brand-black text-brand-white' 
                : 'bg-brand-white text-brand-black hover:bg-gray-200 border border-gray-200'
            }`}
          >
            All
          </button>
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-bold transition-colors cursor-pointer ${
                activeCategory === category 
                  ? 'bg-brand-black text-brand-white' 
                  : 'bg-brand-white text-brand-black hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

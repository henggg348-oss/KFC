import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MOCK_PRODUCTS, CATEGORIES } from '../data';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const navigate = useNavigate();
  const popularItems = MOCK_PRODUCTS.slice(0, 4);
  const bestSellers = MOCK_PRODUCTS.slice(1, 5);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-brand-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1626200220677-7fd16559d8c4?q=80&w=2000&auto=format&fit=crop" 
            alt="Delicious fried chicken" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 bg-brand-red text-white text-sm font-bold tracking-wider uppercase mb-6 rounded-sm">New Family Buckets</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 italic tracking-tighter leading-tight drop-shadow-lg">
              Finger Lickin'<br />Good
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg font-sans">
              Experience the world's most famous recipe. Freshly prepared, hand-breaded, and cooked to a golden crisp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-sans">
              <button 
                onClick={() => navigate('/menu')}
                className="px-8 py-4 bg-brand-red text-brand-white font-bold rounded-xl text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 cursor-pointer"
              >
                Order Now
              </button>
              <button 
                onClick={() => navigate('/menu')}
                className="px-8 py-4 bg-brand-white text-brand-black font-bold rounded-xl text-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                View Menu
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 tracking-tight">Explore Our Menu</h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {CATEGORIES.slice(0, 4).map((category, idx) => (
              <div 
                key={category}
                onClick={() => navigate('/menu')}
                className="bg-brand-white p-6 rounded-2xl shadow-sm text-center cursor-pointer hover:shadow-lg transition-all group border border-gray-100"
              >
                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🍗</span> {/* Placeholder icon */}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-brand-red transition-colors">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 tracking-tight">Best Sellers</h2>
              <div className="w-16 h-1 bg-brand-red mt-4 rounded-full"></div>
            </div>
            <button 
              onClick={() => navigate('/menu')}
              className="hidden md:block font-bold text-brand-red hover:text-red-700 transition-colors cursor-pointer"
            >
              See All Items &rarr;
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {popularItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button 
            onClick={() => navigate('/menu')}
            className="w-full mt-8 py-4 border-2 border-brand-red text-brand-red font-bold rounded-xl text-lg hover:bg-brand-red hover:text-brand-white transition-colors cursor-pointer md:hidden"
          >
             View All Items
          </button>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-brand-red text-brand-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter mb-4 drop-shadow-md">
              Free Delivery Weekend!
            </h2>
            <p className="text-lg md:text-xl mb-8 font-sans text-red-100">
              Use code <strong className="bg-brand-white text-brand-red px-2 py-1 rounded">FREESHIP</strong> at checkout valid on orders over $25.
            </p>
            <button 
              onClick={() => navigate('/offers')}
              className="px-8 py-4 bg-brand-black text-brand-white font-bold rounded-xl text-lg hover:bg-gray-800 transition-colors cursor-pointer inline-block"
            >
              Claim Offer
            </button>
          </div>
          <div className="flex-1 flex justify-center">
             <img 
               src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=800&auto=format&fit=crop" 
               alt="Burger" 
               className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-8 border-red-500"
             />
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Flame } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  key?: string;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent navigation
    addToCart(product, 1);
  };

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-brand-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col h-full font-sans"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {product.spiceLevel === 'spicy' && (
          <div className="absolute top-4 left-4 bg-brand-red text-brand-white px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
            <Flame className="w-3 h-3" /> Spicy
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-lg text-gray-900 mb-2 leading-tight group-hover:text-brand-red transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display font-bold text-xl text-gray-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={handleQuickAdd}
            className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-brand-black hover:bg-brand-red hover:text-brand-white transition-colors cursor-pointer"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

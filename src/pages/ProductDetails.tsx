import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Flame, Plus, Minus, Info } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<{ id: string; name: string; price: number }[]>([]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center font-sans">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button onClick={() => navigate('/menu')} className="text-brand-red font-bold hover:underline cursor-pointer">
            Return to Menu
          </button>
        </div>
      </div>
    );
  }

  const handleAddOnToggle = (addOn: { id: string; name: string; price: number }) => {
    setSelectedAddOns(prev => 
      prev.some(a => a.id === addOn.id)
        ? prev.filter(a => a.id !== addOn.id)
        : [...prev, addOn]
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedAddOns);
    navigate(-1);
  };

  const currentTotal = (product.price + selectedAddOns.reduce((sum, a) => sum + a.price, 0)) * quantity;

  return (
    <div className="bg-brand-gray min-h-screen font-sans pb-24">
      {/* Header */}
      <div className="bg-brand-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-brand-black transition-colors font-medium cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Menu
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-brand-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          {/* Image Gallery */}
          <div className="md:w-1/2 bg-gray-50 relative aspect-square md:aspect-auto">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {product.spiceLevel === 'spicy' && (
              <div className="absolute top-6 left-6 bg-brand-red text-brand-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1.5 shadow-lg">
                <Flame className="w-4 h-4" /> Extra Spicy
              </div>
            )}
          </div>
          
          {/* Details */}
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col">
            <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-widest">{product.category}</div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-brand-red mb-6">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>
            
            {/* Add-ons */}
            {product.options?.addOns && product.options.addOns.length > 0 && (
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-brand-red" /> Add Extras
                </h3>
                <div className="space-y-3">
                  {product.options.addOns.map(addOn => {
                    const isSelected = selectedAddOns.some(a => a.id === addOn.id);
                    return (
                      <label 
                        key={addOn.id} 
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                          isSelected ? 'border-brand-red bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox" 
                            checked={isSelected}
                            onChange={() => handleAddOnToggle(addOn)}
                            className="w-5 h-5 text-brand-red rounded focus:ring-brand-red"
                          />
                          <span className="font-medium text-gray-900">{addOn.name}</span>
                        </div>
                        <span className="font-bold text-gray-600">+${addOn.price.toFixed(2)}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Nutrition (Collapsible/Simple) */}
            {product.nutrition && (
              <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                   <Info className="w-4 h-4 text-gray-500" /> Nutritional Info
                </h3>
                <div className="grid grid-cols-4 gap-4 text-center divide-x divide-gray-200">
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Calories</div>
                    <div className="font-bold">{product.nutrition.calories}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Protein</div>
                    <div className="font-bold">{product.nutrition.protein}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Fat</div>
                    <div className="font-bold">{product.nutrition.fat}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Carbs</div>
                    <div className="font-bold">{product.nutrition.carbs}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-auto pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 items-center">
              {/* Quantity */}
              <div className="flex items-center justify-between bg-gray-100 rounded-xl p-2 w-full sm:w-auto h-14">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-brand-black hover:text-brand-red cursor-pointer"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="font-bold text-xl w-12 text-center text-brand-black">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-brand-black hover:text-brand-red cursor-pointer"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Add to Cart */}
              <button 
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-brand-red text-white font-bold rounded-xl text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 w-full cursor-pointer flex justify-between items-center px-6"
              >
                <span>Add to Order</span>
                <span>${currentTotal.toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

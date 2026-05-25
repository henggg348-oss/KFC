import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, CreditCard, Banknote, MapPin } from 'lucide-react';

export function Checkout() {
  const { items, total, subtotal, deliveryFee, tax, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  if (items.length === 0 && !isSuccess) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center font-sans">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <button onClick={() => navigate('/menu')} className="px-6 py-3 bg-brand-red text-white rounded-lg font-bold">
          Start an Order
        </button>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-brand-gray flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">Thank you for your order. Your finger-lickin' good food is being prepared and will be with you shortly.</p>
          <div className="bg-gray-50 p-4 rounded-xl mb-8 border border-gray-100 text-left">
             <p className="text-sm text-gray-500 mb-1">Order Number</p>
             <p className="font-mono font-bold text-lg">#CC-{Math.floor(Math.random() * 1000000)}</p>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-full py-4 bg-brand-black text-white font-bold rounded-xl text-lg hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-gray min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-brand-black mb-8 italic tracking-tighter">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Col - Forms */}
          <div className="lg:w-2/3 space-y-6">
            {/* Delivery Info */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                <MapPin className="text-brand-red w-6 h-6" /> Delivery Details
              </h2>
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input required type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                  <textarea required rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="123 Main St, Apt 4B..."></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Instructions (Optional)</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="Leave at the door..." />
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label 
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-brand-red bg-red-50 text-brand-red' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                >
                  <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="sr-only" />
                  <CreditCard className="w-8 h-8 mb-2" />
                  <span className="font-bold">Credit Card</span>
                </label>
                <label 
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-colors ${paymentMethod === 'cash' ? 'border-brand-red bg-red-50 text-brand-red' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                >
                  <input type="radio" name="payment" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} className="sr-only" />
                  <Banknote className="w-8 h-8 mb-2" />
                  <span className="font-bold">Cash on Delivery</span>
                </label>
                <label 
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-colors ${paymentMethod === 'qr' ? 'border-brand-red bg-red-50 text-brand-red' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                >
                  <input type="radio" name="payment" value="qr" checked={paymentMethod === 'qr'} onChange={() => setPaymentMethod('qr')} className="sr-only" />
                  <div className="w-8 h-8 mb-2 flex flex-wrap gap-[2px]">
                     <div className="w-[14px] h-[14px] bg-current"></div><div className="w-[14px] h-[14px] bg-current"></div>
                     <div className="w-[14px] h-[14px] bg-current"></div><div className="w-[14px] h-[14px] bg-current"></div>
                  </div>
                  <span className="font-bold">Local QR Pay</span>
                </label>
              </div>

              {paymentMethod === 'card' && (
                 <div className="mt-6 space-y-4 pt-6 border-t border-gray-100">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                         <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="MM/YY" />
                       </div>
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                         <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="123" />
                       </div>
                    </div>
                 </div>
              )}
            </div>
          </div>

          {/* Right Col - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div className="flex gap-2">
                      <span className="font-bold text-brand-black">{item.quantity}x</span>
                      <div className="text-gray-700">
                        <span className="font-medium line-clamp-1">{item.product.name}</span>
                        {item.selectedAddOns.length > 0 && (
                          <span className="text-xs text-gray-500 block">
                            + {item.selectedAddOns.map(a => a.name).join(', ')}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="font-bold whitespace-nowrap text-brand-black">${item.totalPrice.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pb-6 border-b border-gray-100 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-6 text-xl font-display font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                className="w-full py-4 bg-brand-red text-white font-bold rounded-xl text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

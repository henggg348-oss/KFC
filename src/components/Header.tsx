import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, User, MapPin, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Header() {
  const { items, setIsCartOpen } = useCart();
  const location = useLocation();

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`font-medium tracking-tight transition-colors hover:text-brand-red ${isActive ? 'text-brand-red' : 'text-brand-black'}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-white border-b border-gray-200 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-brand-white font-display font-bold text-xl italic tracking-tighter">
              C&C
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-brand-black hidden sm:block">
              Cluck & Crust
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/offers">Deals</NavLink>
            <NavLink to="/stores">Find Store</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden lg:flex items-center gap-2 bg-brand-gray px-3 py-1.5 rounded-full text-sm font-medium">
            <button className="px-3 py-1 bg-brand-white shadow-sm rounded-full">Delivery</button>
            <button className="px-3 py-1 text-gray-500 hover:text-brand-black transition-colors">Pickup</button>
          </div>

          <button className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-brand-black transition-colors">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">EN</span>
          </button>

          <button className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-brand-black transition-colors">
            <User className="w-5 h-5" />
            <span className="text-sm font-medium">Login</span>
          </button>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-brand-black hover:text-brand-red transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-brand-red text-brand-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>

          <button className="md:hidden p-2 text-brand-black hover:text-brand-red transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

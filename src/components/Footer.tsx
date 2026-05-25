import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t-[8px] border-brand-red font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-brand-red transition-colors">Our History</Link></li>
              <li><Link to="#" className="hover:text-brand-red transition-colors">Careers</Link></li>
              <li><Link to="/stores" className="hover:text-brand-red transition-colors">Find a Store</Link></li>
              <li><Link to="#" className="hover:text-brand-red transition-colors">Franchise Info</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-gray-400">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-brand-red transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-brand-red transition-colors">Delivery Info</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-gray-400">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-brand-red transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-brand-red transition-colors">Terms of Use</Link></li>
              <li><Link to="#" className="hover:text-brand-red transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-gray-400">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
            <div className="text-2xl font-display font-bold italic tracking-tighter">
              Cluck & Crust
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Cluck & Crust. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-display italic font-bold">Finger Lickin' Good</p>
        </div>
      </div>
    </footer>
  );
}

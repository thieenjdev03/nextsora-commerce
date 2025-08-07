import React from 'react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>Free shipping on all orders over $500. Shop now.</span>
          <div className="flex items-center space-x-4">
            <span>🇺🇸</span>
            <span>🛒</span>
            <span>👤</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-700">NextSora</div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/shop-by" className="text-gray-700 hover:text-green-600 transition-colors">SHOP BY</a>
            <a href="/office-chairs" className="text-gray-700 hover:text-green-600 transition-colors">OFFICE CHAIRS</a>
            <a href="/desks-tables" className="text-gray-700 hover:text-green-600 transition-colors">DESKS & TABLES</a>
            <a href="/bundles" className="text-gray-700 hover:text-green-600 transition-colors">BUNDLES</a>
            <a href="/storage-accessories" className="text-gray-700 hover:text-green-600 transition-colors">STORAGE & ACCESSORIES</a>
            <a href="/sale" className="text-gray-700 hover:text-green-600 transition-colors">SALE</a>
          </nav>

          {/* CTA Button */}
          <Button variant="default" size="lg" className="bg-green-700 hover:bg-green-800">
            DESIGN MY OFFICE
          </Button>
        </div>
      </div>
    </header>
  );
}; 
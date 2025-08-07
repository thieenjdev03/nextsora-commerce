'use client';

import React, { useState } from 'react';
import { ShopBySpaceTab } from '../../types';
import { Button } from '../ui/Button';
import { OptimizedImage } from '../ui/OptimizedImage';

interface ShopBySpaceSectionProps {
  title: string;
  description: string;
  tabs: ShopBySpaceTab[];
}

export const ShopBySpaceSection: React.FC<ShopBySpaceSectionProps> = ({ title, description, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === index
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <OptimizedImage
              src={tabs[activeTab].content.imageUrl}
              alt={tabs[activeTab].name}
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            
            {/* Product Points */}
            {tabs[activeTab].content.products.map((product) => (
              <div
                key={product.id}
                className="absolute w-4 h-4 bg-green-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                style={{
                  left: `${product.x}%`,
                  top: `${product.y}%`,
                }}
                title={product.name}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs shadow-lg whitespace-nowrap">
                  {product.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-green-700 hover:bg-green-800"
          >
            SHOP ALL SPACES
          </Button>
        </div>
      </div>
    </section>
  );
}; 
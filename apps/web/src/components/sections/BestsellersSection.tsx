'use client';

import React, { useState } from 'react';
import { Product } from '../../types';
import { ProductCard } from '../ui/ProductCard';
import { Button } from '../ui/Button';

interface BestsellersSectionProps {
  bestsellers: Product[];
}

export const BestsellersSection: React.FC<BestsellersSectionProps> = ({ bestsellers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bestsellers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bestsellers.length) % bestsellers.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our bestsellers
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bestsellers.slice(currentIndex, currentIndex + 4).map((product, index) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            →
          </button>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-green-700 hover:bg-green-800"
          >
            SEE ALL PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  );
}; 
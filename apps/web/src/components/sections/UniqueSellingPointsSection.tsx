import React from 'react';
import { USPItem } from '../../types';

interface UniqueSellingPointsSectionProps {
  uspItems: USPItem[];
}

export const UniqueSellingPointsSection: React.FC<UniqueSellingPointsSectionProps> = ({ uspItems }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We do office furniture a little bit different.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            That means cutting out middlemen and manufacturers to give you an office you&apos;ll love for less.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {uspItems.map((item, index) => (
            <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
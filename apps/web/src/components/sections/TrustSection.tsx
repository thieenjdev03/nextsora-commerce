import React from 'react';
import { TrustPoint, TrustDescription } from '../../types';

interface TrustSectionProps {
  trustPoints: TrustPoint[];
  trustDescription: TrustDescription;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ trustPoints, trustDescription }) => {
  return (
    <section className="py-16 bg-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-2xl font-bold text-orange-800">
                {point.text}
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 mb-4">
            {trustDescription.text}
            <a 
              href={trustDescription.link}
              className="text-green-700 hover:text-green-800 underline ml-1"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}; 
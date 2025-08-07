import React from 'react';
import { PressLogo, PressQuote } from '../../types';
import { OptimizedImage } from '../ui/OptimizedImage';

interface PressSectionProps {
  pressLogos: PressLogo[];
  pressQuote: PressQuote;
}

export const PressSection: React.FC<PressSectionProps> = ({ pressLogos, pressQuote }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">PRESS</h2>
          <blockquote className="text-xl text-gray-700 italic max-w-3xl mx-auto">
            &quot;{pressQuote.text}&quot;
            <footer className="text-sm text-gray-500 mt-2">— {pressQuote.source}</footer>
          </blockquote>
        </div>

        {/* Press Logos */}
        <div className="flex justify-center items-center space-x-12 opacity-60">
          {pressLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              className="hover:opacity-100 transition-opacity duration-300"
            >
              <OptimizedImage
                src={logo.imageUrl}
                alt={logo.name}
                width={48}
                height={48}
                className="h-8 md:h-12 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}; 
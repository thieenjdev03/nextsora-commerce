import React from 'react';
import { HeroData } from '../../types';
import { Button } from '../ui/Button';
import { OptimizedImage } from '../ui/OptimizedImage';

interface HeroSectionProps {
  data: HeroData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={data.imageUrl}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            {data.description}
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-white text-green-700 hover:bg-gray-100"
          >
            {data.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}; 
import React from 'react';
import { Testimonial } from '../../types';
import { OptimizedImage } from './OptimizedImage';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="flex items-start space-x-4">
        <OptimizedImage
          src={testimonial.avatarUrl}
          alt={testimonial.author}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-gray-700 mb-3 italic">&quot;{testimonial.quote}&quot;</p>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
            <p className="text-sm text-gray-600">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 
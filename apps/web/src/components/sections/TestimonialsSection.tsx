import React from 'react';
import { Testimonial, PressQuote } from '../../types';
import { TestimonialCard } from '../ui/TestimonialCard';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  pressQuotes: PressQuote[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials, pressQuotes }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by teams, remote workers & press.
          </h2>
        </div>

        {/* Main Press Quote */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <blockquote className="text-2xl text-gray-700 italic mb-4">
            &quot;{pressQuotes[0]?.text}&quot;
          </blockquote>
          <p className="text-lg text-gray-600">— {pressQuotes[0]?.source}</p>
        </div>

        {/* Press Logos */}
        <div className="flex justify-center items-center space-x-8 mb-12 opacity-60">
          <span className="text-lg font-semibold text-gray-700">TechCrunch</span>
          <span className="text-lg font-semibold text-gray-700">Forbes</span>
          <span className="text-lg font-semibold text-gray-700">Apartment Therapy</span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}; 
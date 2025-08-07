import React from 'react';
import { Product } from '../../types';
import { OptimizedImage } from './OptimizedImage';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  return (
    <div className={`group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <OptimizedImage
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-2xl font-bold text-green-600">${product.price}</p>
        <a
          href={product.link}
          className="inline-block mt-3 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
        >
          View Details →
        </a>
      </div>
    </div>
  );
}; 
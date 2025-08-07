import React from 'react';
import { ProductCategory } from '../../types';
import { Button } from '../ui/Button';
import { OptimizedImage } from '../ui/OptimizedImage';

interface ProductCategoriesSectionProps {
  productCategories: ProductCategory[];
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({ productCategories }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore our products
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <OptimizedImage
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <a
                    href={category.link}
                    className="inline-block text-sm font-medium hover:underline"
                  >
                    SEE ALL
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-green-700 hover:bg-green-800"
          >
            SHOP COLLECTIONS
          </Button>
        </div>
      </div>
    </section>
  );
}; 
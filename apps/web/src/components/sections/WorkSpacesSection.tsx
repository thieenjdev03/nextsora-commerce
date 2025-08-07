import React from 'react';
import { WorkSpace } from '../../types';
import { OptimizedImage } from '../ui/OptimizedImage';

interface WorkSpacesSectionProps {
  workSpaces: WorkSpace[];
}

export const WorkSpacesSection: React.FC<WorkSpacesSectionProps> = ({ workSpaces }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Wherever you are, work your best
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {workSpaces.map((space, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <OptimizedImage
                  src={space.imageUrl}
                  alt={space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{space.title}</h3>
                  <p className="text-lg opacity-90">{space.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
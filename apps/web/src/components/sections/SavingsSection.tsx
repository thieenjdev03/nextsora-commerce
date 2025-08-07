import React from 'react';
import { SavingsData } from '../../types';
import { Button } from '../ui/Button';

interface SavingsSectionProps {
  savingsData: SavingsData;
}

export const SavingsSection: React.FC<SavingsSectionProps> = ({ savingsData }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {savingsData.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {savingsData.description}
            </p>
          </div>

          {/* Chart */}
          <div className="mb-12">
            <div className="flex items-end justify-center space-x-8 max-w-md mx-auto">
              {savingsData.chartData.map((item, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-20 rounded-t-lg mb-2"
                    style={{ 
                      height: `${item.value * 2}px`, 
                      backgroundColor: item.color 
                    }}
                  ></div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-green-700 hover:bg-green-800"
            >
              OUR STORY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}; 
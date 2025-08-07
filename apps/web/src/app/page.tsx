'use client';

import React from 'react';
import { useLandingData } from '../hooks/useLandingData';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

import { GoogleAnalytics } from '../components/analytics/GoogleAnalytics';
import { ErrorBoundary } from '../components/error/ErrorBoundary';
import { Header } from '../components/sections/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { PressSection } from '../components/sections/PressSection';
import { WorkSpacesSection } from '../components/sections/WorkSpacesSection';
import { ProductCategoriesSection } from '../components/sections/ProductCategoriesSection';
import { UniqueSellingPointsSection } from '../components/sections/UniqueSellingPointsSection';
import { SavingsSection } from '../components/sections/SavingsSection';
import { BestsellersSection } from '../components/sections/BestsellersSection';
import { TrustSection } from '../components/sections/TrustSection';
import { ShopBySpaceSection } from '../components/sections/ShopBySpaceSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { Footer } from '../components/sections/Footer';

export default function LandingPage() {
  return (
    <ErrorBoundary>
      <LandingPageContent />
    </ErrorBoundary>
  );
}

function LandingPageContent() {
  const { data, loading, error } = useLandingData();

  return (
    <>
      <GoogleAnalytics />
      
      {loading && (
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      )}

      {error && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Page</h1>
            <p className="text-gray-600">{error || 'Failed to load data'}</p>
          </div>
        </div>
      )}

      {data && (
        <div className="min-h-screen">
          <Header />
          <HeroSection data={data.hero} />
          <PressSection 
            pressLogos={data.pressLogos} 
            pressQuote={data.pressQuote} 
          />
          <WorkSpacesSection workSpaces={data.workSpaces} />
          <ProductCategoriesSection productCategories={data.productCategories} />
          <UniqueSellingPointsSection uspItems={data.uspItems} />
          <SavingsSection savingsData={data.savingsData} />
          <BestsellersSection bestsellers={data.bestsellers} />
          <TrustSection 
            trustPoints={data.trustPoints} 
            trustDescription={data.trustDescription} 
          />
          <ShopBySpaceSection 
            title={data.shopBySpace.title}
            description={data.shopBySpace.description}
            tabs={data.shopBySpace.tabs}
          />
          <TestimonialsSection 
            testimonials={data.testimonials} 
            pressQuotes={data.pressQuotes} 
          />
          <Footer 
            footerLinks={data.footerLinks}
            socialLinks={data.socialLinks}
            contactInfo={data.contactInfo}
          />
        </div>
      )}
    </>
  );
}
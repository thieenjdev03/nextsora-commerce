'use client';

import { useState, useEffect } from 'react';
import { 
  HeroData, 
  PressLogo, 
  PressQuote, 
  WorkSpace, 
  ProductCategory, 
  USPItem, 
  SavingsData, 
  Product, 
  TrustPoint, 
  TrustDescription, 
  ShopBySpaceTab, 
  Testimonial, 
  FooterCategory, 
  SocialLink, 
  ContactInfo 
} from '../types';

interface LandingData {
  hero: HeroData;
  pressLogos: PressLogo[];
  pressQuote: PressQuote;
  workSpaces: WorkSpace[];
  productCategories: ProductCategory[];
  uspItems: USPItem[];
  savingsData: SavingsData;
  bestsellers: Product[];
  trustPoints: TrustPoint[];
  trustDescription: TrustDescription;
  shopBySpace: {
    title: string;
    description: string;
    tabs: ShopBySpaceTab[];
  };
  testimonials: Testimonial[];
  pressQuotes: PressQuote[];
  footerLinks: FooterCategory[];
  socialLinks: SocialLink[];
  contactInfo: ContactInfo;
}

export const useLandingData = () => {
  const [data, setData] = useState<LandingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch all data in parallel
        const [
          heroRes,
          pressRes,
          workSpacesRes,
          productCategoriesRes,
          uspItemsRes,
          savingsRes,
          bestsellersRes,
          trustRes,
          shopBySpaceRes,
          testimonialsRes,
          footerRes
        ] = await Promise.all([
          fetch('/api/landing/hero'),
          fetch('/api/landing/press'),
          fetch('/api/landing/work-spaces'),
          fetch('/api/landing/product-categories'),
          fetch('/api/landing/usp-items'),
          fetch('/api/landing/savings'),
          fetch('/api/landing/bestsellers'),
          fetch('/api/landing/trust'),
          fetch('/api/landing/shop-by-space'),
          fetch('/api/landing/testimonials'),
          fetch('/api/landing/footer')
        ]);

        const [
          hero,
          press,
          workSpaces,
          productCategories,
          uspItems,
          savings,
          bestsellers,
          trust,
          shopBySpace,
          testimonials,
          footer
        ] = await Promise.all([
          heroRes.json(),
          pressRes.json(),
          workSpacesRes.json(),
          productCategoriesRes.json(),
          uspItemsRes.json(),
          savingsRes.json(),
          bestsellersRes.json(),
          trustRes.json(),
          shopBySpaceRes.json(),
          testimonialsRes.json(),
          footerRes.json()
        ]);

        setData({
          hero,
          pressLogos: press.pressLogos,
          pressQuote: press.pressQuote,
          workSpaces,
          productCategories,
          uspItems,
          savingsData: savings,
          bestsellers,
          trustPoints: trust.trustPoints,
          trustDescription: trust.trustDescription,
          shopBySpace,
          testimonials: testimonials.testimonials,
          pressQuotes: testimonials.pressQuotes,
          footerLinks: footer.footerLinks,
          socialLinks: footer.socialLinks,
          contactInfo: footer.contactInfo
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}; 
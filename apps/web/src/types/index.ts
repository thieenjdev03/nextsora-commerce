// Landing page data types
export interface HeroData {
  title: string;
  description: string;
  ctaText: string;
  imageUrl: string;
}

export interface PressLogo {
  name: string;
  imageUrl: string;
  link: string;
}

export interface PressQuote {
  text: string;
  source: string;
}

export interface WorkSpace {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface ProductCategory {
  name: string;
  imageUrl: string;
  link: string;
}

export interface USPItem {
  icon: string;
  title: string;
  description: string;
}

export interface ChartData {
  label: string;
  value: number;
  color: string;
}

export interface SavingsData {
  title: string;
  description: string;
  chartData: ChartData[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  link: string;
}

export interface TrustPoint {
  text: string;
}

export interface TrustDescription {
  text: string;
  link: string;
}

export interface SpaceProduct {
  id: string;
  x: number;
  y: number;
  name: string;
}

export interface ShopBySpaceTab {
  name: string;
  content: {
    imageUrl: string;
    products: SpaceProduct[];
  };
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}

export interface FooterLink {
  text: string;
  link: string;
}

export interface FooterCategory {
  category: string;
  items: FooterLink[];
}

export interface SocialLink {
  icon: string;
  link: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

export interface LandingPageData {
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
import { NextResponse } from 'next/server';
import { HeroData } from '../../../../types';

export async function GET() {
  // In the future, this will fetch from database
  const heroData: HeroData = {
    title: "NextSora's Most Loved Office Furniture",
    description: "Upgrade your work-from-home setup. Top-rated by TechCrunch, Forbes, and 10,000+ customers.",
    ctaText: "SHOP NOW",
    imageUrl: "/images/hero-bg.jpg"
  };

  return NextResponse.json(heroData);
} 
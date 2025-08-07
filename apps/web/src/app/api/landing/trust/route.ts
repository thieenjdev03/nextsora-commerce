import { NextResponse } from 'next/server';
import { TrustPoint, TrustDescription } from '../../../../types';

export async function GET() {
  const trustData = {
    trustPoints: [
      { text: "Free shipping." },
      { text: "30 day trial." },
      { text: "5,000+ five-star reviews." }
    ] as TrustPoint[],
    trustDescription: {
      text: "Get live, local support from assembly to ergonomic tips. If there's something you don't love, return your like-new furniture for any reason within 30 days.",
      link: "/learn-more"
    } as TrustDescription
  };

  return NextResponse.json(trustData);
} 
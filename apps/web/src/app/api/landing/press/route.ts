import { NextResponse } from 'next/server';
import { PressLogo, PressQuote } from '../../../../types';

export async function GET() {
  // In the future, this will fetch from database
  const pressData = {
    pressLogos: [
      { name: "TechCrunch", imageUrl: "/images/logos/techcrunch.png", link: "#" },
      { name: "Forbes", imageUrl: "/images/logos/forbes.png", link: "#" },
      { name: "Wired", imageUrl: "/images/logos/wired.png", link: "#" },
      { name: "CNN", imageUrl: "/images/logos/cnn.png", link: "#" }
    ] as PressLogo[],
    pressQuote: {
      text: "WFH in comfort with NextSora's high-quality ergonomic chairs and standing desks.",
      source: "TechCrunch"
    } as PressQuote
  };

  return NextResponse.json(pressData);
} 
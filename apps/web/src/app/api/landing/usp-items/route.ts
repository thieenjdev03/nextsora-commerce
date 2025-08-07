import { NextResponse } from 'next/server';
import { USPItem } from '../../../../types';

export async function GET() {
  const uspItems: USPItem[] = [
    {
      icon: "🔄",
      title: "Ergonomic Support",
      description: "Premium comfort for long work hours"
    },
    {
      icon: "👥",
      title: "Fewer Middlemen",
      description: "Direct to consumer pricing"
    },
    {
      icon: "🚚",
      title: "Free & Fast Shipping",
      description: "Quick delivery nationwide"
    },
    {
      icon: "🤝",
      title: "White-Glove Service",
      description: "Premium installation and support"
    },
    {
      icon: "⚡",
      title: "Quick Turnaround",
      description: "Fast production and delivery"
    },
    {
      icon: "🎯",
      title: "Track & Flexibility",
      description: "Adaptable solutions for any space"
    }
  ];

  return NextResponse.json(uspItems);
} 
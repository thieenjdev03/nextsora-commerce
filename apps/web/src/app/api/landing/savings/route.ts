import { NextResponse } from 'next/server';
import { SavingsData } from '../../../../types';

export async function GET() {
  const savingsData: SavingsData = {
    title: "We sell direct and share the savings.",
    description: "We cut out middlemen and manufacturers to give you an office you'll love for less, up to 50% compared to traditional office furniture or other brands.",
    chartData: [
      { label: "Traditional Office Furniture", value: 100, color: "#6B7280" },
      { label: "NextSora", value: 50, color: "#059669" }
    ]
  };

  return NextResponse.json(savingsData);
} 
import { NextResponse } from 'next/server';
import { Testimonial, PressQuote } from '../../../../types';

export async function GET() {
  const testimonialsData = {
    testimonials: [
      {
        quote: "NextSora transformed our office setup completely. The quality is outstanding!",
        author: "Sarah Johnson",
        title: "CEO, TechStart Inc.",
        avatarUrl: "/images/testimonials/sarah.jpg"
      },
      {
        quote: "Best investment for our remote team. Everyone loves their new chairs!",
        author: "Mike Chen",
        title: "CTO, RemoteWorks",
        avatarUrl: "/images/testimonials/mike.jpg"
      },
      {
        quote: "Affordable luxury that actually delivers. Highly recommended!",
        author: "Emma Davis",
        title: "Design Director, CreativeCo",
        avatarUrl: "/images/testimonials/emma.jpg"
      },
      {
        quote: "The customer service is as good as the furniture. Amazing experience!",
        author: "David Wilson",
        title: "Operations Manager, ScaleUp",
        avatarUrl: "/images/testimonials/david.jpg"
      }
    ] as Testimonial[],
    pressQuotes: [
      {
        text: "The brand builds premium office furniture, including chairs, desks, tables, and accessories, at much lower prices by selling direct to consumers. They also offer premium white-glove services for in-desk design and exceptional supportive service.",
        source: "TechCrunch"
      }
    ] as PressQuote[]
  };

  return NextResponse.json(testimonialsData);
} 
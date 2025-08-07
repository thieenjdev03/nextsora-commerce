import { NextResponse } from 'next/server';
import { Product } from '../../../../types';

export async function GET() {
  const bestsellers: Product[] = [
    {
      id: "1",
      name: "Task Chair",
      price: 299,
      imageUrl: "/images/products/task-chair.jpg",
      link: "/products/task-chair"
    },
    {
      id: "2",
      name: "Ergonomic Chair",
      price: 399,
      imageUrl: "/images/products/ergonomic-chair.jpg",
      link: "/products/ergonomic-chair"
    },
    {
      id: "3",
      name: "Office Desk",
      price: 199,
      imageUrl: "/images/products/office-desk.jpg",
      link: "/products/office-desk"
    },
    {
      id: "4",
      name: "Saddle Chair",
      price: 149,
      imageUrl: "/images/products/saddle-chair.jpg",
      link: "/products/saddle-chair"
    }
  ];

  return NextResponse.json(bestsellers);
} 
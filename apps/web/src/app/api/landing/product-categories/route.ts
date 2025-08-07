import { NextResponse } from 'next/server';
import { ProductCategory } from '../../../../types';

export async function GET() {
  // In the future, this will fetch from database
  const productCategories: ProductCategory[] = [
    {
      name: "Chairs",
      imageUrl: "/images/categories/chairs.jpg",
      link: "/collections/chairs"
    },
    {
      name: "Desks",
      imageUrl: "/images/categories/desks.jpg",
      link: "/collections/desks"
    },
    {
      name: "Accessories",
      imageUrl: "/images/categories/accessories.jpg",
      link: "/collections/accessories"
    },
    {
      name: "Bundles",
      imageUrl: "/images/categories/bundles.jpg",
      link: "/collections/bundles"
    }
  ];

  return NextResponse.json(productCategories);
} 
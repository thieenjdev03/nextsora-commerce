import { NextResponse } from 'next/server';
import { ShopBySpaceTab } from '../../../../types';

export async function GET() {
  const shopBySpaceData = {
    title: "Shop by space and get inspired",
    description: "Get inspired by seeing how our NextSora furniture fits in your actual home. Explore different spaces and their featured products.",
    tabs: [
      {
        name: "BUDGET BUREAU",
        content: {
          imageUrl: "/images/spaces/budget-bureau.jpg",
          products: [
            { id: "1", x: 20, y: 30, name: "Task Chair" },
            { id: "2", x: 60, y: 40, name: "Compact Desk" }
          ]
        }
      },
      {
        name: "COMMAND CENTRAL STUDIO",
        content: {
          imageUrl: "/images/spaces/command-central.jpg",
          products: [
            { id: "3", x: 25, y: 35, name: "Ergonomic Chair" },
            { id: "4", x: 70, y: 45, name: "Standing Desk" }
          ]
        }
      },
      {
        name: "ORGANIZED OASIS",
        content: {
          imageUrl: "/images/spaces/organized-oasis.jpg",
          products: [
            { id: "5", x: 30, y: 25, name: "Storage Cabinet" },
            { id: "6", x: 65, y: 50, name: "Workstation" }
          ]
        }
      },
      {
        name: "MOMENTARY SANCTUARY",
        content: {
          imageUrl: "/images/spaces/momentary-sanctuary.jpg",
          products: [
            { id: "7", x: 40, y: 30, name: "Comfort Chair" },
            { id: "8", x: 75, y: 40, name: "Relaxation Desk" }
          ]
        }
      }
    ] as ShopBySpaceTab[]
  };

  return NextResponse.json(shopBySpaceData);
} 
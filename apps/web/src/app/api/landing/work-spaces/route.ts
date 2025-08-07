import { NextResponse } from 'next/server';
import { WorkSpace } from '../../../../types';

export async function GET() {
  // In the future, this will fetch from database
  const workSpaces: WorkSpace[] = [
    {
      title: "Home Office",
      description: "Work essentials for everyday use",
      imageUrl: "/images/home-office.jpg",
      link: "/collections/home-office"
    },
    {
      title: "Team Office",
      description: "Solutions for teams of all sizes",
      imageUrl: "/images/team-office.jpg",
      link: "/collections/team-office"
    }
  ];

  return NextResponse.json(workSpaces);
} 
import { NextResponse } from 'next/server';
import { FooterCategory, SocialLink, ContactInfo } from '../../../../types';

export async function GET() {
  const footerData = {
    footerLinks: [
      {
        category: "SHOP",
        items: [
          { text: "Office Chairs", link: "/collections/chairs" },
          { text: "Desks", link: "/collections/desks" },
          { text: "Bundles", link: "/collections/bundles" },
          { text: "Accessories", link: "/collections/accessories" }
        ]
      },
      {
        category: "BUSINESS",
        items: [
          { text: "Contact Us", link: "/contact" },
          { text: "Bulk Orders", link: "/bulk-orders" },
          { text: "Corporate Solutions", link: "/corporate" },
          { text: "Partnerships", link: "/partnerships" }
        ]
      },
      {
        category: "SUPPORT",
        items: [
          { text: "FAQ", link: "/faq" },
          { text: "Assembly Guide", link: "/assembly" },
          { text: "Returns", link: "/returns" },
          { text: "Warranty", link: "/warranty" }
        ]
      },
      {
        category: "NEWS, OFFERS AND MORE",
        items: [
          { text: "Blog", link: "/blog" },
          { text: "Newsletter", link: "/newsletter" },
          { text: "Press Kit", link: "/press" },
          { text: "Careers", link: "/careers" }
        ]
      }
    ] as FooterCategory[],
    socialLinks: [
      { icon: "instagram", link: "https://instagram.com/nextsora" },
      { icon: "facebook", link: "https://facebook.com/nextsora" },
      { icon: "linkedin", link: "https://linkedin.com/company/nextsora" },
      { icon: "twitter", link: "https://twitter.com/nextsora" }
    ] as SocialLink[],
    contactInfo: {
      address: "200 Toronto St. N, Unit 201, Markham, ON L3P 3J2, Canada",
      email: "hello@nextsora.com",
      phone: "+1 (555) 123-4567"
    } as ContactInfo
  };

  return NextResponse.json(footerData);
} 
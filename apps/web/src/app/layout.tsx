import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "NextSora - Canada's Most Loved Office Furniture",
  description: "Upgrade your work-from-home setup with NextSora's high-quality ergonomic chairs and standing desks. Top-rated by TechCrunch, Forbes, and 10,000+ customers.",
  keywords: "office furniture, ergonomic chairs, standing desks, home office, work from home",
  authors: [{ name: "NextSora" }],
  openGraph: {
    title: "NextSora - Canada's Most Loved Office Furniture",
    description: "Upgrade your work-from-home setup with NextSora's high-quality ergonomic chairs and standing desks.",
    url: "https://nextsora.com",
    siteName: "NextSora",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "NextSora Office Furniture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextSora - Canada's Most Loved Office Furniture",
    description: "Upgrade your work-from-home setup with NextSora's high-quality ergonomic chairs and standing desks.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
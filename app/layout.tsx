import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Grow Local Creative | Your Neighborhood Button Pusher in the Foothills',
  description: 'Serving small businesses, nonprofits, churches, and makers across the Georgetown Divide and El Dorado & Placer Counties — pushing the right buttons so life stays simpler.',
  keywords: 'Georgetown Divide, Cool CA, El Dorado County, small business, website help, local SEO, Google Business Profile, Northern Foothill Sierras',
  openGraph: {
    title: 'Grow Local Creative | Your Neighborhood Button Pusher',
    description: 'Simple web help, local SEO, and phone-friendly tools for small businesses in the Georgetown Divide and Northern Foothill Sierras.',
    type: 'website',
  },
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

import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/hooks/useLanguage';

export const metadata: Metadata = {
  title: 'ROEN TRADING | Global Sourcing & B2B Distribution',
  description:
    '제품과 시장, 그리고 사람을 연결하는 글로벌 트레이딩 기업 ROEN TRADING 공식 기업 홈페이지. Global Sourcing, International Trading, Wholesale Distribution, Strategic Business Partnership.',
  keywords: [
    'ROEN TRADING',
    '로엔 트레이딩',
    'Global Sourcing',
    'International Trading',
    'Wholesale Distribution',
    '글로벌 소싱',
    '의류 무역',
    '패션 유통',
  ],
  authors: [{ name: 'ROEN TRADING' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://roentrading.com',
    title: 'ROEN TRADING | Global Sourcing & B2B Distribution',
    description: 'Connecting Products, Markets and People. Beyond Trading.',
    siteName: 'ROEN TRADING',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0c',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="bg-[#0a0a0c] text-[#f5f5f7] antialiased selection:bg-[#c5a880] selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

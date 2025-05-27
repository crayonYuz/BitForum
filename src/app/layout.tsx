import type { Metadata } from 'next';
import localFont from "next/font/local";
import { Providers } from '@/providers/index';
import './globals.css';
import { Toaster } from 'sonner';

const pretendard = localFont({
  src: "../font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: {
    default: '비트포럼 - 코인 선물 거래의 시작',
    template: '%s | 비트포럼 - 코인 선물 거래의 시작',
  },
  description: '비트포럼은 코인 선물 거래와 정보를 한눈에 볼 수 있는 통합 플랫폼입니다.',
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <Providers>{children}</Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
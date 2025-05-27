import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '코인정보',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
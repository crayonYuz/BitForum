import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '커뮤니티',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
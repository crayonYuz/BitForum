import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '스케쥴',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
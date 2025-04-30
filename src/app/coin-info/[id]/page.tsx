'use client'

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Navbar } from '@/components/main/Navbar';
import { TradingViewChart } from '@/components/coin/TrandingViewChart';
import { getCoinDetail } from '@/lib/coinChart';
import { CoinDetailHeader } from '@/components/coin/CoinDetailHeader';
import { ExchangeTable } from '@/components/coin/ExchangeTable';

export default function CoinDetailPage() {
    const { id } = useParams();

    const { data: coin, isLoading, isError } = useQuery({
        queryKey: ['coinDetail', id],
        queryFn: () => getCoinDetail(id as string),
    });

    if (isLoading) return <div className="p-4">불러오는 중...</div>;
    if (isError || !coin) return <div className="p-4 text-red-500">에러 발생</div>;

    return (
        <>
            <Navbar />
            <main className="pt-20 max-w-6xl mx-auto px-4 space-y-6">
                <CoinDetailHeader coin={coin} />
                <TradingViewChart symbol={coin.symbol.toUpperCase() + 'KRW'} />
                <ExchangeTable coin={coin.id} />
            </main>
        </>
    );
}
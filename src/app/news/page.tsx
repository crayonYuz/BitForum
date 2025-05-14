'use client';

import { useQuery } from '@tanstack/react-query';
import { getCoinNews, CoinNews } from '@/lib/api/news/getCoinNews';

import { Navbar } from "@/components/main/Navbar";
import { CoinNewsList } from "@/components/news/CoinNewsList";
import { FearGreedGauge } from "@/components/news/FearGreedGauge";
import { NewsSourceList } from "@/components/news/NewsSourceList";
import { SectionTitle } from "@/components/news/SectionTitle";
import { BitforumNewsList } from "@/components/news/BitforumNewsList";
import { RisingTopicsSection } from "@/components/news/RisingTopicsSection";
import { FallingTopicsSection } from "@/components/news/FallingTopicsSection";
import { AffiliateBanner } from "@/components/affiliate/AffiliateBanner";

export default function Page() {
    const { data: news = [], isLoading, isError } = useQuery<CoinNews[]>({
        queryKey: ['coinNews'],
        queryFn: getCoinNews,
    });

    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-6 lg:flex lg:gap-6 pt-20">
                <div className="lg:w-2/3 space-y-6">
                    <section className="space-y-4">
                        <AffiliateBanner />
                        <SectionTitle title="비트포럼 뉴스" />
                        <BitforumNewsList />
                    </section>

                    <section className="space-y-4">
                        <SectionTitle title="실시간 코인 뉴스" />
                        {isLoading ? (
                            <p className="text-gray-400">뉴스를 불러오는 중...</p>
                        ) : isError ? (
                            <p className="text-red-500">뉴스를 불러오지 못했습니다.</p>
                        ) : (
                            <CoinNewsList news={news} />
                        )}
                    </section>
                </div>

                <aside className="lg:w-1/4 space-y-6">
                    <FearGreedGauge />
                    <RisingTopicsSection title="상승 관점" />
                    <FallingTopicsSection title="하락 관점" />
                    <NewsSourceList title="뉴스출처 바로가기" />
                </aside>
            </main>
        </>
    );
}
'use client';

import { Suspense, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCoinNews, CoinNews } from '@/lib/api/news/getCoinNews';
import { getUSStockNews } from '@/lib/api/news/getUSStockNews';

import { Navbar } from "@/components/main/Navbar";
import { FearGreedGauge } from "@/components/news/FearGreedGauge";
import { AffiliateBanner } from "@/components/affiliate/AffiliateBanner";
import { CustomTabs } from '@/components/community/CustomTabs';
import { useRouter, useSearchParams } from 'next/navigation';
import { NewsTabContent } from '@/components/news/NewsTabContent';
import { TopicSection } from '@/components/news/TopicSection';

function NewsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const tabs = ['홈', '비트포럼 뉴스', '미국 증시', '코인 뉴스'];
    const [selectedTab, setSelectedTab] = useState('홈');

    const { data: news = [], isLoading, isError } = useQuery<CoinNews[]>({
        queryKey: ['coinNews'],
        queryFn: getCoinNews,
    });

    const { data: usStockNews = [], isLoading: usLoading, isError: usError } = useQuery<CoinNews[]>({
        queryKey: ['usStockNews'],
        queryFn: getUSStockNews,
    });

    useEffect(() => {
        const initialTab = searchParams.get("tab");

        if (!initialTab) {
            router.replace(`/news?tab=${encodeURIComponent('홈')}`);
        } else {
            setSelectedTab(initialTab);
        }
    }, [searchParams, router]);

    return (
        <div className="bg-white min-h-screen text-gray-900 pt-6">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 pt-14 pb-20 lg:flex lg:gap-6 justify-center">
                <div className="lg:w-2/3 space-y-6">
                    <AffiliateBanner />

                    <CustomTabs
                        tabs={tabs}
                        selectedTab={selectedTab}
                        onTabChange={(tab) => {
                            setSelectedTab(tab);
                            router.replace(`/news?tab=${encodeURIComponent(tab)}`);
                        }}
                    />

                    <NewsTabContent
                        selectedTab={selectedTab}
                        isLoading={isLoading}
                        isError={isError}
                        news={news}
                        usStockNews={usStockNews}
                        usLoading={usLoading}
                        usError={usError}
                    />
                </div>

                <aside className="hidden lg:block lg:w-1/4 space-y-6">
                    <FearGreedGauge />
                    <TopicSection title="코인 주요 이슈" news={news} />
                    <TopicSection title="미국 증시 이슈" news={usStockNews} />
                </aside>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div className="p-4 text-center">로딩 중...</div>}>
            <NewsPage />
        </Suspense>
    );
}
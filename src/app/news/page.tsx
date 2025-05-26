'use client';

import { Suspense, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCoinNews, CoinNews } from '@/lib/api/news/getCoinNews';

import { Navbar } from "@/components/main/Navbar";
import { FearGreedGauge } from "@/components/news/FearGreedGauge";
import { NewsSourceList } from "@/components/news/NewsSourceList";
import { RisingTopicsSection } from "@/components/news/RisingTopicsSection";
import { FallingTopicsSection } from "@/components/news/FallingTopicsSection";
import { AffiliateBanner } from "@/components/affiliate/AffiliateBanner";
import { CustomTabs } from '@/components/community/CommunityTabs';
import { useRouter, useSearchParams } from 'next/navigation';
import { NewsTabContent } from '@/components/news/NewsTabContent';

function NewsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const tabs = ['홈', '비트포럼 뉴스', '미국 증시', '코인 뉴스'];
    const [selectedTab, setSelectedTab] = useState('홈');

    const { data: news = [], isLoading, isError } = useQuery<CoinNews[]>({
        queryKey: ['coinNews'],
        queryFn: getCoinNews,
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
                            router.replace(`/news?tab=${encodeURIComponent(tab)}`)
                        }}
                    />

                    <NewsTabContent
                        selectedTab={selectedTab}
                        isLoading={isLoading}
                        isError={isError}
                        news={news}
                    />

                </div>

                <aside className="hidden lg:block lg:w-1/4 space-y-6">
                    <FearGreedGauge />
                    <RisingTopicsSection title="상승 관점" />
                    <FallingTopicsSection title="하락 관점" />
                    <NewsSourceList title="뉴스출처 바로가기" />
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

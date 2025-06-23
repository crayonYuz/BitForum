'use client';

import { CoinNews } from '@/lib/api/news/getCoinNews';
import { SectionTitle } from '@/components/news/SectionTitle';
import { BitforumNewsList } from '@/components/news/BitforumNewsList';
import { CoinNewsList } from '@/components/news/CoinNewsList';
import { NewsSkeleton } from '@/components/skeleton/NewsSkeleton';
import { USStockNewsList } from '@/components/news/USStockNewsList';

type Props = {
    selectedTab: string;
    isLoading: boolean;
    isError: boolean;
    news: CoinNews[];
    usStockNews: CoinNews[];
    usLoading: boolean;
    usError: boolean;
};

export const NewsTabContent = ({
    selectedTab,
    isLoading,
    isError,
    news,
    usStockNews,
    usLoading,
    usError,
}: Props) => {
    switch (selectedTab) {
        case '비트포럼 뉴스':
            return (
                <div className="space-y-4">
                    <SectionTitle title="비트포럼 뉴스" />
                    {isLoading ? (
                        <NewsSkeleton />
                    ) : isError ? (
                        <p className='text-red-500'>뉴스를 불러오지 못했습니다.</p>
                    ) : (
                        <BitforumNewsList />
                    )}
                </div>
            );

        case '코인 뉴스':
            return (
                <div className="space-y-4">
                    <SectionTitle title="실시간 코인 뉴스" />
                    {isLoading ? (
                        <NewsSkeleton />
                    ) : isError ? (
                        <p className="text-red-500">뉴스를 불러오지 못했습니다.</p>
                    ) : (
                        <CoinNewsList news={news} />
                    )}
                </div>
            );

        case '미국 증시':
            return (
                <div className="space-y-4">
                    <SectionTitle title="미국 증시 뉴스" />
                    {usLoading ? (
                        <NewsSkeleton />
                    ) : usError ? (
                        <p className="text-red-500">미국 증시 뉴스를 불러오지 못했습니다.</p>
                    ) : (
                        <USStockNewsList news={usStockNews} />
                    )}
                </div>
            );

        case '홈':
        default:
            return (
                <div className="space-y-4">
                    <SectionTitle title="홈 뉴스" />
                    <BitforumNewsList />
                    {isLoading ? (
                        <NewsSkeleton />
                    ) : isError ? (
                        <p className="text-red-500">뉴스를 불러오지 못했습니다.</p>
                    ) : (
                        <CoinNewsList news={news} />
                    )}
                </div>
            );
    }
};

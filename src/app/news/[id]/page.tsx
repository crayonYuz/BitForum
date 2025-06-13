'use client'

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getCoinNews, getCoinNewsById } from '@/lib/api/news/getCoinNews';
import { getUSStockNews } from '@/lib/api/news/getUSStockNews';

import { Navbar } from '@/components/main/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { FearGreedGauge } from '@/components/news/FearGreedGauge';
import { TopicSection } from '@/components/news/TopicSection';
import { decodeHtmlEntities, formatParagraphs } from '@/utils/markdown';

export default function Page() {
    const params = useParams();
    const id = params?.id as string;

    const { data: news, isLoading, isError } = useQuery({
        queryKey: ['coinNews', id],
        queryFn: () => getCoinNewsById(id),
        enabled: !!id,
    });

    const { data: coinNews = [] } = useQuery({
        queryKey: ['coinNewsList'],
        queryFn: getCoinNews,
    });

    const { data: usStockNews = [] } = useQuery({
        queryKey: ['usStockNewsList'],
        queryFn: getUSStockNews,
    });

    if (isLoading) return <div className="p-6">뉴스를 불러오는 중...</div>;
    if (isError || !news) return <div className="p-6 text-red-500">뉴스를 불러오지 못했습니다.</div>;

    return (
        <div className="bg-white min-h-screen text-gray-900 pt-6 mb-20">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 pt-14 lg:flex lg:gap-6 justify-center">
                <main className="lg:w-2/3 space-y-8">
                    <Card>
                        <CardContent className="space-y-4 mb-10">
                            <div>
                                <div className="text-sm text-gray-400">실시간 코인 뉴스</div>
                                <h1 className="text-2xl font-bold mt-2">
                                    {decodeHtmlEntities(news.title.rendered)}
                                </h1>
                                <div className="text-sm text-gray-500 mt-1">
                                    {new Date(news.date).toLocaleDateString()}
                                </div>
                            </div>
                            <div
                                className="prose prose-sm max-w-none text-gray-900 min-h-[200px] space-y-4 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: formatParagraphs(decodeHtmlEntities(news.content.rendered)),
                                }}
                            />
                        </CardContent>
                    </Card>
                </main>

                <aside className="hidden lg:block lg:w-1/4 space-y-6">
                    <FearGreedGauge />
                    <TopicSection title="코인 주요 이슈" news={coinNews} />
                    <TopicSection title="미국 증시 이슈" news={usStockNews} />
                </aside>
            </div>
        </div>
    );
}
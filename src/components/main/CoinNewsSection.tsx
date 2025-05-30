import { useQuery } from '@tanstack/react-query';
import { getCoinNews, CoinNews } from '@/lib/api/news/getCoinNews';
import { NewsHighlightSection } from './NewsHighlightSection';
import { InfoCardSkeleton } from './InfoCardSkeleton';

export function CoinNewsSection() {
    const { data, isLoading } = useQuery<CoinNews[]>({
        queryKey: ['coinNews'],
        queryFn: getCoinNews,
    });

    if (isLoading) return <InfoCardSkeleton />;

    return <NewsHighlightSection title="코인 뉴스" posts={data?.slice(0, 5) || []} type={'coin'} />;
}
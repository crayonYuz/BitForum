import { useQuery } from '@tanstack/react-query';
import { getUSStockNews } from '@/lib/api/news/getUSStockNews';
import { NewsHighlightSection } from './NewsHighlightSection';
import { InfoCardSkeleton } from '../skeleton/InfoCardSkeleton';
import { CoinNews } from '@/lib/api/news/getCoinNews';

export function UsStockNewsSection() {
    const { data, isLoading } = useQuery<CoinNews[]>({
        queryKey: ['usStockNews'],
        queryFn: getUSStockNews,
    });

    if (isLoading) return <InfoCardSkeleton />;

    return <NewsHighlightSection title="미국 증시 뉴스" posts={data?.slice(0, 5) || []} />;
}
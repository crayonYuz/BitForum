'use client';

import { useQuery } from '@tanstack/react-query';
import { getCryptoPrices } from '@/lib/fetchCoins';

export function CoinTickerWidget() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: getCryptoPrices,
    refetchInterval: 10000,
  });

  if (isLoading) return <div className="p-2">시세 불러오는 중...</div>;
  if (isError || !data) return <div className="p-2 text-red-500">시세 로딩 실패</div>;

  return (
    <div className="flex overflow-x-auto whitespace-nowrap p-2 text-sm bg-gray-100 border-b">
      {data.map(coin => (
        <span key={coin.id} className="mr-6">
          {coin.name}: ₩{coin.current_price.toLocaleString()}원
        </span>
      ))}
    </div>
  );
}

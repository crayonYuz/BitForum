'use client';

import { useQuery } from '@tanstack/react-query';
import { getCryptoPrices } from '@/lib/fetchCoins';
import './CoinTickerWidget.css';

export function CoinTickerWidget() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: getCryptoPrices,
    refetchInterval: 10000,
  });

  if (isLoading) return <div className="p-2">시세 불러오는 중...</div>;
  if (isError || !data) return <div className="p-2 text-red-500">시세 로딩 실패</div>;

  return (
    <div className="ticker-wrapper overflow-hidden border-b bg-white">
      <div className="ticker-track flex whitespace-nowrap animate-ticker">
        {data.map(coin => (
          <span key={`a-${coin.id}`} className="mr-8 text-sm">
            {coin.name}(₩): {coin.current_price.toLocaleString()}
          </span>
        ))}
        {data.map(coin => (
          <span key={`b-${coin.id}`} className="mr-8 text-sm">
            {coin.name}(₩): {coin.current_price.toLocaleString()}
          </span>
        ))}
      </div>
    </div>
  );
}
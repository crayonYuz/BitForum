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
    <div className="relative overflow-hidden border-b bg-gray-100">
      <div className="animate-ticker flex whitespace-nowrap px-4 py-2">
        {data.concat(data).map(coin => ( // 👈 무한 스크롤처럼 보여주기 위해 2배로 복제
          <span key={`${coin.id}-${Math.random()}`} className="mr-8 text-sm">
            {coin.name}: ₩{coin.current_price.toLocaleString()}원
          </span>
        ))}
      </div>
    </div>
  );
}
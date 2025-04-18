'use client';

import { useQuery } from '@tanstack/react-query';
import { getCryptoPrices } from '@/lib/fetchCoins';
import { Coin } from '@/types/coin';

export default function Home() {
  const { data, isLoading, isError } = useQuery<Coin[]>({
    queryKey: ['cryptoPrices'],
    queryFn: getCryptoPrices,
    refetchInterval: 10000,
  });

  if (isLoading) return <div>로딩 중...</div>;

  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">💸 코인 시세</h1>
      <ul>
        {data?.map((coin) => (
          <li key={coin.id} className="mb-4">
            <div className="flex items-center">
              <img src={coin.image} alt={coin.name} className="w-8 h-8 mr-2" />
              <div>
                <div className="font-semibold">{coin.name} ({coin.symbol.toUpperCase()})</div>
                <div className="text-sm">
                  가격: ${coin.current_price.toLocaleString()} | 24h 변화: {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

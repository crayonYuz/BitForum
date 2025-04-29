'use client';

import { useQuery } from '@tanstack/react-query';
import { getCryptoPrices } from '@/lib/fetchCoins';
import { Coin } from '@/types/coin';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { CoinTableHeader } from '../coin/CoinTableHeader';
import { Pagination } from '../coin/Pagination';
import { CoinRow } from '../coin/CoinRow';

export function CoinInfoList() {
  const { data, isLoading, isError } = useQuery<Coin[]>({
    queryKey: ['cryptoPrices'],
    queryFn: getCryptoPrices,
    refetchInterval: 10000,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 10;

  const startIdx = (currentPage - 1) * coinsPerPage;
  const endIdx = startIdx + coinsPerPage;
  const currentCoins = data?.slice(startIdx, endIdx) ?? [];

  const totalPages = data ? Math.ceil(data.length / coinsPerPage) : 0;

  return (
    <Card className="p-4 w-full">
      <h2 className="font-semibold text-base mb-4">코인 정보</h2>
      <Input placeholder="무엇을 검색할까요?" className="mb-4" />
      <CoinTableHeader />

      {isLoading && <div className="text-sm text-gray-500 mt-4">불러오는 중...</div>}
      {isError && <div className="text-sm text-red-500 mt-4">에러가 발생했습니다.</div>}

      <ul>
        {currentCoins.map((coin) => (
          <CoinRow
            key={coin.id}
            id={coin.id}
            name={coin.name}
            image={coin.image}
            current_price={coin.current_price}
            price_change_percentage_24h={coin.price_change_percentage_24h}
          />
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={() => setCurrentPage((p) => Math.max(1, p - 1))}
        onNext={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
      />
    </Card>
  );
}
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
import { Search } from 'lucide-react';

export function CoinInfoList() {
  const { data, isLoading, isError } = useQuery<Coin[]>({
    queryKey: ['cryptoPrices'],
    queryFn: getCryptoPrices,
    refetchInterval: 10000,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const coinsPerPage = 10;

  const filteredData = data?.filter((coin: Coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(query.toLowerCase())
  ) ?? [];

  const totalPages = Math.ceil(filteredData.length / coinsPerPage);
  const startIdx = (currentPage - 1) * coinsPerPage;
  const endIdx = startIdx + coinsPerPage;
  const currentCoins = filteredData.slice(startIdx, endIdx);

  return (
    <Card className="p-4 w-full mt-8">
      <h2 className="font-semibold text-base mb-4">코인 정보</h2>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="코인명을 검색해주세요"
          className="pl-9"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <CoinTableHeader />

      {isLoading && <div className="text-sm text-gray-500 mt-4">불러오는 중...</div>}
      {isError && <div className="text-sm text-red-500 mt-4">에러가 발생했습니다.</div>}

      <ul>
        {currentCoins.map((coin: Coin) => (
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

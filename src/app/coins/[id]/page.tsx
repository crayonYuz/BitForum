import React from "react";
import { getCoinMarketChart } from "../../../lib/coinChart"
import { CoinChart } from '../../components/CoinChart';

interface Props {
  params: {
    id: string;
  };
}

export default async function CoinDetailPage({ params }: Props) {
  const chartData = await getCoinMarketChart(params.id, 7);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{params.id} 가격 차트</h1>
      <CoinChart data={chartData} />
    </div>
  );
}
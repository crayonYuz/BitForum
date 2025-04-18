import { TradingViewChart } from '../../components/TradingViewChart';

interface Props {
  params: {
    id: string;
  };
}

const tradingViewSymbolMap: Record<string, string> = {
  bitcoin: 'BINANCE:BTCUSDT',
  ethereum: 'BINANCE:ETHUSDT',
  ripple: 'BINANCE:XRPUSDT',
  cardano: 'BINANCE:ADAUSDT',
  binancecoin: 'BINANCE:BNBUSDT',
  solana: 'BINANCE:SOLUSDT',
  polkadot: 'BINANCE:DOTUSDT',
  uniswap: 'BINANCE:UNIUSDT',
  chainlink: 'BINANCE:LINKUSDT',
  litecoin: 'BINANCE:LTCUSDT',
};

export default function CoinDetailPage({ params }: Props) {
  const symbol = tradingViewSymbolMap[params.id];

  if (!symbol) {
    return <div className="p-4 text-red-500">해당 코인의 차트를 지원하지 않습니다.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{params.id.toUpperCase()} 실시간 차트</h1>
      <TradingViewChart symbol={symbol} />
    </div>
  );
}

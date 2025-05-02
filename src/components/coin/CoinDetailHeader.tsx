import { CoinDetail } from "@/types/coin";

export function CoinDetailHeader({ coin }: { coin: CoinDetail }) {
    return (
        <section className="mb-6">
            <h1 className="text-2xl font-bold">{coin.name} ({coin.symbol.toUpperCase()})</h1>
            <p className="text-muted-foreground">시가총액 {coin.market_data.market_cap.krw.toLocaleString()}원</p>
        </section>
    );
}
import { CoinDetail } from "@/types/coin";

export function ExchangeTable({ coin }: { coin: CoinDetail }) {
    const tickers = coin.tickers?.slice(0, 10) ?? [];

    if (tickers.length === 0) {
        return (
            <section>
                <h2 className="text-xl font-semibold mb-4">거래소 정보</h2>
                <p className="text-sm text-muted-foreground">거래소 데이터를 불러올 수 없습니다.</p>
            </section>
        );
    }

    return (
        <section>
            <h2 className="text-xl font-semibold mb-4">거래소 정보</h2>
            <table className="w-full text-sm border">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 text-left">거래소</th>
                        <th className="p-2 text-right">가격</th>
                        <th className="p-2 text-right">거래량</th>
                    </tr>
                </thead>
                <tbody>
                    {tickers.map((ticker, i) => (
                        <tr key={i} className="border-t">
                            <td className="p-2">{ticker.market.name}</td>
                            <td className="p-2 text-right">
                                {ticker.converted_last?.krw?.toLocaleString() ?? "-"}원
                            </td>
                            <td className="p-2 text-right">
                                {ticker.converted_volume?.krw?.toLocaleString() ?? "-"}원
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
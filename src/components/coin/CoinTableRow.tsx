import Link from "next/link";
import { Coin } from "@/types/coin";
import { cn } from "@/lib/utils";

export function CoinTableRow({ coin, index }: { coin: Coin; index: number }) {
    const getColor = (value: number) => {
        return value > 0 ? "text-green-500" : value < 0 ? "text-red-500" : "text-gray-500";
    };

    const formatVolume = (volume: number) => {
        return (volume / 1000000).toLocaleString("en-US", { maximumFractionDigits: 0 });
    };

    return (
        <Link href={`/coin-info/${coin.id}`} className="block">
            <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_0.2fr] items-center py-3 px-4 border-b hover:bg-muted transition-colors cursor-pointer">
                <div className="text-sm text-center text-muted-foreground">{index + 1}</div>

                <div className="flex items-center gap-2">
                    <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{coin.name}</span>
                        <span className="text-xs text-muted-foreground uppercase">{coin.symbol}</span>
                    </div>
                </div>

                <div className="text-right text-sm">{coin.current_price.toLocaleString()}원</div>

                <div className={cn("text-right text-sm", getColor(coin.price_change_percentage_1h))}>
                    {coin.price_change_percentage_1h?.toFixed(2)}%
                </div>

                <div className={cn("text-right text-sm", getColor(coin.price_change_percentage_24h))}>
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                </div>

                <div className={cn("text-right text-sm", getColor(coin.price_change_percentage_7d))}>
                    {coin.price_change_percentage_7d?.toFixed(2)}%
                </div>

                <div className="text-right text-sm">{formatVolume(coin.total_volume)}백만</div>

                <div className="text-right text-sm">{coin.market_cap_rank}위</div>
            </div>
        </Link>
    );
}
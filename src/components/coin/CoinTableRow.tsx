import Link from "next/link";
import { Coin } from "@/types/coin";
import { cn } from "@/lib/utils";

export function CoinTableRow({ coin, index }: { coin: Coin; index: number }) {
    const getColor = (value: number) => {
        return value > 0 ? "text-green-500" : value < 0 ? "text-red-500" : "text-gray-500";
    };

    return (
        <Link href={`/coin-info/${coin.id}`} className="block">
            <div className="hidden sm:grid grid-cols-[1fr_1.5fr_1.2fr_1fr_1fr_1fr_1.2fr_0.7fr] items-center py-4 px-4 border-b hover:bg-muted transition-colors cursor-pointer">
                <div className="text-base font-medium text-center text-muted-foreground">{index + 1}</div>
                <div className="flex items-center gap-2">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-[15px] font-semibold">{coin.name}</span>
                        <span className="text-xs text-muted-foreground uppercase">{coin.symbol}</span>
                    </div>
                </div>
                <div className="text-right text-[15px] font-semibold">
                    {coin.current_price.toLocaleString()}원
                </div>
                <div className={cn("text-right text-[15px] font-medium", getColor(coin.price_change_percentage_1h))}>
                    {coin.price_change_percentage_1h?.toFixed(2)}%
                </div>
                <div className={cn("text-right text-[15px] font-medium", getColor(coin.price_change_percentage_24h))}>
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                </div>
                <div className={cn("text-right text-[15px] font-medium", getColor(coin.price_change_percentage_7d))}>
                    {coin.price_change_percentage_7d?.toFixed(2)}%
                </div>
                <div className="text-right text-[15px] font-medium">
                    {(coin.total_volume / 1000000).toLocaleString()}백만
                </div>
                <div className="text-right text-[15px] font-medium text-muted-foreground">
                    {coin.market_cap_rank}위
                </div>
            </div>

            <div className="sm:hidden flex items-center justify-between px-4 py-3 border-b hover:bg-muted transition-colors">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500 w-5 text-center">{index + 1}</span>
                    <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                    <div>
                        <div className="text-[15px] font-semibold">{coin.name}</div>
                        <div className="text-xs text-gray-400 uppercase">{coin.symbol}</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[15px] font-semibold">
                        {coin.current_price.toLocaleString()}원
                    </div>
                    <div className={cn("text-sm font-medium", getColor(coin.price_change_percentage_24h))}>
                        {coin.price_change_percentage_24h?.toFixed(2)}%
                    </div>
                </div>
            </div>
        </Link>
    );
}

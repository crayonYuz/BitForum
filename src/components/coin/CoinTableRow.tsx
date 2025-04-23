import { Coin } from "@/types/coin";
import { cn } from "@/lib/utils";

export function CoinTableRow({ coin, index }: { coin: Coin; index: number }) {
    const getColor = (value: number) => {
        return value > 0 ? "text-green-500" : value < 0 ? "text-red-500" : "text-gray-500";
    };

    return (
        <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_1fr] items-center py-3 px-4 border-b hover:bg-muted transition-colors">
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
        </div>
    );
}
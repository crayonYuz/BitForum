"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useQuery } from "@tanstack/react-query";
import { getCryptoPrices } from "@/lib/fetchCoins";

export function CoinTable() {
    const { data: coins, isLoading, error } = useQuery({
        queryKey: ["cryptoPrices"],
        queryFn: getCryptoPrices,
    });

    if (isLoading) return <div className="p-4">로딩 중...</div>;
    if (error) return <div className="p-4 text-red-500">데이터를 불러오지 못했습니다.</div>;

    return (
        <ScrollArea className="rounded-lx border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12 text-center">#</TableHead>
                        <TableHead>코인명</TableHead>
                        <TableHead className="text-right">현재가</TableHead>
                        <TableHead className="text-right">1H</TableHead>
                        <TableHead className="text-right">24H</TableHead>
                        <TableHead className="text-right">7D</TableHead>
                        <TableHead className="text-right">거래대금</TableHead>
                        <TableHead className="text-right">시가총액</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {coins?.map((coin: any, index: number) => (
                        <TableRow key={coin.id}>
                            <TableCell className="text-center">{index + 1}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <img src={coin.image} className="w-5 h-5" />
                                    {coin.name}
                                    <span className="text-xs text-gray-500">{coin.symbol.toUpperCase()}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">{coin.current_price.toLocaleString()}원</TableCell>
                            <TableCell
                                className={`text-right ${coin.price_change_percentage_1h_in_currency >= 0 ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
                            </TableCell>
                            <TableCell
                                className={`text-right ${coin.price_change_percentage_24h_in_currency >= 0 ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {coin.price_change_percentage_24h_in_currency?.toFixed(2)}%
                            </TableCell>
                            <TableCell
                                className={`text-right ${coin.price_change_percentage_7d_in_currency >= 0 ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
                            </TableCell>
                            <TableCell className="text-right">{coin.total_volume.toLocaleString()}원</TableCell>
                            <TableCell className="text-right">{coin.market_cap.toLocaleString()}원</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ScrollArea>
    );
}
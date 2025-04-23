"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getCryptoPrices } from "@/lib/fetchCoins";
import { Coin, SortType } from "@/types/coin";
import { Navbar } from "@/components/main/Navbar";
import { CoinSearch } from "@/components/coin/CoinSearch";
import { CoinTableHeader } from "@/components/coin/CoinTableHeader";
import { CoinTableRow } from "@/components/coin/CoinTableRow";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sidebar } from "@/components/coin/Sidebar";
import { sortCoins } from "@/utils/sortCoins";
import { getTitleAndDescription } from "@/utils/getTitleAndDescription";

export default function ExchangePage() {
    const { data = [], isLoading, isError } = useQuery({
        queryKey: ["cryptoPrices"],
        queryFn: getCryptoPrices,
        refetchInterval: 10000,
    });

    const [query, setQuery] = useState("");
    const [sortType, setSortType] = useState<SortType>("default");

    const filteredData = data.filter((coin: Coin) =>
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
    );

    const sortedData = sortCoins(filteredData, sortType);
    const { title, description } = getTitleAndDescription(sortType);

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
                <Sidebar onSortChange={setSortType} />
                <div className="flex-1">
                    <Card className="overflow-hidden">
                        <CardHeader className="border-b space-y-1">
                            <CardTitle className="text-lg">{title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{description}</p>
                            <CoinSearch onChange={setQuery} />
                        </CardHeader>
                        <CardContent className="p-0">
                            <CoinTableHeader />
                            <ScrollArea className="h-[700px]">
                                {isLoading && (
                                    <div className="p-4 text-sm text-muted-foreground">불러오는 중...</div>
                                )}
                                {isError && (
                                    <div className="p-4 text-sm text-red-500">데이터 로딩 실패</div>
                                )}
                                {!isLoading && !isError &&
                                    sortedData.map((coin: Coin, index: number) => (
                                        <CoinTableRow key={coin.id} coin={coin} index={index} />
                                    ))}
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
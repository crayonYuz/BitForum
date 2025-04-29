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
import { Sidebar } from "@/components/coin/Sidebar";
import { sortCoins } from "@/utils/sortCoins";
import { getTitleAndDescription } from "@/utils/getTitleAndDescription";

export default function Page() {
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
            <div className="flex px-4 py-6 gap-6 pt-20">
                <aside
                    className="w-64 shrink-0 border-r overflow-y-auto"
                    style={{ height: "calc(100vh - 128px)" }}
                >
                    <Sidebar onSortChange={setSortType} selectedSort={sortType} />
                </aside>

                <main className="flex-1 max-w-screen-2xl mx-auto mt-6">
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-lg font-semibold">{title}</h2>
                            <p className="text-sm text-muted-foreground">{description}</p>
                            <div className="mt-2">
                                <CoinSearch onChange={setQuery} />
                            </div>
                        </div>

                        <div className="border rounded-xl overflow-hidden">
                            <CoinTableHeader />
                            <ScrollArea className="h-[610px]">
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
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
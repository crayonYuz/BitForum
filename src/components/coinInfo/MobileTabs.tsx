"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SortType } from "@/types/coin";

interface MobileTabsProps {
    selectedSort: SortType;
    onSortChange: (type: SortType) => void;
}

export function MobileTabs({ selectedSort, onSortChange }: MobileTabsProps) {
    return (
        <Tabs
            value={selectedSort}
            onValueChange={(value: string) => onSortChange(value as SortType)}
            className="w-full px-2"
        >
            <TabsList className="w-full overflow-x-auto justify-start gap-2 rounded-md bg-muted p-1">
                <TabsTrigger value="default" className="text-sm px-3 py-1.5">전체</TabsTrigger>
                <TabsTrigger value="gainers" className="text-sm px-3 py-1.5">상승률</TabsTrigger>
                <TabsTrigger value="losers" className="text-sm px-3 py-1.5">하락률</TabsTrigger>
                <TabsTrigger value="trending" className="text-sm px-3 py-1.5">인기 코인</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
"use client";

import { Button } from "@/components/ui/button";
import { SortType } from "@/types/coin";
import clsx from "clsx";

interface CoinSidebarProps {
    onSortChange: (sortType: SortType) => void;
    selectedSort: SortType;
}

export function Sidebar({ onSortChange, selectedSort }: CoinSidebarProps) {
    const renderButton = (label: string, type: SortType) => (
        <Button
            variant="ghost"
            className={clsx(
                "justify-start cursor-pointer",
                selectedSort === type
                    ? "bg-muted text-black font-semibold"
                    : "text-muted-foreground"
            )}
            onClick={() => onSortChange(type)}
        >
            {label}
        </Button>
    );

    return (
        <div className="w-64 space-y-4">
            <div>
                <h2 className="text-base font-semibold mt-2">시세조회</h2>
            </div>
            <div className="flex flex-col gap-2">
                {renderButton("전체", "default")}
                <div className="pl-2 flex flex-col gap-1">
                    {renderButton("상승률", "gainers")}
                    {renderButton("하락률", "losers")}
                    {renderButton("인기 코인", "trending")}
                </div>
            </div>
        </div>
    );
}
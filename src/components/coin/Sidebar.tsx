"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SortType } from "@/types/coin";

interface CoinSidebarProps {
    onSortChange: (sortType: SortType) => void;
}

export function Sidebar({ onSortChange }: CoinSidebarProps) {
    return (
        <Card className="w-64 h-fit">
            <CardHeader>
                <CardTitle className="text-base">시세조회</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <Button variant="ghost" className="justify-start" onClick={() => onSortChange("default")}>
                    전체
                </Button>
                <Separator />
                <div className="pl-2 flex flex-col gap-1">
                    <Button variant="ghost" className="justify-start" onClick={() => onSortChange("gainers")}>
                        상승률
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => onSortChange("losers")}>
                        하락률
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => onSortChange("trending")}>
                        인기 코인
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
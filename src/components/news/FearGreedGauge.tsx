'use client'

import useSWR from "swr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const fetcher = (url: string) => fetch(url).then(res => res.json())

type Classification = "Extreme Fear" | "Fear" | "Neutral" | "Greed" | "Extreme Greed";

const getClassificationStyles = (classification: Classification) => {
    const styles: Record<Classification, { text: string; bg: string }> = {
        "Extreme Fear": { text: "text-red-500", bg: "bg-red-500" },
        "Fear": { text: "text-orange-500", bg: "bg-orange-500" },
        "Neutral": { text: "text-yellow-500", bg: "bg-yellow-500" },
        "Greed": { text: "text-green-500", bg: "bg-green-500" },
        "Extreme Greed": { text: "text-emerald-600", bg: "bg-emerald-600" },
    };

    return styles[classification] || { text: "text-gray-400", bg: "bg-gray-400" };
}

const LoadingErrorState = ({ isLoading, isError }: { isLoading: boolean, isError: boolean }) => {
    if (isError) return <div>공포탐욕지수 로드 실패</div>;
    if (isLoading) return <div>로딩 중...</div>;
    return null;
}

export function FearGreedGauge() {
    const { data, error } = useSWR('https://api.alternative.me/fng/', fetcher)

    const { text: textColor, bg: bgColor } = getClassificationStyles(data?.data?.[0]?.value_classification || "");

    return (
        <Card className="relative">
            <CardHeader className="pb-0">
                <CardTitle>공포탐욕지수</CardTitle>
                <div className={cn("absolute top-4 right-4 text-sm font-medium", textColor)}>
                    현재 상태: {data?.data?.[0]?.value_classification}
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6">
                <LoadingErrorState isLoading={!data} isError={!!error} />
                {data && (
                    <>
                        <div className="text-3xl font-bold mb-2">{parseInt(data.data[0].value, 10)}</div>
                        <div className="w-full max-w-[160px]">
                            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={cn("h-full rounded-full transition-all duration-500", bgColor)}
                                    style={{ width: `${parseInt(data.data[0].value, 10)}%` }}
                                />
                            </div>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    )
}
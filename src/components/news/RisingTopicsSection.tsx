'use client'

import { Card, CardContent, CardTitle } from "@/components/ui/card"

export function RisingTopicsSection({ title }: { title: string }) {
    const topics = [
        "비트코인 준비통화 도입, 일본도 나설까?",
        "9만 달러 넘은 비트코인, 랠리 지속될까?",
        "폴가닷 ETF 승인 또 연기...",
        "트럼프 발언에 위험 자산 급등...",
        "아담 백 “올해 최소 50만 달러 본다”",
    ];

    return (
        <Card className="w-full">
            <CardContent className="space-y-4">
                <CardTitle>
                    {title}
                </CardTitle>

                <ul className="text-sm space-y-2">
                    {topics.map((t, i) => (
                        <li
                            key={i}
                            className="cursor-pointer rounded-md px-2 py-1 transition-colors hover:bg-gray-100 truncate overflow-hidden whitespace-nowrap"
                            title={t}
                        >
                            {i + 1}. {t}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
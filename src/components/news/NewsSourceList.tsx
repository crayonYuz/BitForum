'use client';

import { Card, CardContent, CardTitle } from "../ui/card";

export function NewsSourceList({ title }: { title: string }) {
    const sources = [
        '연합뉴스', '코인데스크', '코인니스', '비트코인저널',
        '99bitcoins(KOR)', '블록스트리트', '파이낸셜주스(ENG)'
    ];

    return (
        <Card className="w-full">
            <CardContent className="space-y-4">
                <CardTitle>{title}</CardTitle>

                <ul className="text-sm space-y-2">
                    {sources.map((t, i) => (
                        <li key={i} className="hover:underline cursor-pointer">
                            {i + 1}. {t}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
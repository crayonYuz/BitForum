'use client'

import useSWR from "swr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fetcher = (url: string) => fetch(url).then(res => res.json())
const getColor = (v: number) => v <= 40 ? '#ef4444' : v <= 60 ? '#facc15' : '#22c55e'

export function FearGreedGauge() {
    const { data, error } = useSWR('https://api.alternative.me/fng/', fetcher)
    const info = data?.data?.[0]
    const gauge = parseInt(info?.value || '0', 10)
    const color = getColor(gauge)
    const angle = (gauge / 100) * 180 - 90
    const x = 100 + 70 * Math.cos((angle * Math.PI) / 180)
    const y = 100 + 70 * Math.sin((angle * Math.PI) / 180)

    return (
        <Card>
            <CardHeader className="flex items-center justify-between pb-0">
                <CardTitle className="text-base">공포탐욕지수</CardTitle>
                <span className="text-sm font-medium" style={{ color }}>
                    Last week : {info?.value_classification || ''}
                </span>
            </CardHeader>

            <CardContent className="flex flex-col items-center justify-center pt-4 pb-6">
                {error ? (
                    <div>공포탐욕지수 로드 실패</div>
                ) : !data ? (
                    <div>로딩 중...</div>
                ) : (
                    <div className="relative w-48 h-24">
                        <svg width="100%" height="100%" viewBox="0 0 200 100">
                            <defs>
                                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ef4444" />
                                    <stop offset="50%" stopColor="#facc15" />
                                    <stop offset="100%" stopColor="#22c55e" />
                                </linearGradient>
                            </defs>
                            <path d="M10,100 A90,90 0 0,1 190,100" fill="none" stroke="url(#gaugeGradient)" strokeWidth="20" />
                            <circle cx={x} cy={y} r="4" fill="#374151" />
                            <text x="100" y="80" textAnchor="middle" fill={color} className="font-bold text-2xl">{gauge}</text>
                            <text x="100" y="96" textAnchor="middle" fill={color} className="font-medium text-sm">
                                {info?.value_classification}
                            </text>
                        </svg>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

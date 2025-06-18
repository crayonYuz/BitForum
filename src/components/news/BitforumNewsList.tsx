'use client'

import Link from 'next/link'
import Image from 'next/image'

const dummyNews = [
    {
        id: 1,
        title: '비트코인 200일 이동평균 하락, 스트래티지 50만 BTC 보유 위기?',
        date: '2025. 5. 16',
        content: '최근 비트코인 손실 가능성이 커지고 있으며, 이는 200일 이동평균선(MA)이 현재 가격보다 낮은 수준으로 유지되고 있기 때문이다. 이 지표는 장기 강세와 약세 전환 시점의 중요한 신호로 작용한다. 5월 15일(현지시간) 암호화폐 전문매체 비트코이니스트에 따르면, 전문',
        thumbnail: 'https://storage.cobak.co/webp_thumbnails/1747356422313883_79dd17c70b_thumb.webp',
    },
    {
        id: 2,
        title: '비트포럼 런칭 이벤트 안내',
        date: '2025. 5. 13',
        content: '비트포럼 오픈을 기념하여 다양한 프로모션과 혜택을 제공합니다.',
        thumbnail: '',
    },
    {
        id: 3,
        title: '마켓 분석 리포트 공개: BTC와 ETH의 향후 전망',
        date: '2025. 5. 12',
        content: '전문가들이 분석한 비트코인과 이더리움의 향후 방향성과 전략을 소개합니다.',
        thumbnail: '',
    },
    {
        id: 4,
        title: '코인 초보자를 위한 가이드라인 정리',
        date: '2025. 5. 10',
        content: '처음 코인을 접하는 투자자들을 위한 A to Z 안내서.',
        thumbnail: '',
    },
    {
        id: 5,
        title: '트레이딩 팁: RSI와 MACD 활용법',
        date: '2025. 5. 09',
        content: '기초 지표를 이용한 효과적인 매매 전략에 대해 알아봅니다.',
        thumbnail: '',
    },
    {
        id: 6,
        title: '6번째 뉴스 - 표시되지 않아야 함',
        date: '2025. 5. 08',
        content: '이 뉴스는 최대 5개 제한에 의해 보이지 않아야 합니다.',
        thumbnail: '',
    },
]

export function BitforumNewsList() {
    const topFiveNews = dummyNews.slice(0, 5)
    const main = topFiveNews[0]
    const side = topFiveNews.slice(1)

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <Link
                href={`/news/${main.id}`}
                className="flex-1 bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition group"
            >
                <div className="relative w-full h-50">
                    <img
                        src={main.thumbnail}
                        alt={main.title}
                        className="object-cover group-hover:scale-105 transition-transform"
                    />
                </div>
                <div className="p-4 space-y-1">
                    <div className="text-xs text-gray-400">{main.date}</div>
                    <h3 className="text-lg font-bold line-clamp-2">{main.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{main.content}</p>
                </div>
            </Link>

            <div className="flex-1 space-y-4">
                {side.map((item) => (
                    <Link
                        key={item.id}
                        href={`/news/${item.id}`}
                        className="flex flex-col border-b pb-4 hover:bg-gray-50 transition px-1"
                    >
                        <div className="text-xs text-gray-400">{item.date}</div>
                        <div className="font-semibold line-clamp-2">{item.title}</div>
                        <p className="text-sm text-gray-500 line-clamp-2">{item.content}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
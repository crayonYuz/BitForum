'use client';

import { dummyCoinNews } from '@/lib/dummyData';

export function CoinNewsList() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">인기 코인 뉴스</h2>
            <ul className="space-y-2 text-sm">
                {dummyCoinNews.map((item, index) => (
                    <li key={index} className="border-b py-2">
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
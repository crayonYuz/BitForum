'use client';

import { dummyTrendingNews } from '@/lib/dummyData';

export function TrendingNews() {
    const main = dummyTrendingNews[0];

    return (
        <section>
            <h2 className="text-xl font-bold mb-2">트렌드 뉴스</h2>
            <div className="flex gap-4">
                <img src={main.image} alt="main news" className="w-64 h-40 object-cover rounded" />
                <div>
                    <h3 className="text-lg font-semibold">{main.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{main.summary}</p>
                </div>
            </div>
        </section>
    );
}
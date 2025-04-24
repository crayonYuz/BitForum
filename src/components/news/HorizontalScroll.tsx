'use client';

import { dummyScrollNews } from '@/lib/dummyData';

export function HorizontalScroll() {
    return (
        <div className="flex overflow-x-auto gap-4 py-2">
            {dummyScrollNews.map((item, idx) => (
                <div key={idx} className="min-w-[240px] p-3 bg-white rounded shadow text-sm border">
                    {item.title}
                </div>
            ))}
        </div>
    );
}
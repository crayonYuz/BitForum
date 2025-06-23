'use client'

import { CoinNews } from '@/lib/api/news/getCoinNews'
import Link from 'next/link'
import { extractFirstImageUrl, stripHtmlTags, decodeHtmlEntities } from '@/utils/markdown'

export const USStockNewsList = ({ news }: { news: CoinNews[] }) => {
    return (
        <div className="flex flex-col space-y-4">
            {news.map((item) => {
                const imageUrl = extractFirstImageUrl(item.content.rendered)
                const plainContent = stripHtmlTags(decodeHtmlEntities(item.content.rendered));
                const decodedTitle = decodeHtmlEntities(item.title.rendered);

                return (
                    <Link key={item.id} href={`/news/${item.id}`}>
                        <div className="flex border-b pb-4 cursor-pointer hover:bg-gray-50 transition-all p-3 rounded gap-4 min-h-[130px]">
                            <div className="flex-1">
                                <div className="text-xs text-muted-foreground">
                                    {new Date(item.date).toLocaleDateString()}
                                </div>
                                <div className="font-semibold">{decodedTitle}</div>
                                <div className="text-sm text-gray-700 mt-2 line-clamp-2">
                                    {plainContent}
                                </div>
                            </div>
                            {imageUrl && (
                                <div className="w-24 h-24 relative shrink-0">
                                    <img
                                        src={imageUrl}
                                        alt="썸네일"
                                        className="object-cover rounded"
                                    />
                                </div>
                            )}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

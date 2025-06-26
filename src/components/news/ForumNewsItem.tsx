import Link from 'next/link'
import { ForumNews } from '@/lib/api/news/getForumNews'
import { extractFirstImageUrl, decodeHtmlEntities, stripHtmlTags } from '@/utils/markdown'

export function ForumNewsItem({ news, layout = 'list' }: { news: ForumNews, layout?: 'main' | 'side' | 'list' }) {
    const cleanText = (html: string) => decodeHtmlEntities(stripHtmlTags(html));
    const imageUrl = extractFirstImageUrl(news.content?.rendered || '');

    const wrapperClass = {
        main: 'flex-1 bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition group',
        side: 'flex flex-col border-b pb-4 hover:bg-gray-50 transition px-1',
        list: 'flex border-b pb-4 cursor-pointer hover:bg-gray-50 transition-all p-2 rounded gap-4'
    }[layout];

    const imageClass = layout === 'main'
        ? 'relative w-full h-50'
        : 'w-24 h-24 relative shrink-0';

    return (
        <Link href={`/news/${news.id}`} className={wrapperClass}>
            {layout === 'main' ? (
                <>
                    {imageUrl && (
                        <div className={imageClass}>
                            <img
                                src={imageUrl}
                                alt={cleanText(news.title.rendered)}
                                className="object-cover group-hover:scale-105 transition-transform w-full h-full rounded"
                            />
                        </div>
                    )}
                    <div className="p-4 space-y-1">
                        <div className="text-xs text-gray-400">{new Date(news.date).toLocaleDateString('ko-KR')}</div>
                        <h3 className="text-lg font-bold line-clamp-2">{cleanText(news.title.rendered)}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{cleanText(news.excerpt?.rendered || '')}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex-1">
                        <div className="text-xs text-gray-400">{new Date(news.date).toLocaleDateString('ko-KR')}</div>
                        <div className="font-semibold line-clamp-2">{cleanText(news.title.rendered)}</div>
                        <p className="text-sm text-gray-500 line-clamp-2">{cleanText(news.excerpt?.rendered || '')}</p>
                    </div>
                    {layout === 'list' && imageUrl && (
                        <div className={imageClass}>
                            <img
                                src={imageUrl}
                                alt="썸네일"
                                className="object-cover rounded w-full h-full"
                            />
                        </div>
                    )}
                </>
            )}
        </Link>
    );
}
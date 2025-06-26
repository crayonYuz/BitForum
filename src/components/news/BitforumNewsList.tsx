'use client'

import { useQuery } from '@tanstack/react-query'
import { ForumNews, getForumNews } from '@/lib/api/news/getForumNews'
import { ForumNewsCardsSkeleton } from '../skeleton/ForumNewsCardsSkeleton'
import { ForumNewsItem } from './ForumNewsItem'

export function BitforumNewsList() {
    const { data: articles = [], isLoading } = useQuery<ForumNews[]>({
        queryKey: ['forumNews'],
        queryFn: getForumNews,
    })

    if (isLoading) return <ForumNewsCardsSkeleton />

    const topFiveNews = articles.slice(0, 5)
    const shownNewsIds = topFiveNews.map((item) => item.id)

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-6">
                <ForumNewsItem news={topFiveNews[0]} layout="main" />
                <div className="flex-1 space-y-4">
                    {topFiveNews.slice(1).map((item) => (
                        <ForumNewsItem key={item.id} news={item} layout="side" />
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                {articles
                    .filter((item) => !shownNewsIds.includes(item.id))
                    .map((item) => (
                        <ForumNewsItem key={item.id} news={item} layout="list" />
                    ))}
            </div>
        </div>
    )
}
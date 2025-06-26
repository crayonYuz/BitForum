'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { useQuery } from '@tanstack/react-query'
import { ForumNews, getForumNews } from '@/lib/api/news/getForumNews'
import { ForumNewsCardsSkeleton } from '../skeleton/ForumNewsCardsSkeleton'
import { extractFirstImageUrl, decodeHtmlEntities, stripHtmlTags } from '@/utils/markdown'

export function ForumNewsCards() {
    const { data: articles = [], isLoading } = useQuery<ForumNews[]>({
        queryKey: ['forumNews'],
        queryFn: getForumNews,
    })

    if (isLoading) return <ForumNewsCardsSkeleton />

    return (
        <Carousel opts={{ align: 'start' }} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
                {articles.map((article) => {
                    const imageUrl = article.featuredImage || extractFirstImageUrl(article.content?.rendered || '');
                    const title = decodeHtmlEntities(stripHtmlTags(article.title.rendered));

                    return (
                        <CarouselItem key={article.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-2">
                                <Link href={`/news/${article.id}`} className="block w-full overflow-hidden rounded-md shadow-sm hover:shadow-md transition">
                                    <div className="relative w-full h-40">
                                        <Image
                                            src={imageUrl || '/placeholder.jpg'}
                                            alt={title}
                                            fill
                                            className="object-cover rounded"
                                        />
                                    </div>
                                    <div className="p-3 space-y-1">
                                        <p className="text-sm font-semibold line-clamp-1">
                                            {title}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <CarouselPrevious className="ml-10 cursor-pointer" />
            <CarouselNext className="mr-10 cursor-pointer" />
        </Carousel>
    );
}
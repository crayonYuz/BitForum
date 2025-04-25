'use client'

import * as React from "react"
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function ForumNewsCards() {
    const articles = [
        {
            title: '쉽고 빠르게 현재 "비트 코인" 현황을 체크해보자',
            image: 'https://storage.cobak.co/webp_thumbnails/1745293260575467_22164af347_thumb.webp',
        },
        {
            title: '트럼프, TRUMP 보유자 만찬 안 올 수도',
            image: 'https://storage.cobak.co/webp_thumbnails/1745293260575467_22164af347_thumb.webp',
        },
        {
            title: '$TRUMP, 대통령과의 식사권',
            image: 'https://storage.cobak.co/webp_thumbnails/1745293260575467_22164af347_thumb.webp',
        },
        {
            title: '트럼프, TRUMP 보유자 만찬 안 올 수도',
            image: 'https://storage.cobak.co/webp_thumbnails/1745293260575467_22164af347_thumb.webp',
        },
        {
            title: '$TRUMP, 대통령과의 식사권',
            image: 'https://storage.cobak.co/webp_thumbnails/1745293260575467_22164af347_thumb.webp',
        },
    ];

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-5xl mx-auto"
        >
            <CarouselContent>
                {articles.map((article, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-4">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-4">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={300}
                                        height={150}
                                        className="object-cover w-full h-40 mb-4"
                                    />
                                    <div className="text-center text-sm font-medium overflow-hidden whitespace-nowrap text-ellipsis">
                                        {article.title}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
        </Carousel>
    );
}
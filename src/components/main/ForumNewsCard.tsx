'use client'

import * as React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function ForumNewsCards() {
    const articles = [
        {
            author: "실전파이터_카뎃머",
            title: "5월 2일 비트코인: 신규 진입이 아닌 '익절'을 고려할 시기입니다",
            image: "https://storage.cobak.co/webp_thumbnails/1745293260575467_22164af347_thumb.webp",
        },
        {
            author: "월스트리트맨",
            title: "OpenAI CEO 프로젝트 'World', 드디어 미국 진출",
            image: "https://storage.cobak.co/webp_thumbnails/1745293260575467_22164af347_thumb.webp",
        },
        {
            author: "나스닥전략가",
            title: "2025.05.01 나스닥 이슈 및 지수 분석",
            image: "https://storage.cobak.co/webp_thumbnails/1745293260575467_22164af347_thumb.webp",
        },
        {
            author: "나스닥전략가",
            title: "2025.05.01 나스닥 이슈 및 지수 분석",
            image: "https://storage.cobak.co/webp_thumbnails/1745293260575467_22164af347_thumb.webp",
        },
        {
            author: "나스닥전략가",
            title: "2025.05.01 나스닥 이슈 및 지수 분석",
            image: "https://storage.cobak.co/webp_thumbnails/1745293260575467_22164af347_thumb.webp",
        },
    ];

    return (
        <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-5xl mx-auto"
        >
            <CarouselContent>
                {articles.map((article, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                            <div className="w-full overflow-hidden rounded-md shadow-sm">
                                <div className="relative w-full h-40 cursor-pointer">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-3 space-y-1">
                                    <p className="text-xs text-gray-500">{article.author}</p>
                                    <p className="text-sm font-semibold line-clamp-1">
                                        {article.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-10" />
            <CarouselNext className="mr-10" />
        </Carousel>
    );
}
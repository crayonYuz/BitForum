'use client'

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { decodeHtmlEntities } from "@/utils/markdown";

interface Props {
    posts: { id: number; title: { rendered: string } }[]
    title: string
}

export function NewsHighlightSection({ posts, title }: Props) {
    const router = useRouter()

    return (
        <section className="bg-white p-2 rounded-md">
            <div className="mb-3">
                <h2 className="text-lg font-bold mb-1">{title}</h2>
            </div>

            <Card>
                <CardContent className="space-y-2 py-2">
                    {posts
                        .sort((a, b) => b.id - a.id)
                        .slice(0, 5)
                        .map((post, index) => (
                            <div
                                key={post.id}
                                onClick={() => router.push(`/news/${post.id}`)}
                                className="flex items-start gap-2 hover:bg-muted px-2 py-1 rounded-md cursor-pointer transition"
                            >
                                <span className="text-blue-600 font-bold text-sm">{index + 1}.</span>
                                <span className="font-medium text-sm text-gray-800 line-clamp-1">
                                    {decodeHtmlEntities(post.title.rendered)}
                                </span>
                            </div>
                        ))}
                </CardContent>
            </Card>
        </section>
    )
}

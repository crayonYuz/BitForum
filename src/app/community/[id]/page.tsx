'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/main/Navbar';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { SidePanel } from '@/components/community/SidePanel';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AffiliateBanner } from '@/components/affiliate/AffiliateBanner';
import { categoryMap, getTimeAgo } from '@/utils/dataUtils';
import { getPost } from '@/lib/api/post/getPost';

export default function Page() {
    const params = useParams();
    const id = params?.id as string;

    const { data: post, isLoading, isError } = useQuery({
        queryKey: ['post', id],
        queryFn: () => getPost(id),
        enabled: !!id,
    });

    if (isLoading) return <div className="p-6">로딩 중...</div>;
    if (isError || !post) return notFound();

    const categoryName = categoryMap[post.category] || post.category;
    const formattedTime = getTimeAgo(post.createdAt);

    return (
        <div className="bg-white min-h-screen text-gray-900 pt-6">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 pt-14 lg:flex lg:gap-6">
                <main className="lg:w-2/3 space-y-8">
                    <AffiliateBanner />
                    <Card>
                        <CardContent className="space-y-4">
                            <div>
                                <div className="text-sm text-gray-400">
                                    커뮤니티 &gt; {categoryName}
                                </div>
                                <h1 className="text-2xl font-bold mt-2">{post.title}</h1>
                                <div className="text-sm text-gray-500 mt-1">
                                    <span className="font-medium text-black">{post.author ?? '익명'}</span> ·{' '}
                                    {formattedTime}
                                </div>
                            </div>

                            <div
                                className="prose prose-sm max-w-none text-gray-900 min-h-[200px]"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </CardContent>

                        <CardContent className="space-y-3">
                            <h2 className="font-semibold text-lg">댓글 0개</h2>
                            <div className="space-y-2">
                                <Textarea
                                    className="resize-none h-24"
                                    placeholder="댓글을 입력해 주세요"
                                />
                                <div className="flex justify-end">
                                    <Button>남기기</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </main>

                <aside className="lg:w-1/4 space-y-6">
                    <SidePanel />
                </aside>
            </div>
        </div>
    );
}
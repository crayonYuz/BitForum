'use client';

import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/main/Navbar';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { SidePanel } from '@/components/community/SidePanel';
import { AffiliateBanner } from '@/components/affiliate/AffiliateBanner';
import { categoryMap, getTimeAgo } from '@/utils/dataUtils';
import { getPost } from '@/lib/api/post/getPost';
import { deletePost } from '@/lib/api/post/deletePost';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { toast } from "sonner"
import { CommentSection } from '@/components/community/CommentSection';
import { marked } from 'marked';

export default function Page() {
    const params = useParams();
    const id = params?.id as string;
    const router = useRouter();
    const { data: session } = useSession();

    const { data: post, isLoading, isError } = useQuery({
        queryKey: ['post', id],
        queryFn: () => getPost(id),
        enabled: !!id,
    });

    const deleteMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            toast.success('삭제되었습니다.');
            router.push('/community');
        },
        onError: () => {
            toast.error('삭제에 실패했습니다.');
        },
    });

    const handleEdit = () => {
        router.push(`/writing/edit/${post?.id}`);
    };

    const handleDelete = () => {
        const confirmed = window.confirm('정말로 삭제하시겠습니까?');
        if (!confirmed || !post?.id) return;

        deleteMutation.mutate(String(post.id));
    };

    if (isLoading) return <div className="p-6">로딩 중...</div>;
    if (isError || !post) return notFound();

    const categoryName = categoryMap[post.category] || post.category;
    const formattedTime = getTimeAgo(post.createdAt);
    const isAuthor = session?.user?.name === post.author;

    return (
        <div className="bg-white min-h-screen text-gray-900 pt-6">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 pt-14 lg:flex lg:gap-6">
                <main className="lg:w-2/3 space-y-8">
                    <AffiliateBanner />
                    <Card>
                        <CardContent className="relative space-y-4">
                            {isAuthor && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="absolute top-4 right-4 p-2 rounded hover:bg-gray-100">
                                        <MoreHorizontal />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={handleEdit}>수정하기</DropdownMenuItem>
                                        <DropdownMenuItem onClick={handleDelete} className="text-red-500">삭제하기</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}

                            <div>
                                <div className="text-sm text-gray-400">커뮤니티 &gt; {categoryName}</div>
                                <h1 className="text-2xl font-bold mt-2">{post.title}</h1>
                                <div className="text-sm text-gray-500 mt-1">
                                    <span className="font-medium text-black">{post.author ?? '익명'}</span> · {formattedTime}
                                </div>
                            </div>

                            <div
                                className="prose prose-sm max-w-none text-gray-900 min-h-[200px]"
                                dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
                            />
                        </CardContent>

                        <CardContent className="space-y-3">
                            <CommentSection postId={id} />
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

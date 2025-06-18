import Link from 'next/link';
import Image from 'next/image';
import { Post } from "@/lib/api/post/getPosts";
import { categoryMap, getTimeAgo } from "@/utils/dataUtils";
import { extractFirstImageUrl, stripMarkdown } from '@/utils/markdown';

export const CommunityItem = ({ posts }: { posts: Post[] }) => {
    return (
        <div className="flex flex-col space-y-4">
            {posts.map((post) => {
                const imageUrl = extractFirstImageUrl(post.content);
                const plainContent = stripMarkdown(post.content);

                return (
                    <Link key={post.id} href={`/community/${post.id}`}>
                        <div className="flex border-b pb-4 cursor-pointer hover:bg-gray-50 transition-all p-2 rounded gap-4">
                            <div className="flex-1">
                                <div className="text-xs text-muted-foreground">
                                    {getTimeAgo(post.createdAt)} · {categoryMap[post.category] || post.category}
                                </div>
                                <div className="font-semibold">{post.title}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    작성자: {post.author ?? '익명'}
                                </div>
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
                );
            })}
        </div>
    );
};
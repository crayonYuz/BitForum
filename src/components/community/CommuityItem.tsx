import Link from 'next/link';
import { Post } from "@/lib/api/post/getPosts";
import { categoryMap, getTimeAgo } from "@/utils/dataUtils";

export const CommunityItem = ({ posts }: { posts: Post[] }) => {
    return (
        <div className="flex flex-col space-y-4">
            {posts.map((post) => (
                <Link key={post.id} href={`/community/${post.id}`}>
                    <div className="border-b pb-4 cursor-pointer hover:bg-gray-50 transition-all p-2 rounded">
                        <div className="text-xs text-muted-foreground">
                            {getTimeAgo(post.createdAt)} · {categoryMap[post.category] || post.category}
                        </div>
                        <div className="font-semibold">{post.title}</div>
                        <div className="text-xs text-muted-foreground mt-1 overflow-hidden text-ellipsis line-clamp-1">
                            작성자: {post.author ?? '익명'}
                        </div>
                        <div className="text-sm text-gray-700 mt-2 overflow-hidden text-ellipsis line-clamp-2">
                            {post.content}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
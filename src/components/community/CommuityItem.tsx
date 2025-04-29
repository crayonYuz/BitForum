import { CommunityData } from "@/lib/commnuityData";

export const CommunityItem = ({ posts }: { posts: typeof CommunityData }) => {
    return (
        <div className="flex flex-col space-y-4">
            {posts.map((post) => (
                <div key={post.id} className="border-b pb-4">
                    <div className="text-xs text-muted-foreground">{post.time} · {post.categoryLabel}</div>
                    <div className="font-semibold">{post.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">작성자: {post.author}</div>
                </div>
            ))}
        </div>
    );
};
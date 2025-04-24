export const PostList = () => {
    const posts = [
        {
            author: "크립토 기자단",
            title: "트럼프, TRUMP 보유자 만찬 안 올 수도",
            tags: ["NFT", "-0.07%"],
            time: "1분 전",
        },
        {
            author: "코인인사이트",
            title: "XRP 100달러, 싸게 느껴질 날이 온다…",
            tags: ["XRP", "-0.96%"],
            time: "6분 전",
        }
    ]

    return (
        <div className="flex-1 flex flex-col space-y-4">
            {posts.map((post, idx) => (
                <div key={idx} className="border-b pb-4">
                    <div className="text-sm text-muted-foreground">{post.time} · {post.author}</div>
                    <div className="font-semibold">{post.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{post.tags.join(", ")}</div>
                </div>
            ))}
        </div>
    )
}
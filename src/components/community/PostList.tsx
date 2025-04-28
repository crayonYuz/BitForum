export const PostList = () => {
    const posts = [
        { title: "비트코인 초보인데 질문 있어요", author: "뉴비123", category: "초보자 가이드", time: "방금 전" },
        { title: "업비트 거래소 수수료 정리", author: "코인가이드", category: "코인 정보", time: "5분 전" },
        { title: "오늘 시장 어떰?", author: "자유형", category: "자유게시판", time: "10분 전" },
    ];

    return (
        <div className="flex flex-col space-y-4">
            {posts.map((post, idx) => (
                <div key={idx} className="border-b pb-4">
                    <div className="text-xs text-muted-foreground">{post.time} · {post.category}</div>
                    <div className="font-semibold">{post.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">작성자: {post.author}</div>
                </div>
            ))}
        </div>
    );
}
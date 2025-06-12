'use client';

import Link from 'next/link';

type Post = {
    id: number;
    title: string;
};

const hotPosts: Post[] = [
    { id: 1, title: "비트코인 상승장 시작? 커뮤니티 반응 폭발" },
    { id: 2, title: "XRP ETF 이야기, 진짜일까?" },
    { id: 3, title: "오늘도 자유게시판이 불타는 중🔥" },
    { id: 4, title: "코인 초보자를 위한 추천 코인 정리" },
    { id: 5, title: "이번 주 거래소 이벤트 총정리!" },
];

const recentPosts: Post[] = [
    { id: 11, title: "방금 올린 따끈한 정보 공유합니다" },
    { id: 12, title: "오늘 가입했습니다! 반갑습니다!" },
    { id: 13, title: "코인 초보인데 질문 드려요" },
    { id: 14, title: "5분 전 거래소 에러 봤나요?" },
    { id: 15, title: "이더리움 분석 공유" },
];

export const SidePanel = () => {
    return (
        <div className="w-full lg:w-64 lg:sticky lg:top-20 flex flex-col gap-4 h-fit">
            <PanelCard title="지금 커뮤니티에서 인기 많은 글" posts={hotPosts} />
            <PanelCard title="방금 올라온 따끈한 새 글" posts={recentPosts} />
        </div>
    );
};

const PanelCard = ({ title, posts }: { title: string; posts: Post[] }) => (
    <div className="bg-muted p-4 rounded-md shadow-sm">
        <h3 className="font-semibold text-base mb-2">{title}</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
            {posts.map((post, idx) => (
                <li key={post.id}>
                    <Link
                        href={`/community/${post.id}`}
                        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 truncate"
                        title={post.title}
                    >
                        <span className="text-xs text-gray-400">{idx + 1}.</span>
                        <span className="truncate">{post.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);
'use client';

import { Suspense, useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Navbar } from "@/components/main/Navbar";
import { SidePanel } from "@/components/community/SidePanel";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { AffiliateBanner } from "@/components/affiliate/AffiliateBanner";
import { CommunityItem } from "@/components/community/CommuityItem";
import { getPosts, Post } from "@/lib/api/post/getPosts";
import { CustomTabs } from "@/components/community/CustomTabs";

function CommunityPageClient() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState("전체");
    const tabs = ["전체", "자유게시판", "코인 정보", "거래소 정보", "초보자 가이드", "공지 및 이벤트"];
    const { data: session } = useSession();

    useEffect(() => {
        const initialTab = searchParams.get("tab");
        if (!initialTab) {
            router.replace(`/community?tab=${encodeURIComponent('전체')}`);
        } else {
            setSelectedTab(initialTab);
        }
    }, [searchParams, router]);

    const { data: posts = [], isLoading, isError } = useQuery<Post[]>({
        queryKey: ['posts'],
        queryFn: getPosts,
    });

    const handleWriteClick = () => {
        router.push("/writing");
    };

    const sortedPosts = posts.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    const filteredCommunity = sortedPosts.filter((item) => {
        if (selectedTab === "전체") return true;
        if (selectedTab === "자유게시판") return item.category === "free";
        if (selectedTab === "코인 정보") return item.category === "coin-info";
        if (selectedTab === "초보자 가이드") return item.category === "beginner-guide";
        if (selectedTab === "공지 및 이벤트") return item.category === "notice";
        return false;
    });

    return (
        <div className="bg-white min-h-screen text-gray-900 pt-6">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 pt-14 pb-20 lg:flex lg:gap-6 justify-center">
                <div className="lg:w-2/3 space-y-6">
                    <AffiliateBanner />
                    <h2 className="text-2xl font-semibold text-gray-800">커뮤니티</h2>

                    <CustomTabs
                        tabs={tabs}
                        selectedTab={selectedTab}
                        onTabChange={(tab) => {
                            setSelectedTab(tab);
                            router.replace(`/community?tab=${encodeURIComponent(tab)}`);
                        }}
                    />

                    {isLoading ? (
                        <div className="text-center text-gray-400 py-10">불러오는 중...</div>
                    ) : isError ? (
                        <div className="text-center text-red-500 py-10">게시글을 불러오지 못했습니다.</div>
                    ) : (
                        <div className="space-y-4">
                            {filteredCommunity.length > 0 ? (
                                <CommunityItem posts={filteredCommunity} />
                            ) : (
                                <div className="text-center text-gray-400 py-10">
                                    선택한 카테고리에 게시글이 없습니다.
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <aside className="hidden lg:block lg:w-1/4 space-y-6">
                    <SidePanel />
                </aside>

                {session && (
                    <Button
                        onClick={handleWriteClick}
                        className="fixed bottom-20 md:bottom-24 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg z-50"
                    >
                        <Edit size={24} />
                    </Button>
                )}
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div className="p-4 text-center">로딩 중...</div>}>
            <CommunityPageClient />
        </Suspense>
    );
}

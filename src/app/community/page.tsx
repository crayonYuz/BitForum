'use client'

import { useState } from "react";
import { Navbar } from "@/components/main/Navbar";
import { SidePanel } from "@/components/community/SidePanel";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { AffiliateBanner } from "@/components/affiliate/AffiliateBanner";
import { CommunityTabs } from "@/components/community/CommunityTabs";
import { CommunityData } from "@/lib/commnuityData";
import { CommunityItem } from "@/components/community/CommuityItem";
import { useSession } from "next-auth/react";

export default function Page() {
    const [selectedTab, setSelectedTab] = useState("전체");
    const tabs = ["전체", "자유게시판", "초보자 가이드", "공지및이벤트"];
    const { data: session } = useSession();

    const router = useRouter();

    const handleWriteClick = () => {
        router.push("/writing");
    };

    const filteredCommunity = selectedTab === "전체"
        ? CommunityData
        : CommunityData.filter((item) => item.categoryLabel === selectedTab);

    return (
        <div className="bg-white min-h-screen text-gray-900 pt-6">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 pt-14 lg:flex lg:gap-6">
                <div className="lg:w-2/3 space-y-6">
                    <AffiliateBanner />

                    <h2 className="text-2xl font-semibold text-gray-800">커뮤니티</h2>

                    <CommunityTabs
                        tabs={tabs}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                    />

                    <div className="space-y-4">
                        {filteredCommunity.length > 0 ? (
                            <CommunityItem posts={filteredCommunity} />
                        ) : (
                            <div className="text-center text-gray-400 py-10">
                                선택한 카테고리에 게시글이 없습니다.
                            </div>
                        )}
                    </div>
                </div>

                <aside className="lg:w-1/4 space-y-6">
                    <SidePanel />
                </aside>

                {session && (
                    <Button
                        onClick={handleWriteClick}
                        className="fixed bottom-10 right-10 p-4 bg-blue-600 text-white rounded-full shadow-lg"
                    >
                        <Edit size={24} />
                    </Button>
                )}
            </div>
        </div>
    );
}
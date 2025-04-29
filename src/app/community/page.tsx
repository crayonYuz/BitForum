'use client'

import { Navbar } from "@/components/main/Navbar";
import { PostList } from "@/components/community/PostList";
import { SidePanel } from "@/components/community/SidePanel";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { AffiliateBanner } from "@/components/affiliate/AffiliateBanner";
import { CommunityTabs } from "@/components/community/CommunityTabs";

export default function Page() {
    const router = useRouter();

    const handleWriteClick = () => {
        router.push("/writing");
    };

    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-6 lg:flex lg:gap-6 pt-20">
                <div className="lg:w-2/3 space-y-6">
                    <section className="space-y-4">
                        <AffiliateBanner />
                    </section>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">커뮤니티</h2>
                    </div>

                    <div>
                        <CommunityTabs />
                    </div>

                    <section className="space-y-4">
                        <PostList />
                    </section>
                </div>

                <aside className="lg:w-1/4 space-y-6">
                    <SidePanel />
                </aside>

                <Button
                    onClick={handleWriteClick}
                    className="fixed bottom-10 right-10 p-4 bg-blue-600 text-white rounded-full shadow-lg"
                >
                    <Edit size={24} />
                </Button>
            </main>
        </>
    );
}
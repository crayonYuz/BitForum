import { CategoryFilters } from "@/components/community/CategoryFilters";
import { HotNewsBar } from "@/components/community/HotNewsBar";
import { PostList } from "@/components/community/PostList";
import { SidePanel } from "@/components/community/SidePanal";
import { Navbar } from "@/components/main/Navbar";
import { TopTabs } from "@/components/TopTabst";

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <TopTabs />
                    <HotNewsBar />
                    <CategoryFilters />
                    <PostList />
                </div>

                <aside className="space-y-6">
                    <SidePanel />
                </aside>
            </main>
        </>
    );
}
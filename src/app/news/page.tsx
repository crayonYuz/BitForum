import { Navbar } from "@/components/main/Navbar";
import { CoinNewsList } from "@/components/news/CoinNewsList";
import { FearGreedGauge } from "@/components/news/FearGreedGauge";
import { HorizontalScroll } from "@/components/news/HorizontalScroll";
import { NewsSourceList } from "@/components/news/NewsSourceList";
import { TopTabs } from "@/components/TopTabst";
import { TrendingNews } from "@/components/news/TrendingNews";


export default function NewsPage() {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <TopTabs />
                    <HorizontalScroll />
                    <TrendingNews />
                    <CoinNewsList />
                </div>

                <aside className="space-y-6">
                    <FearGreedGauge />
                    <NewsSourceList />
                </aside>
            </main>
        </>
    );
}
import { Navbar } from "@/components/main/Navbar";
import { CoinNewsList } from "@/components/news/CoinNewsList";
import { FearGreedGauge } from "@/components/news/FearGreedGauge";
import { HorizontalScroll } from "@/components/news/HorizontalScroll";
import { NewsSourceList } from "@/components/news/NewsSourceList";
import { TopTabs } from "@/components/TopTabst";
import { TrendingNews } from "@/components/news/TrendingNews";
import { RisingTopics } from "@/components/news/RisingTopics";
import { SectionTitle } from "@/components/news/SectionTitle";
import { FallingTopics } from "@/components/news/FallingTopics";

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-6 lg:flex lg:gap-6">
                <div className="lg:w-2/3 space-y-6">
                    <TopTabs />
                    <HorizontalScroll />
                    <TrendingNews />
                    <CoinNewsList />
                </div>

                <aside className="lg:w-1/3 space-y-6">
                    <FearGreedGauge />

                    <div className="space-y-4">
                        <SectionTitle title="👀 상승 관점" />
                        <RisingTopics />
                    </div>

                    <div className="space-y-4">
                        <SectionTitle title="📉 하락 관점" />
                        <FallingTopics />
                    </div>

                    <div className="space-y-4">
                        <SectionTitle title="🗞️ 뉴스 출처 바로가기" />
                        <NewsSourceList />
                    </div>
                </aside>
            </main>
        </>
    );
}
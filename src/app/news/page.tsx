import { Navbar } from "@/components/main/Navbar";
import { CoinNewsList } from "@/components/news/CoinNewsList";
import { FearGreedGauge } from "@/components/news/FearGreedGauge";
import { NewsSourceList } from "@/components/news/NewsSourceList";
import { SectionTitle } from "@/components/news/SectionTitle";

import { BitforumNewsList } from "@/components/news/BitforumNewsList";
import { RisingTopicsSection } from "@/components/news/RisingTopicsSection";
import { FallingTopicsSection } from "@/components/news/FallingTopicsSection";
import { AffiliateBanner } from "@/components/affiliate/AffiliateBanner";

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-6 lg:flex lg:gap-6 pt-20">
                <div className="lg:w-2/3 space-y-6">
                    <section className="space-y-4">
                        <AffiliateBanner />
                        <SectionTitle title="비트포럼 뉴스" />
                        <BitforumNewsList />
                    </section>

                    <section className="space-y-4">
                        <SectionTitle title="실시간 코인 뉴스" />
                        <CoinNewsList />
                    </section>
                </div>

                <aside className="lg:w-1/4 space-y-6">
                    <FearGreedGauge />

                    <div className="space-y-4">
                        <RisingTopicsSection title="상승 관점" />
                    </div>

                    <div className="space-y-4">
                        <FallingTopicsSection title="하락 관점" />
                    </div>

                    <div className="space-y-4">
                        <NewsSourceList title="뉴스출처 바로가기" />
                    </div>
                </aside>
            </main>
        </>
    );
}
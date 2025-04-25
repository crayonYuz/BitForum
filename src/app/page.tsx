'use client';

import { Navbar } from '../components/main/Navbar';
import { LeftBanner } from '../components/main/banner/LeftBanner';
import { CoinTickerWidget } from '../components/main/CoinTickerWidget';
import { RightPanel } from '../components/main/banner/RightPanel';
import { InfoCard } from '@/components/InfoCard';
import { SectionTitle } from '@/components/news/SectionTitle';
import { ForumNewsCards } from '@/components/main/ForumNewsCard';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">

        <div className="flex min-h-screen gap-6 px-4">
          {/* <LeftBanner /> */}

          <main className="w-full max-w-6xl px-6 py-4 space-y-8">
            <CoinTickerWidget />

            <section>
              <SectionTitle title="코인포럼 뉴스" subtitle="코인포럼만의 오리지널 콘텐츠" />
              <ForumNewsCards />
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">뉴스</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InfoCard title="미국증시" description="관련 뉴스가 여기에 표시됩니다." />
                <InfoCard title="코인 뉴스" description="관련 뉴스가 여기에 표시됩니다." />
                <InfoCard title="환율/금리" description="관련 뉴스가 여기에 표시됩니다." />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">커뮤니티</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard title="자유 게시판" description="게시글 요약 또는 링크가 여기에 들어갑니다." />
                <InfoCard title="초보자 가이드" description="게시글 요약 또는 링크가 여기에 들어갑니다." />
              </div>
            </section>
          </main>

          <RightPanel />
        </div>
      </div>
    </>
  );
}
'use client';

import { Navbar } from './components/main/Navbar';
import { LeftBanner } from './components/main/banner/LeftBanner';
import { CoinTickerWidget } from './components/main/CoinTickerWidget';
import { RightPanel } from './components/main/banner/RightPanel';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen gap-6 px-4">
        <LeftBanner />

        <main className="w-full max-w-5xl px-6 py-4 space-y-8">
          <CoinTickerWidget />

          <section>
            <h2 className="text-xl font-bold mb-2">뉴스</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <NewsCard title="미국증시" />
              <NewsCard title="코인 뉴스" />
              <NewsCard title="환율/금리" />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">커뮤니티</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CommunityCard title="자유 게시판" />
              <CommunityCard title="초보자 가이드" />
            </div>
          </section>
        </main>

        <RightPanel />
      </div>
    </>
  );
}

function NewsCard({ title }: { title: string }) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">관련 뉴스가 여기에 표시됩니다.</p>
    </div>
  );
}

function CommunityCard({ title }: { title: string }) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">게시글 요약 또는 링크가 여기에 들어갑니다.</p>
    </div>
  );
}
'use client'

import { Navbar } from '../components/main/Navbar';
import { LeftBanner } from '../components/main/banner/LeftBanner';
import { CoinTickerWidget } from '../components/main/CoinTickerWidget';
import { RightPanel } from '../components/main/banner/RightPanel';
import { InfoCard } from '@/components/InfoCard';
import { SectionTitle } from '@/components/news/SectionTitle';
import { ForumNewsCards } from '@/components/main/ForumNewsCard';
import { AffiliateProgram } from '@/components/affiliate/AffiliateProgram';
import { ForumNewsCardsSkeleton } from '@/components/main/ForumNewsCardsSkeleton';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import { InfoCardSkeleton } from '@/components/main/InfoCardSkeleton';
import { useQuery } from '@tanstack/react-query';
import { getPosts, Post } from '@/lib/api/post/getPosts';
import { useRouter } from 'next/navigation';
import { CommunityHighlightSection } from '@/components/main/CommunityHighlightSection';
import { Footer } from '@/components/layout/Footer';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const { data: posts } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const freeBoardPosts = posts?.filter(post => post.category === 'free') || [];
  const beginnerGuidePosts = posts?.filter(post => post.category === 'beginner-guide') || [];

  return (
    <>
      <Navbar />
      <div className="pt-8 px-4 flex justify-center">
        <div className="w-full max-w-screen-3xl flex flex-col items-center lg:flex-row lg:items-start gap-8">

          <LeftBanner />

          <main className="w-full lg:w-2/4 space-y-8 pt-12 mx-auto">
            {isLoading ? <Skeleton className="h-24 w-full rounded-lg" /> : <AffiliateProgram />}
            {isLoading ? <Skeleton className="h-16 w-full rounded-lg" /> : <CoinTickerWidget />}

            <section>
              <SectionTitle title="비트포럼 뉴스" subtitle="비트포럼만의 오리지널 콘텐츠" />
              {isLoading ? <ForumNewsCardsSkeleton /> : <ForumNewsCards />}
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">뉴스</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[0, 1].map((i) => (
                  <div className="col-span-1" key={i}>
                    {isLoading ? (
                      <InfoCardSkeleton />
                    ) : (
                      <InfoCard
                        title={i === 0 ? '미국증시' : '코인 뉴스'}
                        description="관련 뉴스가 여기에 표시됩니다."
                      />
                    )}
                  </div>
                ))}
                <div className="col-span-1 md:col-span-1">
                  {isLoading ? (
                    <Skeleton className="h-[300px] w-full rounded-lg" />
                  ) : (
                    <iframe
                      src="https://kr.widgets.investing.com/live-currency-cross-rates?theme=lightTheme&hideTitle=true&roundedCorners=true&pairs=9511,158,159,650"
                      width="100%"
                      height="300"
                    />
                  )}
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <CommunityHighlightSection title="자유 게시판" posts={freeBoardPosts} />
              <CommunityHighlightSection title="초보자 가이드" posts={beginnerGuidePosts} />
            </div>
          </main>

          <RightPanel />

        </div>
      </div>

      <Footer />
    </>
  );
}

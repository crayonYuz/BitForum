'use client';

import { CoinInfoList } from "./CoinInfoList";
import { NoticeBanner } from "./NoticeBanner";


export function RightPanel() {
  return (
    <aside className="w-[340px] ml-6 mt-12 space-y-4 sticky top-4 h-fit">
      <NoticeBanner />
      <CoinInfoList />
    </aside>
  );
}
'use client';

import { RightContactPanel } from "../RightContactPanel";
import { CoinInfoList } from "./CoinInfoList";
import { NoticeBanner } from "./NoticeBanner";

export function RightPanel() {
  return (
    <aside className="hidden lg:block w-[360px] mr-10 ml-6 mt-12 space-y-4 sticky top-4 h-fit">
      <NoticeBanner notices={[]} />
      <RightContactPanel />
      <CoinInfoList />
    </aside>
  );
}

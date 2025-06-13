'use client';

import { Card, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

type NoticeBannerProps = {
  notices: string[];
};

export function NoticeBanner({ notices }: NoticeBannerProps) {
  return (
    <Card className="p-4 text-sm relative">
      <div className="flex justify-between items-center font-semibold mb-2">
        <CardTitle>공지 및 이벤트</CardTitle>
        <Link
          href={{ pathname: '/community', query: { tab: '공지 및 이벤트' } }}
          className="text-gray-400 hover:text-gray-600 transition"
        >
          <ChevronRight size={16} />
        </Link>
      </div>

      {notices.length > 0 ? (
        <ul className="list-disc pl-4 space-y-1">
          {notices.map((notice, idx) => (
            <li key={idx}>{notice}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm pl-1">아직 등록된 공지가 없습니다.</p>
      )}
    </Card>
  );
}
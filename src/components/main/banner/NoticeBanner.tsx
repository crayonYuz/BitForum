'use client';

import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function NoticeBanner() {
  return (
    <Card className="p-4 text-sm relative">
      <div className="flex justify-between items-center font-semibold mb-2">
        <span>공지 및 이벤트</span>
        <Link href="/community" className="text-gray-400 hover:text-gray-600 transition">
          <ChevronRight size={16} />
        </Link>
      </div>
      <ul className="list-disc pl-4 space-y-1">
        <li>레퍼럴 가입 시 수수료 할인!</li>
        <li>거래소 이벤트: 5월 한정 에어드랍 진행 중</li>
        <li>코인포럼 자체 커뮤니티 이벤트 진행 예정</li>
      </ul>
    </Card>
  );
}
'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { getPosts, Post } from '@/lib/api/post/getPosts';
import { Card, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

export function NoticeBanner() {
  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  const noticePosts = posts
    .filter(post => post.category === 'notice')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

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

      {noticePosts.length > 0 ? (
        <ul className="list-disc pl-4 space-y-1">
          {noticePosts.map((notice) => (
            <li key={notice.id}>
              <Link
                href={`/community/${notice.id}`}
                className="hover:underline hover:text-black"
              >
                {notice.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm pl-1">아직 등록된 공지가 없습니다.</p>
      )}
    </Card>
  );
}
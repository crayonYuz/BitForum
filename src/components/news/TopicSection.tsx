'use client';

import Link from 'next/link';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CoinNews } from "@/lib/api/news/getCoinNews";

interface Props {
  title: string;
  news: CoinNews[];
}

export function TopicSection({ title, news }: Props) {
  return (
    <Card className="w-full">
      <CardContent className="space-y-4">
        <CardTitle>{title}</CardTitle>
        <ul className="text-sm space-y-2">
          {news.slice(0, 5).map((item, index) => (
            <li key={item.id}>
              <Link
                href={`/news/${item.id}`}
                className="block cursor-pointer rounded-md px-2 py-1 transition-colors hover:bg-gray-100 truncate overflow-hidden whitespace-nowrap"
                title={item.title.rendered}
              >
                {index + 1}. {item.title.rendered}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
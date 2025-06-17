import { useMemo } from 'react'
import { Post } from '@/types/post'

export function useSearchResults(
  board: string,
  searchTerm: string,
  communityResults?: Post[],
  coinNews: any[] = [],
  usStockNews: any[] = []
) {
  return useMemo(() => {
    if (!searchTerm) return []

    if (board === 'community') return communityResults ?? []

    const keyword = searchTerm.toLowerCase()
    const allNews = [...coinNews, ...usStockNews]

    return allNews.filter(
      (item) =>
        item.title.rendered.toLowerCase().includes(keyword) ||
        item.content.rendered.toLowerCase().includes(keyword)
    )
  }, [searchTerm, board, communityResults, coinNews, usStockNews])
}

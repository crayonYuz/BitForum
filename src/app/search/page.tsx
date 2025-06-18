'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState, Suspense } from 'react'

import { getSearchResults } from '@/lib/api/search/getSearchResults'
import { getCoinNews } from '@/lib/api/news/getCoinNews'
import { getUSStockNews } from '@/lib/api/news/getUSStockNews'

import { Post } from '@/types/post'
import { Navbar } from '@/components/main/Navbar'

const TABS = [
    { key: 'news', label: '뉴스' },
    { key: 'community', label: '커뮤니티' },
]

function SearchPage() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const initialQ = searchParams.get('q') || ''
    const [query, setQuery] = useState(initialQ)
    const [searchTerm, setSearchTerm] = useState(initialQ)

    const board = searchParams.get('board') || 'news'

    const { data: communityResults, isLoading } = useQuery<Post[]>({
        queryKey: ['searchResults', searchTerm, board],
        queryFn: () => getSearchResults({ q: searchTerm, board }),
        enabled: !!searchTerm && board === 'community',
    })

    const { data: coinNews = [] } = useQuery({
        queryKey: ['coinNewsList'],
        queryFn: getCoinNews,
    })

    const { data: usStockNews = [] } = useQuery({
        queryKey: ['usStockNewsList'],
        queryFn: getUSStockNews,
    })

    const results = useMemo(() => {
        if (!searchTerm) return []

        if (board === 'community') return communityResults ?? []

        const keyword = searchTerm.toLowerCase()
        const allNews = [...coinNews, ...usStockNews]

        return allNews.filter((item) =>
            item.title.rendered.toLowerCase().includes(keyword) ||
            item.content.rendered.toLowerCase().includes(keyword)
        )
    }, [searchTerm, board, communityResults, coinNews, usStockNews])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        router.push(`/search?q=${encodeURIComponent(query)}&board=${board}`)
        setSearchTerm(query)
    }

    const handleTabClick = (tab: string) => {
        router.push(`/search?q=${encodeURIComponent(searchTerm)}&board=${tab}`)
    }

    const handleItemClick = (item: any) => {
        if ('title' in item && 'rendered' in item.title) {
            router.push(item.link)
        } else {
            router.push(`/community/${item.id}`)
        }
    }

    return (
        <>
            <Navbar />
            <div className="pt-24 max-w-4xl mx-auto px-4">
                <form onSubmit={handleSearch} className="flex items-center mb-4 border border-gray-300 rounded-md px-3 py-2">
                    <input
                        type="text"
                        className="flex-1 outline-none"
                        placeholder="검색어를 입력하세요"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className="text-sm text-blue-600 font-semibold ml-2 cursor-pointer">
                        검색
                    </button>
                </form>

                <div className="flex gap-4 border-b border-gray-200 mb-6">
                    {TABS.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => handleTabClick(key)}
                            className={`pb-2 border-b-2 text-sm ${board === key
                                ? 'border-black font-semibold'
                                : 'border-transparent text-gray-400'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {isLoading && board === 'community' ? (
                    <div className="space-y-4">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <div key={idx} className="h-24 bg-gray-200 animate-pulse rounded-lg" />
                        ))}
                    </div>
                ) : results.length === 0 ? (
                    <p className="text-gray-500">검색 결과가 없어요</p>
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {results.map((item: any) => (
                            <li
                                key={item.id}
                                onClick={() => handleItemClick(item)}
                                className="border p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
                            >
                                <h2 className="font-bold text-lg">
                                    {'title' in item ? item.title.rendered : item.title}
                                </h2>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                    {'content' in item ? item.content.rendered.replace(/<[^>]+>/g, '') : item.content}
                                </p>
                                <p className="text-xs text-gray-400 mt-2">
                                    {'author' in item
                                        ? item.author
                                        : item._embedded?.author?.[0]?.name || '뉴스'}
                                    {'date' in item
                                        ? ' | ' + new Date(item.date).toLocaleDateString()
                                        : ''}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default function Page() {
    return (
        <Suspense fallback={<div className="p-4 text-center">로딩 중...</div>}>
            <SearchPage />
        </Suspense>
    )
}
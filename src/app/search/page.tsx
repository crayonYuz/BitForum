'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { Suspense, useState } from 'react'

import { getSearchResults } from '@/lib/api/search/getSearchResults'
import { getCoinNews } from '@/lib/api/news/getCoinNews'
import { getUSStockNews } from '@/lib/api/news/getUSStockNews'

import { Post } from '@/types/post'
import { Navbar } from '@/components/main/Navbar'
import SearchBar from '@/components/search/SearchBar'
import SearchTabs from '@/components/search/SearchTabs'
import SearchResults from '@/components/search/SearchResults'
import { useSearchResults } from '@/components/search/useSearchResults'

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

    const { data: coinNews = [] } = useQuery({ queryKey: ['coinNewsList'], queryFn: getCoinNews })
    const { data: usStockNews = [] } = useQuery({ queryKey: ['usStockNewsList'], queryFn: getUSStockNews })

    const results = useSearchResults(board, searchTerm, communityResults, coinNews, usStockNews)

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
                <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
                <SearchTabs board={board} onTabClick={handleTabClick} />
                <SearchResults
                    isLoading={isLoading}
                    board={board}
                    results={results}
                    onItemClick={handleItemClick}
                />
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
type SearchResultsProps = {
    isLoading: boolean
    board: string
    results: any[]
    onItemClick: (item: any) => void
}

export default function SearchResults({ isLoading, board, results, onItemClick }: SearchResultsProps) {
    if (isLoading && board === 'community') {
        return (
            <div className="space-y-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="h-24 bg-gray-200 animate-pulse rounded-lg" />
                ))}
            </div>
        )
    }

    if (results.length === 0) {
        return <p className="text-gray-500">검색 결과가 없어요</p>
    }

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((item) => (
                <li
                    key={item.id}
                    onClick={() => onItemClick(item)}
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
    )
}
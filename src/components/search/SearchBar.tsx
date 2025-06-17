type SearchBarProps = {
    query: string
    setQuery: (q: string) => void
    onSearch: (e: React.FormEvent) => void
}

export default function SearchBar({ query, setQuery, onSearch }: SearchBarProps) {
    return (
        <form onSubmit={onSearch} className="flex items-center mb-4 border border-gray-300 rounded-md px-3 py-2">
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
    )
}
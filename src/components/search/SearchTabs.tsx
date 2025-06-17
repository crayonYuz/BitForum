type SearchTabsProps = {
    board: string
    onTabClick: (tab: string) => void
}

const TABS = [
    { key: 'news', label: '뉴스' },
    { key: 'community', label: '커뮤니티' },
]

export default function SearchTabs({ board, onTabClick }: SearchTabsProps) {
    return (
        <div className="flex gap-4 border-b border-gray-200 mb-6">
            {TABS.map(({ key, label }) => (
                <button
                    key={key}
                    onClick={() => onTabClick(key)}
                    className={`pb-2 border-b-2 text-sm ${board === key
                        ? 'border-black font-semibold'
                        : 'border-transparent text-gray-400'
                        }`}
                >
                    {label}
                </button>
            ))}
        </div>
    )
}
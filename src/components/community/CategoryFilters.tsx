const categories = ["전체", "인사이트", "코인뉴스", "크립토 기자단", "자유게시판", "공지/이벤트"]

export const CategoryFilters = () => {
    return (
        <div className="flex gap-3 flex-wrap">
            {categories.map(cat => (
                <button key={cat} className="px-3 py-1 rounded-full bg-muted text-sm">{cat}</button>
            ))}
        </div>
    )
}
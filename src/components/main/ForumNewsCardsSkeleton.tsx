export function ForumNewsCardsSkeleton() {
    return (
        <div className="flex gap-4 overflow-x-auto">
            {Array.from({ length: 3 }).map((_, idx) => (
                <div
                    key={idx}
                    className="w-80 h-48 bg-muted animate-pulse rounded-lg flex-shrink-0"
                />
            ))}
        </div>
    );
}
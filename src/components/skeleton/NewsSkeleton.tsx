import { Skeleton } from "antd";

export function NewsSkeleton() {
    return (
        <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            ))}
        </div>
    );
}
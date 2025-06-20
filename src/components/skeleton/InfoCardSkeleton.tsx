import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function InfoCardSkeleton() {
    return (
        <section className="bg-white p-2 rounded-md">
            <div className="mb-3">
                <Skeleton className="h-5 w-24 mb-1 rounded" />
            </div>
            <Card>
                <CardContent className="space-y-2 py-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-2 px-2 py-1"
                        >
                            <Skeleton className="h-4 w-4 rounded" />
                            <Skeleton className="h-4 w-full rounded" />
                        </div>
                    ))}
                </CardContent>
            </Card>
        </section>
    );
}

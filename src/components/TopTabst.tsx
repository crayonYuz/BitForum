"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TopTabs() {
    const router = useRouter();
    const pathname = usePathname();

    const tabValue = pathname.startsWith("/community") ? "community" : "news";

    const handleChange = (value: string) => {
        if (value === "news") {
            router.push("/news");
        } else if (value === "community") {
            router.push("/community");
        }
    };

    return (
        <Tabs value={tabValue} onValueChange={handleChange}>
            <TabsList>
                <TabsTrigger value="news">뉴스</TabsTrigger>
                <TabsTrigger value="community">커뮤니티</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
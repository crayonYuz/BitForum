import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TopTabs() {
    return (
        <Tabs defaultValue="news">
            <TabsList>
                <TabsTrigger value="news">뉴스</TabsTrigger>
                <TabsTrigger value="community">커뮤니티</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
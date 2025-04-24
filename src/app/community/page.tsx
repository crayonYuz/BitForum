import { Navbar } from "@/components/main/Navbar";
import { TopTabs } from "@/components/TopTabst";


export default function NewsPage() {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <TopTabs />
            </main>
        </>
    );
}
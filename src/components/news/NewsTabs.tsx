"use client"

interface Props {
    tabs: string[];
    selectedTab: string;
    onTabChange: (tab: string) => void;
}

export function NewsTabs({ tabs, selectedTab, onTabChange }: Props) {
    return (
        <div className="flex gap-4">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`pb-2 border-b-2 transition-all cursor-pointer ${selectedTab === tab
                        ? "border-primary text-primary font-semibold"
                        : "border-transparent hover:text-primary"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
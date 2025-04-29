"use client";

interface Props {
    tabs: string[];
    selectedTab: string;
    onTabChange: (tab: string) => void;
}

export function ScheduleTabs({ tabs, selectedTab, onTabChange }: Props) {
    return (
        <div className="flex space-x-4 py-4 mt-4">
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
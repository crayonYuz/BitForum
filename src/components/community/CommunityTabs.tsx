"use client"

import { useState } from "react";

export const CommunityTabs = () => {
    const tabs = ["전체", "자유게시판", "공지/이벤트", "초보자 가이드"];
    const [activeTab, setActiveTab] = useState("전체");

    return (
        <div className="flex gap-4 pb-4">
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm pb-2 cursor-pointer ${activeTab === tab ? "font-bold border-b-2 border-primary" : "text-muted-foreground"}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
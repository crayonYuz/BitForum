'use client'

import { useState } from "react";
import { ScheduleItem } from "@/components/schedule/ScheduleItem";
import { Navbar } from "@/components/main/Navbar";

export default function Page() {
    const [selectedTab, setSelectedTab] = useState("전체");

    const tabs = ["전체", "경제", "암호화폐", "거래소"];

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <Navbar />

            <div className="max-w-screen-lg mx-auto px-4">
                <div className="pt-8">
                    <h1 className="text-2xl font-bold text-gray-900">스케쥴</h1>
                </div>

                <div className="flex space-x-4 border-b py-4 mt-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`pb-2 border-b-2 transition-all ${selectedTab === tab
                                ? "border-primary text-primary font-semibold"
                                : "border-transparent hover:text-primary"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 스케줄 리스트 */}
                <div className="py-4 mt-2">
                    <h2 className="text-lg font-bold mb-4">2025년 4월</h2>

                    <div className="space-y-4">
                        <ScheduleItem
                            date="24"
                            day="목요일"
                            label="거래소"
                            text="바이낸스 런치풀, INIT 상장"
                        />
                        <ScheduleItem
                            date="24"
                            day="목요일"
                            label="경제"
                            text="2130 신규 실업수당청구건수"
                            highlight
                        />
                        <ScheduleItem
                            date="25"
                            day="금요일"
                            label="경제"
                            text="0600 FOMC 멤버 카시카리 연설"
                            highlight
                        />
                        <ScheduleItem
                            date="25"
                            day="금요일"
                            label="경제"
                            text="美 SEC TF, 암호화폐 커스터디 관련 논의"
                        />
                        <ScheduleItem
                            date="25"
                            day="금요일"
                            label="암호화폐"
                            text="VENOM, 총 유통량의 2.75% 언락 ($780만 상당)"
                        />
                        <ScheduleItem
                            date="26"
                            day="토요일"
                            label="암호화폐"
                            text="GT, 총 유통량의 5.42% 언락 ($1.5억 상당)"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
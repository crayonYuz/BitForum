'use client'

import { useState } from "react";
import { ScheduleItem } from "@/components/schedule/ScheduleItem";
import { Navbar } from "@/components/main/Navbar";
import { scheduleData } from "@/lib/scheduleData";
import { ScheduleTabs } from "@/components/schedule/ScheduleTabs";
import ScheduleModal from "@/components/schedule/ScheduleModal";
import { useRouter } from "next/navigation";

export default function Page() {
    const [selectedTab, setSelectedTab] = useState("전체");
    const [showModal, setShowModal] = useState(true);
    const router = useRouter();

    const tabs = ["전체", "경제", "암호화폐", "거래소"];

    const handleCloseModal = () => {
        setShowModal(false);
        router.back();
    };

    const filteredSchedule = selectedTab === "전체"
        ? scheduleData
        : scheduleData.filter((item) => item.label === selectedTab);

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <Navbar />

            {showModal && <ScheduleModal onClose={handleCloseModal} />}


            <div className="max-w-screen-lg mx-auto px-4 pt-14">
                <div className="pt-8">
                    <h1 className="text-2xl font-bold text-gray-900">스케쥴</h1>
                </div>

                <ScheduleTabs
                    tabs={tabs}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                />

                <div className="py-4 mt-2">
                    <h2 className="text-lg font-bold mb-4">2025년 4월</h2>

                    <div className="space-y-4">
                        {filteredSchedule.length > 0 ? (
                            filteredSchedule.map((item, index) => (
                                <ScheduleItem
                                    key={index}
                                    date={item.date}
                                    day={item.day}
                                    label={item.label}
                                    text={item.text}
                                    highlight={item.highlight}
                                />
                            ))
                        ) : (
                            <div className="text-center text-gray-400 py-10">
                                선택한 카테고리에 일정이 없습니다.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
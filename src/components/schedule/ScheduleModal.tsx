'use client'

import { useEffect } from "react";

export default function ScheduleModal({ onClose }: { onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'auto'; };
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl max-w-sm w-full shadow-lg text-center">
                <h2 className="text-xl font-semibold mb-4">🚧 준비중입니다</h2>
                <p className="text-gray-600 mb-6">해당 기능은 현재 준비 중입니다.</p>
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                >
                    돌아가기
                </button>
            </div>
        </div>
    );
}
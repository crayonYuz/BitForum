'use client';

import { useState } from 'react';
import { MessageCircle, Handshake, Megaphone } from 'lucide-react';
import { FloatingModal } from './FloatingModal';

const items = [
    { label: 'FAQ', icon: <MessageCircle className="w-5 h-5 text-blue-500" /> },
    { label: '제휴 문의', icon: <Handshake className="w-5 h-5 text-purple-500" /> },
    { label: '광고 문의', icon: <Megaphone className="w-5 h-5 text-yellow-500" /> },
];

export function RightContactPanel() {
    const [modalContent, setModalContent] = useState<string | null>(null);
    const handleOpen = (label: string) => setModalContent(label);
    const handleClose = () => setModalContent(null);

    return (
        <>
            <div className="rounded-xl border bg-white shadow-sm divide-x grid grid-cols-3 overflow-hidden">
                {items.map((item) => (
                    <button
                        key={item.label}
                        className="flex flex-col items-center justify-center gap-1 py-5 hover:bg-gray-50 transition cursor-pointer"
                        onClick={() => handleOpen(item.label)}
                    >
                        <div className="rounded-lg bg-gray-100 w-10 h-10 flex items-center justify-center">
                            {item.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{item.label}</span>
                    </button>
                ))}
            </div>

            {modalContent && (
                <FloatingModal title={modalContent} onClose={handleClose}>
                    {modalContent === 'FAQ' && (
                        <ul className="space-y-2 text-sm">
                            <li>✅ 게시글은 누구나 작성할 수 있나요?</li>
                            <li>✅ 댓글 삭제는 어떻게 하나요?</li>
                            <li>✅ 탈퇴는 어디서 하나요?</li>
                        </ul>
                    )}
                    {modalContent === '제휴 문의' && (
                        <p className="text-sm">제휴 문의는 bitforummanager@gmail.com로 메일 부탁드립니다.</p>
                    )}
                    {modalContent === '광고 문의' && (
                        <p className="text-sm">광고 관련 문의는 bitforummanager@gmail.com로 연락 주세요.</p>
                    )}
                </FloatingModal>
            )}
        </>
    );
}
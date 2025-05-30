'use client';

import { useEffect, useRef } from "react";
import { SearchIcon } from "lucide-react";

interface Props {
    open: boolean;
    onClose: () => void;
    recentSearches: string[];
}

export default function SearchOverlay({ open, onClose, recentSearches }: Props) {
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (overlayRef.current && !(overlayRef.current as any).contains(e.target)) {
                onClose();
            }
        };
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-start justify-center pt-28">
            <div
                ref={overlayRef}
                className="bg-white rounded-md w-full max-w-xl p-6 shadow-xl"
            >
                <div className="flex items-center border-b pb-4">
                    <SearchIcon className="w-5 h-5 text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="무엇을 검색할까요?"
                        className="w-full outline-none text-lg text-gray-700 placeholder-gray-400"
                        autoFocus
                    />
                </div>

                <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-500 mb-2">최근 검색어</p>
                    {recentSearches.length > 0 ? (
                        <ul className="space-y-2">
                            {recentSearches.map((keyword, idx) => (
                                <li key={idx} className="text-gray-700 text-sm hover:text-blue-600 cursor-pointer">
                                    {keyword}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400 text-sm">최근 검색어가 없습니다.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

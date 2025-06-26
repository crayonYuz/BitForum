'use client';

import { useEffect, useRef, useState } from 'react';
import { SearchIcon, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: Props) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState('');
    const [recentSearches, setRecentSearches] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('recentSearches');
        if (stored) setRecentSearches(JSON.parse(stored));
    }, [open]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [onClose]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open, onClose]);

    const handleSearch = () => {
        const trimmed = searchTerm.trim();
        if (!trimmed) return;

        const updated = [trimmed, ...recentSearches.filter((term) => term !== trimmed)].slice(0, 10);
        setRecentSearches(updated);
        localStorage.setItem('recentSearches', JSON.stringify(updated));

        router.push(`/search?q=${encodeURIComponent(trimmed)}`);
        onClose();
    };

    const handleDelete = (keyword: string) => {
        const filtered = recentSearches.filter(term => term !== keyword);
        setRecentSearches(filtered);
        localStorage.setItem('recentSearches', JSON.stringify(filtered));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/30">
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl p-4 z-50">
                <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-lg border">
                    <SearchIcon className="w-5 h-5 text-gray-500 mr-2 " />
                    <input
                        type="text"
                        ref={inputRef}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="무엇을 검색할까요?"
                        className="w-full outline-none text-sm placeholder-gray-400"
                        autoFocus
                    />
                    <button onClick={onClose}>
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>
            </div>

            <div
                ref={overlayRef}
                className="fixed top-[80px] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white shadow-xl rounded-xl p-5"
            >
                <p className="text-sm text-gray-500 mb-3 font-semibold">최근 검색어</p>
                {recentSearches.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {recentSearches.map((keyword, idx) => (
                            <div
                                key={idx}
                                className="flex items-center bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200"
                            >
                                <span
                                    onClick={() => {
                                        setSearchTerm(keyword);
                                        handleSearch();
                                    }}
                                    className="cursor-pointer"
                                >
                                    {keyword}
                                </span>
                                <X
                                    className="w-4 h-4 ml-2 text-gray-400 cursor-pointer"
                                    onClick={() => handleDelete(keyword)}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-gray-400">최근 검색어가 없습니다.</p>
                )}
            </div>
        </div>
    );
}
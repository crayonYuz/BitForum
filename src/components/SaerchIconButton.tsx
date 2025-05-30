'use client';

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import SearchOverlay from "./SearchOverlay";

export default function SearchIconButton() {
    const [open, setOpen] = useState(false);

    const recentSearches = ["비트코인", "SEC", "리플", "코박", "에이다"];

    return (
        <>
            <button onClick={() => setOpen(true)} className="text-gray-500 hover:text-blue-600">
                <SearchIcon className="w-6 h-6" />
            </button>
            <SearchOverlay open={open} onClose={() => setOpen(false)} recentSearches={recentSearches} />
        </>
    );
}

'use client';

import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface Props {
    title: string;
    children: ReactNode;
    onClose: () => void;
}

export function FloatingModal({ title, children, onClose }: Props) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    <X className="w-5 h-5" />
                </button>
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <div>{children}</div>
            </div>
        </div>
    );
}
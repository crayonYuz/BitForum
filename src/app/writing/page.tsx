'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

const ReactMarkdownEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false });
import 'react-markdown-editor-lite/lib/index.css';
import { Navbar } from '@/components/main/Navbar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function WritePage() {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [category, setCategory] = useState<string>('free');
    const router = useRouter();

    const handleCategoryChange = (value: string) => {
        setCategory(value);
    };

    const handleSaveDraft = () => {
        localStorage.setItem('draft', JSON.stringify({ title, content, category }));
        alert('임시 저장되었습니다.');
    };

    const handleSubmit = () => {
        alert('글이 등록되었습니다.');
        router.push('/community');
    };

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 space-y-6 pt-14">
                <h1 className="text-2xl font-bold mb-4">글 작성하기</h1>

                <div className="mb-4">
                    <Select value={category} onValueChange={handleCategoryChange}>
                        <SelectTrigger className="w-full p-2 border rounded">
                            <SelectValue placeholder="카테고리 선택" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="free">자유</SelectItem>
                            <SelectItem value="coin-info">코인정보</SelectItem>
                            <SelectItem value="beginner-guide">초보자가이드</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="글 제목"
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <ReactMarkdownEditor
                        value={content}
                        onChange={({ text }: { text: string }) => setContent(text)}
                        renderHTML={(text) => text}
                    />
                </div>

                <div className="flex gap-4">
                    <Button variant="ghost" onClick={handleSaveDraft}>임시 저장</Button>
                    <Button onClick={handleSubmit}>완료</Button>
                </div>
            </div>
        </>
    );
}
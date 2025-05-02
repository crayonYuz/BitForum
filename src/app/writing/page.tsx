'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/main/Navbar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import '@toast-ui/editor/dist/toastui-editor.css';

const ToastEditor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), {
    ssr: false,
});

export default function Page() {
    const router = useRouter();
    const editorRef = useRef<any>(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('free');

    const handleCategoryChange = (value: string) => setCategory(value);

    const getEditorContent = () => editorRef.current?.getInstance()?.getMarkdown() || '';

    const handleSaveDraft = () => {
        const content = getEditorContent();
        localStorage.setItem('draft', JSON.stringify({ title, content, category }));
        alert('임시 저장되었습니다.');
    };

    const handleSubmit = () => {
        const content = getEditorContent();
        console.log({ title, category, content });
        alert('글이 등록되었습니다.');
        router.push('/community');
    };

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 space-y-6 mt-14">
                <h1 className="text-2xl font-bold">글 작성하기</h1>

                <div>
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

                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="글 제목"
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <ToastEditor
                        ref={editorRef}
                        initialValue=" "
                        previewStyle="tab"
                        height="550px"
                        initialEditType="markdown"
                        useCommandShortcut={true}
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
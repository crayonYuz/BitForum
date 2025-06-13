'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/main/Navbar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useMutation } from '@tanstack/react-query';
import { createPost, CreateProps } from '@/lib/api/post/posts';
import { useSession } from 'next-auth/react';
import { toast } from "sonner"
import { Editor as ToastEditorType } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const ToastEditor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), {
    ssr: false,
});

export default function Page() {
    const router = useRouter();
    const editorRef = useRef<ToastEditorType>(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState<CreateProps['category']>('free');

    const { data: session } = useSession();

    const isAdmin = session?.user?.role === 'ADMIN';

    const categoryOptions: { value: CreateProps['category'], label: string }[] = isAdmin
        ? [
            { value: 'free', label: '자유게시판' },
            { value: 'coin-info', label: '코인정보' },
            { value: 'exchange-info', label: '거래소정보' },
            { value: 'beginner-guide', label: '초보자 가이드' },
            { value: 'notice', label: '공지 및 이벤트' },
        ]
        : [
            { value: 'free', label: '자유게시판' },
        ];

    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            toast.success('글이 등록되었습니다.');
            router.push('/community');
        },
        onError: () => {
            toast.error('등록에 실패했습니다. 다시 시도해 주세요.');
        },
    });

    const getEditorContent = () => editorRef.current?.getInstance()?.getMarkdown() || '';

    const handleSubmit = () => {
        const content = getEditorContent();
        if (!title || !content) {
            toast.info('제목과 내용을 모두 입력해 주세요.');
            return;
        }

        mutation.mutate({
            title,
            category,
            content,
            author: session?.user?.name ?? '익명',
        });
    };

    const handleSaveDraft = () => {
        const content = getEditorContent();
        localStorage.setItem(
            'draft',
            JSON.stringify({ title, content, category })
        );
        toast.info('임시 저장되었습니다.');
    };


    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 space-y-6 mt-14 pb-28 md:pb-6">
                <h1 className="text-2xl font-bold">글 작성하기</h1>
                <div>
                    <Select value={category} onValueChange={(val: 'free' | 'coin-info' | 'beginner-guide') => setCategory(val)}>
                        <SelectTrigger className="w-full p-2 border rounded">
                            <SelectValue placeholder="카테고리 선택" />
                        </SelectTrigger>
                        <SelectContent>
                            {categoryOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))}
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
                    <Button variant="ghost" onClick={handleSaveDraft}>
                        임시 저장
                    </Button>
                    <Button onClick={handleSubmit} disabled={mutation.isPending}>
                        {mutation.isPending ? '등록 중...' : '완료'}
                    </Button>
                </div>
            </div>
        </>
    );
}
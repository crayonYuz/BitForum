'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getPost } from '@/lib/api/post/getPost';
import { updatePost, UpdatePostData } from '@/lib/api/post/updatePost';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Navbar } from '@/components/main/Navbar';
import { useSession } from 'next-auth/react';
import { Editor as ToastEditorType } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { toast } from "sonner"

const ToastEditor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), { ssr: false });

export default function Page() {
    const router = useRouter();
    const { id } = useParams();
    const { data: session } = useSession();
    const editorRef = useRef<ToastEditorType>(null);

    const { data: post, isLoading } = useQuery({
        queryKey: ['post', id],
        queryFn: () => getPost(id as string),
        enabled: !!id,
    });

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState<'free' | 'coin-info' | 'beginner-guide'>('free');

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setCategory(post.category);
            editorRef.current?.getInstance()?.setMarkdown(post.content);
        }
    }, [post, router]);

    const mutation = useMutation({
        mutationFn: (data: UpdatePostData) => updatePost(id as string, data),
        onSuccess: () => {
            toast.success('수정되었습니다.');
            router.push(`/community/${id}`);
        },
        onError: () => {
            toast.error('수정에 실패했습니다.');
        },
    });

    const handleSubmit = () => {
        const content = editorRef.current?.getInstance()?.getMarkdown() || '';
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

    if (isLoading) return <div className="p-6">로딩 중...</div>;

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 space-y-6 mt-14">
                <h1 className="text-2xl font-bold">글 수정하기</h1>

                <Select value={category} onValueChange={(val: 'free' | 'coin-info' | 'beginner-guide') => setCategory(val)}>
                    <SelectTrigger className="w-full p-2 border rounded">
                        <SelectValue placeholder="카테고리 선택" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="free">자유</SelectItem>
                        <SelectItem value="coin-info">코인정보</SelectItem>
                        <SelectItem value="beginner-guide">초보자가이드</SelectItem>
                    </SelectContent>
                </Select>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="글 제목"
                    className="w-full p-2 border rounded"
                />

                {post && (
                    <ToastEditor
                        ref={editorRef}
                        initialValue={post.content}
                        previewStyle="tab"
                        height="550px"
                        initialEditType="markdown"
                        useCommandShortcut={true}
                    />
                )}

                <div className="flex justify-end">
                    <Button onClick={handleSubmit} disabled={mutation.isPending}>
                        {mutation.isPending ? '수정 중...' : '수정 완료'}
                    </Button>
                </div>
            </div>
        </>
    );
}
'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { createComment, getComments } from '@/lib/api/comments/comments';
import { deleteComment } from '@/lib/api/comments/deleteComment';
import { getTimeAgo } from '@/utils/dataUtils';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Comment } from '@/types/comments';

interface Props {
    postId: string;
}

export const CommentSection = ({ postId }: Props) => {
    const { data: session } = useSession();
    const queryClient = useQueryClient();
    const [content, setContent] = useState('');

    const { data: comments = [], isLoading } = useQuery<Comment[]>({
        queryKey: ['comments', postId],
        queryFn: () => getComments(postId),
    });

    const createMutation = useMutation({
        mutationFn: createComment,
        onSuccess: () => {
            setContent('');
            queryClient.invalidateQueries({ queryKey: ['comments', postId] });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: deleteComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', postId] });
        },
    });

    const handleSubmit = () => {
        if (!content.trim()) return toast.info('댓글 내용을 입력해주세요.');
        createMutation.mutate({
            postId,
            content,
            author: session?.user?.name ?? '익명',
        });
    };

    const handleDelete = (commentId: number) => {
        const confirmed = window.confirm('댓글을 삭제하시겠습니까?');
        if (!confirmed) return;
        deleteMutation.mutate(commentId);
    };

    return (
        <div className="space-y-4 mt-6">
            <h2 className="font-semibold text-lg">댓글 {comments.length}개</h2>

            <div className="space-y-2">
                <Textarea
                    className="resize-none h-24"
                    placeholder="댓글을 입력해 주세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="flex mt-4 justify-end">
                    <Button onClick={handleSubmit} disabled={createMutation.isPending}>
                        {createMutation.isPending ? '작성 중...' : '남기기'}
                    </Button>
                </div>
            </div>

            {comments.length === 0 && (
                <div className="text-center text-gray-500 space-y-1 mt-6">
                    <p className="text-black font-semibold">아직 작성된 댓글이 없어요</p>
                    <p className="text-sm">로그인 후 댓글을 남겨보실 수 있습니다.</p>
                </div>
            )}

            <ul className="space-y-3 mt-12">
                {isLoading ? (
                    <li className="text-gray-400">댓글을 불러오는 중...</li>
                ) : (
                    comments.map((comment: Comment) => {
                        const isAuthor = session?.user?.name === comment.author;
                        return (
                            <li key={comment.id} className="text-sm text-gray-800 border-b pb-2 relative">
                                <div className="flex justify-between items-start">
                                    <span className="font-medium">{comment.author}</span>
                                    {isAuthor && (
                                        <button
                                            onClick={() => handleDelete(comment.id)}
                                            className="text-red-500 hover:text-red-700"
                                            title="삭제"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                </div>
                                <div className="text-xs text-gray-500 mb-1">{getTimeAgo(comment.createdAt)}</div>
                                <div>{comment.content}</div>
                            </li>
                        );
                    })
                )}
            </ul>
        </div>
    );
};
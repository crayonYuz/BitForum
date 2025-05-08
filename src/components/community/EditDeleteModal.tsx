import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface EditDeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirmDelete: () => void;
    postTitle: string;
    postContent: string;
    onUpdatePost: (title: string, content: string) => void;
}

export const EditDeleteModal = ({
    isOpen,
    onClose,
    onConfirmDelete,
    postTitle,
    postContent,
    onUpdatePost,
}: EditDeleteModalProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(postTitle);
    const [newContent, setNewContent] = useState(postContent);

    const handleSave = () => {
        onUpdatePost(newTitle, newContent);
        setIsEditing(false);
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold">게시글 {isEditing ? '수정' : '삭제'}</h2>
                        <button onClick={onClose}>X</button>
                    </div>

                    {isEditing ? (
                        <div className="space-y-4 mt-4">
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                            <Textarea
                                className="resize-none w-full p-2 border rounded"
                                value={newContent}
                                onChange={(e) => setNewContent(e.target.value)}
                            />
                            <div className="flex justify-end gap-4 mt-4">
                                <Button variant="outline" onClick={() => setIsEditing(false)}>취소</Button>
                                <Button onClick={handleSave}>저장</Button>
                            </div>
                        </div>
                    ) : (
                        <div className="mt-4">
                            <p>게시글을 삭제하시겠습니까?</p>
                            <div className="flex justify-end gap-4 mt-4">
                                <Button variant="outline" onClick={onClose}>취소</Button>
                                <Button onClick={onConfirmDelete}>삭제</Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    );
};
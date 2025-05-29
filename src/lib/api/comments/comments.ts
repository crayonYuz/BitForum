import axios from 'axios'
import { Comment } from '@/types/comments'

export const getComments = async (postId: string): Promise<Comment[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/comments/posts/${postId}`
  )
  return response.data
}

export const createComment = async ({
  postId,
  content,
  author,
}: {
  postId: string
  content: string
  author: string
}) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/comments`,
    {
      postId: Number(postId),
      content,
      author,
    }
  )
  return response.data
}

import axios from 'axios'

export interface Post {
  id: number
  title: string
  content: string
  category: 'free' | 'coin-info' | 'beginner-guide'
  createdAt: string
  updatedAt: string
  author?: string
}

export const getPost = async (id: string | number): Promise<Post> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts/${id}`
  )
  return response.data
}

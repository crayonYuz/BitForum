import axios from 'axios'

export interface Post {
  id: number
  title: string
  content: string
  category: 'free' | 'coin-info' | 'beginner-guide'
  author?: string
  createdAt: string
}

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts`
  )
  return response.data
}

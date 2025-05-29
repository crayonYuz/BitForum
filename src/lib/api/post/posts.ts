import axios from 'axios'

export interface CreateProps {
  title: string
  category: 'free' | 'coin-info' | 'exchange-info' | 'beginner-guide' | 'notice'
  content: string
  author: string
}

export const createPost = async (data: CreateProps) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return response.data
}

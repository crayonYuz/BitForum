import axios from 'axios'

export interface CreatePostPayload {
  title: string
  category: 'free' | 'coin-info' | 'beginner-guide'
  content: string
}

export const createPost = async (data: CreatePostPayload) => {
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

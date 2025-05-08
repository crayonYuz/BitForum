import axios from 'axios'

export interface CreatePostPayload {
  title: string
  category: 'free' | 'coin-info' | 'beginner-guide'
  content: string
  author: string
}

export const updatePost = async (id: string, data: CreatePostPayload) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts/${id}`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return response.data
}

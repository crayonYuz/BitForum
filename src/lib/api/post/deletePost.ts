import axios from 'axios'

export const deletePost = async (id: string) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return response.data
}

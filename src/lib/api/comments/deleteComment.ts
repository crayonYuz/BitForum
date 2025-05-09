import axios from 'axios'

export const deleteComment = async (commentId: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/comments/${commentId}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return response.data
}

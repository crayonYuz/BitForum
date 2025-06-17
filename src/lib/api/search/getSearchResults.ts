import axios from 'axios'
import { Post } from '@/types/post'

export const getSearchResults = async ({
  q,
  board,
}: {
  q: string
  board: string
}): Promise<Post[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/search`,
    {
      params: {
        q,
        board,
      },
    }
  )

  return response.data
}

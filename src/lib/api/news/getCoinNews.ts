import axios from 'axios'

export interface CoinNews {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  date: string
  author: number
  categories: number[]
}

export const getCoinNews = async (): Promise<CoinNews[]> => {
  const response = await axios.get<CoinNews[]>('/api/coinNews')
  return response.data
}

export const getCoinNewsById = async (id: string): Promise<CoinNews | null> => {
  try {
    const response = await fetch(
      `https://bitforum.blog/wp-json/wp/v2/posts/${id}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )

    if (!response.ok) return null

    const data = await response.json()
    return data
  } catch (error) {
    console.error('뉴스 상세 fetch 실패:', error)
    return null
  }
}

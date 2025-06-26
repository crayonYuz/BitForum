import axios from 'axios'

export interface ForumNews {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt?: {
    rendered: string
  }
  date: string
  author: number
  categories: number[]
  featuredImage: string | null
}

export const getForumNews = async (): Promise<ForumNews[]> => {
  try {
    const response = await axios.get<ForumNews[]>('/api/forumNews')
    return response.data
  } catch (error) {
    console.error('Forum 뉴스 불러오기 실패:', error)
    return []
  }
}

export interface Category {
  id: number
  name: string
}
export type Post = {
  id: number
  title: string
  content: string
  author: string
  date: string
}

type CommunityPost = {
  id: number
  title: string
  content: string
  author: string
  date: string
}

type NewsItem = {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  date: string
  link: string
  _embedded?: {
    author?: { name: string }[]
  }
}

export type SearchItem = CommunityPost | NewsItem

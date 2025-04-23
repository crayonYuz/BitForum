export type SortType = "default" | "gainers" | "losers" | "trending";

export interface Coin {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  price_change_percentage_1h: number
  price_change_percentage_24h: number
  price_change_percentage_7d: number
  total_volume: number
  market_cap: number
}

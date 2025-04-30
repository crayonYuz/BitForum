export type SortType = 'default' | 'gainers' | 'losers' | 'trending'

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
  market_cap_rank: number
}

export interface CoinDetail {
  id: string
  symbol: string
  name: string
  description: {
    ko?: string
    en?: string
  }
  image: {
    thumb: string
    small: string
    large: string
  }
  market_data: {
    current_price: {
      krw: number
    }
    market_cap: {
      krw: number
    }
    price_change_percentage_24h: number
  }
  tickers: {
    market: {
      name: string
    }
    converted_last: {
      krw: number
    }
    converted_volume: {
      krw: number
    }
  }[]
}

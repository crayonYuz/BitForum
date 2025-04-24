import { Coin, SortType } from '@/types/coin'

export function sortCoins(data: Coin[], sortType: SortType): Coin[] {
  return [...data].sort((a, b) => {
    switch (sortType) {
      case 'gainers':
        return b.price_change_percentage_24h - a.price_change_percentage_24h
      case 'losers':
        return a.price_change_percentage_24h - b.price_change_percentage_24h
      case 'trending':
        return b.total_volume - a.total_volume
      default:
        return 0
    }
  })
}

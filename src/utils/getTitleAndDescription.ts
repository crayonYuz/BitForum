import { SortType } from '@/types/coin'

export function getTitleAndDescription(sortType: SortType) {
  switch (sortType) {
    case 'gainers':
      return {
        title: '상승률',
        description: '지난 24시간 동안 가장 수익률이 좋은 코인을 모았어요.',
      }
    case 'losers':
      return {
        title: '하락률',
        description: '지난 24시간 동안 가장 하락률이 높은 코인을 모았어요.',
      }
    case 'trending':
      return {
        title: '인기 코인',
        description: '최근 거래량이 많은 인기 코인들이에요.',
      }
    default:
      return {
        title: '전체',
        description: '현재 거래 가능한 모든 코인을 확인할 수 있어요.',
      }
  }
}

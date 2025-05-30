import axios from 'axios'
import { CoinNews } from './getCoinNews'

export const getUSStockNews = async (): Promise<CoinNews[]> => {
  const response = await axios.get<CoinNews[]>('/api/us-stock')
  return response.data
}

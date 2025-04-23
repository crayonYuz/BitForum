import axios from 'axios'
import { Coin } from '@/types/coin'

export const getCryptoPrices = async (): Promise<Coin[]> => {
  const res = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      params: {
        vs_currency: 'krw',
        ids: 'bitcoin,ethereum,ripple,cardano,binancecoin,solana,polkadot,uniswap,chainlink,litecoin',
        price_change_percentage: '1h,24h,7d',
      },
    }
  )

  return res.data.map((coin: any) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    image: coin.image,
    current_price: coin.current_price,
    price_change_percentage_1h: coin.price_change_percentage_1h_in_currency,
    price_change_percentage_24h: coin.price_change_percentage_24h_in_currency,
    price_change_percentage_7d: coin.price_change_percentage_7d_in_currency,
    total_volume: coin.total_volume,
    market_cap: coin.market_cap,
  }))
}

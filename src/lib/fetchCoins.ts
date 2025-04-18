import axios from 'axios';
import {Coin} from '@/types/coin';

export const getCryptoPrices = async (): Promise<Coin[]> => {
  const res = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,ethereum,ripple,cardano,binancecoin,solana,polkadot,uniswap,chainlink,litecoin',
      },
    },
  );

  return res.data.map((coin: any) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    image: coin.image,
    current_price: coin.current_price,
    price_change_percentage_24h: coin.price_change_percentage_24h,
  }));
};

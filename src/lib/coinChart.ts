import axios from "axios";

export const getCoinMarketChart = async (id: string, days = 7) => {
    const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
        {
            params: {
                vs_currency: 'usd',
                days,
            }
        }
    );

    return res.data.prices
}
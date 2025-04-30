export async function getCoinDetail(id: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false`
  )
  if (!res.ok) throw new Error('코인 상세 정보를 불러오지 못했습니다')
  return res.json()
}

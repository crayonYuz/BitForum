import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_STOCK_API_KEY
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/stock_news?limit=10&apikey=${apiKey}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { message: '미국증시 뉴스 로딩 실패' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Error fetching stock news:', error)
    return NextResponse.json(
      { message: '서버 오류: 미국증시 뉴스 로딩 중' },
      { status: 500 }
    )
  }
}

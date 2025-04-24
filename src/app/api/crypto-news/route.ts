import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_CRYPTO_API_KEY
    const response = await fetch(
      `https://cryptopanic.com/api/v1/posts/?auth_token=${apiKey}&public=true`
    )

    if (!response.ok) {
      return NextResponse.json(
        { message: '코인 뉴스 로딩 실패' },
        { status: response.status }
      )
    }

    const json = await response.json()
    return NextResponse.json(json.results, { status: 200 })
  } catch (error) {
    console.error('Error fetching crypto news:', error)
    return NextResponse.json(
      { message: '서버 오류: 코인 뉴스 로딩 중' },
      { status: 500 }
    )
  }
}

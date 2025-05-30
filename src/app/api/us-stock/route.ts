import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(
      'https://bitforum.blog/wp-json/wp/v2/posts?categories=2',
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { message: '미국 증시 뉴스 로딩 실패' },
        { status: response.status }
      )
    }

    const json = await response.json()
    return NextResponse.json(json, { status: 200 })
  } catch (error) {
    console.error('Error fetching US Stock news:', error)
    return NextResponse.json(
      { message: '서버 오류: 미국 증시 뉴스 로딩 중' },
      { status: 500 }
    )
  }
}

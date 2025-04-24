'use client';

export function NewsSourceList() {
    const sources = [
        '연합뉴스', '코인데스크', '코인니스', '비트코인저널',
        '99bitcoins(KOR)', '블록스트리트', '파이낸셜주스(ENG)'
    ];

    return (
        <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold mb-3">뉴스출처 바로가기</h3>
            <ul className="space-y-1 text-sm text-gray-600">
                {sources.map((src, idx) => (
                    <li key={idx}>• {src}</li>
                ))}
            </ul>
        </div>
    );
}
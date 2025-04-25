export function RisingTopics() {
    const topics = [
        "비트코인 준비통화 도입, 일본도 나설까?",
        "9만 달러 넘은 비트코인, 랠리 지속될까?",
        "폴가닷 ETF 승인 또 연기...",
        "트럼프 발언에 위험 자산 급등...",
        "아담 백 “올해 최소 50만 달러 본다”",
    ];

    return (
        <ul className="text-sm space-y-2">
            {topics.map((t, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                    {i + 1}. {t}
                </li>
            ))}
        </ul>
    );
}
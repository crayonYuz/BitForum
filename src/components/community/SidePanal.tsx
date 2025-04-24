const important = ["해외, 암호화폐를 찾는 '백도어'들...", "비트코인, 지금 사야 하나?", "XRP ETF의 등장", "레포트 많이 놀라준거 같긴 해", "오늘도 상승 갑니다~~"]
const concern = ["미중관세안? 쌍방은 아님", "단기 반등하고 또 조정?", "날씨가 증시네요", "트럼프 디너 관련 걱정", "이더리움 가격 흐름 빠르게 체감 중"]

export const SidePanel = () => {
    return (
        <div className="w-full lg:w-64 flex flex-col gap-6">
            <PanelList title="🔥 중요해요" items={important} />
            <PanelList title="😟 걱정돼요" items={concern} />
        </div>
    )
}

const PanelList = ({ title, items }: { title: string; items: string[] }) => (
    <div className="bg-muted p-4 rounded-md">
        <div className="font-semibold mb-2">{title}</div>
        <ul className="space-y-1 text-sm text-muted-foreground">
            {items.map((item, idx) => (
                <li key={idx}>{idx + 1}. {item}</li>
            ))}
        </ul>
    </div>
)
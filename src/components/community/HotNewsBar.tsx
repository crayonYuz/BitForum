export const HotNewsBar = () => {
    const items = [
      "⚡ 비트코인 강세장 시작",
      "⚡ 상승장 시작",
      "⚡ 비트코인 백만 달러 가능성"
    ]
  
    return (
      <div className="flex gap-4 overflow-x-auto">
        {items.map((item, idx) => (
          <div key={idx} className="bg-muted px-4 py-2 rounded-md text-sm whitespace-nowrap">{item}</div>
        ))}
      </div>
    )
  }
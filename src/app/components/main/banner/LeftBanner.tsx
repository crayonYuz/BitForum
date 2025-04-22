import { Card } from "antd";

export function LeftBanner() {
    return (
      <div className="w-[200px] space-y-4">
        <Card className="p-4 text-sm">
          <div className="font-semibold mb-2">프로모션</div>
          <ul className="list-disc pl-4 space-y-1">
            <li>레퍼럴 가입 혜택</li>
            <li>첫 거래소 가입 이벤트</li>
          </ul>
        </Card>
      </div>
    );
  }
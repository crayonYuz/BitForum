import { Card } from "antd";

export function LeftBanner() {
  return (
    <div className="w-[240px] ml-10 space-y-4 pt-12 hidden lg:block">
      <Card className="p-4 text-sm">
        <div className="font-semibold mb-2">프로모션</div>
        <ul className="list-disc pl-4 space-y-1">
          <li>레퍼럴 가입 혜택</li>
          <li>첫 거래소 가입 이벤트</li>
        </ul>
      </Card>

      <Card className="h-[120px] flex items-center justify-center text-gray-500">
        광고 배너 자리
      </Card>
    </div>
  );
}
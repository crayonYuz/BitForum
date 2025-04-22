export function CoinTableHeader() {
    return (
      <div className="grid grid-cols-3 text-sm text-gray-500 font-medium border-b pb-2">
        <div>이름</div>
        <div className="text-right">가격(KRW)</div>
        <div className="text-right">24시간(%)</div>
      </div>
    );
  }
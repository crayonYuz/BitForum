export function CoinTableHeader() {
    return (
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr_1fr_1fr] py-2 px-4 text-xs text-muted-foreground border-b bg-background font-semibold">
            <div className="text-right mr-20">#</div>
            <div>코인명</div>
            <div className="text-right">현재가</div>
            <div className="text-right">1H</div>
            <div className="text-right">24H</div>
            <div className="text-right">7D</div>
            <div className="text-right">거래대금</div>
            <div className="text-right">시가총액</div>
        </div>
    );
}
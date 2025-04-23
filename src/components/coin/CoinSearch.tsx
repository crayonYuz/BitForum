import { Input } from "@/components/ui/input";

export function CoinSearch({ onChange }: { onChange: (value: string) => void }) {
    return (
        <div className="mb-4 px-4">
            <Input
                type="text"
                placeholder="코인명 또는 심볼을 검색해주세요"
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

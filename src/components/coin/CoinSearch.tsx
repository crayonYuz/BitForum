import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function CoinSearch({ onChange }: { onChange: (value: string) => void }) {
    return (
        <div className="mb-4 px-4 max-w-md">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                    type="text"
                    placeholder="코인명 또는 심볼을 검색해주세요"
                    onChange={(e) => onChange(e.target.value)}
                    className={cn("pl-9", "text-sm", "rounded-4xl")}
                />
            </div>
        </div>
    );
}
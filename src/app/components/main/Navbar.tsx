import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="w-full border-b bg-blue-600 text-white text-bold px-4 pu-2 flex items-center justify-between">
            <div className="flex-xl font-bold">비트포럼</div>
            <nav className="flex justify-center flex-1 gap-4">
                <Button variant="ghost"
                    className="text-white hover:bg-transparent hover:text-gray-200">홈</Button>
                <Button variant="ghost"
                    className="text-white hover:bg-transparent hover:text-gray-200">뉴스</Button>
                <Button variant="ghost"
                    className="text-white hover:bg-transparent hover:text-gray-200">코인정보</Button>
                <Button variant="ghost"
                    className="text-white hover:bg-transparent hover:text-gray-200">스케쥴</Button>
                <Button variant="ghost"
                    className="text-white hover:bg-transparent hover:text-gray-200">로그인</Button>
            </nav>
        </header>
    )
}
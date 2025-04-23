import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="w-full h-12 border-b bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
            <Link href="/" passHref>
                <div className="flex-xl font-bold">비트포럼</div>
            </Link>
            <nav className="flex justify-center flex-1 gap-4">
                <Link href="/" passHref>
                    <Button variant="ghost" className="text-white font-bold hover:bg-transparent hover:text-gray-200 cursor-pointer">홈</Button>
                </Link>
                <Link href="/news" passHref>
                    <Button variant="ghost" className="text-white font-bold hover:bg-transparent hover:text-gray-200 cursor-pointer">뉴스</Button>
                </Link>
                <Link href="/coin-info" passHref>
                    <Button variant="ghost" className="text-white font-bold hover:bg-transparent hover:text-gray-200 cursor-pointer">코인정보</Button>
                </Link>
                <Link href="/schedule" passHref>
                    <Button variant="ghost" className="text-white font-bold hover:bg-transparent hover:text-gray-200 cursor-pointer">스케쥴</Button>
                </Link>
                <Link href="/login" passHref>
                    <Button variant="ghost" className="text-white font-bold hover:bg-transparent hover:text-gray-200 cursor-pointer">로그인</Button>
                </Link>
            </nav>
        </header>
    )
}
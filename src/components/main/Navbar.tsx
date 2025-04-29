'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <header className="w-full h-14 border-b bg-white text-black px-4 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-6">
                <Link href="/" passHref>
                    <div className="text-xl font-bold text-blue-600">비트포럼</div>
                </Link>
                <nav className="flex gap-4 mx-auto">
                    <Link href="/" passHref>
                        <Button
                            variant="ghost"
                            className={`text-base cursor-pointer ${pathname === "/" ? "text-blue-600" : "text-gray-500"} hover:bg-transparent hover:text-blue-600`}
                        >
                            홈
                        </Button>
                    </Link>
                    <Link href="/news" passHref>
                        <Button
                            variant="ghost"
                            className={`text-base cursor-pointer ${pathname === "/news" ? "text-blue-600" : "text-gray-500"} hover:bg-transparent hover:text-blue-600`}
                        >
                            뉴스
                        </Button>
                    </Link>
                    <Link href="/community" passHref>
                        <Button
                            variant="ghost"
                            className={`text-base cursor-pointer ${pathname === "/community" ? "text-blue-600" : "text-gray-500"} hover:bg-transparent hover:text-blue-600`}
                        >
                            커뮤니티
                        </Button>
                    </Link>
                    <Link href="/coin-info" passHref>
                        <Button
                            variant="ghost"
                            className={`text-base cursor-pointer ${pathname === "/coin-info" ? "text-blue-600" : "text-gray-500"} hover:bg-transparent hover:text-blue-600`}
                        >
                            코인정보
                        </Button>
                    </Link>
                    <Link href="/schedule" passHref>
                        <Button
                            variant="ghost"
                            className={`text-base cursor-pointer ${pathname === "/schedule" ? "text-blue-600" : "text-gray-500"} hover:bg-transparent hover:text-blue-600`}
                        >
                            스케쥴
                        </Button>
                    </Link>
                </nav>
            </div>

            <div>
                {!session ? (
                    <Link href="/login" passHref>
                        <Button
                            variant="ghost"
                            className={`text-base cursor-pointer ${pathname === "/login" ? "text-blue-600" : "text-gray-500"} hover:bg-transparent hover:text-blue-600`}
                        >
                            로그인
                        </Button>
                    </Link>
                ) : (
                    <Button
                        variant="ghost"
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className={`text-base cursor-pointer text-gray-500 hover:bg-transparent hover:text-blue-600`}
                    >
                        로그아웃
                    </Button>
                )}
            </div>
        </header>
    );
}
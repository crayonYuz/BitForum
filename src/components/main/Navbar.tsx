'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
    HomeIcon, NewspaperIcon, UsersIcon,
    CircleDollarSignIcon, CalendarIcon,
} from "lucide-react";

const navItems = [
    { href: "/", label: "홈", icon: <HomeIcon className="w-5 h-5" /> },
    { href: "/news", label: "뉴스", icon: <NewspaperIcon className="w-5 h-5" /> },
    { href: "/community", label: "커뮤니티", icon: <UsersIcon className="w-5 h-5" /> },
    { href: "/coin-info", label: "코인정보", icon: <CircleDollarSignIcon className="w-5 h-5" /> },
    { href: "/schedule", label: "스케쥴", icon: <CalendarIcon className="w-5 h-5" /> },
];

export function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();

    const isActive = (href: string) =>
        href === "/" ? pathname === href : pathname.startsWith(href);

    return (
        <>
            <header className="flex w-full h-14 border-b bg-white text-black px-4 py-2 items-center justify-between fixed top-0 left-0 right-0 z-50">
                <div className="flex items-center gap-6">
                    <Link href="/">
                        <img src="/bitforum.svg" alt="비트포럼 로고" width={130} />
                    </Link>
                    <nav className="hidden md:flex gap-4">
                        {navItems.map(({ href, label }) => (
                            <Link key={href} href={href}>
                                <Button
                                    variant="ghost"
                                    className={`text-md font-bold ${isActive(href) ? "text-blue-600" : "text-gray-500"
                                        } hover:bg-transparent hover:text-blue-600 cursor-pointer`}
                                >
                                    {label}
                                </Button>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-2">
                    {session && (
                        <Link href="/writing" className="hidden md:block">
                            <Button className="bg-blue-600 text-white rounded-md px-5 py-2 text-sm font-semibold hover:bg-blue-700 cursor-pointer">
                                글쓰기
                            </Button>
                        </Link>
                    )}
                    {!session ? (
                        <Link href="/login">
                            <Button variant="ghost" className="text-md font-bold text-gray-500 hover:text-blue-600 cursor-pointer">
                                로그인
                            </Button>
                        </Link>
                    ) : (
                        <Button
                            variant="ghost"
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="text-md font-bold text-gray-500 hover:text-blue-600 cursor-pointer"
                        >
                            로그아웃
                        </Button>
                    )}
                </div>
            </header>

            <nav className="fixed bottom-0 left-0 right-0 mt-10 bg-white border-t shadow-md flex justify-around items-center h-14 md:hidden z-50">
                {navItems.map(({ href, label, icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`flex flex-col items-center text-xs ${isActive(href) ? "text-blue-600 font-semibold" : "text-gray-600"
                            } hover:text-blue-600`}
                    >
                        {icon}
                        <span className="text-[11px]">{label}</span>
                    </Link>
                ))}
            </nav>
        </>
    );
}
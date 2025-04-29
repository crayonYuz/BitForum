'use client'

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useSession, signIn } from 'next-auth/react';
import { MessageCircleMore, Speech, Chrome } from 'lucide-react';
import { Navbar } from '@/components/main/Navbar';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push('/');
        }
    }, [session, router]);

    if (session) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <main className="flex justify-center items-center min-h-screen pt-14 bg-white px-4">
                <div className="w-full max-w-md space-y-6 text-center">
                    <div>
                        <h1 className="text-2xl font-bold">코인 선물 거래의 시작 <br /> 코인포럼에 오신 것을 환영합니다</h1>
                        <p className="text-gray-500 text-sm mt-1">코인포럼은 코인거래 초보자들을 위한 <br />다양한 정보와 뉴스를 제공해드립니다</p>
                    </div>

                    <div className="space-y-3">
                        <Button
                            variant="outline"
                            className="w-full bg-yellow-400 text-black hover:bg-yellow-300 cursor-pointer"
                            onClick={() => signIn('kakao')}
                        >
                            <MessageCircleMore className="mr-2 w-4 h-4" /> 카카오로 로그인
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full bg-green-500 text-white hover:bg-green-400 cursor-pointer"
                            onClick={() => signIn('naver')}
                        >
                            <Speech className="mr-2 w-4 h-4" /> 네이버로 로그인
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full bg-white text-black border hover:bg-gray-100 cursor-pointer"
                            onClick={() => signIn('google')}
                        >
                            <Chrome className="mr-2 w-4 h-4" /> 구글로 로그인
                        </Button>
                    </div>
                </div>
            </main>
        </>
    );
}
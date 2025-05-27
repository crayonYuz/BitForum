'use client'

import { Suspense, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useSession, signIn } from 'next-auth/react';
import { MessageCircleMore, Speech } from 'lucide-react';
import { Navbar } from '@/components/main/Navbar';
import { useRouter, useSearchParams } from 'next/navigation';
import { GoogleLoginButton } from '@/components/auth/GoogleLoginButton';

function LoginPage() {
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
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
                    {error === 'OAuthAccountNotLinked' && (
                        <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-md text-sm whitespace-pre-line">
                            이미 동일한 이메일로 가입된 계정이 있습니다. <br /> 기존 계정으로 로그인한 후 소셜 계정을 연결하세요.
                        </div>
                    )}
                    <div>
                        <h1 className="text-2xl font-bold">코인 선물 거래의 시작 <br /> 비트포럼에 오신 것을 환영합니다</h1>
                        <p className="text-gray-500 text-sm mt-1">비트포럼은 코인거래 초보자들을 위한 <br />다양한 정보와 뉴스를 제공해드립니다</p>
                    </div>

                    <div className="space-y-3">
                        <Button
                            variant="outline"
                            className="mx-auto w-4/5 bg-yellow-400 text-black hover:bg-yellow-300 h-12 cursor-pointer"
                            onClick={() => signIn('kakao')}
                        >
                            <MessageCircleMore className="mr-2 w-4 h-4" /> 카카오로 로그인
                        </Button>
                        <Button
                            variant="outline"
                            className="mx-auto w-4/5 bg-green-500 text-white hover:bg-green-400 h-12 cursor-pointer"
                            onClick={() => signIn('naver')}
                        >
                            <Speech className="mr-2 w-4 h-4" /> 네이버로 로그인
                        </Button>
                        <GoogleLoginButton />
                    </div>
                </div>
            </main>
        </>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div className="p-4 text-center">로딩 중...</div>}>
            <LoginPage />
        </Suspense>
    );
}

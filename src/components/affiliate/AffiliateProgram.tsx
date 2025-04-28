export function AffiliateProgram() {
    return (
        <section className="mb-6">
            <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                <h2 className="text-2xl font-bold">제휴 프로그램 참여하고 혜택 받기!</h2>
                <p>특별한 혜택을 원하시면 아래 링크를 통해 가입하세요!</p>
                <a
                    href="/affiliated"
                    className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded"
                >
                    지금 가입하기
                </a>
            </div>
        </section>
    );
}
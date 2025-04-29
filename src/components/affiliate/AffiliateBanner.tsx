export function AffiliateBanner() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">추천 상품</h3>
            <p className="text-sm text-gray-600">최고의 코인 투자 서비스를 경험해 보세요!</p>
            <a
                href="https://example.com/affiliate-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
                지금 바로 가입하기
            </a>
        </div>
    );
}
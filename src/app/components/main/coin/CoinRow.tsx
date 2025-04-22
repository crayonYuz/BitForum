import Link from 'next/link';

interface CoinRowProps {
    id: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
}

export function CoinRow({
    id,
    name,
    image,
    current_price,
    price_change_percentage_24h,
}: CoinRowProps) {
    return (
        <li>
            <Link href={`/coins/${id}`}>
                <div className="grid grid-cols-3 items-center py-2 text-sm hover:bg-gray-100 transition rounded cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <img src={image} alt={name} className="w-5 h-5" />
                        <span>{name}</span>
                    </div>
                    <div className="text-right text-red-500">
                        ₩{current_price.toLocaleString()}
                    </div>
                    <div
                        className={`text-right ${price_change_percentage_24h >= 0 ? 'text-red-500' : 'text-blue-500'
                            }`}
                    >
                        {price_change_percentage_24h.toFixed(2)}%
                    </div>
                </div>
            </Link>
        </li>
    );
}
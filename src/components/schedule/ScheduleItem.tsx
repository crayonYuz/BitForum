export function ScheduleItem({
    date,
    day,
    label,
    text,
    highlight = false,
}: {
    date: string;
    day: string;
    label: string;
    text: string;
    highlight?: boolean;
}) {
    const labelColors: Record<string, string> = {
        경제: "bg-red-100 text-red-600",
        거래소: "bg-blue-100 text-blue-600",
        암호화폐: "bg-green-100 text-green-600",
    };

    return (
        <div className="flex items-start space-x-4">
            <div className="text-center w-16">
                <div className="text-xl font-bold">{date}</div>
                <div className="text-sm text-gray-500">{day}</div>
            </div>
            <div
                className={`flex-1 p-4 rounded-md border ${highlight ? "bg-red-50 border-red-300" : "bg-gray-50 border-gray-200"
                    }`}
            >
                <div className={`inline-block px-2 py-1 text-xs rounded ${labelColors[label]}`}>
                    #{label}
                </div>
                <div className="mt-2 text-sm">{text}</div>
            </div>
        </div>
    );
}
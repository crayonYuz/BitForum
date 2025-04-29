const LABEL_COLORS: Record<string, string> = {
    경제: 'bg-red-100 text-red-600',
    거래소: 'bg-blue-100 text-blue-600',
    암호화폐: 'bg-green-100 text-green-600',
    기타: 'bg-gray-100 text-gray-600',
};

export function ScheduleLabelBadge({ label }: { label: string }) {
    const colorClass = LABEL_COLORS[label] || LABEL_COLORS['기타'];

    return (
        <span className={`inline-block px-2 py-1 text-xs rounded ${colorClass}`}>
            #{label}
        </span>
    );
}
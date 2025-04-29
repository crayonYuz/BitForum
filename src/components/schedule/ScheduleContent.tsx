import { ScheduleLabelBadge } from "./ScheduleLabelBadge";

export function ScheduleContent({
    label,
    text,
    highlight,
}: {
    label: string;
    text: string;
    highlight: boolean;
}) {
    return (
        <div
            className={`flex-1 p-4 rounded-md border transition-all duration-300 ${highlight
                ? 'bg-red-50 border-red-300'
                : 'bg-gray-50 border-gray-200'
                }`}
        >
            <ScheduleLabelBadge label={label} />
            <div className="mt-2 text-sm">{text}</div>
        </div>
    );
}
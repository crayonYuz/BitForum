'use client';

import { ScheduleContent } from './ScheduleContent';

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
    return (
        <div className="flex items-start space-x-4">
            <div className="text-center w-16">
                <div className="text-xl font-bold">{date}</div>
                <div className="text-sm text-gray-500">{day}</div>
            </div>

            <ScheduleContent label={label} text={text} highlight={highlight} />
        </div>
    );
}
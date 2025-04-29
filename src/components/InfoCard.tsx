import { ReactNode } from "react";

export function InfoCard({
    title,
    description,
}: {
    title: string;
    description: ReactNode;
}) {
    return (
        <div className="border rounded overflow-hidden p-4 shadow-sm bg-white">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
}
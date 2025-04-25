export function InfoCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="border rounded p-4 shadow-sm bg-white">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
}
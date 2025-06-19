export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="pb-3">
            <h2 className="text-2xl font-bold border-gray-200">{title}</h2>
            {subtitle && (
                <p className="text-md text-gray-500">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
export function SectionTitle({ title, subtitle }: { title: string, subtitle?: string }) {
    return (
        <h2 className="text-xl font-semibold pb-1 border-gray-200">
            {title}
        </h2>
    );
}
export function SectionTitle({ title }: { title: string }) {
    return (
        <h2 className="text-xl font-semibold pb-1 border-gray-200">
            {title}
        </h2>
    );
}
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Props {
    title: string;
    summary: string;
    date: string;
    category: string;
}

export function NewsCard({ title, summary, date }: Props) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{summary}</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-gray-400">{date}</CardContent>
        </Card>
    );
}
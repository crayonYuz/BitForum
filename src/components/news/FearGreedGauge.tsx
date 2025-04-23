import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FearGreedGauge() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>공포탐욕지수</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <div className="text-3xl text-yellow-500">47</div>
                <div className="text-sm text-muted-foreground">Last week: Neutral</div>
            </CardContent>
        </Card>
    );
}
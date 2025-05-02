'use client'

import { useEffect, useRef } from 'react';

export function TradingViewChart({ symbol }: { symbol: string }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            // @ts-ignore
            new window.TradingView.widget({
                width: '100%',
                height: 500,
                symbol: `UPBIT:${symbol}`,
                interval: 'D',
                timezone: 'Asia/Seoul',
                theme: 'light',
                style: '1',
                locale: 'kr',
                container_id: 'tv_chart_container',
            });
        };

        ref.current.appendChild(script);
    }, [symbol]);

    return <div id="tv_chart_container" ref={ref}></div>;
}
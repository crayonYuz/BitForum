'use client';

import type { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';

import { ReactQueryProvider } from './ReactQueryProvider';
import { SessionProvider } from 'next-auth/react';

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <ConfigProvider>
        <StyleProvider hashPriority="high">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </StyleProvider>
      </ConfigProvider>
    </SessionProvider>
  );
}

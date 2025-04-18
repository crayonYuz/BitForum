'use client';

import type {ReactNode} from 'react';
import {ConfigProvider} from 'antd';
import {StyleProvider} from '@ant-design/cssinjs';

import {ReactQueryProvider} from './ReactQueryProvider';

interface Props {
  children: ReactNode;
}

export function Providers({children}: Props) {
  return (
    <ConfigProvider>
      <StyleProvider hashPriority="high">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </StyleProvider>
    </ConfigProvider>
  );
}

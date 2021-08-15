import React from 'react';
import { withRouter } from 'umi';
import BaseLayout from './BaseLayout';
import { UmiComponentProps } from '@/common/type';

// 全局iconfont Symbol类
// import '../../public/fonts/iconfont.js';

interface LayoutProps extends UmiComponentProps {}

const Layout = (props: LayoutProps) => {
  const { children, ...options } = props;
  return <BaseLayout {...options}>{children}</BaseLayout>;
};

export default withRouter(Layout);

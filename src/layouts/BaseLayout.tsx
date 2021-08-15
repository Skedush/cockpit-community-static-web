import React, { PureComponent, Fragment } from 'react';
import { connect } from '@/utils/decorators';
import { Helmet } from 'react-helmet';
import { withRouter } from 'umi';
// import { Loader } from 'components';
import { router } from '@/utils';
import NProgress from 'nprogress';
import config from '@/utils/config';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { GlobalState, UmiComponentProps } from '@/common/type';
import 'moment/locale/zh-cn';

import PublicLayout from './PublicLayout';
import './BaseLayout.less';

const LayoutMap = {
  public: PublicLayout,
};

const mapStateToProps = ({ loading }: GlobalState) => ({
  loading,
});

type props = ReturnType<typeof mapStateToProps>;

interface BaseLayoutProps extends UmiComponentProps, props {}

@connect(mapStateToProps, null)
class BaseLayout extends PureComponent<BaseLayoutProps> {
  previousPath: string;

  constructor(props) {
    super(props);

    this.previousPath = '';
  }

  componentDidCatch(_error: Error, errorInfo: React.ErrorInfo) {
    // 环境判断，如果在开发环境下（NODE_ENV为development）,不跳转到500页面
    if (process.env.NODE_ENV !== 'development') {
      // 跳转到500页面
      router.push('/exception/500');
    }
  }

  render() {
    const { children, location, loading } = this.props;
    const Container = LayoutMap['public'];

    const currentPath = location.pathname + location.search;
    if (currentPath !== this.previousPath) {
      NProgress.start();
    }

    if (!loading.global) {
      NProgress.done();
      this.previousPath = currentPath;
    }

    return (
      <ConfigProvider locale={zhCN}>
        <Fragment>
          <Helmet>
            <title>{config.siteName}</title>
          </Helmet>
          <Container>{children}</Container>
        </Fragment>
      </ConfigProvider>
    );
  }
}

export default withRouter(BaseLayout);

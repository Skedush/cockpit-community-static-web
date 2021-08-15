import React, { PureComponent } from 'react';
import { Button, Result } from '@lidig/web-ui';
import { RouteComponentProps } from 'react-router';
import { router } from '@/utils';

interface RouterParams {
  code?: '403' | '404' | '500';
}

interface ExceptionProps extends RouteComponentProps<RouterParams> {}

class MyException extends PureComponent<ExceptionProps> {
  renderAction = () => {
    return (
      <div>
        <Button customtype={'primary'} onClick={this.onBack}>
          返回首页
        </Button>
      </div>
    );
  };

  render() {
    const {
      match: { params },
    } = this.props;
    const subTitle =
      params.code === '500' ? '系统出错，请联系管理员' : '页面未找到';
    return (
      <Result
        status={params.code || '404'}
        title={params.code || '404'}
        subTitle={subTitle}
        extra={this.renderAction()}
      />
    );
  }

  onBack = () => {
    router.push('/');
  };
}

export default MyException;

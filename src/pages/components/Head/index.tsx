import React, { useEffect } from 'react';
import { GlobalState } from '@/common/type';
import { useDispatch, useSelector, Dispatch } from 'umi';
import classNames from 'classnames';
import styles from './index.less';

type HeadProps = {};

const Head = (props: HeadProps) => {
  const dispatch: Dispatch = useDispatch();
  const { test } = useSelector(({ app: { test } }: GlobalState) => {
    return {
      test,
    };
  });

  useEffect(() => {}, []);

  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.title)}>社会治安防控体系驾驶舱</div>
    </div>
  );
};

export default Head;

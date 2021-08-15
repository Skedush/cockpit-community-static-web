import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './index.less';

type SubTitleProps = { title: string };

const SubTitle = (props: SubTitleProps) => {
  const { title } = props;

  useEffect(() => {}, []);

  return (
    <div className={classNames(styles.container, 'flexStart', 'itemCenter')}>
      <div className={styles.block}></div>
      {title}
    </div>
  );
};

export default SubTitle;

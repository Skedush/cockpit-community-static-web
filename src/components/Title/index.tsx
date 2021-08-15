import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './index.less';

type TitleProps = { title: string };

const Title = (props: TitleProps) => {
  const { title } = props;

  useEffect(() => {}, []);

  return (
    <div className={classNames(styles.container)}>
      {title}
      <div className={styles.line}></div>
    </div>
  );
};

export default Title;

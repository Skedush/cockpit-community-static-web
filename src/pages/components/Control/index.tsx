import React, { useEffect } from 'react';
import { GlobalState } from '@/common/type';
import { useDispatch, useSelector, Dispatch } from 'umi';
import classNames from 'classnames';
import styles from './index.less';
import { VIEW_DATA } from '@/utils/constant';

type ControlProps = {
  view: string;
  setView: Function;
};

const Control = (props: ControlProps) => {
  const { view, setView } = props;
  const dispatch: Dispatch = useDispatch();
  const { test } = useSelector(({ app: { test } }: GlobalState) => {
    return {
      test,
    };
  });

  useEffect(() => {}, []);

  return (
    <div
      className={classNames(styles.container, 'flexColCenter', 'itemCenter')}
    >
      <div
        className={classNames(
          'flexAround',
          styles.controlBtnGroup,
          'itemCenter',
        )}
      >
        <div
          className={classNames(
            view === VIEW_DATA.UNIT
              ? styles.btnSelected
              : [styles.btn, styles.rectangleOut],
            'flexCenter',
            'itemCenter',
          )}
          onClick={() => setView(VIEW_DATA.UNIT)}
        >
          单元防控
        </div>
        <div
          className={classNames(
            view === VIEW_DATA.STANDARD
              ? styles.btnSelected
              : [styles.btn, styles.rectangleOut],
            'flexCenter',
            'itemCenter',
          )}
          onClick={() => setView(VIEW_DATA.STANDARD)}
        >
          {' '}
          要素管控
        </div>
        <div
          className={classNames(
            view === VIEW_DATA.SURVEILLANCE
              ? styles.btnSelected
              : [styles.btn, styles.rectangleOut],
            'flexCenter',
            'itemCenter',
          )}
          onClick={() => setView(VIEW_DATA.SURVEILLANCE)}
        >
          {' '}
          圈层查控
        </div>
      </div>
    </div>
  );
};

export default Control;

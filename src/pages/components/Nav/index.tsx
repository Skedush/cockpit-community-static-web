import React, { useEffect, useState } from 'react';
import { GlobalState } from '@/common/type';
import { useDispatch, useSelector, Dispatch } from 'umi';
import classNames from 'classnames';
import { VIEW_DATA } from '@/utils/constant';
import usePrevious from '@/utils/usePrevious';
import styles from './index.less';
import 'animate.css/animate.compat.css';

import ditiegongjiao from '@/assets/images/ditiegongjiao.png';
import wangyuefang from '@/assets/images/wangyuefang.png';
import industryControl from '@/assets/images/industryControl.png';
import smartCommunity from '@/assets/images/smartCommunity.png';
import smartStreet from '@/assets/images/smartStreet.png';
import zhihuineibao from '@/assets/images/zhihuineibao.png';

import weibaoguankong from '@/assets/images/weibaoguankong.png';
import yibiaosanshi from '@/assets/images/yibiaosanshi.png';
import zhihuibaoan from '@/assets/images/zhihuibaoan.png';

import zhihuijianchazhan from '@/assets/images/zhihuijianchazhan.png';

type NavProps = {
  view: string;
};

const Nav = (props: NavProps) => {
  const [animatedFlag, setAnimatedFlag] = useState<boolean>(false);

  const dispatch: Dispatch = useDispatch();
  const { test } = useSelector(({ app: { test } }: GlobalState) => {
    return {
      test,
    };
  });
  const preView = usePrevious(props.view);

  const { view } = props;

  useEffect(() => {
    setAnimatedFlag(!animatedFlag);
  }, [props.view]);

  const unitNavs = [
    {
      name: '行业管理',
      icon: industryControl,
      url: 'http://10.118.2.27:8090/zjylcs/login',
    },
    { name: '智安小区', icon: smartCommunity, url: '' },
    { name: '智慧街面', icon: smartStreet, url: '' },
    { name: '智慧内保', icon: zhihuineibao, url: '' },
    { name: '地铁公交', icon: ditiegongjiao, url: '' },
    { name: '网约房', icon: wangyuefang, url: 'http://41.212.2.136:2021/#' },
  ];

  const standardNavs = [
    {
      name: '一标三实',
      icon: yibiaosanshi,
      url: 'http://41.212.2.131:18080/pzwz/login',
    },
    {
      name: '危爆管控',
      icon: weibaoguankong,
      url: 'http://41.190.16.195:8001/login',
    },
    { name: '智慧保安', icon: zhihuibaoan, url: 'http://41.190.1.13/#/login' },
  ];
  const surveillanceNavs = [
    { name: '智慧检测站', icon: zhihuijianchazhan, url: '' },
  ];

  const navs =
    view === VIEW_DATA.UNIT
      ? unitNavs
      : view === VIEW_DATA.STANDARD
      ? standardNavs
      : surveillanceNavs;

  const navNewWindow = (url) => {
    window.open(url);
  };

  return (
    <div className={classNames(styles.container, 'flexCenter', 'itemCenter')}>
      {navs.map((item, index) => (
        <div
          key={index}
          className={classNames(
            'flexColCenter',
            'itemCenter',
            styles.navBtn,
            { [styles.zoomIn]: animatedFlag },
            { [styles.zoomIn2]: !animatedFlag },
          )}
          onClick={() => navNewWindow(item.url)}
        >
          <img src={item.icon} />
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Nav;

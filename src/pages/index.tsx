import React, { useEffect, useState } from 'react';
import { GlobalState } from '@/common/type';
import { useDispatch, useSelector, Dispatch } from 'umi';
import classNames from 'classnames';
import { VIEW_DATA } from '@/utils/constant';
import styles from './index.less';
import Head from './components/Head';
import Lottie from 'react-lottie';
import UnitLeft from './components/UnitLeft';
import UnitRight from './components/UnitRight';
// 一标三实左侧
import StandardLeft from './components/StandardLeft';
// 一标三实右侧
import StandardRight from './components/StandardRight';
// 圈层查控左侧
import SurveillanceLeft from './components/SurveillanceLeft';
// 圈层查控右侧
import SurveillanceRight from './components/SurveillanceRight';
import Control from './components/Control';
import Nav from './components/Nav';

type HomeProps = {};

const Home = (props: HomeProps) => {
  const [view, setView] = useState(VIEW_DATA.UNIT);
  const dispatch: Dispatch = useDispatch();
  const { data } = useSelector(({ app: { data } }: GlobalState) => {
    return {
      data,
    };
  });
  const payload = [
    // 一标三实
    {
      systemCode: 'jcjc_ybss',
      metricCode: [
        'pcszs',
        'jwszs',
        'pcsmjzs',
        'sqmjzs',
        'zxjszahzzs',
        'jwzlzs',
        'qywdzs',
        'qyjyzzs',
        'fjzs',
        'llszs',
        'lldzs',
        'sqcjzs',
        'dzfdpcdhjzs',
        'bwjjqwjzs',
        'qywds',
        'kyzzs',
        'qfqzzzryzs',
        'jwzlzss',
      ],
    },
    // 治安小区
    {
      systemCode: 'jcjc_zaxq',
      metricCode: [
        'syxq',
        'syrk',
        'syfw',
        'sycl',
        'zhry',
        'czf',
        'wdcl',
        'sysb',
        'cjsj',
        'mrcjsj',
      ],
    },
    // 智慧街面
    {
      systemCode: 'qzzx_zhjm',
      metricCode: [
        'bjsj',
        'zfyzxsj',
        'jmzqmjzs',
        'jmzqfjzs',
        'jwzzs',
        'zqxlczs',
        'spjkdwzs',
      ],
    },
    // 智慧内保
    {
      systemCode: 'jcjc_zhnb',
      metricCode: [
        'zadwzs',
        'abryzs',
        'sysbzs',
        'cjsjzs',
        'mrcjsjzs',
        'hxgjsxyjs',
        'hxgzsryzs',
        'fkdjzs',
        'zabwzddwzs',
        'hxgjltrrcs',
        'suclzs',
      ],
    },
    // 地铁公交
    {
      systemCode: 'gjfj_dtgjfk',
      metricCode: ['dtcczrs', 'ctkyzrs', 'gjcczrs', 'ajgbs', 'wjpjcs'],
    },
    // 智慧检查站
    {
      systemCode: 'tjzd_jcz',
      metricCode: [
        'jczzs',
        'ckkzzs',
        'ydjczzs',
        'drgjcztcsl',
        'drgjczhccls',
        'drgjczrlbds',
        'drqstczs',
        'drqsjcclzs',
        'drqsrlbdzs',
      ],
    },
  ];

  useEffect(() => {
    dispatch({
      type: 'app/getData',
      payload: payload,
    });
  }, [view]);

  return (
    <div className={classNames('height100', 'width100', styles.container)}>
      <Head />

      <UnitLeft
        className={
          view === VIEW_DATA.UNIT ? styles.slideInLeft : styles.slideOutLeft
        }
        data={data}
      />
      <UnitRight
        data={data}
        className={
          view === VIEW_DATA.UNIT ? styles.slideInRight : styles.slideOutRight
        }
      />
      <StandardLeft
        className={
          view === VIEW_DATA.STANDARD ? styles.slideInLeft : styles.slideOutLeft
        }
        data={data}
      />
      <StandardRight
        data={data}
        className={
          view === VIEW_DATA.STANDARD
            ? styles.slideInRight
            : styles.slideOutRight
        }
      />
      <SurveillanceLeft
        className={
          view === VIEW_DATA.SURVEILLANCE
            ? styles.slideInLeft
            : styles.slideOutLeft
        }
        data={data}
      />
      <SurveillanceRight
        className={
          view === VIEW_DATA.SURVEILLANCE
            ? styles.slideInRight
            : styles.slideOutRight
        }
        data={data}
      />
      <div className={styles.aeCenterBox}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            path: '/ae/city/data.json',
          }}
          isClickToPauseDisabled
          className={styles.aeCenter}
        />
      </div>

      <Nav view={view} />
      <Control view={view} setView={setView} />
    </div>
  );
};

export default Home;

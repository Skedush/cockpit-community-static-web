import React from 'react';
import { judgeLevels } from '@/utils';
import classNames from 'classnames';
import styles from './index.less';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import MultiplePieEcharts from '@/components/MultiplePieEcharts';
import BlockLineEcharts from '@/components/BlockLineEcharts';
import HistogramEcharts from '@/components/HistogramEcharts';

import auxiliaryPolice from '@/assets/images/auxiliaryPolice.png';
import dashboard from '@/assets/images/dashboard.png';
import monitor from '@/assets/images/monitor.png';
import police from '@/assets/images/police.png';
import policeCar from '@/assets/images/policeCar.png';
import policeStation from '@/assets/images/policeStation.png';

type UnitLeftProps = { className?: string; data: any };

const UnitLeft = (props: UnitLeftProps) => {
  const {
    className,
    // eslint-disable-next-line camelcase
    data: { jcjc_zaxq, qzzx_zhjm },
  } = props;

  return (
    <div className={classNames(styles.container, 'flexColStart', className)}>
      <div className={classNames(styles.baseData, 'flexColStart')}>
        <Title title={'治安小区'} />
        <SubTitle title={'基础数据'} />
        <MultiplePieEcharts
          arrName={[
            '租户人口/实有人口',
            '出租房屋/实有房屋',
            '外地车辆/实有车辆',
          ]}
          sum={jcjc_zaxq?.syxq?.currentNum}
          value={[
            jcjc_zaxq?.zhry?.currentNum,
            jcjc_zaxq?.czf?.currentNum,
            jcjc_zaxq?.wdcl?.currentNum,
          ]}
          count={[
            jcjc_zaxq?.syrk?.currentNum,
            jcjc_zaxq?.syfw?.currentNum,
            jcjc_zaxq?.sycl?.currentNum,
          ]}
        />
      </div>
      <div className={classNames(styles.deviceData, 'flexColStart')}>
        <SubTitle title={'设备数据'} />
        <div
          className={classNames(
            'flexAround',
            'itemCenter',
            styles.deviceInfo,
            'flexAuto',
          )}
        >
          <div
            className={classNames(
              'flexBetween',
              'itemCenter',
              styles.deviceItem,
            )}
          >
            <span>设备总数</span>
            <span className={styles.count}>
              {jcjc_zaxq?.sysb?.currentNum}个
            </span>
          </div>
          <div
            className={classNames(
              'flexBetween',
              'itemCenter',
              styles.deviceItem,
            )}
          >
            <span>采集设备总数</span>
            <span className={styles.count}>
              {judgeLevels(jcjc_zaxq?.cjsj?.currentNum)}条
            </span>
          </div>
        </div>
      </div>
      <div className={classNames(styles.collectionData, 'flexColStart')}>
        <SubTitle title={'每日采集数据'} />
        <BlockLineEcharts
          arrName={jcjc_zaxq?.mrcjsj?.category}
          value={jcjc_zaxq?.mrcjsj?.currentNum}
        />
      </div>
      <div className={classNames(styles.intelligenceData, 'flexColStart')}>
        <Title title={'智慧街面'} />
        <SubTitle title={'每日110报警数据'} />
        <HistogramEcharts
          arrName={qzzx_zhjm?.bjsj?.category}
          value={qzzx_zhjm?.bjsj?.currentNum}
        />
        <div className={classNames('flexBetween', 'itemCenter', 'flexWrap')}>
          <div
            className={classNames(
              styles.streetItem,
              'flexBetween',
              'itemCenter',
            )}
          >
            <div className={classNames('flexStart', 'itemCenter')}>
              <img src={dashboard} className={styles.icon} />
              <div className={styles.key}>执法仪在线</div>
            </div>
            <div className={styles.value}>{qzzx_zhjm?.zfyzxsj?.currentNum}</div>
          </div>
          <div
            className={classNames(
              styles.streetItem,
              'flexBetween',
              'itemCenter',
            )}
          >
            <div className={classNames('flexStart', 'itemCenter')}>
              <img src={policeStation} className={styles.icon} />
              <div className={styles.key}>警务站总数</div>
            </div>
            <div className={styles.value}>{qzzx_zhjm?.jwzzs?.currentNum}</div>
          </div>
          <div
            className={classNames(
              styles.streetItem,
              'flexBetween',
              'itemCenter',
            )}
          >
            <div className={classNames('flexStart', 'itemCenter')}>
              <img src={policeCar} className={styles.icon} />
              <div className={styles.key}>执勤巡逻车</div>
            </div>
            <div className={styles.value}>{qzzx_zhjm?.zqxlczs?.currentNum}</div>
          </div>
          <div
            className={classNames(
              styles.streetItem,
              'flexBetween',
              'itemCenter',
            )}
          >
            <div className={classNames('flexStart', 'itemCenter')}>
              <img src={police} className={styles.icon} />
              <div className={styles.key}>执勤民警</div>
            </div>
            <div className={styles.value}>
              {qzzx_zhjm?.jmzqmjzs?.currentNum}
            </div>
          </div>
          <div
            className={classNames(
              styles.streetItem,
              'flexBetween',
              'itemCenter',
            )}
          >
            <div className={classNames('flexStart', 'itemCenter')}>
              <img src={auxiliaryPolice} className={styles.icon} />
              <div className={styles.key}>执勤辅警</div>
            </div>
            <div className={styles.value}>
              {qzzx_zhjm?.jmzqfjzs?.currentNum}
            </div>
          </div>
          <div
            className={classNames(
              styles.streetItem,
              'flexBetween',
              'itemCenter',
            )}
          >
            <div className={classNames('flexStart', 'itemCenter')}>
              <img src={monitor} className={styles.icon} />
              <div className={styles.key}>视频监控点</div>
            </div>
            <div className={styles.value}>
              {qzzx_zhjm?.spjkdwzs?.currentNum}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitLeft;

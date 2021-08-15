/* eslint-disable camelcase */
import React from 'react';
import classNames from 'classnames';
import { judgeLevels } from '@/utils';
import styles from './index.less';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import BlockLineEcharts from '@/components/BlockLineEcharts';
import car from '@/assets/images/car.png';
import company from '@/assets/images/company.png';
import importantCompany from '@/assets/images/importantCompany.png';
import securityStaff from '@/assets/images/securityStaff.png';
import DashboardEcharts from '@/components/DashboardEcharts';

type UnitRightProps = { className?: string; data: any };

const UnitRight = (props: UnitRightProps) => {
  const {
    className,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data: { jcjc_zhnb, gjfj_dtgjfk },
  } = props;

  const baseData = [
    {
      key: '重点单位',
      value: jcjc_zhnb?.zabwzddwzs?.currentNum,
      icon: importantCompany,
    },
    { key: '智安单位', value: jcjc_zhnb?.zadwzs?.currentNum, icon: company },
    {
      key: '安保人员',
      value: jcjc_zhnb?.abryzs?.currentNum,
      icon: securityStaff,
    },
    { key: '实有车辆', value: jcjc_zhnb?.suclzs?.currentNum || 0, icon: car },
  ];

  const nursingPostData = [
    { key: '建设校园', value: jcjc_zhnb?.hxgjsxyjs?.currentNum, unit: '家' },
    { key: '值守人员', value: jcjc_zhnb?.hxgzsryzs?.currentNum, unit: '人' },
    { key: '警力投入', value: jcjc_zhnb?.hxgjltrrcs?.currentNum, unit: '人' },
  ];

  return (
    <div className={classNames(styles.container, 'flexColStart', className)}>
      <div className={classNames(styles.baseData, 'flexColStart')}>
        <Title title={'智慧内保'} />
        <SubTitle title={'基础数据'} />
        <div className={classNames('flexAround', 'itemCenter', 'flexAuto')}>
          {baseData.map((item, index) => (
            <div
              key={index}
              className={classNames(
                'flexColAround',
                'itemCenter',
                styles.baseItem,
              )}
            >
              <div className={classNames('flexCenter', 'itemCenter')}>
                <img src={item.icon} className={styles.icon} />
                <div>{item.key}</div>
              </div>
              <div className={styles.value}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={classNames(styles.nursingPostData, 'flexColStart')}>
        <SubTitle title={'护学岗数据'} />
        <div className={classNames('flexAround', 'itemCenter', 'flexAuto')}>
          {nursingPostData.map((item, index) => (
            <div
              key={index}
              className={classNames('flexColAround', 'itemCenter', styles.item)}
            >
              <div>{item.key}</div>
              <div className={classNames('flexCenter', 'itemCenter')}>
                <div className={styles.value}>{item.value}</div>
                <div>{item.unit}</div>
              </div>
            </div>
          ))}
        </div>
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
            <div>设备总数</div>
            <div className={styles.count}>
              {jcjc_zhnb?.sysbzs?.currentNum}个
            </div>
          </div>
          <div
            className={classNames(
              'flexBetween',
              'itemCenter',
              styles.deviceItem,
            )}
          >
            <div>采集设备总数</div>
            <div className={styles.count}>
              {judgeLevels(jcjc_zhnb?.cjsjzs?.currentNum)}条
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(styles.collectionData, 'flexColStart')}>
        <SubTitle title={'每日采集数据'} />
        <BlockLineEcharts
          arrName={jcjc_zhnb?.mrcjsjzs?.category}
          value={jcjc_zhnb?.mrcjsjzs?.currentNum}
        />
      </div>
      <div className={classNames(styles.transitData, 'flexColStart')}>
        <Title title={'地铁公交'} />
        <SubTitle title={'每日人流出行数'} />
        <div className={classNames(styles.info)}>
          今日共出行
          <span>
            {gjfj_dtgjfk?.gjcczrs?.currentNum * 1 +
              gjfj_dtgjfk?.dtcczrs?.currentNum * 1 +
              gjfj_dtgjfk?.ctkyzrs?.currentNum * 1}
          </span>
          人
        </div>
        <div
          className={classNames(
            'flexBetween',
            'itemCenter',
            'flexAuto',
            styles.data,
          )}
        >
          <div className={classNames('flexStart', 'itemCenter')}>
            <div>公交：</div>
            <div className={styles.count}>
              {gjfj_dtgjfk?.gjcczrs?.currentNum}
            </div>
          </div>
          <div className={classNames('flexStart', 'itemCenter')}>
            <div>地铁：</div>
            <div className={styles.count}>
              {gjfj_dtgjfk?.dtcczrs?.currentNum}
            </div>
          </div>
          <div className={classNames('flexStart', 'itemCenter')}>
            <div>长途：</div>
            <div className={styles.count}>
              {gjfj_dtgjfk?.ctkyzrs?.currentNum}
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(styles.checkData, 'flexColStart')}>
        <SubTitle title={'每日安检过包数据'} />
        <div className={classNames('flexBetween', 'itemCenter', 'flexAuto')}>
          <div className={classNames('flexColBetween', styles.left)}>
            <div
              className={classNames('flexBetween', 'itemCenter', styles.item)}
            >
              <div>安检过包总数</div>
              <div className={styles.count}>
                {gjfj_dtgjfk?.ajgbs?.currentNum}个
              </div>
            </div>
            <div
              className={classNames('flexBetween', 'itemCenter', styles.item)}
            >
              <div>违禁品检出</div>
              <div className={styles.count}>
                {gjfj_dtgjfk?.wjpjcs?.currentNum}个
              </div>
            </div>
          </div>
          <div className={classNames('flexAuto')}>
            <DashboardEcharts
              sum={gjfj_dtgjfk?.ajgbs?.currentNum}
              value={gjfj_dtgjfk?.wjpjcs?.currentNum}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitRight;

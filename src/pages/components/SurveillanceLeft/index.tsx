import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './index.less';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import leftTop1 from '@/assets/images/SurveillanceLeft/leftTop1.png';
import leftTop2 from '@/assets/images/SurveillanceLeft/leftTop2.png';
import leftTop3 from '@/assets/images/SurveillanceLeft/leftTop3.png';
import { sum } from 'lodash';
import SurveillanceLeftHistogramEcharts from '@/components/SurveillanceLeftHistogramEcharts';
import SurveillanceLeftPie from '@/components/SurveillanceLeftPie';

type SurveillanceLeftProps = { className?: string; data: any };

const SurveillanceLeft = (props: SurveillanceLeftProps) => {
  const {
    className,
    // eslint-disable-next-line camelcase
    data: { tjzd_jcz },
  } = props;

  const iconList = [
    {
      image: leftTop1,
      title: '检查站',
      number: tjzd_jcz?.jczzs?.currentNum,
    },
    {
      image: leftTop2,
      title: '移动检查站',
      number: tjzd_jcz?.ydjczzs?.currentNum,
    },
    {
      image: leftTop3,
      title: '出口卡口处',
      number: tjzd_jcz?.ckkzzs?.currentNum,
    },
  ];

  // 当日检查总数(饼图)
  const arr = tjzd_jcz?.drgjcztcsl?.currentNum.map((i) => i * 1);

  return (
    <div className={classNames(styles.container, 'flexColStart', className)}>
      <div className={classNames(styles.baseData, 'flexColStart')}>
        <Title title={'智慧检查站'} />
        <SubTitle title={'基础数据'} />
        <div className={styles.leftTop}>
          {iconList.map((item, index) => (
            <div className={styles.leftItem} key={index}>
              <img src={item.image} />
              <span className={styles.itemTitle}>{item.title}</span>
              <p>
                <span className={styles.number}>{item.number}</span>
                <span>个</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={classNames(styles.collectionData, 'flexColStart')}>
        <SubTitle title={'7个检查站前端卡口当日通车数'} />
        <SurveillanceLeftHistogramEcharts
          arrName={tjzd_jcz?.drgjcztcsl?.category}
          // arrName={arrName}
          value={tjzd_jcz?.drgjcztcsl?.currentNum}
        />
      </div>
      <div className={classNames(styles.intelligenceData, 'flexColStart')}>
        <SubTitle title={'7个检查站前端卡口当日通车占比'} />
        <div className={styles.pieBox}>
          {tjzd_jcz?.drgjcztcsl?.currentNum?.map((item, index) => (
            <div className={styles.pieItem} key={index}>
              <SurveillanceLeftPie data={item} max={sum(arr)} />
              <span>{tjzd_jcz?.drgjcztcsl?.category[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveillanceLeft;

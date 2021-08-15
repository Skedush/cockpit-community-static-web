/* eslint-disable camelcase */
import React from 'react';
import classNames from 'classnames';
import styles from './index.less';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import rightTop1 from '@/assets/images/SurveillanceRight/rightTop1.png';
import rightTop2 from '@/assets/images/SurveillanceRight/rightTop2.png';
import rightTop3 from '@/assets/images/SurveillanceRight/rightTop3.png';
import SurveillanceRightHistogram from '@/components/SurveillanceRightHistogram';
import SurveillanceRightLine from '@/components/SurveillanceRightLine';
import { judgeLevels } from '@/utils';

type SurveillanceRightProps = { className?: string; data: any };

const SurveillanceRight = (props: SurveillanceRightProps) => {
  const {
    className,
    data: { tjzd_jcz },
  } = props;

  const iconList = [
    {
      image: rightTop1,
      title: '前端卡口通车',
      number: judgeLevels(tjzd_jcz?.drqstczs?.currentNum),
    },
    {
      image: rightTop2,
      title: '核查车辆',
      number: judgeLevels(tjzd_jcz?.drqsjcclzs?.currentNum),
      className: styles.carImage,
    },
    {
      image: rightTop3,
      title: '人脸比对',
      unit: '人',
      number: judgeLevels(tjzd_jcz?.drqsrlbdzs?.currentNum),
    },
  ];
  return (
    <div className={classNames(styles.container, 'flexColStart', className)}>
      <div className={classNames(styles.baseData, 'flexColStart')}>
        <Title title={'智慧检查站'} />
        <SubTitle title={'当日全市检查站'} />
        <div className={styles.leftTop}>
          {iconList.map((item, index) => (
            <div className={styles.leftItem} key={index}>
              <img src={item.image} className={item.className} />
              <span className={styles.itemTitle}>{item.title}</span>
              <p>
                <span className={styles.number}>{item.number}</span>
                <span>{item.unit || '辆'}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={classNames(styles.collectionData, 'flexColStart')}>
        <SubTitle title={'7个检查站各站点当日核查车辆数'} />
        <SurveillanceRightHistogram
          arrName={tjzd_jcz?.drgjczhccls?.category}
          data={tjzd_jcz?.drgjczhccls?.currentNum}
        />
      </div>
      <div className={classNames(styles.intelligenceData, 'flexColStart')}>
        <SubTitle title={'7个检查站各站点当日人脸比对'} />
        <SurveillanceRightLine
          arrName={tjzd_jcz?.drgjczrlbds?.category}
          data={tjzd_jcz?.drgjczrlbds?.currentNum}
        />
      </div>
    </div>
  );
};

export default SurveillanceRight;

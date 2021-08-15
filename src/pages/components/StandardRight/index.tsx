/* eslint-disable camelcase */
import React from 'react';
import classNames from 'classnames';
import styles from './index.less';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import StandardRightEcharts from '@/components/StandardRightEcharts';
import rightTop1 from '@/assets/images/standardRight/rightTop1.png';
import rightTop2 from '@/assets/images/standardRight/rightTop2.png';
import rightTop3 from '@/assets/images/standardRight/rightTop3.png';
import rightTop4 from '@/assets/images/standardRight/rightTop4.png';
import rightBottom1 from '@/assets/images/standardRight/rightBottom1.png';
import rightBottom2 from '@/assets/images/standardRight/rightBottom2.png';
import rightBottom3 from '@/assets/images/standardRight/rightBottom3.png';
import rightBottom4 from '@/assets/images/standardRight/rightBottom4.png';

type StandardRightProps = { className?: string; data: any };

const StandardRight = (props: StandardRightProps) => {
  const {
    className,
    data: { jcjc_ybss },
  } = props;
  const list = [
    {
      image: rightTop1,
      number: jcjc_ybss?.fjzs?.currentNum,
    },
    {
      image: rightTop2,
      number: jcjc_ybss?.llszs?.currentNum,
    },
    {
      image: rightTop3,
      number: jcjc_ybss?.lldzs?.currentNum,
    },
    {
      image: rightTop4,
      number: jcjc_ybss?.sqcjzs?.currentNum,
    },
  ];
  const list2 = [
    {
      image: rightBottom1,
      number: jcjc_ybss?.jwzlzs?.currentNum,
      title: '警务助理',
    },
    {
      image: rightBottom2,
      number: jcjc_ybss?.qfqzzzryzs?.currentNum,
      title: '群防群治组织人员',
    },
    {
      image: rightBottom3,
      number: jcjc_ybss?.qywdzs?.currentNum,
      title: '寄递企业网点',
    },
    {
      image: rightBottom4,
      number: jcjc_ybss?.qyjyzzs?.currentNum,
      title: '散装汽油加油站',
    },
  ];

  return (
    <div className={classNames(styles.container, 'flexColStart', className)}>
      <div className={classNames(styles.baseData, 'flexColStart')}>
        <Title title={'一标三实'} />
        <SubTitle title={'基础数据'} />
        <div className={styles.rightTopBox}>
          <div className={styles.rightTop}>
            {list.map((item, index) => (
              <div className={styles.rightTopItem} key={index}>
                <img src={item.image} />
                <p>{item.number}</p>
              </div>
            ))}
          </div>
          <div className={styles.rightTopBottom}>
            {list2.map((item, index) => (
              <div className={styles.rightTopBottomItem} key={index}>
                <img src={item.image} />
                <div className={styles.content}>
                  <span className={styles.number}>{item.number}</span>
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classNames(styles.rightBottom, 'flexColStart')}>
        <SubTitle title={'各区县数据'} />
        <StandardRightEcharts
          arrName={jcjc_ybss?.jwzlzss?.category}
          value1={jcjc_ybss?.jwzlzss?.jwzlzs}
          value2={jcjc_ybss?.jwzlzss?.qfqzzzryzs}
        />
      </div>
    </div>
  );
};

export default StandardRight;

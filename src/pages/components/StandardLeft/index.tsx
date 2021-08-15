/* eslint-disable camelcase */
import React from 'react';
import { judgeLevels } from '@/utils';
import classNames from 'classnames';
import styles from './index.less';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import StandardLeftEcharts from '@/components/StandardLeftEcharts';
import top1 from '@/assets/images/standardLeft/leftTop1.png';
import top2 from '@/assets/images/standardLeft/leftTop2.png';
import top3 from '@/assets/images/standardLeft/leftTop3.png';
import top4 from '@/assets/images/standardLeft/leftTop4.png';
import bottom1 from '@/assets/images/standardLeft/leftBottom1.png';
import bottom2 from '@/assets/images/standardLeft/leftBottom2.png';
import bottom3 from '@/assets/images/standardLeft/leftBottom3.png';
import bottom4 from '@/assets/images/standardLeft/leftBottom4.png';

type StandardLeftProps = { className?: string; data: any };

// 基础数据上部
const LeftTop = (props) => {
  const { data } = props;
  const value = [
    {
      image: top1,
      number: data?.pcszs?.currentNum,
      name: '派出所',
    },
    {
      image: top2,
      number: data?.jwszs?.currentNum,
      name: '警务室',
    },
    {
      image: top3,
      number: data?.pcsmjzs?.currentNum,
      name: '派出所民警',
    },
    {
      image: top4,
      number: data?.sqmjzs?.currentNum,
      name: '社区民警',
    },
  ];
  return (
    <div className={styles.top}>
      {value.map((item, index) => (
        <div className={styles.topItem} key={index}>
          <img src={item.image} className={styles.leftTopItemImage} />
          <p>{item.number}</p>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

// 基础数据下部

const LeftBottom = (props) => {
  const { data } = props;
  return (
    <div className={styles.bottom}>
      <div className={styles.bottomItem}>
        <img src={bottom1} className={styles.bottomItemImage} />
        <div className={styles.bottomItemRight}>
          <p>
            重性精神 <br />
            障碍患者
          </p>
          <span>{judgeLevels(data?.zxjszahzzs?.currentNum)}</span>
        </div>
      </div>
      <div className={styles.bottomItem}>
        <img src={bottom2} className={styles.bottomItemImage} />
        <div className={styles.bottomItemRight}>
          <p>
            大走访大排查
            <br />
            大化解总数据
          </p>
          <span>{judgeLevels(data?.dzfdpcdhjzs?.currentNum)}</span>
        </div>
      </div>
      <div className={styles.bottomItem}>
        <img src={bottom3} className={styles.bottomItemImage} />
        <div className={styles.bottomItemRight}>
          <p>
            百万警进
            <br />
            千万家数
          </p>
          <span>{judgeLevels(data?.bwjjqwjzs?.currentNum)}</span>
        </div>
      </div>
      <div className={styles.bottomItem}>
        <img src={bottom4} className={styles.bottomItemImage} />
        <div className={styles.bottomItemRight}>
          <p>
            跨市班车长途
            <br />
            汽车客运场数
          </p>
          <span>{judgeLevels(data?.kyzzs?.currentNum)}</span>
        </div>
      </div>
    </div>
  );
};

const StandardLeft = (props: StandardLeftProps) => {
  const {
    className,
    data: { jcjc_ybss },
  } = props;

  const arrName = [
    '鹿城区',
    '瓯海区',
    '龙湾区',
    '洞头区',
    '乐清市',
    '瑞安市',
    '龙岗市',
    '永嘉县',
    '平阳县',
    '苍南县',
    '文成县',
    '泰顺县',
    '经开区',
    '瓯江口区',
  ];

  const value1 = [
    400, 380, 360, 340, 320, 300, 280, 260, 240, 220, 300, 280, 260, 240, 220,
  ];

  const value2 = [
    300, 280, 160, 40, 120, 100, 480, 260, 140, 20, 100, 180, 60, 640, 120,
  ];

  return (
    <div className={classNames(styles.container, 'flexColStart', className)}>
      <div className={classNames(styles.baseData, 'flexColStart')}>
        <Title title={'一标三实'} />
        <SubTitle title={'基础数据'} />
        <div className={styles.topBox}>
          <LeftTop data={jcjc_ybss} />
          <LeftBottom data={jcjc_ybss} />
        </div>
      </div>
      <div className={classNames(styles.leftBottom, 'flexColStart')}>
        <SubTitle title={'各区县数据'} />
        <StandardLeftEcharts
          arrName={jcjc_ybss?.qywds?.category}
          value2={jcjc_ybss?.qywds?.qyjyzzs}
          value1={jcjc_ybss?.qywds?.qywdzs}
        />
      </div>
    </div>
  );
};

export default StandardLeft;

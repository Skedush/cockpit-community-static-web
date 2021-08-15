import React, { useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

type DashboardEchartsProps = {
  sum: number;
  value: number;
};

const DashboardEcharts = (props: DashboardEchartsProps) => {
  const { sum, value } = props;

  let val = 0;

  if (value / sum) {
    val = value / sum;
  }

  useEffect(() => {}, []);

  const getOption = () => {
    return {
      title: {
        text: '违禁品',
        left: 'center',
        itemGap: 3,
        top: '30%',
        textStyle: {
          color: '#ccc',
          fontSize: 14,
        },
        subtext: `${(val * 100).toFixed(2)}%`,
        subtextStyle: {
          color: '#00E1FF',
          fontSize: 14,
        },
      },
      polar: {
        radius: ['70%', '100%'],
        center: ['50%', '50%'],
      },
      // 极坐标角度轴
      angleAxis: {
        min: 0,
        max: 100,
        clockwise: false,
        show: false, // 隐藏刻度线
      },
      // 极坐标径向轴
      radiusAxis: {
        type: 'category',
        // 隐藏极坐标轴线
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      tooltip: {
        show: true,
        formatter: (val) => {
          return `${val.seriesName}: ${val.data}%`;
        },
        backgroundColor: 'rgba(31, 196, 225, 0.4)',
        borderColor: 'rgba(31, 196, 225, 0.6)',
        textStyle: {
          color: '#fff',
        },
      },
      series: [
        {
          // 进度条
          type: 'bar',
          name: '占比',
          coordinateSystem: 'polar',
          // 设置柱子背景灰色，需开启showBackground才能显示backgroundStyle
          showBackground: true,
          backgroundStyle: {
            color: '#0079FE',
          },
          // 两端设置圆角
          roundCap: true,
          itemStyle: {
            color: '#00E1FF',
          },
          data: [(val * 100).toFixed(2)],
        },
      ],
    };
  };

  return (
    <ReactEcharts
      option={getOption()}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'none',
        margin: '0',
      }}
    />
  );
};

export default DashboardEcharts;

import React, { useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { judgeLevels } from '@/utils';

type SurveillanceRightHistogramProps = {
  arrName: string[];
  data: number[];
};

const SurveillanceRightHistogram = (props: SurveillanceRightHistogramProps) => {
  const { arrName, data } = props;

  useEffect(() => {}, []);

  const getOption = () => {
    return {
      backgroundColor: 'rgba(0,0,0,0)',
      tooltip: {
        show: false,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '1%',
        right: '0',
        bottom: '1%',
        top: '18%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: arrName,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(185, 200, 219, 1)',
            },
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
            lineStyle: {
              color: '#7DFFFD',
            },
          },
          axisLabel: {
            interval: '0',
            color: '#fff',
            fontSize: 10,
            lineHeight: 12,
            formatter: function (val) {
              return val.slice(0, 2) + '\n' + val.slice(2);
            },
          },
        },
      ],
      yAxis: [
        {
          name: '',
          nameLocation: 'end',
          nameTextStyle: {
            padding: [0, 0, -25, -40],
          },
          // max: 12000,
          min: 0,
          axisLabel: {
            interval: 0,
            formatter: function (params, index) {
              const value = judgeLevels(params);
              return value;
            },
            fontSize: 10,
            // formatter: function (value) {
            //   const texts: any = [];
            //   if (value === 0) {
            //     texts.push('0');
            //   } else if (value === 3000) {
            //     texts.push('3000');
            //   } else if (value === 6000) {
            //     texts.push('6000');
            //   } else if (value === 9000) {
            //     texts.push('9000');
            //   } else if (value === 12000) {
            //     texts.push('12000');
            //   } else {
            //     // texts.push('数量');
            //   }
            //   return texts;
            // },
          },

          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(185, 200, 219, 1)',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(242, 242, 242, .2)',
            },
          },
          axisTick: {
            show: false,
          },
        },
      ],
      series: [
        {
          type: 'bar',
          data: data,
          barWidth: '10px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(36, 191, 255, 1)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(1, 23, 60, .6)', // 100% 处的颜色
                  },
                ],
                false,
              ),
              barBorderRadius: [30, 30, 0, 0],
              // shadowColor: 'rgba(0,160,221,1)',
              shadowBlur: 4,
            },
          },
          label: {
            normal: {
              show: false,
            },
          },
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

export default SurveillanceRightHistogram;

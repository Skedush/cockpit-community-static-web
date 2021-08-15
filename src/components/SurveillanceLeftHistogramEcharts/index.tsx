import React, { useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { judgeLevels } from '@/utils';

type SurveillanceLeftHistogramEchartsProps = {
  arrName: string[];
  value: number[];
};

const SurveillanceLeftHistogramEcharts = (
  props: SurveillanceLeftHistogramEchartsProps,
) => {
  const { arrName, value } = props;
  const max = Math.max.apply(null, value);
  const arr = new Array(value?.length).fill(max);

  useEffect(() => {}, []);

  const getOption = () => {
    return {
      backgroundColor: 'rgba(0,0,0,0)',
      tooltip: {
        show: false,
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        // padding: [8, 10], // 内边距
        // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', // 添加阴影
      },
      grid: {
        left: '-8%',
        right: '1%',
        bottom: '1%',
        top: '12%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            inside: false,
            interval: 0,
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '10',
              lineHeight: 14,
            },
            formatter: function (val) {
              return val.slice(0, 2) + '\n' + val.slice(2);
            },
          },
          data: arrName,
        },
        {
          type: 'category',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitArea: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          data: arrName,
        },
      ],
      yAxis: {
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        show: false,
      },
      series: [
        {
          name: '通车数',
          type: 'bar',
          label: {
            normal: {
              show: true,
              formatter: function ({ value }) {
                return judgeLevels(value);
              },
              position: 'top',
              fontSize: 12,
              color: '#fff',
              offset: [0, -4],
            },
          },
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#0ECFF8',
                },
                {
                  offset: 1,
                  color: '#0570E9',
                },
              ]),
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: '20%',
          data: value,
        },
        {
          name: '',
          type: 'bar',
          xAxisIndex: 1,
          zlevel: 1,
          itemStyle: {
            normal: {
              color: '#303E8C',
              borderWidth: 0,
              barBorderRadius: 50,
              shadowBlur: {
                shadowColor: 'rgba(255,255,255,0.31)',
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 2,
              },
            },
          },
          barWidth: '20%',
          data: arr,
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

export default SurveillanceLeftHistogramEcharts;

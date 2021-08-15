import React, { useEffect } from 'react';
import { judgeLevels } from '@/utils';
import ReactEcharts from 'echarts-for-react';

type MultiplePieEchartsProps = {
  arrName: string[];
  value: number[];
  count: number[];
  sum: number;
};

const MultiplePieEcharts = (props: MultiplePieEchartsProps) => {
  const { arrName, value, count, sum } = props;

  useEffect(() => {}, []);

  const getBaseDataOption = () => {
    let pieSeries: any = [];
    let lineYAxis: any = [];
    let color = ['#ffc300', '#00e473', '#009DFF'];
    // 图表option整理
    arrName.forEach((v, i) => {
      pieSeries.push({
        name: '统计',
        z: 2,
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [90 - i * 12 + '%', 85 - i * 12 + '%'],
        center: ['15%', '50%'],
        label: {
          show: false,
        },
        data: [
          {
            value: value[i],
            name: v,
          },
          {
            value: count[i] - value[i],
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)',
            },
          },
        ],
      });
      pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: true, // 顺时加载
        hoverAnimation: false, // 鼠标移入变大
        radius: [90 - i * 12 + '%', 85 - i * 12 + '%'],
        center: ['15%', '50%'],
        label: {
          show: false,
        },
        data: [
          {
            value: 10,
            itemStyle: {
              color: '#083079',
            },
          },
        ],
      });
      lineYAxis.push(((value[i] / count[i]) * 100).toFixed(1) + '%');
    });
    return {
      title: {
        show: true,
        text: '小区总数',
        itemGap: 3,
        textStyle: {
          color: '#ccc',
          fontSize: 14,
        },
        subtext: sum,
        subtextStyle: {
          color: '#22d3ff',
          fontWeight: 'bold',
          fontSize: 16,
        },
        top: '37%',
        left: '14%',
        textAlign: 'center',
      },
      color: color,
      grid: {
        left: '9%',
        right: '1%',
        top: '10%',
        bottom: '10%',
        containLabel: false,
      },
      xAxis: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      legend: {
        show: true,
        top: 'center',
        icon: 'circle',
        itemGap: 20,
        itemHeight: 10,
        itemWidth: 10,
        left: '35%',
        data: arrName,
        formatter: function (name) {
          let index = arrName.findIndex((item) => item === name);
          return `{title|${name}} {value${index}|${judgeLevels(
            value[index],
          )}/${judgeLevels(count[index])} ${lineYAxis[index]}}`;
        },
        textStyle: {
          rich: {
            title: {
              fontSize: 14,
              color: '#ccc',
            },
            value0: {
              fontSize: 14,
              fontWeight: 'bold',
              color: color[0],
            },
            value1: {
              fontSize: 14,
              fontWeight: 'bold',
              color: color[1],
            },
            value2: {
              fontSize: 14,
              fontWeight: 'bold',
              color: color[2],
            },
          },
        },
      },
      yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: lineYAxis,
        axisLabel: {
          show: false,
        },
      },
      series: pieSeries,
    };
  };

  return (
    <ReactEcharts
      option={getBaseDataOption()}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'none',
        margin: '0',
      }}
    />
  );
};

export default MultiplePieEcharts;

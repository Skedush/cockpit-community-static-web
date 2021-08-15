import React, { useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

type StandardLeftEchartsProps = {
  arrName: string[];
  value1: number[];
  value2: number[];
};

const StandardLeftEcharts = (props: StandardLeftEchartsProps) => {
  const { arrName, value1, value2 } = props;

  useEffect(() => {}, []);

  const getOption = () => {
    return {
      backgroundColor: 'rgba(0,0,0,0)',
      tooltip: {
        trigger: 'axis',
        show: false,
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        data: ['寄递企业网点', '散装汽油加油站'],
        top: 0,
        right: '1%',
        textStyle: {
          color: '#fff',
          fontSize: '12px',
        },
        itemWidth: 16,
        itemHeight: 10,
      },
      grid: {
        left: '2%',
        right: '10%',
        bottom: '0',
        top: '6%',
        containLabel: true,
      },
      xAxis: [
        {
          splitLine: {
            show: false,
          },
          type: 'value',
          show: false,
        },
      ],
      yAxis: [
        {
          splitLine: {
            show: false,
          },
          axisLine: {
            // y轴
            show: false,
          },
          type: 'category',
          axisTick: {
            show: false,
          },
          inverse: true,
          data: arrName,
          axisLabel: {
            color: '#fff',
            fontSize: 12,
          },
        },
      ],
      series: [
        {
          name: '寄递企业网点',
          type: 'bar',
          barWidth: 8, // 柱子宽度
          label: {
            show: true,
            position: 'right', // 位置
            color: '#fff',
            fontSize: 10,
            distance: 15, // 距离
            formatter: '{c}', // 这里是数据展示的时候显示的数据
          }, // 柱子上方的数值
          itemStyle: {
            // barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）

            color: new echarts.graphic.LinearGradient(
              1,
              0,
              0,
              0,
              [
                {
                  offset: 0,
                  color: '#1cbcfe  ',
                },
                {
                  offset: 1,
                  color: '#00fbff',
                },
              ],
              false,
            ), // 渐变
          },
          data: value1,
        },
        {
          name: '散装汽油加油站',
          type: 'bar',
          barWidth: 8, // 柱子宽度
          barGap: '60%',
          label: {
            show: true,
            position: 'right', // 位置
            color: '#fff',
            fontSize: 10,
            distance: 15, // 距离
            formatter: '{c}', // 这里是数据展示的时候显示的数据
          }, // 柱子上方的数值
          itemStyle: {
            // barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）

            color: new echarts.graphic.LinearGradient(
              1,
              0,
              0,
              0,
              [
                {
                  offset: 0,
                  color: '#0167e8  ',
                },
                {
                  offset: 1,
                  color: '#13abe8',
                },
              ],
              false,
            ), // 渐变
          },
          data: value2,
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

export default StandardLeftEcharts;

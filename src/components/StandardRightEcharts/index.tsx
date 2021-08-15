import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

type StandardRightEchartsProps = {
  arrName: string[];
  value1: number[];
  value2: number[];
};

const StandardRightEcharts = (props: StandardRightEchartsProps) => {
  const { arrName, value1, value2 } = props;
  const data = value1?.map((item) => '-' + item);
  const getOption = () => {
    return {
      title: {
        text: '',
        subtext: '',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        show: false,
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },

      legend: {
        data: ['警务助理', '群防群治阻止人员'],
        top: 0,
        right: '2%',
        textStyle: {
          color: '#fff',
          fontSize: '12px',
        },
        itemWidth: 16,
        itemHeight: 10,
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '1%',
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
          type: 'category',
          axisLine: {
            // y轴
            show: false,
          },
          axisTick: { show: false },
          data: arrName?.reverse(),
          axisLabel: {
            color: '#fff',
            fontSize: 12,
          },
        },
      ],
      series: [
        {
          name: '警务助理',
          type: 'bar',
          stack: '总量',
          barWidth: 10, // 柱子宽度
          label: {
            normal: {
              show: true,
              fontSize: 10,
              position: 'left', // 位置
              color: '#fff',
              distance: 3, // 距离
              formatter: function (params) {
                return -params.value;
              },
            },
          },
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
                  color: '#0167e8',
                },
                {
                  offset: 1,
                  color: '#13abe8',
                },
              ],
              false,
            ), // 渐变
          },
          data: data?.reverse(),
        },
        {
          name: '群防群治阻止人员',
          type: 'bar',
          stack: '总量',
          barWidth: 10, // 柱子宽度
          label: {
            normal: {
              show: true,
              position: 'right', // 位置
              color: '#fff',
              fontSize: 10,
              distance: 3, // 距离
              formatter: '{c}', // 这里是数据展示的时候显示的数据
            },
          },
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
                  color: '#1cbcfe',
                },
                {
                  offset: 1,
                  color: '#00fbff',
                },
              ],
              false,
            ), // 渐变
          },

          data: value2?.reverse(),
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

export default StandardRightEcharts;

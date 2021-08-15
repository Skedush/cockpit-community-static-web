import React, { useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

type HistogramEchartsProps = {
  arrName: string[];
  value: number[];
};

const HistogramEcharts = (props: HistogramEchartsProps) => {
  const { arrName, value } = props;

  useEffect(() => {}, []);

  const getOption = () => {
    return {
      color: ['#566DE3'],
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(31, 196, 225, 0.6)',
        borderColor: 'rgba(31, 196, 225, 0.8)',
        textStyle: {
          color: '#fff',
        },
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        top: '15%',
        bottom: '7%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#90979c',
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitArea: {
            show: false,
          },
          axisLabel: {
            show: true,
            interval: '0',
            textStyle: {
              color: '#fff',
              align: 'center',
              whiteSpace: 'wrap',
              lineHeight: 15,
              height: 50,
              fontSize: 10,
            },
            rich: {
              active: {
                height: 18,
                width: 70,
                backgroundColor: '#f0f0f0',
              },
              normal: {
                height: 18,
                // width: data.xWidth||70,
              },
            },
            color: '#999',
          },
          data: arrName,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ccc',
            },
          },
          splitLine: {
            // 网格线
            lineStyle: {
              color: '#ccc',
              type: 'dashed', // 设置网格线类型 dotted：虚线   solid:实线
            },
          },
        },
      ],
      series: [
        {
          name: '报警数',
          type: 'bar',
          barWidth: '40%',
          itemStyle: {
            normal: {
              color: '#2a84ff',
              lineStyle: {
                color: '#2a84ff',
                width: 1,
              },
            },
          },
          data: value,
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

export default HistogramEcharts;

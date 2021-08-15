import React, { useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { judgeLevels } from '@/utils';

type SurveillanceRightLineProps = {
  arrName: string[];
  data: number[];
  max?: number;
};

const SurveillanceRightLine = (props: SurveillanceRightLineProps) => {
  const { arrName, data } = props;

  useEffect(() => {}, []);

  const getOption = () => {
    return {
      backgroundColor: 'rgba(0,0,0,0)',
      title: {
        show: true,
        textStyle: {
          color: '#fff',
        },
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        backgroundColor: 'rgba(31, 196, 225, 0.4)',
        borderColor: 'rgba(31, 196, 225, 0.6)',
        textStyle: {
          color: '#fff',
        },
        axisPointer: {
          lineStyle: {
            color: '#ccc',
          },
        },
      },
      grid: {
        left: '0',
        right: '5%',
        bottom: '1%',
        top: '15%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#fff',
            align: 'center',
            whiteSpace: 'wrap',
            lineHeight: 12,
            height: 50,
            fontSize: 10,
          },
          formatter: function (val) {
            return val.slice(0, 2) + '\n' + val.slice(2);
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(185, 200, 219, 1)',
          },
        },
        axisTick: {
          show: false,
          // alignWithLabel: true,
          lineStyle: {
            color: '#7DFFFD',
          },
        },

        data: arrName,
      },
      yAxis: {
        type: 'value',
        name: '',
        // max: 12000,
        min: 0,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(242, 242, 242, .2)',
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(185, 200, 219, 1)',
          },
        },
        axisLabel: {
          fontSize: 10,
          margin: 10,
          formatter: function (params, index) {
            const value = judgeLevels(params);
            return value;
          },
          textStyle: {
            color: '#d1e6eb',
          },
        },
        axisTick: {
          show: false,
        },
      },
      series: {
        name: '数量',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        // showAllSymbol: true,
        symbolSize: 5,
        lineStyle: {
          normal: {
            color: 'rgba(43, 169, 220, 1)', // 线条颜色
            width: 1,
          },
          borderColor: 'rgba(43, 169, 220, 1)',
        },
        label: {
          show: false,
          position: 'top',
          textStyle: {
            color: '#fff',
          },
        },
        itemStyle: {
          normal: {
            color: 'rgba(43, 169, 220, 1)',
          },
        },
        tooltip: {
          show: true,
        },
        areaStyle: {
          // 区域填充样式
          normal: {
            // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(43, 169, 220, .4)',
                },
                {
                  offset: 1,
                  color: 'rgba(43, 169, 220, .1)',
                },
              ],
              false,
            ),
            shadowColor: 'rgba(1, 23, 60, 。9)', // 阴影颜色
            shadowBlur: 20, // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          },
        },
        data: data,
      },
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

export default SurveillanceRightLine;

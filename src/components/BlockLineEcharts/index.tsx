import React, { useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { judgeLevels } from '@/utils';

type BlockLineEchartsProps = {
  arrName: string[];
  value: number[];
};

const BlockLineEcharts = (props: BlockLineEchartsProps) => {
  const { arrName, value } = props;

  useEffect(() => {}, []);

  const getOption = () => {
    return {
      title: {
        show: true,
        textStyle: {
          color: '#fff',
        },
      },
      grid: {
        left: '10%',
        right: '4%',
        top: '15%',
        bottom: '15%',
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

      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          color: '#ccc',
          interval: '0',
          textStyle: {
            color: '#ccc',
            align: 'center',
            whiteSpace: 'wrap',
            lineHeight: 15,
            height: 50,
            fontSize: 12,
          },
          formatter: function (params, index) {
            let newParamsName = '';
            let paramsNameNumber = params && params.length;

            let provideNumber = 6; // 一行显示几个字
            let rowNumber = Math.ceil(paramsNameNumber / provideNumber) || 0;
            if (paramsNameNumber > provideNumber) {
              for (let p = 0; p < rowNumber; p++) {
                let tempStr = '';
                let start = p * provideNumber;
                let end = start + provideNumber;
                if (p === rowNumber - 1) {
                  tempStr = params.substring(start, paramsNameNumber);
                } else {
                  tempStr = params.substring(start, end) + '\n';
                }
                newParamsName += tempStr;
              }
            } else {
              newParamsName = params;
            }

            return newParamsName;
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ccc',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#fff',
          },
        },
        data: arrName,
      },

      yAxis: {
        type: 'value',
        name: '',
        // max: 1000,
        axisLabel: {
          formatter: function (params, index) {
            const value = judgeLevels(params);
            return value;
          },
          textStyle: {
            color: '#ccc',
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#ccc',
            type: 'dashed',
          },
        },
      },

      series: {
        type: 'line',
        symbol: 'circle',
        name: '采集数',
        symbolSize: 5,
        itemStyle: {
          normal: {
            color: '#27CAFF',
            lineStyle: {
              color: '#27CAFF',
              width: 1,
            },
            areaStyle: {
              // color: '#94C9EC'
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(7,44,90,0.3)',
                },
                {
                  offset: 1,
                  color: 'rgba(0,146,246,0.9)',
                },
              ]),
            },
          },
        },
        data: value,
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

export default BlockLineEcharts;

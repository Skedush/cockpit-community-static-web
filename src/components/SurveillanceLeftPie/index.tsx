import React, { useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

type SurveillanceLeftPieProps = {
  data: number;
  max: number;
};

const SurveillanceLeftPie = (props: SurveillanceLeftPieProps) => {
  const { data, max } = props;
  useEffect(() => {}, []);

  const text = ((data / max) * 100).toFixed(1) + '%';

  const getOption = () => {
    return {
      backgroundColor: 'rgba(0,0,0,0)',
      title: [
        {
          text: text,
          x: 'center',
          top: '42%',
          textStyle: {
            fontSize: '14',
            color: '#fff',
          },
        },
      ],
      polar: {
        radius: ['80%', '85%'],
        center: ['50%', '50%'],
      },
      angleAxis: {
        max: max,
        show: false,
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: '',
          type: 'bar',
          roundCap: true,
          barWidth: 60,
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(170, 170, 170, .6)',
          },
          data: [data],
          coordinateSystem: 'polar',
          itemStyle: {
            normal: {
              borderWidth: 2,
              shadowBlur: 5,
              shadowColor: 'rgba(0, 251, 255, .8)',
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(0, 251, 255, 1)',
                },
                {
                  offset: 1,

                  color: 'rgba(51, 108, 212, 1)',
                },
              ]),
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

export default SurveillanceLeftPie;

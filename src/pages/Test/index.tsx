import React, { useEffect, useState } from 'react';
import 'animate.css/animate.compat.css';
import { Animated } from 'react-animated-css';

type TestProps = {};

const Test = (props: TestProps) => {
  // useEffect(() => {}, []);

  return (
    <Animated
      animationIn="rotateIn"
      animationOut="zoomOutDown"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={true}
    >
      啊大声道啊大声道 强大的 啊大声道
    </Animated>
  );
};

export default Test;

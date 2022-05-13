import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { LineData } from '../mock/lineData';
import { arc } from 'd3';

const Chart = styled('div')<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height}px;
`;

interface Props {
  height: number;
  values: any;
}

const LineChart: React.FC<Props> = ({ values }) => {
  const smileRef = useRef(null);
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 20;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 40;
  const mouthWidth = 20;
  const mouthRadius = 140;

  useEffect(() => {
    d3.arc(smileRef.current)
      .innerRadius(mouthRadius)
      .outerRadius(mouthRadius + mouthWidth)
      .startAngle(Math.PI / 2)
      .endAngle((Math.PI * 3) / 2);
  }, []);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        <circle r={centerY - strokeWidth / 2} fill="yellow" stroke="black" stroke-width={strokeWidth} />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <path ref={smileRef} />
      </g>
    </svg>
  );
};

export default LineChart;

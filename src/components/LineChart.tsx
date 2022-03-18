import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import * as d3 from 'd3';
import { LineData } from '../mock/lineData';

const Chart = styled('div')<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height}px;
`;

interface Props {
  height: number;
  values: any;
};

const LineChart: React.FC<Props> = ({ height, values }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [graphHeight, setGraphHeight] = useState<number>(height);

  const margin = { top: 20, right: 30, bottom: 30, left: 40 };

  useEffect(() => {
    const currentElement = divRef.current;

    const chartWidth = currentElement?.offsetWidth as number;
    const chartHeight = graphHeight;

    const documentElement = d3
      .select(currentElement)
      .call((g) => g.select('svg').remove())
      .append('svg')
      .attr('viewBox', `0,0,${chartWidth},${chartHeight}`)
      .style('border', '2px solid gold');

    const parseDate: (dateString: string) => Date | null = d3.timeParse('%Y-%m-%d');
    const data: LineData[] = values.map(({ d, v }:LineData)=>{
      return { d: parseDate(d), v };
    });
    console.log(values,data);
  }, []);


  return (
    <>
      <h2>LineChart</h2>
      <Chart ref={divRef} height={height} />
    </>
  );
};

export default LineChart
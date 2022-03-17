import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  height: 80vh;
  padding: 2rem;
  border: 1px solid green;
  box-sizing: border-box;
`;

const Paint = () => {
  // const x = d3.scaleLinear().domain([0, 100]).range([0, 450]);
  // const y = d3.scaleLinear().domain([0, 100]).range([0, 200]);

  const x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 300]);

  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([160, 0]);

  const circleRef = useRef(null);
  const strokeRef = useRef(null);
  const scaleRef = useRef(null);

  useEffect(() => {
    const addCircle = () => {
      const svg = d3.select(circleRef.current);
      svg.append('circle').attr('cx', 100).attr('cy', 200).attr('r', 30).style('fill', 'gold');
      svg.append('circle').attr('cx', 100).attr('cy', 300).attr('r', 30).style('fill', 'gold');
      svg.append('circle').attr('cx', 100).attr('cy', 400).attr('r', 30).style('fill', 'gold');
      svg.append('circle').attr('cx', 100).attr('cy', 500).attr('r', 30).style('fill', 'gold');
    };

    const addStroke = () => {
      const svg = d3.select(strokeRef.current);
      svg.style('stroke-width', 20).style('storke');
    };

    const addScale = () => {
      const svg = d3.select(scaleRef.current);
      svg.append('circle').attr('cx', x(50)).attr('cy', y(20)).attr('r', 30).style('fill', 'orange');

    };

    const addAxis = () => {
      const svg = d3.select(scaleRef.current);
      const axisX = d3.axisBottom(x);
      const axisY = d3.axisLeft(y);

      svg.append('g').attr("transform", "translate(30,180)").call(axisX);
      svg.append('g').attr("transform", "translate(30, 20)").call(axisY);
    }

    addCircle();
    addStroke();
    addScale();
    addAxis();
  }, []);

  return (
    <Wrapper>
      <svg
        ref={circleRef}
        style={{
          border: '2px solid gold',
        }}
      />
      <svg ref={strokeRef} style={{ border: '2px solid gold' }}>
        <circle stroke="green" cx="50" cy="50" r="40" style={{ fill: 'yellow' }} />
      </svg>
      <svg ref={scaleRef} height="200" width="450" style={{ border: '1px solid gold' }} />
    </Wrapper>
  );
};

export default Paint;

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

interface Props {
  height?: number;
  values?: any;
}

const width = 400;
const height = 400;

const LineChart: React.FC<Props> = ({ values }) => {
  useEffect(() => {
    const data = ['th3is', 'asdfa', '아니', '왜케적냐고', '추가됨?'];

    cloud()
      .size([width, height])
      .words(
        data.map(function (d) {
          return { text: d, size: 10 + Math.random() * 90, test: 'haha' };
        }),
      )
      .padding(1)
      .font('Impact')
      .fontSize(function (d: any) {
        return d.size;
      })
      .on('end', end)
      .start();

    function end(words: any) {
      d3.select('#word-cloud')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500)
        .style('border', '1px solid gold')
        .append('g')
        .attr('transform', 'translate(' + 500 / 2 + ',' + 500 / 2 + ')')
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', function (d: any) {
          return d.size + 'px';
        })
        .style('font-family', 'Impact')
        .attr('text-anchor', 'middle')
        .attr('transform', function (d: any) {
          return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
        })
        .text(function (d: any) {
          console.log(d);
          return d.text;
        });
    }
  });

  return (
    <div>
      <h1>리뷰 분석 결과</h1>
      <div id="word-cloud"></div>
      <svg width="185" height="246" viewBox="0 0 185 246" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M128.486 2C123.118 2.16681 118.32 3.76007 113.241 6.74786C101.25 13.8018 89.5045 22.7987 78.1739 32.3724C56.4678 50.7129 36.4104 73.1377 15.6829 94.1644C11.0968 98.8166 6.91799 104.484 2.24393 108.827C1.11269 109.878 4.26215 114.979 4.63774 115.809C12.741 133.712 20.1161 152.467 28.2819 170.305C36.9474 189.234 46.0084 207.532 55.6217 225.15C59.0147 231.368 62.2525 238.122 66.3309 243.164C68.1008 245.352 71.2326 242.643 72.9243 241.872C96.2902 231.22 119.012 219.641 140.539 200.852C148.152 194.207 155.712 187.382 163.259 180.534C167.007 177.133 170.946 174.074 174.367 169.781C176.893 166.612 181.413 161.674 182.683 156.515C183.414 153.542 182.725 149.066 182.179 146.251C181.259 141.519 179.707 137.389 178 133.334C173.799 123.357 169.203 113.789 164.729 104.149C158.827 91.4316 153.583 77.6371 146.566 66.5849C141.776 59.0419 137.287 51.0151 133.694 41.7983C130.715 34.1593 128.155 26.277 126.155 17.7797C125.558 15.2444 124.796 12.2416 124.706 9.54073C124.657 8.07964 123.534 3.85358 122.816 3.25679"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default LineChart;

import React, { useRef } from 'react';
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

function App() {
  const svgRef = useRef(null);
  const width = 600;
  const height = 500;
  const margin = {
    top: 20, right: 30, bottom: 30, left: 40
  }

  React.useEffect(() => {
    const svgElement = d3.select(svgRef.current);
    svgElement.append('circle').attr('cx', 0).attr('cy', 0).attr('r', 50);
  }, []);

  return (
    <Wrapper
      className="App"
      style={{ display: 'flex', width: '100%', height: '80vh', padding: '2rem', border: '1px solid green' }}
    >
      <svg
        ref={svgRef}
        style={{
          border: '2px solid gold',
        }}
      />
      <svg
        style={{
          border: '2px solid gold',
        }}
      />
    </Wrapper>
  );
}

export default App;

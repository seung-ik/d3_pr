import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import Paint from './components/Paint';
import LineChart from './components/LineChart';
import { lineData } from './mock/lineData';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  border: 1px solid green;
  box-sizing: border-box;
`;

const Buttons = styled('div')`
  display: flex;
`;

function App() {
  return (
    <Wrapper>
      <Buttons>
        <Link to="/">
          <button>dev</button>
        </Link>
        <Link to="paint">
          <button>paint</button>
        </Link>
        <Link to="lineChart">
          <button>lineChart</button>
        </Link>
      </Buttons>
      <main>
        <Switch>
          <Route exact path="/paint" component={Paint} />
          <Route exact path="/lineChart">
            <LineChart height={400} values={lineData} />
          </Route>
        </Switch>
      </main>
    </Wrapper>
  );
}

export default App;
